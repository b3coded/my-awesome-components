import {StyleSheet} from 'react-native';
import {useTheme} from '../../core/ThemeProvider';

const makeStyles = (props: any) => {
  const {theme} = useTheme();

  return StyleSheet.create({
    root: {
      backgroundColor: theme.background.color,
    },
  });
};
export default makeStyles;
