import React from 'react';
import {View, ScrollView} from 'react-native';
import makeStyles from './styles';
import {AppContainerProps} from './props';

const AppContainer: React.FC<AppContainerProps> = ({
  children,
  style,
  AppBar,
  ...props
}) => {
  const styles = makeStyles({});

  return (
    <View style={styles.container}>
      {AppBar}
      <ScrollView style={[styles.root, style]} {...props}>
        {children}
      </ScrollView>
    </View>
  );
};

export default AppContainer;
