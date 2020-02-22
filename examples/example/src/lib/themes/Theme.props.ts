// Colors
type BaseColor = {
  hex: string;
  rgb: string;
};
type Colors = {
  primary: BaseColor;
  secondary: BaseColor;
  disabled: BaseColor;
  danger: BaseColor;
  success: BaseColor;
  warn: BaseColor;
};

export type ThemeProps = {
  colors: Colors;
};
