import React, { Component } from 'react';
import Link from 'react-router/Link';
import style from '#helper/style'; // eslint-disable-line import/no-unresolved
import styles from './Header.css';

import Button from '../Button/Button';

@style(styles)
export default class Header extends Component {
  componentDidMount() {
    const $header = $(this.refs.header);

    const sticky = new Waypoint.Sticky({
      element: this.refs.header,
      stuckClass: '',
      handler(direction: string) {
        if (direction === 'down') {
          $header.attr('data-fixed', true);
        }
        else {
          $header.attr('data-fixed', false);
        }
      },
    });

    setTimeout(() => {
      $(this.refs['call-to-action']).attr('data-hover', 'false');
    }, 1000);
  }

  activeIndex: number = 0;

  isActive = (location: Object, props: Object): boolean => {
    let isActive = false;
    let activeIndex = 0;
    if (props.pathname === '/') {
      isActive = props.pathname === location.pathname;
    }
    else {
      isActive = !!location.pathname.match(props.pathname);
      if (location.pathname.match('/portfolio')) activeIndex = 2;
      else if (location.pathname.match('/why-i-do-it')) activeIndex = 3;
      else if (location.pathname.match(new RegExp(`\/${props.pathname.split('/')[1]}\/(.*)`))) {
        activeIndex = 1;
        isActive = true;
      }
    }

    if (isActive) {
      this.activeIndex = activeIndex;
    }

    return isActive;
  }

  openMenu = () => {
    $(this.refs.navi).attr('data-open', 'true');
  }

  closeMenu = () => {
    $(this.refs.navi).attr('data-open', 'false');
  }

  render(): Object {
    return (
      <header styleName="Header" ref="header">
        <div styleName="Logo">
          <Link to="/">
            <img styleName="Logo-Image" src="assets/images/icon.png" alt="Logo" title="Home" />
          </Link>
        </div>

        <nav ref="navi" styleName="Navigation">
          <ul styleName="Navigation-List" ref="menu">
            <li styleName="Navigation-List-Item" onClick={this.closeMenu}>
              <Link
                activeClassName="active"
                activeOnlyWhenExact
                to="/"
                isActive={this.isActive}
              >who I am</Link>
            </li>

            <li styleName="Navigation-List-Seperator">
              <span>seperator</span>
            </li>

            <li styleName="Navigation-List-Item" onClick={this.closeMenu}>
              <Link activeClassName="active" to="/what-i-do/digital-strategy" isActive={this.isActive}>what I do</Link>
            </li>

            <li styleName="Navigation-List-Seperator">
              <span>seperator</span>
            </li>

            <li styleName="Navigation-List-Item" onClick={this.closeMenu}>
              <Link activeClassName="active" to="/portfolio" isActive={this.isActive}>what I did</Link>
            </li>

            <li styleName="Navigation-List-Seperator">
              <span>seperator</span>
            </li>

            <li styleName="Navigation-List-Item" onClick={this.closeMenu}>
              <Link activeClassName="active" to="/why-i-do-it" isActive={this.isActive}>why I do it</Link>
            </li>
          </ul>

          <span data-action="open" styleName="Menu-Trigger" onClick={this.openMenu}>MENU</span>
          <span data-action="close" styleName="Menu-Trigger" onClick={this.closeMenu}>CLOSE</span>

          <svg
            styleName="Navigation-Line"
            ref={(line: ?Object) => {
              if (line) {
                line.setAttribute('data-active', this.activeIndex);
              }
            }}
            data-active={false}
          >
            <rect />
          </svg>
        </nav>

        <div styleName="Contact">
          <div ref="call-to-action" styleName="Call-To-Action" data-hover="true">
            <span styleName="Description">Get in touch</span>

            <button styleName="Button">
              <a href="mailto:hello@webninja.work?subject=Hey there">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M64 128v256h384V128H64zm192 139.9L93.2 144h325.6L256 267.9zM80 368V154.1l115.1  87.6L127 319l2 2 78.9-69.6L256 288l48.1-36.6L383 321l2-2-68.1-77.4L432 154.1V368H80z"/>
                </svg>
              </a>
            </button>
          </div>
        </div>
      </header>
    );
  }
}
