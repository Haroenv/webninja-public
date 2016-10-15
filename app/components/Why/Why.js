import React, { Component } from 'react';
import Link from 'react-router/Link';
import style from '#helper/style'; // eslint-disable-line import/no-unresolved
import styles from './Why.css';

import Button from '../Button/Button';



@style(styles)
export default class Why extends Component {
  constructor() {
    super();

    this.state = {
      active: null
    };
  }

  componentDidMount() {
    const sections = ['creative', 'technology', 'creator'];
    sections.forEach((section) => {
      const $section = $(this.refs[`content-${section}`]);
      $section.css('min-height', $section.outerHeight());
      $section.parent().css('max-height', $section.outerHeight());
    });

    this.setState({
      active: 'creative',
    });
  }

  open(key: string) {
    this.setState({
      active: key
    });
  }

  renderIcon(key: string) {
    switch(key) {
      case 'creative':
        return <svg viewBox="0 0 131 149" xmlns="http://www.w3.org/2000/svg">
          <path d="M130.106.745l-13.84 10.36-13.92 32.453H91.154l-4.395-9.524h2.872c5.252 0 9.524-4.226 9.524-9.479v-9.57h4.762V.7H89.63v14.286h4.762v9.569c0 2.624-2.136 4.716-4.762 4.716h-5.069l-6.086-13.166 7.29-3.634L61.894 2.247l-5.612 19.641C56.13 10.202 46.589.743 34.868.743c-11.817 0-21.429 9.612-21.429 21.429 0 7.14 3.616 13.838 9.524 17.797v3.588h-5.766l-.372 1.953c-1.157 6.002-1.264 12.171-.319 18.323L.263 92.786l17.938 4.098v30.006h23.81v21.429h57.142V115.14c16.667-11.79 26.186-30.747 26.172-50.971l.005-8.685c0-3.274-.303-6.638-.912-9.953l-.353-1.974h-4.674l10.715-25.669V.745zm-35.715 9.524V5.507h4.762v4.762h-4.762zm-8.483 33.288h-9.03l-4.329-9.524h8.965l4.395 9.524zM64.986 8.76l9.464 4.054-2.233 1.095 7.1 15.362h-8.932l-5.802-12.735-2.131 1.076 2.534-8.852zm6.662 34.798H61.059V38.84c0-2.626 2.135-4.807 4.762-4.807h1.497l4.329 9.524zm-9.35-20.532l2.888 6.355c-4.953.334-8.889 4.424-8.889 9.46v4.716h-9.523v-3.588c4.764-3.193 7.997-8.176 9.087-13.726l6.436-3.217zM18.2 22.174c0-9.188 7.479-16.666 16.667-16.666 9.188 0 16.666 7.478 16.666 16.666 0 5.914-3.194 11.44-8.335 14.419l-1.188.686v6.278h-4.762V28.876c2.765-.986 4.762-3.605 4.762-6.705 0-3.938-3.205-7.143-7.143-7.143-3.938 0-7.143 3.206-7.143 7.144 0 3.1 1.998 5.718 4.762 6.704v14.682h-4.762v-6.28l-1.188-.687c-5.14-2.979-8.336-8.503-8.336-14.417zm16.667 2.381c-1.315 0-2.381-1.07-2.381-2.381 0-1.314 1.066-2.381 2.381-2.381 1.314 0 2.381 1.067 2.381 2.381 0 1.315-1.067 2.381-2.381 2.381zm85.19 23.764c.345 2.381.52 4.796.52 7.143l.004 8.702c.015 19.075-9.397 36.936-25.143 47.777l-1.047.714v30.903H46.773v-21.429h-23.81V93.086L7.532 89.564l13.938-24.85-.136-.85c-.885-5.209-.935-10.783-.166-15.545H120.058zm-5.826-4.762h-6.707l11.869-27.672 5.278 2.629-10.44 25.043zm11.112-30l-2.634-1.317 2.634-1.971v3.288zM39.63 62.605c-3.938 0-7.143-2.381-7.143-7.143h-4.762c0 7.143 5.34 11.905 11.905 11.905 6.565 0 11.905-4.762 11.905-11.905h-4.762c0 4.762-3.205 7.143-7.143 7.143z" />
        </svg>;
      break;

      case 'technology':
        return <svg viewBox="0 0 149 149" xmlns="http://www.w3.org/2000/svg">
          <path d="M53.216 62.805c-15.817 0-28.682 12.866-28.682 28.681 0 2.378.325 4.819.958 7.255l1.05 4.019 37.944-37.943-4.019-1.05c-2.437-.638-4.876-.962-7.251-.962zm84.23-28.672c-2.883 0-5.597 1.124-7.635 3.165l-5.376 5.374V7.943c0-3.938-3.205-7.143-7.143-7.143H31.578c-3.939 0-7.143 3.205-7.143 7.143v39.56C10.11 56.907.625 73.105.625 91.486c0 14.047 5.472 27.255 15.405 37.188l1.684 1.683 6.721-6.721v17.64c0 3.938 3.205 7.143 7.143 7.143h85.715c3.937 0 7.143-3.205 7.143-7.143V73.215l20.647-20.648c2.037-2.039 3.161-4.748 3.161-7.633 0-5.956-4.843-10.8-10.797-10.8zm-64.202 71.633l-2.586-2.585 49.014-49.014 2.586 2.585-49.014 49.014zm.998 7.731l-6.433 1.072 1.071-6.433 5.362 5.361zM29.197 7.943c0-1.312 1.066-2.381 2.38-2.381h85.715c1.315 0 2.381 1.069 2.381 2.381v11.905H29.197V7.943zm0 16.667h90.475v22.824l-54.604 54.605-3.055 18.325 18.326-3.054 39.333-39.334v46.634H29.197v-5.736l62.89-62.89-1.684-1.684c-9.933-9.933-23.14-15.405-37.187-15.405-8.65 0-16.813 2.112-24.02 5.829V24.61zm.166 68.595c-.045-.576-.067-1.15-.067-1.719 0-13.188 10.731-23.919 23.92-23.919.566 0 1.14.022 1.719.066L29.363 93.205zm-11.61 30.376c-.619-.681-1.173-1.405-1.75-2.115l3.793-2.755-2.8-3.854-3.807 2.764c-1.885-2.874-3.471-5.912-4.685-9.105l4.517-1.466-1.47-4.529-4.5 1.357c-.88-3.276-1.385-5.46-1.555-10.221h4.653v-4.762h-4.64c.171-2.381.709-6.75 1.588-9.996l4.455 1.5 1.469-4.502-4.453-1.433c1.231-3.217 2.774-6.27 4.636-9.11l3.794 2.76 2.8-3.85-3.794-2.758c2.147-2.662 4.571-5.083 7.233-7.233l2.757 3.795 3.855-2.8-2.757-3.795c2.84-1.862 5.897-3.405 9.115-4.633l1.447 4.452 4.528-1.471-1.552-4.455c3.245-.88 7.614-1.416 9.995-1.588v4.641h4.762v-4.653c4.762.17 6.945.677 10.219 1.557l-1.41 4.498 4.556 1.472 1.48-4.517c3.194 1.215 6.236 2.803 9.11 4.685l-2.762 3.807 3.857 2.8 2.757-3.794c.712.574 1.434 1.13 2.117 1.75L17.754 123.58zm54.3 12.933c0-1.315 1.067-2.381 2.382-2.381 1.314 0 2.38 1.066 2.38 2.381 0 1.315-1.066 2.381-2.38 2.381-1.315 0-2.382-1.066-2.382-2.381zm47.62 4.762c0 1.315-1.067 2.381-2.381 2.381H74.444c3.934-.006 7.134-3.208 7.134-7.143 0-3.938-3.206-7.143-7.143-7.143-3.939 0-7.143 3.205-7.143 7.143 0 3.935 3.2 7.137 7.133 7.143H31.578c-1.315 0-2.381-1.066-2.381-2.381v-11.905h90.475v11.905zm-40.476-29.557l-2.586-2.586 49.014-49.014 2.585 2.586-49.013 49.014zm52.38-52.381L123.04 50.8l3.775-3.776 8.538 8.538-3.775 3.776zm10.139-10.135l-2.996 2.993-8.538-8.538 2.996-2.996c1.14-1.138 2.656-1.766 4.269-1.766 3.326 0 6.035 2.71 6.035 6.038 0 1.611-.629 3.128-1.766 4.269zM60.149 10.324H88.72v4.762H60.15v-4.762z" />
        </svg>
      break;

      case 'creator':
        return <svg viewBox="0 0 134 149" xmlns="http://www.w3.org/2000/svg">
          <path d="M115.551 120.191l-3.455-3.279c-.174.184-.364.348-.54.529L91.747 52.62c2.503-3.224 4.007-7.258 4.007-11.644 0-10.502-8.545-19.047-19.047-19.047v-8.743c.633.098 1.262.165 1.895.281l.869-4.683c-.978-.182-1.955-.298-2.933-.434C75.744 3.898 71.862.5 67.184.5c-4.68 0-8.559 3.398-9.354 7.85-.979.138-1.955.253-2.933.434l.868 4.683c.634-.116 1.262-.183 1.895-.28v8.742c-10.502 0-19.047 8.546-19.047 19.048 0 4.385 1.505 8.419 4.005 11.64l-19.807 64.821c-.177-.18-.367-.345-.541-.528l-3.455 3.278c.778.82 1.607 1.596 2.429 2.379l-3.958 12.953-.102 12.6 13.955-10.467 1.878-6.148c.507.306 1.003.641 1.513.926l2.33-4.152c-.811-.457-1.606-.976-2.409-1.476l8.766-28.683H91.15l8.764 28.685c-.802.5-1.595 1.019-2.41 1.476l2.331 4.153c.513-.288 1.006-.624 1.513-.927l1.878 6.148 13.96 10.465v-12.26l-4.063-13.29c.822-.784 1.653-1.56 2.429-2.379zm-38.843-93.5c7.879 0 14.286 6.407 14.286 14.285 0 4.586-2.181 8.665-5.55 11.279-1.395-4.716-4.569-8.666-8.745-11.088 0-.065.01-.126.01-.19 0-5.138-2.056-9.798-5.375-13.229 1.662-.676 3.475-1.057 5.374-1.057zm-.79 19.674c2.59 2.01 4.471 4.883 5.205 8.19-1.391.455-2.872.708-4.415.708-1.9 0-3.712-.382-5.374-1.057 2.11-2.182 3.703-4.857 4.584-7.841zm-8.733 5.23c-2.181-1.959-3.763-4.569-4.417-7.53 1.392-.455 2.873-.707 4.417-.707 1.542 0 3.023.252 4.416.706-.655 2.962-2.235 5.572-4.416 7.531zm0-13c-1.603 0-3.15.222-4.639.595.439-3.492 2.143-6.59 4.639-8.832 2.494 2.24 4.2 5.338 4.637 8.83-1.488-.371-3.035-.593-4.637-.593zm-4.15 15.61c-1.663.676-3.474 1.058-5.375 1.058-1.542 0-3.023-.253-4.416-.708.733-3.307 2.615-6.18 5.205-8.19.883 2.983 2.476 5.66 4.585 7.84zm-5.375 5.819c3.472 0 6.72-.948 9.525-2.576 2.804 1.628 6.052 2.576 9.523 2.576 1.603 0 3.15-.221 4.639-.595-.884 7.036-6.891 12.5-14.162 12.5-7.272 0-13.279-5.464-14.162-12.5 1.488.374 3.035.595 4.637.595zm4.762-50c0-2.625 2.136-4.761 4.763-4.761 2.626 0 4.762 2.135 4.762 4.761v12.531c-1.691.439-3.288 1.095-4.762 1.95-1.475-.856-3.072-1.511-4.763-1.95v-12.53zM57.66 26.691c1.9 0 3.712.381 5.374 1.057-3.318 3.431-5.374 8.09-5.374 13.228 0 .065.01.126.01.191-4.176 2.422-7.35 6.372-8.745 11.088-3.369-2.615-5.55-6.693-5.55-11.279 0-7.878 6.407-14.285 14.285-14.285zM27.04 134.774l-5.093 3.821v-2.025l24.511-80.225c.544.398 1.105.767 1.689 1.105 0 .067-.01.129-.01.193 0 1.896.288 3.722.805 5.45L27.04 134.774zm17.635-41.416l7.388-24.179c3.483 4.555 8.957 7.512 15.122 7.512 6.164 0 11.637-2.957 15.121-7.512l7.388 24.179H44.675zm67.748 45.237l-5.093-3.819-21.902-71.68c.516-1.732.805-3.557.805-5.453 0-.064-.01-.126-.01-.19.583-.339 1.145-.71 1.688-1.105l24.512 80.221v2.026zM97.525 14.941c-2.817-1.438-5.764-2.69-8.757-3.716l-1.54 4.507c2.778.95 5.514 2.111 8.13 3.45l2.167-4.241zm27.293 25.843c-1.593-2.729-3.398-5.374-5.367-7.857l-3.73 2.957c1.83 2.31 3.506 4.765 4.985 7.297l4.112-2.397zM113.02 25.908c-2.303-2.179-4.776-4.21-7.357-6.034l-2.75 3.888c2.395 1.695 4.695 3.581 6.833 5.605l3.274-3.46zm14.293 33.618l4.624-1.13c-.752-3.079-1.738-6.126-2.926-9.067l-4.414 1.785c1.104 2.73 2.019 5.56 2.716 8.412zm6.221 8.253l-4.738.46c.193 2.009.294 4.05.294 6.071 0 .928-.02 1.85-.06 2.769l4.757.21c.043-.988.064-1.982.064-2.979 0-2.174-.105-4.372-.317-6.531zM125.758 94.4l4.506 1.544c1.028-2.996 1.845-6.093 2.433-9.203l-4.681-.883c-.546 2.887-1.306 5.762-2.258 8.542zm-8.048 15.686l3.886 2.753c1.835-2.588 3.497-5.325 4.938-8.134l-4.235-2.176c-1.34 2.612-2.883 5.155-4.589 7.557zm-37.069 24.66l1.034 4.65c3.174-.708 6.312-1.65 9.331-2.81l-1.707-4.445c-2.8 1.074-5.712 1.95-8.658 2.605zm-13.459 1.469c-1.514-.036-3.024-.053-4.533-.162l-.348 4.748c1.595.118 3.207.175 4.79.175 1.724.031 3.322-.055 4.945-.173l-.342-4.748c-1.481.107-3 .16-4.512.16zm-23.845.361c3.033 1.165 6.171 2.11 9.329 2.81l1.03-4.65c-2.928-.647-5.84-1.526-8.652-2.605l-1.707 4.445zm3.879-120.869L45.68 11.2c-2.998 1.02-5.95 2.267-8.771 3.71l2.166 4.24c2.619-1.337 5.357-2.494 8.14-3.443zM18.69 35.836l-3.728-2.962c-1.974 2.486-3.784 5.129-5.374 7.852l4.112 2.405c1.477-2.533 3.158-4.985 4.99-7.295zM7.803 104.643c1.441 2.815 3.1 5.55 4.932 8.141l3.887-2.752c-1.702-2.403-3.242-4.946-4.578-7.56l-4.24 2.171zM6.341 85.791l-4.68.878c.585 3.117 1.4 6.212 2.423 9.208l4.507-1.538c-.952-2.779-1.709-5.655-2.25-8.548zM5.28 74.307c0-2.044.1-4.114.3-6.14l-4.738-.469c-.216 2.185-.324 4.41-.324 6.612 0 .972.022 1.938.062 2.905l4.757-.21c-.038-.895-.057-1.792-.057-2.698zm26.23-50.585l-2.747-3.888c-2.581 1.822-5.06 3.847-7.364 6.024l3.269 3.464c2.143-2.021 4.445-3.905 6.843-5.6zM9.797 51.053l-4.412-1.79c-1.187 2.928-2.176 5.975-2.935 9.055l4.622 1.14c.706-2.855 1.623-5.684 2.725-8.405z" />
        </svg>
      break;

      default:
        throw new Error('Unknown icon type');
      break;
    }
  }

