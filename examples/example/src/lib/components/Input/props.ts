import {ViewStyle, StyleProp, TextInputProps} from 'react-native';

export type InputType =
  | 'primary'
  | 'secondary'
  | 'light'
  | 'dark'
  | 'disabled'
  | 'default'
  | 'danger'
  | 'warn'
  | 'success';

export type InputBorder = 'bottom' | 'default' | 'none';

export type InputTypeStylesProp = {[x in InputType]: StyleProp<ViewStyle>};
export type InputBorderStylesProp = {[x in InputBorder]: StyleProp<ViewStyle>};

export type InputMakeStyles = {
  type?: InputType;
  label?: React.FC | React.ReactNode | string;
  IconLeft?: React.FC;
  IconRight?: React.FC;
  border?: InputBorder;
};

export type InputProps = TextInputProps & InputMakeStyles;
