import {TouchableOpacityProps, StyleProp, ViewStyle} from 'react-native';

export type ButtonVariant =
  | 'primary'
  | 'outline'
  | 'default'
  | 'success'
  | 'warn'
  | 'danger';

export type ButtonStyleProp = {[x in ButtonVariant]: StyleProp<ViewStyle>};

export type ButtonMakeStyles = {
  variant?: ButtonVariant;
};

export interface ButtonProps extends TouchableOpacityProps {
  variant?: ButtonVariant;
  fullWidth?: boolean;
}
