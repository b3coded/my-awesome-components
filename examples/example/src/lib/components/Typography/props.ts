import {TextProps, TextStyle, StyleProp} from 'react-native';

export type TextType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'small1'
  | 'small2'
  | 'small3'
  | 'button'
  | 'default';

export type TextColor = 'primary' | 'secondary' | 'disabled' | 'default';

export type TextStylesProp = {[x in TextType]: StyleProp<TextStyle>};

export type TypographyMakeStyles = {
  type?: TextType;
  color?: TextColor;
};

export type TypographyProps = TextProps & TypographyMakeStyles;
