import React from 'react';
import {TextInput, View} from 'react-native';
// import DarkTheme from 'my-awesome-components/src/themes/Dark';
import {InputProps} from './props';
import makeStyles from './styles';

const Input: React.FC<InputProps> = ({
  type,
  label,
  border,
  IconLeft,
  IconRight,
  style,
  ...props
}) => {
  const styles = makeStyles({type, border});

  return (
    <View style={styles.inputContainer}>
      {IconLeft && <IconLeft />}
      <TextInput style={[styles.root, style]} {...props} />
      {IconRight && <IconRight />}
    </View>
  );
};

export default Input;
