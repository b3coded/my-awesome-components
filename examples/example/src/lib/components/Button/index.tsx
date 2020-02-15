import React from 'react';
import {
  TouchableOpacity
} from 'react-native';
import Typography from 'my-awesome-components/src/components/Typography';

import makeStyles from './styles';
import { ButtonProps } from './props';


const Button: React.FC<ButtonProps> = ({ content, variant, ...props }) => {
  const styles = makeStyles({variant});

  const isString = typeof content === 'string';

  let Content = content;
  
  if(isString){
    const isLight = variant && ['primary', 'warn', 'danger', 'success','dark'].includes(variant);
    Content = <Typography type="button" color={isLight ? "light": 'default'}>{content}</Typography>;
  }

  return (
    <TouchableOpacity
      style={[styles.root]}
      children={Content}
      activeOpacity={0.8}
      {...props}
    />
  );
};

export default Button;
