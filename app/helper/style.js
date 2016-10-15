import style from 'react-css-modules';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

export default (styles: Object = {}) => (ComposedComponent: Object) =>
  withStyles(styles)(style(ComposedComponent, styles));
