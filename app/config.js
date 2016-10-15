let PROTOCOL = process.env.PROTOCOL;
let WEBSITE_HOSTNAME = process.env.WEBSITE_HOSTNAME;
const PORT = process.env.PROTOCOL;


const port = PORT || 3000;
const host = WEBSITE_HOSTNAME || `localhost:${port}`;
const publicHost = WEBSITE_HOSTNAME ||
(process.env.NODE_ENV === 'production' ? `localhost:${port}` : `localhost:${port + 1}`);

export default {
  dev: process.env.NODE_ENV === 'development',
  prod: process.env.NODE_ENV === 'production',
  debug: !process.argv.includes('--release'),
  verbose: process.argv.includes('--verbose'),

  port,
  host,
  publicHost,
  protocol: PROTOCOL || 'http://',

  favicons: {
    appName: 'webninja.work',
    appDescription: '',
    developerName: 'Stefan Nowak',
    developerURL: 'https://webninja.work',
    background: '#fff',
    preferOnline: false,
  },

  analytics: {
    google: {
      trackingId: process.env.GOOGLE_TRACKING_ID || 'UA-000000-1',
    },
  },

  auth: {
    enabled: false,

    session: {
      secret: process.env.SESSION_SECRET || 'Stefan Nowak',
    },

    cookie: {
      secret: process.env.COOKIE_SECRET || 'Stefan Nowak',
    },

    jwt: {
      secret: process.env.JWT_SECRET || 'Stefan Nowak',
    },

    facebook: {
      id: process.env.FACEBOOK_ID || 'id',
      secret: process.env.FACEBOOK_SECRET || 'secret',
    },
  },

  autoprefixer: {
    browsers: [
      '>5%',
      'last 4 versions',
      'Firefox ESR',
      'not ie < 9',
    ],
  },
};
