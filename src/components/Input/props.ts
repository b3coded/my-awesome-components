import {  ViewStyle,  StyleProp, TextInputProps } from 'react-native';


export type InputType = 'primary' | 'secondary' | 'light' | 'dark' | 'disabled'| 'default' | 'danger' | 'warn' | 'success' ;

export type InputStylesProp = {
  [x in InputType]: StyleProp<ViewStyle>;
}

export type InputMakeStyles = {
  type?: InputType;
}

export type InputProps = TextInputProps & InputMakeStyles;
