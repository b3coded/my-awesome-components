// Colors
type Color = {
  hex: string;
  rgb: string;
};
type Colors = {
  primary: Color;
  secondary: Color;
  disabled: Color;
  danger: Color;
  success: Color;
  warn: Color;
};

// Sizes

export type ThemeProps = {
  colors: Colors;
};
