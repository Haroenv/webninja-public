import React, { Component } from 'react';
import Link from 'react-router/Link';
import style from '#helper/style'; // eslint-disable-line import/no-unresolved
import styles from './Features.css';

@style(styles)
export default class Features extends Component {
  componentDidMount() {
    if (this.props.activeFeature) {
      this.animate(this.props.activeFeature, 0);
    }
  }

  componentWillReceiveProps(nextProps: Object) {
    const activeFeature = nextProps.activeFeature;

    if (activeFeature && activeFeature !== this.props.activeFeature) {
      this.animate(activeFeature, 300);
    }
  }

  getStyle(item: string): Object {
    const activeFeature = this.props.activeFeature;
    const features = this.getFeatures(activeFeature);
    let itemStyles = {};

    if (activeFeature) {
      if (item === activeFeature) {
        itemStyles = {
          transform: 'scale3d(0.3, 0.3, 0.3)',
          opacity: 0,
        };
      }
      else if (item === features[0]) {
        itemStyles = {
          transform: 'scale3d(1, 1, 1) translateX(-100%)',
          opacity: 1,
        };
      }
      else if (item === features[1]) {
        itemStyles = {
          transform: 'scale3d(1, 1, 1) translateX(0%)',
          opacity: 1,
        };
      }
    }

    return itemStyles;
  }

  animate(activeFeature: string, duration: number) {
    const active = $(this.refs[activeFeature]);
    const features = this.getFeatures(activeFeature);
    const left = $(this.refs[features[0]]);
    const right = $(this.refs[features[1]]);

    active.velocity('stop').show().velocity({
      scaleX: 0.3,
      scaleY: 0.3,
      scaleZ: 0.3,
      opacity: 0,
    }, {
      duration,
      complete(item: Object) {
        $(item).hide();
      },
    });

    left.velocity('stop').show().velocity({
      scaleX: 1,
      scaleY: 1,
      scaleZ: 1,
      opacity: 1,
      translateX: '-100%',
    }, {
      duration,
    });

    right.velocity('stop').show().velocity({
      scaleX: 1,
      scaleY: 1,
      scaleZ: 1,
      opacity: 1,
      translateX: '0%',
    }, {
      duration,
    });
  }

