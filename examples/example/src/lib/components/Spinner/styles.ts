import {StyleSheet} from 'react-native';
import DarkTheme from 'my-awesome-components/src/themes/Dark';
import {SpinnerColorStylesProp, SpinnerMakeStyles} from './props';

const spinnerStyles: SpinnerColorStylesProp = {
  danger: {},
  dark: {},
  default: {},
  disabled: {},
  light: {},
  primary: {},
  secondary: {},
  success: {},
  warn: {},
};

export default (props: SpinnerMakeStyles) => {
  const {color} = props;
  const baseSpinnerStyles = spinnerStyles[color || 'default']?.valueOf();
  const basePadding = 4;

  return StyleSheet.create({
    root: {
      // backgroundColor: DarkTheme.dangerDefault,
      padding: basePadding,
    },
  });
};
