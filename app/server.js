import 'babel-polyfill';
import 'isomorphic-fetch';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import PrettyError from 'pretty-error';

// react
import { ServerRouter, createServerRenderContext } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom/server';

// security
import helmet from 'helmet';
import hpp from 'hpp';
import compression from 'compression';
import contentLengthValidator from 'express-content-length-validator';

// App
import AppContainer from './components/App/AppContainer';
import Html from './components/App/Html';

// Error Page
import ErrorContext from './components/ErrorPage/ErrorContext';
import ErrorPage from './components/ErrorPage/ErrorPage';
import ErrorPageStyle from './components/ErrorPage/ErrorPage.css';

// stores
import stores from './stores';

// misc
import assets from './assets'; // eslint-disable-line import/no-unresolved
import dll from './dll'; // eslint-disable-line import/no-unresolved
import config from './config';
import favicons from './favicons.json'; // eslint-disable-line import/no-unresolved


// init express server
const app = express();
app.use(helmet());
app.use(contentLengthValidator.validateMax());
app.use(compression(), express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(hpp());
app.use(bodyParser.json());

// server-side rendering
app.get('*', compression(), async (req: Object, res: Object, next: Function): void => {
  try {
    let CSS = new Set();
    const routerContext = createServerRenderContext();

    const appData = {
      scripts: [
        dll.client.js,
        assets.main.js,
      ],
      children: '',
      stores: '{}',
      apollo: '{}',
      style: '',
      favicons,
    };

    const appContext = {
      insertCss: (...styles: Object) => {
        styles.forEach((style: Object) => CSS.add(style._getCss())); // eslint-disable-line no-underscore-dangle, max-len
      },
    };

    const appWithContext = (currentContext: Object) => (
      <ServerRouter location={req.url} context={currentContext}>
        <AppContainer context={appContext} />
      </ServerRouter>
    );

    // 1. render ... check for missed routes
    appData.children = ReactDOM.renderToString(appWithContext(routerContext));
    const result = routerContext.getResult();

    if (result.redirect) {
      res.redirect(301, result.redirect.pathname);
      res.end();
    }
    else {
      CSS = new Set();
      res.status((result.missed) ? 404 : 200);

      // 3. render ... render correct route with correct data
      appData.children = ReactDOM.renderToString(appWithContext(routerContext));
      appData.stores = JSON.stringify(stores);
      appData.style = [...CSS].join('');

      const html = ReactDOM.renderToStaticMarkup(<Html {...appData} />);

      res.send(`<!doctype html>${html}`);
    }
  }
  catch (err) {
    next(err);
  }
});

// error formatting
const pe = new PrettyError();
pe.skipNodeFiles();
pe.skipPackage('express');

// internal server error
app.use((err: Object, req: Object, res: Object, next: Function) => { // eslint-disable-line no-unused-vars, max-len
  console.log(pe.render(err)); // eslint-disable-line no-console

  const appContext = {
    insertCss: () => {},
  };

  const statusCode = err.status || 500;
  const html = ReactDOM.renderToStaticMarkup(
    <Html
      title="Internal Server Error"
      description={err.message}
      style={ErrorPageStyle._getCss()} // eslint-disable-line no-underscore-dangle
    >
      {ReactDOM.renderToString(
        <ErrorContext error={err} context={appContext}>
          <ErrorPage error={err} />
        </ErrorContext>
      )}
    </Html>
  );

  res.status(statusCode);
  res.send(`<!doctype html>${html}`);
});

/* eslint-disable no-console */
app.listen(config.port, () => {
  console.log(`The server is running at http://localhost:${config.port}/`);
});
/* eslint-enable no-console */
