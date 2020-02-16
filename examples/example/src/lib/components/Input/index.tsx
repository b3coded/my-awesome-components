import React from 'react';
import {TextInput, View} from 'react-native';
// import DarkTheme from 'my-awesome-components/src/themes/Dark';
import {InputProps} from './props';
import makeStyles from './styles';
import {useTheme} from '../../core/ThemeProvider';
import Typography from '../Typography';

const Input: React.FC<InputProps> = ({
  type,
  label,
  border,
  IconLeft,
  IconRight,
  style,
  ...props
}) => {
  const {theme} = useTheme();
  const styles = makeStyles({type, border});

  return (
    <View>
      {label && <Typography children={label} />}
      <View style={styles.inputContainer}>
        {IconLeft && <IconLeft />}
        <TextInput
          style={[styles.root, style]}
          {...props}
          placeholderTextColor={theme.disabled.color}
        />
        {IconRight && <IconRight />}
      </View>
    </View>
  );
};

export default Input;
