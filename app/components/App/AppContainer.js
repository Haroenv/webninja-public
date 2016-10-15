import React, { Component, PropTypes } from 'react';
import App from './App';
import styles from './App.css';

type ChildContextType = {
  insertCss: ?Function
};

type PropsType = {
  context: ChildContextType
};

const emptyFunction = () => {};

class AppContainer extends Component {
  props: PropsType;

  static childContextTypes = {
    insertCss: PropTypes.func,
  };

  getChildContext(): ChildContextType {
    const context = this.props.context;
    const childContext = {
      insertCss: context.insertCss || emptyFunction,
    };

    return childContext;
  }

  componentWillMount() {
    const insertCss = this.props.context.insertCss || emptyFunction;
    this.removeCss = insertCss(styles);
  }

  componentWillUnmount() {
    this.removeCss();
  }

  render(): Object {
    return (
      <App />
    );
  }
}

export default AppContainer;
