import React, { Component } from 'react';
import Link from 'react-router/Link';
import Redirect from 'react-router/Redirect';
import Match from 'react-router/Match';
import style from '#helper/style'; // eslint-disable-line import/no-unresolved
import styles from './FeatureList.css';

import Button from '../Button/Button';
import Features from '../Features/Features';
import Strategy from '../Strategy/Strategy';
import Design from '../Design/Design';
import Coding from '../Coding/Coding';

import PageTransition from '../PageTransition/PageTransition';

@style(styles)
export default class FeatureList extends Component {
  render(): Object {
    const feature = this.props.params.feature || 'digital-strategy';

    return (
      <section styleName="Page">
        <article styleName="Content">
          <PageTransition
            order={[
              '/what-i-do/coding',
              '/what-i-do/digital-strategy',
              '/what-i-do',
              '/what-i-do/design',
            ]}
            pattern="/what-i-do/digital-strategy"
            effect="akkordion"
            component={Strategy}
          />
          <PageTransition
            pattern="/what-i-do/design"
            effect="akkordion"
            component={Design}
            order={[
              '/what-i-do/digital-strategy',
              '/what-i-do/design',
              '/what-i-do',
              '/what-i-do/coding',
            ]}
          />
          <PageTransition
            order={[
              '/what-i-do/design',
              '/what-i-do/coding',
              '/what-i-do',
              '/what-i-do/digital-strategy',
            ]}
            pattern="/what-i-do/coding"
            effect="akkordion"
            component={Coding}
          />
        </article>

        <Features activeFeature={feature} />

        <Button ghost big>
          <Link to="/portfolio">See my work</Link>
        </Button>
      </section>
    );
  }
}
