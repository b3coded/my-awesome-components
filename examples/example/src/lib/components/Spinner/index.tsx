import React from 'react';
import {ActivityIndicator} from 'react-native';
// import DarkTheme from 'my-awesome-components/src/themes/Dark';
import {SpinnerProps} from './props';
import makeStyles from './styles';
import {useTheme} from '../../core/ThemeProvider';

const Spinner: React.FC<SpinnerProps> = ({color, ...props}) => {
  const styles = makeStyles({color});

  const {theme} = useTheme();

  return (
    <ActivityIndicator
      style={styles.root}
      {...props}
      color={theme[color || 'primary'].color}
    />
  );
};

export default Spinner;
