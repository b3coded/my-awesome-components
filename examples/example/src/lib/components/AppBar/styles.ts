import {StyleSheet} from 'react-native';
import {useTheme} from '../../core/ThemeProvider';
import {lighten} from 'polished';
import {AppContainerMakeStyles} from '../AppContainer/props';

const makeStyles = (props: AppContainerMakeStyles) => {
  const {theme} = useTheme();

  return StyleSheet.create({
    root: {
      flexDirection: 'row',
      backgroundColor: lighten(0.1, theme.background.color),
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      elevation: 5,
      opacity: 1,
    },
  });
};

export default makeStyles;
