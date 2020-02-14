import { StyleSheet } from "react-native"
import DarkTheme from "my-awesome-components/src/themes/Dark"
import { ButtonMakeStyles,ButtonStyleProp } from "./props";


export const reservedButtonColors = ['primary', 'warn', 'danger', 'success', 'light', 'dark'];

const buttonStyles: ButtonStyleProp = {
  primary: {
    backgroundColor: DarkTheme.primary,
  },
  outline: {
    backgroundColor: DarkTheme.background,
  },
  success: {
    backgroundColor: DarkTheme.successDefault,
    borderColor: DarkTheme.successDark,
  },
  danger: {
    backgroundColor: DarkTheme.dangerDefault,
    borderColor: DarkTheme.dangerDark,
  },
  warn: {
    backgroundColor: DarkTheme.warnDefault,
    borderColor: DarkTheme.warnDark,
  },
  default: {
    backgroundColor: DarkTheme.background,
    borderColor: DarkTheme.disabled,
  },
  light: {
    backgroundColor: DarkTheme.light,
    borderColor: DarkTheme.light,
  },
  dark: {
    backgroundColor: DarkTheme.dark,
    borderColor: DarkTheme.dark,
  }
};

export default (props: ButtonMakeStyles) => {

    const {variant} = props;

    const baseButtonStyles = buttonStyles[variant || 'default']?.valueOf();
    return StyleSheet.create({
        root: {
            borderColor: DarkTheme.primary,
            borderWidth: 1,
            borderRadius: 8,
            alignSelf: 'flex-start',
            paddingVertical: 10,
            paddingHorizontal: 20,
            
            // Shadow
            shadowColor: DarkTheme.primary,
            shadowOffset: {
              width: 10,
              height: 2,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,
            elevation: 8,

            marginVertical: 5,
            ...baseButtonStyles,
          },
    })
}