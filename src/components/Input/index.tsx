import React from 'react';
import { TextInput  } from 'react-native';
// import DarkTheme from 'my-awesome-components/src/themes/Dark';
import { InputProps } from './props';
import makeStyles from './styles'

const Input: React.FC<InputProps> = ({ type, ...props}) => {
    const styles= makeStyles({type});
    
  return <TextInput style={[styles.root]} {...props} />;
};

export default Input;
