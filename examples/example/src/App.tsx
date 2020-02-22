import React from 'react';
import {StyleSheet, Text, StatusBar, View} from 'react-native';
import {
  Button,
  Typography,
  Badge,
  Input,
  Spinner,
  AppContainer,
  AppBar,
} from './lib';
import {useTheme} from './lib/core/ThemeProvider';
import makeStyles from './styles';
import SectionButtons from './components/SectionButtons';
import SectionText from './components/SectionText';
import SectionSpinners from './components/SectionSpinners';
import SectionBadges from './components/SectionBadges';
import SectionInputs from './components/SectionInputs';

const App = () => {
  const theme = useTheme();
  const styles = makeStyles(theme.theme);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <AppContainer
        style={styles.scroll}
        AppBar={
          <AppBar>
            <Typography variant="h1" children="Header" />
            <Button
              children="Toggle Theme"
              onPress={() => theme.toggleTheme()}
            />
          </AppBar>
        }>
        <SectionButtons styles={styles} />
        <SectionText styles={styles} />
        <SectionInputs styles={styles} />
        <SectionBadges styles={styles} />
        <SectionSpinners styles={styles} />
      </AppContainer>
    </View>
  );
};

export default App;
