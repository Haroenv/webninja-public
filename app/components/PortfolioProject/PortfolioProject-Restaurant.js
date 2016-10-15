import React, { Component } from 'react';
import Link from 'react-router/Link';
import style from '#helper/style'; // eslint-disable-line import/no-unresolved
import styles from './PortfolioProject.css';

import Button from '../Button/Button';
import PortfolioImage from '../PortfolioImage/PortfolioImage';
import PortfolioActions from '../PortfolioActions/PortfolioActions';

@style(styles)
export default class PortfolioProjectRestaurant extends Component {
  render(): Object {
    return (
      <section styleName="Page">
        <h1>café restaurant reichl</h1>

        <article styleName="Content">
          <PortfolioImage
            image="assets/images/portfolio/restaurant-reichl.png"
            positions={[
              { top: 42, left: 35, width: 35, height: 20 },
              { top: 75, left: 20, width: 10, height: 13 },
              { top: 50, left: 65, width: 10, height: 25 },
              { top: 60, left: 25, width: 15, height: 17 },
              { top: 70, left: 67, width: 10, height: 15 },
            ]}
          />

          <PortfolioActions next="/portfolio/frisiersalon-elke" static>
            <span>coming soon</span>
          </PortfolioActions>

          <h2>creative concept</h2>

          <p>A complete redesign of an Austrian traditional yet very modern restaurant focussing on a very streamlined and clear interface and big high-quality pictures of both the dishes and the restaurant itself putting the content in the very center.</p>

          <h2>technology stack</h2>

          <p>This project is build completely in React. It uses Kirby CMS for its beautiful and simple User Interface and fetches the data via Apollo and GraphQL. It uses React Router v4, mobX for state management and is completely SEO-optimized with server-side rendering. Also it makes use of service workers for better caching and improved speed. The build process is completely taken care of by webpack using only PostCSS + PostCSS Modules and ES6 stage-0 for javascript compilation along with flowtype and airbnb's eslint config.</p>

          <div styleName="Actions">
            <div styleName="Primary">
              <Button ghost big>
                <Link to="/portfolio">view all projects</Link>
              </Button>
            </div>
          </div>
        </article>
      </section>
    );
  }
}
