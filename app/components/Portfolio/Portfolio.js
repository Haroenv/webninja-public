import React, { Component } from 'react';
import Link from 'react-router/Link';
import style from '#helper/style'; // eslint-disable-line import/no-unresolved
import styles from './Portfolio.css';

import Button from '../Button/Button';
import Features from '../Features/Features';
import PortfolioCard from '../PortfolioCard/PortfolioCard';

@style(styles)
export default class Portfolio extends Component {
  render(): Object {
    return (
      <section styleName="Page">
        <h1>Portfolio</h1>

        <article styleName="Content">
          <ul styleName="Cards">
            <li styleName="Card">
              <PortfolioCard
                path="restaurant-reichl"
                title="Café Restaurant Reichl"
                image="assets/images/portfolio/restaurant-reichl.png"
              />
            </li>
            <li styleName="Card">
              <PortfolioCard
                path="frisiersalon-elke"
                title="Frisiersalon Elke"
                image="assets/images/portfolio/frisiersalon-elke.png"
              />
            </li>
          </ul>

          <Button big ghost>
            <Link to="/why-i-do-it">See what drives me</Link>
          </Button>
        </article>
      </section>
    );
  }
}
