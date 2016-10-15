import React, { Component } from 'react';
import Link from 'react-router/Link';
import style from '#helper/style'; // eslint-disable-line import/no-unresolved
import styles from './PortfolioProject.css';

import Button from '../Button/Button';
import PortfolioImage from '../PortfolioImage/PortfolioImage';
import PortfolioActions from '../PortfolioActions/PortfolioActions';

@style(styles)
export default class PortfolioProjectFrisiersalon extends Component {
  render(): Object {
    return (
      <section styleName="Page">
        <h1>frisiersalon elke</h1>

        <article styleName="Content">
          <PortfolioImage
            image="assets/images/portfolio/frisiersalon-elke.png"
            positions={[
              { top: 22, left: 47, width: 25, height: 40 },
              { top: 75, left: 20, width: 10, height: 13 },
              { top: 50, left: 65, width: 10, height: 25 },
              { top: 60, left: 25, width: 15, height: 17 },
              { top: 70, left: 67, width: 10, height: 15 },
            ]}
          />

          <PortfolioActions prev="/portfolio/restaurant-reichl">
            <a href="//frisiersalonelke.at" target="_blank" rel="noreferrer noopener">
              visit website
            </a>
          </PortfolioActions>

          <h2>creative concept</h2>

          <p>Complete redesign of an Austrian hair stylist's website to match its extraordinary modern concept in 2016 bringing a whole new experience to its visitors. The center of this website's design is the repeated use of the green curls, which are also represented in the hairstylist's logo. Also it strongly builds upon big high-quality images to give the visitor a very good feeling of what it's like to be a customer there. Both full-screen images and the re-occurring curls play nicely with little animations and a decent parallax effect. The whole design is kept within the hairstylist characteristic colors: white, green and brown - making it feel very light and modern.</p>

          <h2>technology stack</h2>

          <p>For this project I used Kirby CMS for its beautiful and simple user interface and the very easy integration possibilities. It's a HTML5 stand-alone one-pager. CSS is compiled using less and javascript is compiled using gulp.</p>

          <div styleName="Awards">
            <a href="http://www.cssdesignawards.com/sites/frisiersalon-elke/28876/" rel="noopener noreferrer" target="_blank">
              <img src="assets/images/award-css.png" title="CSS Design Award" />
            </a>

            <a href="http://www.awwwards.com/sites/frisiersalon-elke" rel="noopener noreferrer" target="_blank">
              <img src="assets/images/award-awwwards.png" title="AWWWARDS" />
            </a>
          </div>

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
