import React, { Component } from 'react';
import Match from 'react-router/Match';
import TransitionGroup from 'react-addons-transition-group';
import Page from './Page';

export default class PageTransition extends Component {
  render(): Object {
    const data = this.props;

    return (<Match
      {...this.props}
      children={({ matched, ...props }) => {
        return (<TransitionGroup component="div">
          {matched && <Page order={data.order || []} effect={data.effect || 'horizontal'}>
            <data.component {...props} />
          </Page>}
        </TransitionGroup>);
      }}
    />);
  }
}
