import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Helmet from 'react-helmet';
import Match from 'react-router/Match';
import style from '#helper/style'; // eslint-disable-line
import styles from './App.css';
import config from '../../config';
import Routes from '../../routes';
import Header from '../Header/Header';

@style(styles)
export default class App extends Component {
  render(): Object {
    return (
      <div>
        <Helmet
          htmlAttributes={{ lang: 'de' }}
          title="Stefan Nowak"
          base={{
            href: `${config.protocol}${config.publicHost}`,
          }}
          meta={[
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          ]}
        />

        <Header />
        <Routes />
      </div>
    );
  }
}
