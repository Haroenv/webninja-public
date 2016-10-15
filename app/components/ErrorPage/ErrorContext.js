import { Component, PropTypes } from 'react';

/* eslint-disable react/no-unused-prop-types */
type ChildContextType = {
  insertCss: ?Function;
  setTitle: ?Function;
  setMeta: ?Function
};

type PropsType = {
  context: ChildContextType;
  children: Object;
  error: Object
};
/* eslint-enable react/no-unused-prop-types */

const emptyFunction = function emptyFunction() {};

class ErrorContext extends Component {
  props: PropsType;

  static childContextTypes = {
    insertCss: PropTypes.func,
    setTitle: PropTypes.func.isRequired,
    setMeta: PropTypes.func.isRequired,
  };

  getChildContext(): ChildContextType {
    const context = this.props.context;

    return {
      insertCss: context.insertCss || emptyFunction,
      setTitle: context.setTitle || emptyFunction,
      setMeta: context.setMeta || emptyFunction,
    };
  }

  render(): Object {
    return this.props.children;
  }

}

export default ErrorContext;