  renderAccordion(key: string, title: Object, content: Object, prev: ?string, next: ?string, active: ?string) {
    return (
      <li styleName="Accordion-Tab" key={key} ref={key}>
        <h1 styleName="Accordion-Trigger">
          {title}
        </h1>
        <div styleName="Accordion-Content-Wrapper"></div>
      </li>
    );

    return (
      <li styleName="Accordion-Tab" key={key} ref={key}>
        <h1 styleName="Accordion-Trigger" onClick={this.open.bind(this, key)}>
          {title}
        </h1>

        <div styleName="Accordion-Content-Wrapper" key={`wrapper-${key}`} data-active={active === key || !active}>
          <div styleName="Accordion-Content" ref={`content-${key}`}>
            <div styleName="Accordion-Content-Icon">
              {/* <div styleName="Back" data-active={!!prev} onClick={!!prev && this.open.bind(this, prev)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M349.7 189.8c-3.1 3.1-8 3-11.3 0L264 123.4V408c0 4.4-3.6 8-8 8s-8-3.6-8-8V123.4l-74.4 66.3c-3.4 2.9-8.1 3.2-11.2.1-3.1-3.1-3.3-8.5-.1-11.4 0 0 87-79.2 88-80s2.8-2.4 5.7-2.4 4.9 1.6 5.7 2.4 88 80 88 80c1.5 1.5 2.3 3.6 2.3 5.7s-.8 4.1-2.3 5.7z"/>
                </svg>
              </div> */}
              <div styleName="Main">
                <div styleName="Icon">
                  {this.renderIcon(key)}
                </div>
              </div>
              {/* <div styleName="Forward" data-active={!!next} onClick={!!next && this.open.bind(this, next)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M349.7 322.2c-3.1-3.1-8-3-11.3 0L264 388.6V104c0-4.4-3.6-8-8-8s-8 3.6-8 8v284.6l-74.4-66.3c-3.4-2.9-8.1-3.2-11.2-.1-3.1 3.1-3.3 8.5-.1 11.4 0 0 87 79.2 88 80s2.8 2.4 5.7 2.4 4.9-1.6 5.7-2.4 88-80 88-80c1.5-1.5 2.3-3.6 2.3-5.7s-.8-4.1-2.3-5.7z"/>
                </svg>
              </div> */}
            </div>

            <div styleName="Accordion-Content-Text">
              {content}
            </div>
          </div>
        </div>
      </li>
    );
  }

