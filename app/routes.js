import React from 'react';
import Match from 'react-router/Match';
import Miss from 'react-router/Miss';
import Redirect from 'react-router/Redirect';

import PageTransition from './components/PageTransition/PageTransition';

import Who from './components/Who/Who';
import Why from './components/Why/Why';

import FeatureList from './components/FeatureList/FeatureList';
import Portfolio from './components/Portfolio/Portfolio';
import Frisiersalon from './components/PortfolioProject/PortfolioProject-Frisiersalon';
import Restaurant from './components/PortfolioProject/PortfolioProject-Restaurant';

export const mainOrder = [
  '/',
  '/who-i-am',
  '/what-i-do/design',
  '/what-i-do/digital-strategy',
  '/what-i-do/coding',
  '/portfolio',
  '/portfolio/restaurant-reichl',
  '/portfolio/frisiersalon-elke',
  '/why-i-do-it',
];

const Routes = () => (
  <main>
    <PageTransition effect="horizontal" order={mainOrder} exactly pattern="/" component={Who} />
    <PageTransition effect="horizontal" order={mainOrder} pattern="/who-i-am" component={Who} />

    <Match
      exactly
      pattern="/what-i-do"
      render={() => <Redirect to="/what-i-do/digital-strategy" />}
    />

    <PageTransition
      effect="horizontal"
      order={mainOrder}
      pattern="/what-i-do/:feature"
      component={FeatureList}
    />

    <PageTransition
      effect="horizontal"
      order={mainOrder}
      exactly
      pattern="/portfolio"
      component={Portfolio}
    />
    <PageTransition
      effect="horizontal"
      order={mainOrder}
      pattern="/portfolio/frisiersalon-elke"
      component={Frisiersalon}
    />
    <PageTransition
      effect="horizontal"
      order={mainOrder}
      pattern="/portfolio/restaurant-reichl"
      component={Restaurant}
    />

    <PageTransition effect="horizontal" order={mainOrder} pattern="/why-i-do-it" component={Why} />

    <Miss render={() => (<span>Sorry =(</span>)} />
  </main>
);

export default Routes;
