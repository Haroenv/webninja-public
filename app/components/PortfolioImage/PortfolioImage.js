import React, { Component } from 'react';
import style from '#helper/style'; // eslint-disable-line import/no-unresolved
import styles from './PortfolioImage.css';

@style(styles)
export default class PortfolioImage extends Component {
  componentDidMount() {
    const $segmenter = $(this.refs.segmenter);

    const segmenter = new Segmenter(this.refs.segmenter, {
      pieces: this.props.positions.length,
      animation: {
        duration: 1500,
        easing: 'easeOutQuad',
        delay: 50,
        translateZ: {
          min: 10,
          max: 65,
        },
      },
      shadows: true,
      shadowsAnimation: {
        opacity: 1,
      },
      parallax: true,
      parallaxMovement: {
        min: 5,
        max: 15,
      },
      positions: this.props.positions,
      onReady() {
        $segmenter.fadeIn();

        setTimeout(() => {
          $segmenter.velocity({
            opacity: 1,
          });
        }, 300);

        new Waypoint({
          element: $segmenter.get(0),
          offset: '150px',
          handler() {
            segmenter.animate();
          },
        });
      },
    });
  }

  render(): Object {
    return (
      <div styleName="Image-Wrapper">
        <div ref="segmenter" styleName="Segmenter" style={{ backgroundImage: `url(${this.props.image})` }} />

        <img styleName="Image" src={this.props.image} alt={this.props.image} />
      </div>
    );
  }
}
