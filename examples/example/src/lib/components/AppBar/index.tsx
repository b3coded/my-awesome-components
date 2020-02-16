import React from 'react';
import {AppBarProps} from './props';
import {View} from 'react-native';
import makeStyles from './styles';

const AppBar: React.FC<AppBarProps> = props => {
  const styles = makeStyles({});
  return <View style={[styles.root, props.style]}>{props.children}</View>;
};

export default AppBar;
