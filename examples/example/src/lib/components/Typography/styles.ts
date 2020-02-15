import { StyleSheet } from "react-native"
import { TextStylesProp,TypographyMakeStyles } from "./props";
import DarkTheme from "my-awesome-components/src/themes/Dark"


export const reservedTextColors = ['primary', 'warn', 'danger', 'success', 'light', 'dark'];

const textStyles: TextStylesProp = {
    h1:{
      fontSize: 52,
      fontWeight: '300',
      lineHeight: 64,
      letterSpacing: 0.2,
    },
    h2:{
      fontSize: 44,
      fontWeight: '500',
      lineHeight: 54,
      letterSpacing: 0,
    },
    h3:{
      fontSize: 32,
      fontWeight: '600',
      lineHeight: 40,
      letterSpacing: 0.1,
    },
    h4:{
        fontSize: 26,
        fontWeight: '500',
        lineHeight: 32,
        letterSpacing: 0.2,
    },
    h5:{
      fontSize: 20,
      fontWeight: '600',
      lineHeight: 26,
      letterSpacing: 0.2,
    },
    h6:{
        fontSize: 18,
        fontWeight: '500',
        lineHeight: 24,
        letterSpacing: 0.2,
    },
    subtitle1:{
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 24,
        letterSpacing: 0.1,
    },
    subtitle2:{
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 18,
        letterSpacing: 0.1,
    },
    body1:{
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 18,
        letterSpacing: 0.2,
    },
    body2:{
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 22,
        letterSpacing: 0.2,
    },
    small1:{
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 16,
        letterSpacing: 0.2,
    },
    small2:{
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 16,
        letterSpacing: 0.2,
    },
    small3:{
        fontSize: 11,
        fontWeight: '500',
        lineHeight: 14,
        letterSpacing: 0.2,
    },
    button:{
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 18,
        letterSpacing: 0.2,
    },
    default: {
        fontSize: 13,
        fontWeight: '700',
        lineHeight: 16,
        letterSpacing: 0.2,
    }
};

const makeStyles = (props: TypographyMakeStyles) => {
  const {type,color: customColor} = props;
  const baseTextStyles = textStyles[type || 'default']?.valueOf();

  let color: string = DarkTheme.textDefault;
  switch (customColor) {
    case 'light':
      color = DarkTheme.textLight;
      break;
    case 'dark':
      color = DarkTheme.textDark;
      break
    case 'primary':
      color = DarkTheme.primary;
      break;
    case 'secondary':
      color = DarkTheme.secondary;
      break;
    case 'disabled':
      color = DarkTheme.disabled;
      break;
    default:
      color = DarkTheme.textDefault;
      break;
  }

  return StyleSheet.create({
    text: {
      marginTop: 2,
      marginBottom: 5,
      textAlignVertical: 'center',
      ...baseTextStyles,
      color,
    },
  });
};
export default makeStyles;