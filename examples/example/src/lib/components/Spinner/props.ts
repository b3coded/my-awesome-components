import {ViewStyle, StyleProp, ActivityIndicatorProps} from 'react-native';

export type SpinnerColor =
  | 'primary'
  | 'secondary'
  | 'light'
  | 'dark'
  | 'disabled'
  | 'default'
  | 'danger'
  | 'warn'
  | 'success';

export type SpinnerColorStylesProp = {
  [x in SpinnerColor]: StyleProp<ViewStyle>;
};

export type SpinnerMakeStyles = {
  color?: SpinnerColor;
};

export type SpinnerProps = ActivityIndicatorProps & SpinnerMakeStyles;
