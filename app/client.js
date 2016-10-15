import 'babel-polyfill';
import 'isomorphic-fetch';
import _ from 'lodash';
import FastClick from 'fastclick';
import 'script!jquery';
import 'script!velocity-animate';
import 'script!../bower_components/waypoints/lib/jquery.waypoints.js';
import 'script!../bower_components/waypoints/lib/shortcuts/sticky.js';
import 'script!./components/PortfolioImage/segmenter/anime.js';
import 'script!./components/PortfolioImage/segmenter/imagesLoaded.js';
import 'script!./components/PortfolioImage/segmenter/segmenter.js';

console.log('I get it. I love to sneak around other people\'s code too.');
console.log('Just get in touch with me so we can have a little chat :)');

// react
import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router/BrowserRouter';

// stores
import stores from './stores';

// app
import AppContainer from './components/App/AppContainer';


const appContext = {
  insertCss: (...styles: Object) => {
    const removeCss = styles.map((style: Object) => style._insertCss()); // eslint-disable-line no-underscore-dangle, max-len
    return () => {
      removeCss.forEach((f: Function) => f());
    };
  },
};

const onRenderComplete = (callback: Function) => {
  const elem = document.getElementById('css');
  if (elem) elem.parentNode.removeChild(elem);

  callback(true);
};

function render(): Object {
  return new Promise((resolve: Function, reject: Function) => {
    try {
      ReactDOM.render(
        <Router>
          <AppContainer context={appContext} />
        </Router>,
        document.getElementById('app'),
        onRenderComplete.bind(undefined, resolve)
      );
    }
    catch (err) {
      reject(err);
    }
  });
}

function run() {
  // rehydrate stores
  if (window.__INITIAL_STORES__) { // eslint-disable-line no-underscore-dangle
    _.each(stores, (current: Object, storeName: string) => {
      const store = current;
      const state = window.__INITIAL_STORES__[storeName]; // eslint-disable-line no-underscore-dangle, max-len

      if (state) {
        _.each(state, (data: any, dataKey: string) => {
          store[dataKey] = data;
        });
      }
    });

    // remove script tag
    let script = document.getElementById('__INITIAL_STORES__');
    if (script) {
      script.parentNode.removeChild(script);
    }

    // remove script tag
    script = document.getElementById('__APOLLO_STATE__');
    if (script) {
      script.parentNode.removeChild(script);
    }
  }

  FastClick.attach(document.body);
  render();
}

if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
  run();
}
else {
  document.addEventListener('DOMContentLoaded', run, false);
}

const pseudoEventListener = (type: string) => {
  const orig = history[type];

  return (...options: Array) => {
    const rv = orig.apply(history, options);
    const e = new Event(type);
    e.arguments = options;

    document.dispatchEvent(e);
    return rv;
  };
};

if (!window.navigator.userAgent.match(/iPad/i) && !window.navigator.userAgent.match(/iPhone/i)) {
  window.history.pushState = pseudoEventListener('pushState');
}