  renderFeature(feature: string) {
    const visibleFeatures = this.getFeatures(this.props.activeFeature);

    if (feature === 'digital-strategy') {
      return (
        <li
          ref="digital-strategy"
          styleName="Feature-Strategy"
          key="strategy"
          style={this.getStyle('digital-strategy')}
        >
          <Link to="/what-i-do/digital-strategy">
            <div styleName="Icon">
              <svg width="149" height="149" viewBox="0 0 149 149" xmlns="http://www.w3.org/2000/svg">
                <path d="M138.69 24.905V8.238l5.715 4.286 2.857-3.81L136.31.5l-10.953 8.215 2.857 3.809 5.714-4.286v16.667c0 6.564-5.34 11.905-11.904 11.905H112.5c-7.534 0-13.907 4.762-15.964 11.905h-3.41l-.088 4.762h2.795v7.422c-1.169-.167-2.355-.279-3.571-.279-5.538 0-10.863 1.85-15.234 5.255-3.126-3.326-7.505-5.255-12.147-5.255-1.631 0-3.232.26-4.762.719V46.334c0-7.878-6.407-14.285-14.286-14.285h-2.381v-4.763H38.69v4.763h-7.142c-7.879 0-14.286 6.407-14.286 14.285v4.762c0 2.626-2.136 4.762-4.762 4.762H7.738l4.286-5.715-3.81-2.857L0 58.238 8.214 69.19l3.81-2.857-4.286-5.714H12.5c5.252 0 9.524-4.271 9.524-9.524v-4.762c0-5.252 4.272-9.524 9.524-9.524h14.285c5.253 0 9.524 4.272 9.524 9.524v17.31c-1.035.724-2 1.554-2.857 2.506-1.792-.511-3.63-.769-5.476-.769-10.214 0-18.692 7.553-20.03 17.498C18.498 85.39 12.5 93.284 12.5 102.285c0 4.215 1.326 8.332 3.76 11.746-.917 2.34-1.379 4.79-1.379 7.302 0 11.16 9.078 20.238 20.238 20.238.903 0 1.786-.081 2.657-.195.164-.022.328-.05.493-.076.881-.138 1.748-.322 2.59-.572 3.274 2.115 7.024 3.225 10.927 3.225 4.364 0 8.521-1.374 11.971-3.92 3.753 5.42 9.878 8.682 16.6 8.682 6.243 0 11.993-2.815 15.816-7.636 3.132 1.888 6.672 2.874 10.375 2.874 11.159 0 20.238-9.079 20.238-20.238 0-2.41-.426-4.762-1.267-7.015 3.85-3.794 6.029-8.955 6.029-14.414 0-1.214-.12-2.407-.329-3.571h.329v-4.762h-1.82c-2.385-5.244-6.942-9.365-12.637-11.06-1.048-9.76-7.617-17.719-16.495-20.838v-8.579c0-6.564 5.34-11.904 11.904-11.904h9.524c9.188 0 16.666-7.479 16.666-16.667zm-26.23 59.969l.066 1.879 1.843.368c4.283.86 7.833 3.491 10.033 7.012v4.582h1.908c.28 1.156.476 2.342.476 3.571 0 3.781-1.384 7.357-3.832 10.157-3.423-4.715-8.844-7.598-15.062-8.01l-.312 4.456c7.91.521 14.129 6.225 14.415 15.364-.286 8.283-7.095 14.938-15.447 14.938-3.467 0-6.755-1.136-9.507-3.283l-.95-.743c-2.934-2.672-4.734-6.376-5.003-10.42l-4.752.317c.335 5.04 2.516 9.672 6.052 13.122-2.924 3.645-7.293 5.769-12.031 5.769-5.912 0-11.224-3.305-13.857-8.627l-1.466-2.959-2.346 2.331c-2.919 2.895-6.79 4.493-10.902 4.493-1.883 0-3.707-.376-5.438-1.033 5.428-3.634 9.01-9.817 9.01-16.825 0-.507-.067-1-.103-1.5 3.788-.656 7.328-2.371 10.202-5.007l-3.219-3.512c-2.219 2.034-4.952 3.348-7.88 3.838-1.593-4.971-5.041-9.221-9.822-11.74l-2.219 4.215c5.107 2.693 8.278 7.943 8.278 13.706 0 6.681-4.264 12.37-10.207 14.534-.837.302-1.687.531-2.543.688-.056.01-.114.017-.171.026-.85.145-1.703.229-2.555.229-8.534 0-15.476-6.943-15.476-15.477 0-2.29.507-4.516 1.507-6.624l.653-1.371-.972-1.171c-2.302-2.772-3.569-6.279-3.569-9.882 0-7.347 5.221-13.728 12.415-15.171l1.825-.365.086-1.857c.243-5.204 3.019-9.695 7.102-12.311v4.704h4.762v-6.712c1.148-.271 2.341-.43 3.572-.43 1.84 0 3.676.34 5.447 1.009l1.703.643 1.066-1.472c.036-.05.079-.093.117-.143v11.867h4.762V66.409c1.488-.657 3.102-1.029 4.762-1.029 3.295 0 6.393 1.375 8.621 3.727-3.99 4.54-6.835 10.418-6.835 16.512 0 13.785 12.5 25 24.405 25v-4.762c-9.524 0-19.643-9.079-19.643-20.238 0-4.97 2.143-9.765 5.419-13.453l1.364-1.16c3.8-3.628 8.812-5.626 13.976-5.626 1.222 0 2.486.122 3.646.329v9.195c0 6.564-5.341 11.905-11.906 11.905h-2.38v4.762h2.38c9.188 0 16.667-7.479 16.667-16.666V67.18c6.789 3.06 11.574 9.741 11.864 17.694zm-2.341 9.079h7.143v4.762h-7.143v-4.762zm11.905-45.238h7.143v4.761h-7.143v-4.761zm-36.936 2.497l2.4-4.112c-1.719-1.005-3.176-2.433-4.214-4.135l-4.065 2.478c1.448 2.373 3.479 4.369 5.879 5.769zM76.785 36.81c0 .247.006.494.017.743l4.757-.529-.012-7.357h-4.762v7.143zm0-21.429h4.763v7.143h-4.762v-7.143zm60.46 77.11l2.293 4.171c2.433-1.338 4.517-3.281 6.026-5.617l-4.005-2.58c-1.078 1.67-2.571 3.063-4.314 4.026zm6.207-10.444c0 .282-.009.56-.03.841l4.752.331c.026-.388.04-.779.04-1.172v-7.142h-4.762v7.142zm-35.714-33.332h7.143v4.761h-7.143v-4.761zm39.9 12.332l-4.595 1.241c.272 1.007.41 2.047.41 3.093v2.381h4.761v-2.381c0-1.464-.192-2.924-.576-4.334zm-4.057-7.176c-1.929-2.016-4.343-3.528-6.985-4.374l-1.45 4.534c1.885.605 3.614 1.688 4.994 3.131l3.441-3.29zM76.786 8.238h4.762l5.714 4.286 2.857-3.81L79.166.5 68.214 8.715l2.858 3.809 5.714-4.286zM38.69 13h4.762v7.143H38.69V13zm0 42.857h4.762V63H38.69v-7.143zm0-14.285h4.762v7.143H38.69v-7.143zm0 42.856h4.762v7.144H38.69v-7.144zm2.381-77.975l8.096 6.071 2.857-3.81L41.071.5 30.12 8.715l2.857 3.809 8.095-6.071z" />
            </svg>
            </div>

            <span styleName="Description">digital strategy</span>
          </Link>
        </li>
      );
    }

    if (feature === 'design') {
      return (<li ref="design" styleName="Feature-Design" key="design" style={this.getStyle('design')}>
        <Link to="/what-i-do/design">
          <div styleName="Icon">
          <svg width="148" height="149" viewBox="0 0 148 149" xmlns="http://www.w3.org/2000/svg">
            <path d="M109.543 57.681v-5.2c2.765-.986 4.762-3.605 4.762-6.705 0-2.907-1.75-5.405-4.247-6.517l4.476-17.907L97.639 1.641 80.743 21.35l4.476 17.907c-2.497 1.114-4.247 3.612-4.247 6.519 0 3.1 1.997 5.719 4.762 6.705v5.2h-23.81V21.333L50.02.5 38.114 21.333v36.348H.02v33.334h38.095v45.237c0 6.565 5.341 11.906 11.905 11.906 6.565 0 11.905-5.341 11.905-11.905V91.014h23.81v45.237c0 6.565 5.34 11.906 11.905 11.906 6.565 0 11.905-5.341 11.905-11.905v-7.143h2.381c3.938 0 7.143-3.206 7.143-7.144v-13.935l-1.183-.688c-.75-.435-1.198-1.2-1.198-2.043 0-.843.448-1.607 1.198-2.043l1.183-.688v-6.793h-4.762v4.226c-1.495 1.34-2.381 3.269-2.381 5.298 0 2.028.885 3.957 2.381 5.297v11.369c0 1.312-1.066 2.381-2.381 2.381h-2.381V91.014h38.095V57.68h-38.096zM38.115 86.253H4.781v-23.81h4.762v7.143h4.762v-7.143h4.762v9.524h4.762v-9.524h4.762v7.143h4.762v-7.143h4.762v23.81zM50.02 10.1l5.422 9.485H44.598l5.421-9.485zm-7.143 14.247h4.762v92.858h-4.762V24.347zm14.286 111.905c0 3.938-3.204 7.143-7.143 7.143-3.937 0-7.143-3.205-7.143-7.143v-4.762h14.286v4.762zm0-9.524H42.876v-4.761h14.286v4.761zm0-9.523H52.4V24.347h4.762v92.858zM97.64 21.966c1.314 0 2.38 1.07 2.38 2.381 0 1.313-1.066 2.381-2.38 2.381-1.315 0-2.382-1.068-2.382-2.38 0-1.312 1.067-2.382 2.382-2.382zm-2.382-10.23v5.907c-2.764.985-4.762 3.605-4.762 6.704 0 3.939 3.205 7.143 7.144 7.143 3.938 0 7.142-3.204 7.142-7.143 0-3.1-1.997-5.718-4.762-6.704v-5.907l9.296 10.845-4.012 16.052H89.974l-4.015-16.05 9.298-10.847zm-9.522 74.516h-23.81V62.444h4.762v7.143h4.762v-7.143h4.762v9.524h4.762v-9.524h4.762v23.81zm11.904 57.144c-3.939 0-7.144-3.206-7.144-7.143v-7.143h14.286v7.142c0 3.938-3.205 7.144-7.142 7.144zm7.142-83.334v54.762H90.495V52.919h14.286v7.143zm0 59.524v4.762H90.495v-4.762h14.286zm2.382-71.429H88.115c-1.314 0-2.381-1.069-2.381-2.381 0-1.312 1.067-2.381 2.381-2.381h19.048c1.314 0 2.38 1.069 2.38 2.381 0 1.312-1.067 2.381-2.38 2.381zm35.714 38.096h-33.334V62.442h4.762v9.524h4.762v-9.524h4.762v7.143h4.762v-7.143h4.762v9.524h4.762v-9.524h4.762v23.81z"/>
          </svg>
          </div>

          <span styleName="Description">design</span>
        </Link>
      </li>);
    }

    if (feature === 'coding') {
      return (<li ref="coding" styleName="Feature-Coding" key="coding" style={this.getStyle('coding')}>
        <Link to="/what-i-do/coding">
          <div styleName="Icon">
            <svg width="148" height="149" viewBox="0 0 148 149" xmlns="http://www.w3.org/2000/svg">
            <path d="M116.668 108.043v-4.761h23.808c3.938 0 7.143-3.206 7.143-7.143V58.043c0-3.938-3.205-7.143-7.143-7.143H73.809c-3.938 0-7.142 3.205-7.142 7.143V96.14c0 3.937 3.204 7.143 7.142 7.143h23.81v4.761H57.143v-2.38c0-3.938-3.343-7.143-7.281-7.143h-8.055L17.343 58.696c1.069-1.541 1.705-3.403 1.705-5.415 0-.585-.072-1.152-.174-1.71l9.967-18.27c.919 4.525 3.438 8.569 7.259 11.425l1.555 1.163 5.879-5.227c1.288.467 2.606.715 3.947.715 6.564 0 11.905-5.34 11.905-11.905 0-.864-.136-1.734-.338-2.598l5.89-5.235-.971-1.683c-3.403-5.879-9.719-9.531-16.486-9.531-.447 0-.888.035-1.328.066l-8.05-8.05L20.41 17.186l3.278 4.371L8.043 43.91C3.495 44.627 0 48.539 0 53.282c0 3.571 1.997 6.652 4.914 8.28L24.605 98.52h-8.076c-3.938 0-7.005 3.205-7.005 7.142v2.381H0v14.286h7.143v26.19h4.762v-26.19h4.762v26.19h4.762v-26.19h104.762v26.19h4.762v-26.19h4.762v26.19h4.762v-26.19h7.143v-14.285h-30.952zm-45.24-50c0-1.311 1.07-2.38 2.381-2.38h66.667c1.312 0 2.381 1.069 2.381 2.38v30.953H71.428V58.043zM97.62 98.52h-23.81c-1.312 0-2.38-1.07-2.38-2.381v-2.382h71.428v2.382c0 1.311-1.069 2.38-2.381 2.38H97.619zm14.286 4.762v4.761h-9.524v-4.761h9.524zM48.121 36.586l6.35-5.645c-.635 3.034-3.202 5.364-6.35 5.645zm-.637-21.4c4.428 0 8.602 2.09 11.29 5.56L37.493 39.661c-2.75-2.676-4.295-6.3-4.295-10.19 0-7.879 6.407-14.285 14.286-14.285zm-9.675-6.302l2.831 2.831c-4.79 1.852-8.656 5.571-10.675 10.279l-3.032-4.046L37.81 8.884zm-11.117 16.68l.546.727L16.21 46.513c-.815-.806-1.774-1.453-2.834-1.924l13.316-19.025zM4.762 53.282c0-2.626 2.136-4.762 4.762-4.762 2.626 0 4.762 2.135 4.762 4.762 0 2.626-2.136 4.761-4.762 4.761-2.626 0-4.762-2.135-4.762-4.761zm6.136 9.385c.983-.143 1.911-.431 2.774-.853L36.219 98.52H30L10.898 62.667zm5.63 40.615h33.334c1.312 0 2.519 1.069 2.519 2.38v2.381H14.286v-2.38c0-1.312.93-2.381 2.243-2.381zm126.329 14.286H4.762v-4.763h138.095v4.763zm-73.81-76.191h76.191v4.762h-76.19v-4.762zM102.382.9H83.333v38.095h19.048V.9zm-4.762 33.334h-9.524V24.71h9.524v9.524zm0-14.286h-9.524V5.662h9.524v14.286zm-4.762 11.905c1.315 0 2.381-1.066 2.381-2.381 0-1.315-1.066-2.381-2.381-2.381-1.315 0-2.381 1.066-2.381 2.381 0 1.315 1.066 2.381 2.381 2.381zM123.809.9h-19.047v38.095h19.047V.9zm-14.285 4.762h9.524v14.286h-9.524V5.662zm9.524 28.572h-9.524V24.71h9.524v9.524zm-4.763-2.381c1.315 0 2.382-1.066 2.382-2.381 0-1.315-1.067-2.381-2.382-2.381-1.314 0-2.38 1.066-2.38 2.381 0 1.315 1.066 2.381 2.38 2.381zM145.238.9h-19.047v38.095h19.047V.9zm-14.286 4.762h9.524v14.286h-9.524V5.662zm9.524 28.572h-9.524V24.71h9.524v9.524zm-4.761-2.381c1.314 0 2.38-1.066 2.38-2.381 0-1.315-1.066-2.381-2.38-2.381-1.315 0-2.382 1.066-2.382 2.381 0 1.315 1.067 2.381 2.382 2.381z"/>
            </svg>
          </div>

          <span styleName="Description">coding</span>
        </Link>
      </li>);
    }

    return null;
  }

