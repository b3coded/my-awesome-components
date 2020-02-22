import React from 'react';
import {Text} from 'react-native';
// import DarkTheme from 'my-awesome-components/src/themes/Dark';
import {TypographyProps} from './props';
import makeStyles from './styles';

const Typography: React.FC<TypographyProps> = ({
  variant,
  color,
  style,
  ...props
}) => {
  const styles = makeStyles({variant, color});

  return <Text style={[styles.text, style]} {...props} />;
};

export default Typography;
