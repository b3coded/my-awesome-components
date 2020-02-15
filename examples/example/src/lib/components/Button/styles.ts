import {StyleSheet} from 'react-native';
import {ButtonMakeStyles, ButtonStyleProp} from './props';
import {useTheme} from '../../core/ThemeProvider';
import {lighten} from 'polished';

export const reservedButtonColors = [
  'primary',
  'warn',
  'danger',
  'success',
  'light',
  'dark',
];

const buttonStyles: (theme: any) => ButtonStyleProp = theme => ({
  primary: {
    backgroundColor: theme.primary.color,
  },
  outline: {
    backgroundColor: lighten(0.5, theme.background.color),
  },
  success: {
    backgroundColor: theme.success.color,
    borderColor: theme.success.color,
  },
  danger: {
    backgroundColor: theme.danger.color,
    borderColor: theme.danger.color,
  },
  warn: {
    backgroundColor: theme.warn.color,
    borderColor: theme.warn.color,
  },
  default: {
    backgroundColor: lighten(0.5, theme.background.color),
    borderColor: theme.disabled.color,
    opacity: 1,
  },
});

export default (props: ButtonMakeStyles) => {
  const {variant} = props;
  const {theme} = useTheme();

  const baseButtonStyles = buttonStyles(theme)[variant || 'default']?.valueOf();
  return StyleSheet.create({
    root: {
      borderColor: theme.primary.color,
      borderWidth: 2,
      borderRadius: 8,
      alignSelf: 'flex-start',
      paddingVertical: 10,
      paddingHorizontal: 20,

      // Shadow
      shadowColor: theme.primary.color,
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
  });
};