  getFeatures(activeFeature: ?string): Array {
    if (activeFeature) {
      switch (activeFeature) {
        case 'digital-strategy':
          return ['coding', 'design'];
        case 'design':
          return ['digital-strategy', 'coding'];
        case 'coding':
          return ['design', 'digital-strategy'];
        default:
          return ['digital-strategy', 'design', 'coding'];
      }
    }
    else {
      return ['digital-strategy', 'design', 'coding'];
    }
  }

  render(): Object {
    const features = this.getFeatures(this.props.activeFeature);

    return (<div styleName="Features">
      <ul styleName="Features-List" data-items={features.length} data-overview={!!this.props.overview}>
        {['digital-strategy', 'design', 'coding'].map((feature: string) => this.renderFeature(feature))}
      </ul>


      {!this.props.overview && <div styleName="Features-Navigation">
        <div styleName="Features-Navigation-Left">
          <Link to={`/what-i-do/${features[0]}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
              <path d="M189.8 349.7c3.1-3.1 3-8 0-11.3L123.4 264H408c4.4 0 8-3.6 8-8s-3.6-8-8-8H123.4l66.3-74.4c2.9-3.4 3.2-8.1.1-11.2-3.1-3.1-8.5-3.3-11.4-.1 0 0-79.2 87-80 88S96 253.1 96 256s1.6 4.9 2.4 5.7 80 88 80 88c1.5 1.5 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3z"/>
            </svg>
          </Link>
        </div>
        <div styleName="Features-Navigation-Right">
          <Link to={`/what-i-do/${features[1]}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
              <path d="M322.2 349.7c-3.1-3.1-3-8 0-11.3l66.4-74.4H104c-4.4 0-8-3.6-8-8s3.6-8 8-8h284.6l-66.3-74.4c-2.9-3.4-3.2-8.1-.1-11.2 3.1-3.1 8.5-3.3 11.4-.1 0 0 79.2 87 80 88s2.4 2.8 2.4 5.7-1.6 4.9-2.4 5.7-80 88-80 88c-1.5 1.5-3.6 2.3-5.7 2.3s-4.1-.8-5.7-2.3z"/>
            </svg>
          </Link>
        </div>
      </div>}
    </div>);
  }
}