import DarkTheme from 'my-awesome-components/src/themes/Dark';
import {
  InputTypeStylesProp,
  InputBorderStylesProp,
  InputMakeStyles,
} from './props';
import {StyleSheet} from 'react-native';

export const reservedInputColors = [
  'primary',
  'secondary',
  'warn',
  'danger',
  'success',
  'light',
  'dark',
  'disabled',
  'default',
];

const inputStyles: InputTypeStylesProp = {
  primary: {
    backgroundColor: DarkTheme.primary,
  },
  disabled: {
    backgroundColor: DarkTheme.disabled,
  },
  dark: {
    backgroundColor: DarkTheme.dark,
  },
  light: {
    backgroundColor: DarkTheme.light,
  },
  secondary: {
    backgroundColor: DarkTheme.secondary,
  },
  default: {
    backgroundColor: DarkTheme.background,
  },
  success: {
    backgroundColor: DarkTheme.successDefault,
  },
  warn: {
    backgroundColor: DarkTheme.warnDefault,
  },
  danger: {
    backgroundColor: DarkTheme.dangerDefault,
  },
};

const borderStyles: InputBorderStylesProp = {
  bottom: {
    borderColor: DarkTheme.divider,
    borderBottomWidth: 1,
  },
  none: {},
  default: {
    borderColor: DarkTheme.divider,
    borderWidth: 1,
  },
};

export default (props: InputMakeStyles) => {
  const {type, border} = props;
  const baseInputStyles = inputStyles[type || 'default']?.valueOf();
  const baseBorderStyles = borderStyles[border || 'default']?.valueOf();
  const basePadding = 8;

  return StyleSheet.create({
    root: {
      //  Flex
      flex: 1,

      ...baseInputStyles,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15,
      paddingHorizontal: basePadding,
      borderRadius: basePadding,
      ...baseBorderStyles,
    },
    inputIconLeft: {
      marginRight: 10,
    },
    inputIconRight: {
      marginLeft: 10,
    },
    inputText: {
      paddingHorizontal: 0,
    },
  });
};
