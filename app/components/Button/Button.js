import React, { PureComponent } from 'react';
import style from '#helper/style'; // eslint-disable-line import/no-unresolved
import styles from './Button.css';

@style(styles)
export default class Button extends PureComponent {
  render(): Object {
    const data = {
      type: this.props.static ? 'div' : 'button',
    };

    return (
      <data.type
        styleName="Button"
        data-ghost={this.props.ghost ? 'true' : 'false'}
        data-big={this.props.big ? 'true' : 'false'}
        data-static={this.props.static ? 'true' : 'false'}
      >
        <svg styleName="button">
          <rect styleName="border">
          </rect>
        </svg>

        {this.props.children}
      </data.type>
    );
  }
}
