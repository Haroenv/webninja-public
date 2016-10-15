import React, { Component } from 'react';
import style from '#helper/style'; // eslint-disable-line import/no-unresolved
import styles from './Coding.css';

@style(styles)
export default class Coding extends Component {
  componentDidMount() {
    const $stack = $(this.refs.stack);
    const $wrapper = $stack.parent();

    $stack.height($stack.height());
    $stack.css('opacity', 1);
    $wrapper.css('height', 0);
  }

  openStack = () => {
    const $stack = $(this.refs.stack);
    const $wrapper = $stack.parent();

    $wrapper.css('height', $stack.height());
    if ($wrapper.height() > 0) {
      $wrapper.css('height', 0);
    }
    else {
      $wrapper.css('height', $stack.height());
    }
  }

  render(): Object {
    return (
      <div styleName="Article">
        <h1 styleName="Headline">Coding</h1>

        <div styleName="Columns">
          <div styleName="Icon-Column">
            <div styleName="Icon">
              <svg viewBox="0 0 149 149" xmlns="http://www.w3.org/2000/svg">
                <path d="M116.668 108.043v-4.761h23.808c3.938 0 7.143-3.206 7.143-7.143V58.043c0-3.938-3.205-7.143-7.143-7.143H73.809c-3.938 0-7.142 3.205-7.142 7.143V96.14c0 3.937 3.204 7.143 7.142 7.143h23.81v4.761H57.143v-2.38c0-3.938-3.343-7.143-7.281-7.143h-8.055L17.343 58.696c1.069-1.541 1.705-3.403 1.705-5.415 0-.585-.072-1.152-.174-1.71l9.967-18.27c.919 4.525 3.438 8.569 7.259 11.425l1.555 1.163 5.879-5.227c1.288.467 2.606.715 3.947.715 6.564 0 11.905-5.34 11.905-11.905 0-.864-.136-1.734-.338-2.598l5.89-5.235-.971-1.683c-3.403-5.879-9.719-9.531-16.486-9.531-.447 0-.888.035-1.328.066l-8.05-8.05L20.41 17.186l3.278 4.371L8.043 43.91C3.495 44.627 0 48.539 0 53.282c0 3.571 1.997 6.652 4.914 8.28L24.605 98.52h-8.076c-3.938 0-7.005 3.205-7.005 7.142v2.381H0v14.286h7.143v26.19h4.762v-26.19h4.762v26.19h4.762v-26.19h104.762v26.19h4.762v-26.19h4.762v26.19h4.762v-26.19h7.143v-14.285h-30.952zm-45.24-50c0-1.311 1.07-2.38 2.381-2.38h66.667c1.312 0 2.381 1.069 2.381 2.38v30.953H71.428V58.043zM97.62 98.52h-23.81c-1.312 0-2.38-1.07-2.38-2.381v-2.382h71.428v2.382c0 1.311-1.069 2.38-2.381 2.38H97.619zm14.286 4.762v4.761h-9.524v-4.761h9.524zM48.121 36.586l6.35-5.645c-.635 3.034-3.202 5.364-6.35 5.645zm-.637-21.4c4.428 0 8.602 2.09 11.29 5.56L37.493 39.661c-2.75-2.676-4.295-6.3-4.295-10.19 0-7.879 6.407-14.285 14.286-14.285zm-9.675-6.302l2.831 2.831c-4.79 1.852-8.656 5.571-10.675 10.279l-3.032-4.046L37.81 8.884zm-11.117 16.68l.546.727L16.21 46.513c-.815-.806-1.774-1.453-2.834-1.924l13.316-19.025zM4.762 53.282c0-2.626 2.136-4.762 4.762-4.762 2.626 0 4.762 2.135 4.762 4.762 0 2.626-2.136 4.761-4.762 4.761-2.626 0-4.762-2.135-4.762-4.761zm6.136 9.385c.983-.143 1.911-.431 2.774-.853L36.219 98.52H30L10.898 62.667zm5.63 40.615h33.334c1.312 0 2.519 1.069 2.519 2.38v2.381H14.286v-2.38c0-1.312.93-2.381 2.243-2.381zm126.329 14.286H4.762v-4.763h138.095v4.763zm-73.81-76.191h76.191v4.762h-76.19v-4.762zM102.382.9H83.333v38.095h19.048V.9zm-4.762 33.334h-9.524V24.71h9.524v9.524zm0-14.286h-9.524V5.662h9.524v14.286zm-4.762 11.905c1.315 0 2.381-1.066 2.381-2.381 0-1.315-1.066-2.381-2.381-2.381-1.315 0-2.381 1.066-2.381 2.381 0 1.315 1.066 2.381 2.381 2.381zM123.809.9h-19.047v38.095h19.047V.9zm-14.285 4.762h9.524v14.286h-9.524V5.662zm9.524 28.572h-9.524V24.71h9.524v9.524zm-4.763-2.381c1.315 0 2.382-1.066 2.382-2.381 0-1.315-1.067-2.381-2.382-2.381-1.314 0-2.38 1.066-2.38 2.381 0 1.315 1.066 2.381 2.38 2.381zM145.238.9h-19.047v38.095h19.047V.9zm-14.286 4.762h9.524v14.286h-9.524V5.662zm9.524 28.572h-9.524V24.71h9.524v9.524zm-4.761-2.381c1.314 0 2.38-1.066 2.38-2.381 0-1.315-1.066-2.381-2.38-2.381-1.315 0-2.382 1.066-2.382 2.381 0 1.315 1.067 2.381 2.382 2.381z"/>
              </svg>

              <h3>I use <strong>bleeding-edge</strong> technologies</h3>
            </div>
          </div>

          <div styleName="Content">
          <p>Being able to act flexible and adjust quickly to new situations and requirements is a must-have in an agile world. Things happen and <i>change so fast</i> we fall behind the second we take a breath. <strong styleName="Recap">I’m a never-stop-learning and an always-try-new-things kind of person.</strong></p>

          <p><i>Being creative and open-minded</i> helps me to not only view problems from remarkably different angles but also solve them in a very elegant, long-lasting and <i>future-oriented</i> way. Iterating over and over again, asking our important questions &laquo;What?&raquo; and &laquo;Why?&raquo; to reflect on the answers in both design and code helps us build products of <i>very high satisfaction</i> &mdash; for everyone.</p>

          <p>Nobody likes messy code. I write code both equally <i>well structured and documented</i>, so whenever I or someone else later has to change a thing we won’t be looking at a hot mess thinking <i>what the actual fudge</i>. Code quality is a top priority with me because well written code is a lot easier to maintain and extend &mdash; making the whole development process a lot easier and cheaper.</p>

          <p>I really like spaghetti but definitely not in code :)</p>

          <h2>In case you're interested in my current <strong styleName="Dev-Stack-Trigger" onClick={this.openStack}>development stack</strong>.</h2>

          <div styleName="Dev-Stack-Wrapper">
            <div styleName="Dev-Stack" ref="stack">
            <p>I use <a href="http://rogerdudler.github.io/git-guide/" target="_blank" rel="noopener noreferrer">git</a> for version control,
            <a href="https://webpack.github.io/" target="_blank" rel="noopener noreferrer">webpack</a> for my build process and Github's <a href="https://atom.io/" target="_blank" rel="noopener noreferrer">Atom Editor</a> is my best friend. I also like <a href="https://www.alfredapp.com/" target="_blank" rel="noopener noreferrer">Alfred</a> and Chrome's web inspector.</p>

            <p>I speak <a href="https://babeljs.io/" target="_blank" rel="noopener noreferrer">JavaScript</a> (ES6 stage-0), HTML, CSS, PHP and a bunch of other languages.<br />I prefer <a href="http://lesscss.org/" target="_blank" rel="noopener noreferrer">LESS</a> and <a href="http://postcss.org/" target="_blank" rel="noopener noreferrer">PostCSS</a>.
            Also I use <a href="https://github.com/css-modules/postcss-modules" target="_blank" rel="noopener noreferrer">CSS Modules</a> to give my CSS the power it deserves.</p>

            <p>Using <a href="http://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer">Vanilla CSS</a> sucks, <a href="http://www.w3schools.com/js/" target="_blank" rel="noopener noreferrer">Vanilla JS</a> still rocks - it's 2016, you don't really need <a href="http://jquery.com/" target="_blank" rel="noopener noreferrer">jQuery</a> for everything. Especially that big-ass UI pack.</p>

            <p>I love writing <a href="https://facebook.github.io/react/" target="_blank" rel="noopener noreferrer">React Apps</a> and server-side JavaScript.
            Also I use <a href="https://mobxjs.github.io/mobx/" target="_blank" rel="noopener noreferrer">mobX</a> for state management over <a href="http://redux.js.org/" target="_blank" rel="noopener noreferrer">Redux</a>.
            <a href="http://www.apollostack.com/" target="_blank" rel="noopener noreferrer">Apollo Stack</a> is a gem for managing APIs.

            <br /><br />Real-time, Server-Side Rendering and Offline-First are some of my favorite features.
            <br />I use <a href="https://www.digitalocean.com/" target="_blank" rel="noopener noreferrer">Digital Ocean</a> for hosting and <a href="https://www.namecheap.com/" target="_blank" rel="noopener noreferrer">Namecheap</a> for domain management.<br />
            My server speaks node and is wrapped by nginx running http2.
            </p>

            <p>Please don't ask me for any <a href="https://wordpress.org/" target="_blank" rel="noopener noreferrer">WordPress</a> or <a href="https://typo3.org/" target="_blank" rel="noopener noreferrer">TYPO3</a> stuff.<br />
            Whenever there is a need for a CMS I prefer to use <a href="https://getkirby.com/" target="_blank" rel="noopener noreferrer">Kirby</a>.<br /><br />

            My favorite design tools are <a href="https://www.sketchapp.com/" target="_blank" rel="noopener noreferrer">Sketch App</a> and <a href="http://www.pixelmator.com/" target="_blank" rel="noopener noreferrer">Pixelmator</a>.<br /><br />

            Tech blogs are my news papers, coffee is life & good food is like wifi - essential.<br />
            I also like to think I'm fun :)</p>
            </div>
          </div>
          </div>
        </div>

      </div>
    );
  }
}
