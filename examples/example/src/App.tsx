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
            <Typography type="h1" children="Header" />
            <Button
              content="Toggle Theme"
              onPress={() => theme.toggleTheme()}
            />
          </AppBar>
        }>
        <View style={styles.section}>
          <Typography type="h2" children="Buttons" />

          <View style={styles.sectionContent}>
            <Button content="Default" />
            <Button variant="primary" content="Primary" />
            <Button variant="outline" content="Outline" />
            <Button variant="success" content="Success" />
            <Button variant="danger" content="Danger" />
            <Button variant="warn" content="Warn" />
          </View>
        </View>

        <View style={styles.section}>
          <Typography type="h2" children="Typography" />
          <Typography
            type="h3"
            style={styles.sectionSubtitle}
            children="1. Sizes"
          />

          <View style={styles.sectionContent}>
            <Typography type="h1" children="h1" />
            <Typography type="h2" children="h2" />
            <Typography type="h3" children="h3" />
            <Typography type="h4" children="h4" />
            <Typography type="h5" children="h5" />
            <Typography type="h6" children="h6" />
            <Typography type="subtitle1" children="subtitle1" />
            <Typography type="subtitle2" children="subtitle2" />
            <Typography type="body1" children="body1" />
            <Typography type="body2" children="body2" />
            <Typography type="small1" children="small1" />
            <Typography type="small2" children="small2" />
            <Typography type="small3" children="small3" />
            <Typography type="button" children="button" />
            <Typography type="default" children="default" />
          </View>

          <Typography
            type="h3"
            style={styles.sectionSubtitle}
            children="2. Colors"
          />

          <View style={styles.sectionContent}>
            <Typography color="primary" children="Primary" />
            <Typography color="secondary" children="Secondary" />
            <Typography color="disabled" children="Disabled" />
            <Typography color="default" children="Default" />
          </View>
        </View>

        <View style={styles.section}>
          <Typography type="h2" children="Badges" />
          <Typography
            type="h3"
            style={styles.sectionSubtitle}
            children="1. Standard"
          />

          <View style={styles.sectionContent}>
            <Badge content={1} type="disabled" />
            <Badge content={10} type="primary" />
            <Badge content={10} type="dark" />
            <Badge content={10} type="light" />
            <Badge content={'99+'} type="danger" />
            <Badge content={10} type="warn" />
            <Badge content={10} type="success" />
            <Badge content={10} type="default" />
          </View>

          <Typography
            type="h3"
            style={styles.sectionSubtitle}
            children="2. Mini"
          />
          <View style={styles.sectionContent}>
            <Badge mini type="disabled" />
            <Badge mini type="primary" />
            <Badge mini type="dark" />
            <Badge mini type="light" />
            <Badge mini type="danger" />
            <Badge mini type="warn" />
            <Badge mini type="success" />
            <Badge mini type="default" />
          </View>
        </View>

        <View style={styles.section}>
          <Typography type="h2" children="Inputs" />

          <View style={styles.sectionContent}>
            <Input placeholder="Default" />
            <Input placeholder="With Label" label="Label" />
            <Input placeholder="Border bottom" border="bottom" />
            <Input placeholder="No border" border="none" />
            <Input
              placeholder="With right icon"
              IconRight={() => <View style={styles.inputIcon} />}
            />
            <Input
              placeholder="With left icon"
              IconLeft={() => <View style={styles.inputIcon} />}
            />
            <Input
              placeholder="With both icons"
              IconLeft={() => <View style={styles.inputIcon} />}
              IconRight={() => <View style={styles.inputIcon} />}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Typography type="h2" children="Spinners" />

          <Typography
            type="h3"
            style={styles.sectionSubtitle}
            children="1. Colors"
          />
          <View style={styles.sectionContent}>
            <Spinner color="disabled" />
            <Spinner color="primary" />
            <Spinner color="danger" />
            <Spinner color="warn" />
            <Spinner color="success" />
          </View>

          <Typography
            type="h3"
            style={styles.sectionSubtitle}
            children="2. Sizes"
          />
          <View style={styles.sectionContent}>
            <Spinner color="primary" size="small" />
            <Spinner color="primary" size="large" />
            {/* Custom size */}
            <Spinner color="primary" size={60} />
          </View>
        </View>
      </AppContainer>
    </View>
  );
};

const makeStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    scroll: {
      padding: 10,
      paddingBottom: 20,
    },
    header: {
      backgroundColor: '#FFF',
      zIndex: 101,
      position: 'absolute',
      top: 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      padding: 10,
      elevation: 5,
      alignItems: 'center',
    },
    darkContainer: {
      backgroundColor: '#090909',
    },
    inputIcon: {
      backgroundColor: 'red',
      width: 30,
      height: 30,
      borderRadius: 30,
    },
    section: {
      marginBottom: 30,
      zIndex: 100,
    },
    sectionContent: {
      paddingHorizontal: 20,
    },
    headerTitle: {
      fontSize: 30,
    },
    sectionTitle: {
      fontSize: 30,
      borderColor: theme.disabled.color,
      borderBottomWidth: 1,
      paddingBottom: 10,
      marginBottom: 10,
    },
    sectionSubtitle: {
      fontSize: 20,
      borderColor: theme.disabled.color,
      borderBottomWidth: 1,
      paddingBottom: 10,
      paddingHorizontal: 10,
      marginBottom: 10,
      marginTop: 20,
    },
  });

export default App;
