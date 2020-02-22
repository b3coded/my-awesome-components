import React from 'react';
import {TouchableOpacity} from 'react-native';
import Typography from 'my-awesome-components/src/components/Typography';

import makeStyles from './styles';
import {ButtonProps} from './props';
import {useTheme} from '../../core/ThemeProvider';

const Button: React.FC<ButtonProps> = ({children, variant, ...props}) => {
  const styles = makeStyles({variant});

  const theme = useTheme().currentTheme;
  const isString = typeof children === 'string';

  let Content = children;

  if (isString) {
    const isLight =
      (variant &&
        ['primary', 'warn', 'danger', 'success'].find(e => e === variant)) ||
      theme === 'Dark';
    Content = (
      <Typography type="button" color={isLight ? 'light' : 'default'}>
        {children}
      </Typography>
    );
  }

  return (
    <TouchableOpacity
      style={[styles.root]}
      children={Content}
      activeOpacity={0.6}
      {...props}
    />
  );
};

export default Button;
