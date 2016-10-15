import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

let locationHistory: Array = [];
let issetOrder: Array = [];
let direction;
let delayTransition: boolean = false;
const transitionDelay: number = 300;


export default class Page extends Component {
  transitionDuration: number = 400;

  getOrder(): Array {
    if (!issetOrder.length) {
      issetOrder = this.props.order;
    }

    // console.log('order', issetOrder);
    return issetOrder;
  }

  getPosition() {
    if (direction) return direction;

    const order = this.getOrder();
    const current = locationHistory[locationHistory.length - 1] || location.pathname;
    const previous = locationHistory[locationHistory.length - 2] || location.pathname;

    let currentIndex = order.indexOf(current);
    if (currentIndex < 0) currentIndex = order.length;
    const previousIndex = order.indexOf(previous);


    let position: string = 'right';
    if (currentIndex < previousIndex) {
      position = 'left';
    }

    // console.log('position:', position, previous, previousIndex, current, currentIndex, locationHistory);

    direction = position;
    return position;
  }

  getLeavingConfig(): Object {
    const position: string = this.getPosition();
    const config = {};

    config.opacity = 0;

    if (position === 'left') {
      if (this.props.effect === 'vertical') {
        config.translateY = '100%';
      }
      else {
        config.translateX = '100%';
      }
    }
    else {
      if (this.props.effect === 'vertical') {
        config.translateY = '-100%';
      }
      else {
        config.translateX = '-100%';
      }
    }

    return config;
  }

  getEnterConfig(): Object {
    const position: string = this.getPosition();
    const config = {
      before: {},
      after: {},
    };

    config.before.opacity = 1;

    if (position === 'left') {
      if (this.props.effect === 'vertical') {
        config.before.translateY = '-100%';
        config.after.translateY = '0';
      }
      else {
        config.before.translateX = '-100%';
        config.after.translateX = '0';
      }
    }
    else {
      if (this.props.effect === 'vertical') {
        config.before.translateY = '100%';
        config.after.translateY = '0';
      }
      else {
        config.before.translateX = '100%';
        config.after.translateX = '0';
      }
    }

    return config;
  }

  componentWillEnter(cb: Function) {
    // console.log('willEnter', delayTransition, transitionDelay);

    const $element = $(findDOMNode(this));
    const $parent = $element.parent().parent();
    this.getPosition();

    $element.attr('data-transitioning', 'true').css({
      paddingTop: $parent.css('paddingTop'),
      paddingLeft: $parent.css('paddingLeft'),
      paddingRight: $parent.css('paddingRight'),
    }).hide();

    if (delayTransition) {
      window.setTimeout(() => {
        this.animateEnter(cb, $element);
      }, transitionDelay);
    }
    else {
      this.animateEnter(cb, $element);
    }
  }

  animateEnter(cb: Function, $element: Object) {
    cb();

    const config = this.getEnterConfig();
    // console.log('enterConfig', config);

    $element.parent().parent().velocity({
      height: $element.outerHeight(),
    }, {
      duration: this.transitionDuration,
      easing: 'ease-in-out',
    });

    $element.show().velocity(config.before, {
      duration: 0,
    }).velocity(config.after, {
      duration: this.transitionDuration,
      easing: 'ease-in-out',
      complete() {
        // console.log('willEnter done');
        $element.css('padding', '').attr('data-transitioning', false);

        $element.parent().parent().height('');
      },
    });
  }

  componentWillLeave(cb: Function) {
    // console.log('willLeave');

    this.getPosition();

    if (delayTransition) {
      window.setTimeout(() => {
        this.animateLeave(cb);
      }, transitionDelay);
    }
    else {
      this.animateLeave(cb);
    }
  }

  animateLeave(cb: Function) {
    // console.log('willLeave animate');
    const $element = $(findDOMNode(this));
    const $parent = $element.parent().parent();

    $element.attr('data-transitioning', 'true').css({
      paddingTop: $parent.css('paddingTop'),
      paddingLeft: $parent.css('paddingLeft'),
      paddingRight: $parent.css('paddingRight'),
    });

    $parent.height($element.outerHeight());

    const config = this.getLeavingConfig();
    // console.log('leaveConfig', config);

    $element.velocity(config, {
      duration: this.transitionDuration,
      easing: 'ease-in-out',
      complete() {
        // console.log('willLeave done');
        $element.css('padding', '').attr('data-transitioning', false);
        cb();
      },
    });
  }

  render(): Object {
    return this.props.children;
  }
}

if (process.env.BROWSER) {
  locationHistory.push(location.pathname);

  window.document.addEventListener('pushState', () => {
    issetOrder = [];
    direction = '';
    locationHistory.push(location.pathname);
    window.ga('set', 'page', location.pathname);
    window.ga('send', 'pageview');

    if ($(window).scrollTop() > 0) {
      delayTransition = true;

      $('body, html').velocity('scroll', {
        duration: transitionDelay,
      });
    }
    else {
      delayTransition = false;
    }
  });
}
