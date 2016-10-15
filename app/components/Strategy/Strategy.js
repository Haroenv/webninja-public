import React, { Component } from 'react';
import Link from 'react-router/Link';
import style from '#helper/style'; // eslint-disable-line import/no-unresolved
import styles from './Strategy.css';

import Button from '../Button/Button';
import Features from '../Features/Features';

@style(styles)
export default class Strategy extends Component {
  render(): Object {
    return (
      <div styleName="Article">
        <h1 styleName="Headline">Digital Strategy</h1>

        <div styleName="Columns">
          <div styleName="Icon-Column">
            <div styleName="Icon">
              <svg viewBox="0 0 149 149" xmlns="http://www.w3.org/2000/svg">
                <path d="M138.69 24.905V8.238l5.715 4.286 2.857-3.81L136.31.5l-10.953 8.215 2.857 3.809 5.714-4.286v16.667c0 6.564-5.34 11.905-11.904 11.905H112.5c-7.534 0-13.907 4.762-15.964 11.905h-3.41l-.088 4.762h2.795v7.422c-1.169-.167-2.355-.279-3.571-.279-5.538 0-10.863 1.85-15.234 5.255-3.126-3.326-7.505-5.255-12.147-5.255-1.631 0-3.232.26-4.762.719V46.334c0-7.878-6.407-14.285-14.286-14.285h-2.381v-4.763H38.69v4.763h-7.142c-7.879 0-14.286 6.407-14.286 14.285v4.762c0 2.626-2.136 4.762-4.762 4.762H7.738l4.286-5.715-3.81-2.857L0 58.238 8.214 69.19l3.81-2.857-4.286-5.714H12.5c5.252 0 9.524-4.271 9.524-9.524v-4.762c0-5.252 4.272-9.524 9.524-9.524h14.285c5.253 0 9.524 4.272 9.524 9.524v17.31c-1.035.724-2 1.554-2.857 2.506-1.792-.511-3.63-.769-5.476-.769-10.214 0-18.692 7.553-20.03 17.498C18.498 85.39 12.5 93.284 12.5 102.285c0 4.215 1.326 8.332 3.76 11.746-.917 2.34-1.379 4.79-1.379 7.302 0 11.16 9.078 20.238 20.238 20.238.903 0 1.786-.081 2.657-.195.164-.022.328-.05.493-.076.881-.138 1.748-.322 2.59-.572 3.274 2.115 7.024 3.225 10.927 3.225 4.364 0 8.521-1.374 11.971-3.92 3.753 5.42 9.878 8.682 16.6 8.682 6.243 0 11.993-2.815 15.816-7.636 3.132 1.888 6.672 2.874 10.375 2.874 11.159 0 20.238-9.079 20.238-20.238 0-2.41-.426-4.762-1.267-7.015 3.85-3.794 6.029-8.955 6.029-14.414 0-1.214-.12-2.407-.329-3.571h.329v-4.762h-1.82c-2.385-5.244-6.942-9.365-12.637-11.06-1.048-9.76-7.617-17.719-16.495-20.838v-8.579c0-6.564 5.34-11.904 11.904-11.904h9.524c9.188 0 16.666-7.479 16.666-16.667zm-26.23 59.969l.066 1.879 1.843.368c4.283.86 7.833 3.491 10.033 7.012v4.582h1.908c.28 1.156.476 2.342.476 3.571 0 3.781-1.384 7.357-3.832 10.157-3.423-4.715-8.844-7.598-15.062-8.01l-.312 4.456c7.91.521 14.129 6.225 14.415 15.364-.286 8.283-7.095 14.938-15.447 14.938-3.467 0-6.755-1.136-9.507-3.283l-.95-.743c-2.934-2.672-4.734-6.376-5.003-10.42l-4.752.317c.335 5.04 2.516 9.672 6.052 13.122-2.924 3.645-7.293 5.769-12.031 5.769-5.912 0-11.224-3.305-13.857-8.627l-1.466-2.959-2.346 2.331c-2.919 2.895-6.79 4.493-10.902 4.493-1.883 0-3.707-.376-5.438-1.033 5.428-3.634 9.01-9.817 9.01-16.825 0-.507-.067-1-.103-1.5 3.788-.656 7.328-2.371 10.202-5.007l-3.219-3.512c-2.219 2.034-4.952 3.348-7.88 3.838-1.593-4.971-5.041-9.221-9.822-11.74l-2.219 4.215c5.107 2.693 8.278 7.943 8.278 13.706 0 6.681-4.264 12.37-10.207 14.534-.837.302-1.687.531-2.543.688-.056.01-.114.017-.171.026-.85.145-1.703.229-2.555.229-8.534 0-15.476-6.943-15.476-15.477 0-2.29.507-4.516 1.507-6.624l.653-1.371-.972-1.171c-2.302-2.772-3.569-6.279-3.569-9.882 0-7.347 5.221-13.728 12.415-15.171l1.825-.365.086-1.857c.243-5.204 3.019-9.695 7.102-12.311v4.704h4.762v-6.712c1.148-.271 2.341-.43 3.572-.43 1.84 0 3.676.34 5.447 1.009l1.703.643 1.066-1.472c.036-.05.079-.093.117-.143v11.867h4.762V66.409c1.488-.657 3.102-1.029 4.762-1.029 3.295 0 6.393 1.375 8.621 3.727-3.99 4.54-6.835 10.418-6.835 16.512 0 13.785 12.5 25 24.405 25v-4.762c-9.524 0-19.643-9.079-19.643-20.238 0-4.97 2.143-9.765 5.419-13.453l1.364-1.16c3.8-3.628 8.812-5.626 13.976-5.626 1.222 0 2.486.122 3.646.329v9.195c0 6.564-5.341 11.905-11.906 11.905h-2.38v4.762h2.38c9.188 0 16.667-7.479 16.667-16.666V67.18c6.789 3.06 11.574 9.741 11.864 17.694zm-2.341 9.079h7.143v4.762h-7.143v-4.762zm11.905-45.238h7.143v4.761h-7.143v-4.761zm-36.936 2.497l2.4-4.112c-1.719-1.005-3.176-2.433-4.214-4.135l-4.065 2.478c1.448 2.373 3.479 4.369 5.879 5.769zM76.785 36.81c0 .247.006.494.017.743l4.757-.529-.012-7.357h-4.762v7.143zm0-21.429h4.763v7.143h-4.762v-7.143zm60.46 77.11l2.293 4.171c2.433-1.338 4.517-3.281 6.026-5.617l-4.005-2.58c-1.078 1.67-2.571 3.063-4.314 4.026zm6.207-10.444c0 .282-.009.56-.03.841l4.752.331c.026-.388.04-.779.04-1.172v-7.142h-4.762v7.142zm-35.714-33.332h7.143v4.761h-7.143v-4.761zm39.9 12.332l-4.595 1.241c.272 1.007.41 2.047.41 3.093v2.381h4.761v-2.381c0-1.464-.192-2.924-.576-4.334zm-4.057-7.176c-1.929-2.016-4.343-3.528-6.985-4.374l-1.45 4.534c1.885.605 3.614 1.688 4.994 3.131l3.441-3.29zM76.786 8.238h4.762l5.714 4.286 2.857-3.81L79.166.5 68.214 8.715l2.858 3.809 5.714-4.286zM38.69 13h4.762v7.143H38.69V13zm0 42.857h4.762V63H38.69v-7.143zm0-14.285h4.762v7.143H38.69v-7.143zm0 42.856h4.762v7.144H38.69v-7.144zm2.381-77.975l8.096 6.071 2.857-3.81L41.071.5 30.12 8.715l2.857 3.809 8.095-6.071z" />
              </svg>

              <h3>I ask the <strong>right questions</strong></h3>
            </div>
          </div>

          <div styleName="Content">
            <p>Living in a world full of competing products and services we must understand that it is crucial for you to build a strong <strong>emotional connection</strong> with your users and customers. Because visiting a new website is a lot like meeting a new human being. We quickly decide whether we like it or not. But why stop at being liked?</p>

            <p>You want to be the one <strong>standing out</strong> of the flooding mess of websites and apps that try to get our attention every day, <i>performing exceptionally well</i> in every single way and bring not only <i>real value</i> to your users but also make them really want to spend time with you. We want to achieve this by <strong>designing the entire experience</strong> in the <i>most beautiful and unique</i> way possible &mdash; leaving the user with nothing but WOW from the very first moment they meet the product. We want people to <strong>fall in love with it</strong>.</p>

            <p>This is the kind of emotional connection that accounts for <strong>user loyalty and trust</strong>. Pursuing it means to strive for the very best and don't stop until we reach it. And by saying &laquo;we&raquo; I really mean it: I prefer not working for a client but rather <strong>work with a partner on a common goal</strong>. Together we will be asking ourselves two very important questions over and over again:</p>

            <p styleName="Recap"><strong>What do we want to achieve? And why do we want to achieve it?</strong></p>
          </div>
        </div>
      </div>
    );
  }
}
