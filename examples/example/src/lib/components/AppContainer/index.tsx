import React from 'react';
import {View, ScrollView} from 'react-native';
import makeStyles from './styles';
import {AppContainerProps} from './props';

const AppContainer: React.FC<AppContainerProps> = ({
  children,
  style,
  ...props
}) => {
  const styles = makeStyles({});

  return (
    <ScrollView style={[styles.root, style]} {...props}>
      {children}
    </ScrollView>
  );
};

export default AppContainer;
