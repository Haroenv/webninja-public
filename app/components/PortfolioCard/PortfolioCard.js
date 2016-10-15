import React, { Component } from 'react';
import Link from 'react-router/Link';
import style from '#helper/style'; // eslint-disable-line import/no-unresolved
import styles from './PortfolioCard.css';

import Button from '../Button/Button';

@style(styles)
export default class PortfolioCard extends Component {
  render(): Object {
    const path = `/portfolio/${this.props.path}`;

    return (
      <div styleName="Card">
        <Link to={path}>
          <div styleName="Image">
            <img src={this.props.image} alt={this.props.title} />

            <div styleName="Overlay">
              <Button ghost>
                <span>view project</span>
              </Button>
            </div>
          </div>
        </Link>

        <span styleName="Project">{this.props.title}</span>
      </div>
    );
  }
}
