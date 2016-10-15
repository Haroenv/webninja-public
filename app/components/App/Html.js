import React from 'react';
import uuid from 'node-uuid';
import htmlparser from 'htmlparser2';
import Helmet from 'react-helmet';
import config from '../../config';

type PropsType = {
  scripts: ?string[];
  children: ?string;
  stores: ?string;
  apollo: ?string;
  favicons: ?Array;
  style: ?string
};

function generateFaviconsMarkup(favicons: Array): Array {
  const markup: Array = [];
  const parser = new htmlparser.Parser({
    onopentag(tag: string, attrs: ?Object) {
      const item = {
        tag,
        attrs: {
          ...attrs,
          key: uuid.v1(),
        },
      };

      markup.push(<item.tag {...item.attrs} />);
    },
  });
  parser.write(favicons.join(''));
  parser.end();

  return markup;
}

// eslint-disable-next-line
export default function Html({ children, scripts, stores, apollo, favicons, style }: PropsType): Object {
  const helmet = Helmet.rewind();

  return (
    // eslint-disable-next-line
    <html {...helmet.htmlAttributes.toComponent()}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        {helmet.title.toComponent()}
        {helmet.base.toComponent()}
        {helmet.meta.toComponent()}
        <meta name="description" content="Stefan Nowak - a creative digital professional with a passion for technology & design ready to disrupt the world we live in." />

        <meta itemProp="name" content="Stefan Nowak" />
        <meta itemProp="description" content="Stefan Nowak - a creative digital professional with a passion for technology & design ready to disrupt the world we live in." />
        <meta itemProp="image" content={`${config.protocol}${config.publicHost}/assets/images/socialmedia.png`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@stnwk" />
        <meta name="twitter:title" content="Stefan Nowak" />
        <meta name="twitter:description" content="Stefan Nowak - a creative digital professional with a passion for technology & design ready to disrupt the world we live in." />
        <meta name="twitter:creator" content="@stnwk" />
        <meta name="twitter:image" content={`${config.protocol}${config.publicHost}/assets/images/socialmedia.png`} />

        <meta property="og:url" content={`${config.protocol}${config.publicHost}`} />
        <meta property="og:title" content="Stefan Nowak" />
        <meta property="og:description" content="Stefan Nowak - a creative digital professional with a passion for technology & design ready to disrupt the world we live in." />
        <meta property="og:site_name" content="Stefan Nowak" />
        <meta property="og:image" content={`${config.protocol}${config.publicHost}/assets/images/socialmedia.png`} />

        {favicons && generateFaviconsMarkup(favicons)}
        {helmet.link.toComponent()}
        {helmet.script.toComponent()}
        {helmet.style.toComponent()}

        <style id="css" dangerouslySetInnerHTML={{ __html: style }} />
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: children }} />

        {stores && <script
          id="__INITIAL_STORES__"
          dangerouslySetInnerHTML={{ __html:
            `window.__INITIAL__STORES__ = ${stores}` }}
        />}

        {apollo && <script
          id="__APOLLO_STATE__"
          dangerouslySetInnerHTML={{ __html:
            `window.__APOLLO_STATE__ = ${apollo}` }}
        />}

        {scripts && scripts.map((script: string) => <script key={uuid.v1()} src={script} />)}

        {config.analytics.google.trackingId &&
          <script src="https://www.google-analytics.com/analytics.js" />}

        {config.analytics.google.trackingId &&
          <script src="https://clients.webninja.work/autotrack.js" />}

        {config.analytics.google.trackingId && <script
          dangerouslySetInnerHTML={{
            __html: `window.initTracking && initTracking("${config.analytics.google.trackingId}");`,
          }}
        />}
      </body>
    </html>
  );
}
