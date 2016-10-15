import React, { PureComponent, PropTypes } from 'react';
import style from '#helper/style'; // eslint-disable-line import/no-unresolved
import styles from './ErrorPage.css';
import config from '../../config';

type PropsType = {
  error: Object
};

@style(styles)
export default class ErrorPage extends PureComponent {
  props: PropsType;

  static contextTypes = {
    setTitle: PropTypes.func.isRequired,
  };

  render(): Object {
    const error = {
      title: 'Error',
      content: 'Sorry, a critical error occured on this page.',
    };

    const notFound = {
      title: 'Page Not Found',
      content: 'Sorry, the page you were trying to view does not exist.',
    };

    console.log('context -> ', this.context);
    const event = this.props.error;
    const display = (event.status === 404) ? notFound : error;

    if (event.status !== 404 && config.dev) {
      display.message = <pre>{event.stack}</pre>;
    }

    if (this.context.setTitle) {
      this.context.setTitle(display.title);
    }

    return (
      <div>
        <h1 styleName="Heading">{display.title}</h1>
        <p>{display.content}</p>

        {display.message}
      </div>
    );
  }
}
