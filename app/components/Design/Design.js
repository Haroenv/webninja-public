import React, { Component } from 'react';
import Link from 'react-router/Link';
import style from '#helper/style'; // eslint-disable-line import/no-unresolved
import styles from './Design.css';

import Button from '../Button/Button';
import Features from '../Features/Features';

@style(styles)
export default class Design extends Component {
  render(): Object {
    return (
      <div styleName="Article">
        <h1 styleName="Headline">Design</h1>

        <div styleName="Columns">
          <div styleName="Icon-Column">
            <div styleName="Icon">
            <svg width="148" height="149" viewBox="0 0 148 149" xmlns="http://www.w3.org/2000/svg">
              <path d="M109.543 57.681v-5.2c2.765-.986 4.762-3.605 4.762-6.705 0-2.907-1.75-5.405-4.247-6.517l4.476-17.907L97.639 1.641 80.743 21.35l4.476 17.907c-2.497 1.114-4.247 3.612-4.247 6.519 0 3.1 1.997 5.719 4.762 6.705v5.2h-23.81V21.333L50.02.5 38.114 21.333v36.348H.02v33.334h38.095v45.237c0 6.565 5.341 11.906 11.905 11.906 6.565 0 11.905-5.341 11.905-11.905V91.014h23.81v45.237c0 6.565 5.34 11.906 11.905 11.906 6.565 0 11.905-5.341 11.905-11.905v-7.143h2.381c3.938 0 7.143-3.206 7.143-7.144v-13.935l-1.183-.688c-.75-.435-1.198-1.2-1.198-2.043 0-.843.448-1.607 1.198-2.043l1.183-.688v-6.793h-4.762v4.226c-1.495 1.34-2.381 3.269-2.381 5.298 0 2.028.885 3.957 2.381 5.297v11.369c0 1.312-1.066 2.381-2.381 2.381h-2.381V91.014h38.095V57.68h-38.096zM38.115 86.253H4.781v-23.81h4.762v7.143h4.762v-7.143h4.762v9.524h4.762v-9.524h4.762v7.143h4.762v-7.143h4.762v23.81zM50.02 10.1l5.422 9.485H44.598l5.421-9.485zm-7.143 14.247h4.762v92.858h-4.762V24.347zm14.286 111.905c0 3.938-3.204 7.143-7.143 7.143-3.937 0-7.143-3.205-7.143-7.143v-4.762h14.286v4.762zm0-9.524H42.876v-4.761h14.286v4.761zm0-9.523H52.4V24.347h4.762v92.858zM97.64 21.966c1.314 0 2.38 1.07 2.38 2.381 0 1.313-1.066 2.381-2.38 2.381-1.315 0-2.382-1.068-2.382-2.38 0-1.312 1.067-2.382 2.382-2.382zm-2.382-10.23v5.907c-2.764.985-4.762 3.605-4.762 6.704 0 3.939 3.205 7.143 7.144 7.143 3.938 0 7.142-3.204 7.142-7.143 0-3.1-1.997-5.718-4.762-6.704v-5.907l9.296 10.845-4.012 16.052H89.974l-4.015-16.05 9.298-10.847zm-9.522 74.516h-23.81V62.444h4.762v7.143h4.762v-7.143h4.762v9.524h4.762v-9.524h4.762v23.81zm11.904 57.144c-3.939 0-7.144-3.206-7.144-7.143v-7.143h14.286v7.142c0 3.938-3.205 7.144-7.142 7.144zm7.142-83.334v54.762H90.495V52.919h14.286v7.143zm0 59.524v4.762H90.495v-4.762h14.286zm2.382-71.429H88.115c-1.314 0-2.381-1.069-2.381-2.381 0-1.312 1.067-2.381 2.381-2.381h19.048c1.314 0 2.38 1.069 2.38 2.381 0 1.312-1.067 2.381-2.38 2.381zm35.714 38.096h-33.334V62.442h4.762v9.524h4.762v-9.524h4.762v7.143h4.762v-7.143h4.762v9.524h4.762v-9.524h4.762v23.81z" />
            </svg>

              <h3>I am <strong>passionate</strong> about design</h3>
            </div>
          </div>

          <div styleName="Content">
          <p>Design nowadays means much more than just how it looks. It’s all about <i>how it feels and how it works</i>. It means having empathy and a strong sense for both aesthetics and actual human behavior. Creating an immersive User Experience is a <strong>very fine art to master</strong>.</p>

          <p>A <strong>human-centered Design Process</strong> is the backbone of every exceptional product. After all it’s not just users or customers we are designing for but <i>actual human beings</i>. It’s all those <i>little details</i> that make a product come <i>alive</i> and people <i>fall in love</i> with it. Designing for humans also means to <strong>tell stories</strong> - the <i>art of communicating</i> in an unique and <i>characteristic</i> way. Just like those amazing bed-time stories we remember being told as kids.<br />We <i>still</i> enjoy remembering those moments today.
          </p>

          <p><strong styleName="Recap">Design means to care. A lot.</strong> I care about <i>every little thing</i> you would not usually think about because people won’t notice. But this is wrong. People <i>notice</i>. Everybody does. People notice and they judge because <strong>every detail sums up to the feeling</strong> you get when you visit a website.<br /> I know because I judge too.</p>

          <p>Hands down: People get very <i>easily</i> annoyed.<br />Let's not give them more reasons to be annoyed about.</p>

          <p><strong>PS:</strong> If you use Comic Sans I hate you. Or the Internet Explorer. Or both.</p>
          </div>
        </div>
      </div>
    );
  }
}