  render(): Object {
    return (
      <section styleName="Page">
        <h1>Passion-driven</h1>

        <article styleName="Content">
          <p>I have a very strong passion to create beautiful and exceptionally useful things that help make peoples’ lives not just easier but also more meaningful. There are so many things that we don’t actually want to do but need to because it hasn’t been fixed yet. And even worse - people stopped questioning why certain things are the way they are. They stick to the status quo forever. This is when progress comes to die. But it’s also where innovation can rise like a phoenix only just to disrupt entire industries and make our world leap forward.</p>

          <p>I love solving existing problems but even more I love to challenge myself to identify problems before other people can even see them. Human-centered technology plays the most important part in the process of creating future. I am incredibly excited to see progress happen and transform our society for the better as I think life will completely change in this very century compared to what we know. In fact, I don’t just want to see it happen.  <br />I want to be part of the future by creating it.</p>

          <ul styleName="Accordion">
            {this.renderAccordion(
              'creative',
              <span>i love being <strong styleName="Highlight">creative</strong>.</span>,
              <article>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>

                <Button ghost>
                  <span onClick={this.open.bind(this, 'technology')}>next</span>
                </Button>
              </article>,
              null,
              'technology',
              this.state.active
            )}

            {this.renderAccordion(
              'technology',
              <span>i live and breathe <strong styleName="Highlight">technology</strong>.</span>,
              <article>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>

                <Button ghost>
                  <span onClick={this.open.bind(this, 'creator')}>next</span>
                </Button>
              </article>,
              'creative',
              'creator',
              this.state.active
            )}

            {this.renderAccordion(
              'creator',
              <span>i am a <strong styleName="Highlight">creator</strong>.</span>,
              <article>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
              </article>,
              'technology',
              null,
              this.state.active
            )}
          </ul>
        </article>

        <article styleName="Profile">
          <p styleName="Profile-Highlight">
            I can give you a lot more reasons why I love what I do, <br />
            but I'd rather hear from you =)
          </p>

          <div styleName="Profile-Avatar">
            <img src="assets/images/me.jpg" alt="It's me." title="It's me." />
          </div>

          <h3 styleName="Profile-Name">Stefan Nowak</h3>

          <p styleName="Profile-Description">
            a creative digital professional with a passion for technology & design ready to disrupt the world we live in.
          </p>

          <h3 styleName="Profile-Brainchilds-Headline">
            what I like to <span styleName="Profile-Brainchilds-Highlight">think</span> &amp; <span styleName="Profile-Brainchilds-Highlight">talk</span> about
          </h3>

          <p styleName="Profile-Brainchilds">
            <span styleName="Profile-Brainchild" data-level="2">how technology impacts and disrupts society</span>,
            <span styleName="Profile-Brainchild" data-level="4">the future of transportation,</span>
            <span styleName="Profile-Brainchild" data-level="4">self-driving vehicles,</span>
            <span styleName="Profile-Brainchild" data-level="1">artificial intelligence,</span>
            <span styleName="Profile-Brainchild" data-level="2">machine learning,</span>
            <span styleName="Profile-Brainchild" data-level="1">chat bots,</span>
            <span styleName="Profile-Brainchild" data-level="2">augmented reality,</span>
            <span styleName="Profile-Brainchild" data-level="2">automatisation,</span>
            <span styleName="Profile-Brainchild" data-level="3">space,</span>
            <span styleName="Profile-Brainchild" data-level="3">a world without cash,</span>
            <span styleName="Profile-Brainchild" data-level="4">the future of living,</span>
            <span styleName="Profile-Brainchild" data-level="2">the importance of design and story-telling,</span>
            <span styleName="Profile-Brainchild" data-level="1">start-ups,</span>
            <span styleName="Profile-Brainchild" data-level="2">everything as a service,</span>
            <span styleName="Profile-Brainchild" data-level="1">shareconomy,</span>
            <span styleName="Profile-Brainchild" data-level="2">politics,</span>
            <span styleName="Profile-Brainchild" data-level="4">future and importance of the European Union,</span>
            <span styleName="Profile-Brainchild" data-level="3">education</span>
          </p>

          <Button big ghost>
            <a href="mailto:hello@webninja.work?subject=Hey there!">
              Get in touch
            </a>
          </Button>
        </article>
      </section>
    );
  }
}
