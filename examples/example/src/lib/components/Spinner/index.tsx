import React from 'react';
import {ActivityIndicator} from 'react-native';
// import DarkTheme from 'my-awesome-components/src/themes/Dark';
import {SpinnerProps} from './props';
import makeStyles from './styles';

const Spinner: React.FC<SpinnerProps> = ({color, ...props}) => {
  const styles = makeStyles({color});

  return <ActivityIndicator style={styles.root} {...props} />;
};

export default Spinner;
