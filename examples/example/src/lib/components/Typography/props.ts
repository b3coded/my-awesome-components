import {TextProps, TextStyle, StyleProp} from 'react-native';

export type TextVariant =
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

export type TextStylesProp = {[x in TextVariant]: StyleProp<TextStyle>};

export type TypographyMakeStyles = {
  variant?: TextVariant;
  color?: TextColor;
};

export type TypographyProps = TextProps & TypographyMakeStyles;
