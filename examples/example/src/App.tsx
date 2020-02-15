import React from 'react';
import {ScrollView, StyleSheet, Text, StatusBar, View} from 'react-native';
import {Button, Typography, Badge, Input, Spinner} from './lib';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Buttons</Text>

          <View style={styles.sectionContent}>
            <Button content="Default" />
            <Button variant="primary" content="Primary" />
            <Button variant="outline" content="Outline" />
            <Button variant="dark" content="Dark" />
            <Button variant="light" content="Light" />
            <Button variant="success" content="Success" />
            <Button variant="danger" content="Danger" />
            <Button variant="warn" content="Warn" />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Typography</Text>
          <Text style={styles.sectionSubtitle}>1. Sizes</Text>

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

          <Text style={styles.sectionSubtitle}>2. Colors</Text>

          <View style={styles.sectionContent}>
            <Typography color="primary" children="Primary" />
            <Typography color="secondary" children="Secondary" />
            <Typography color="disabled" children="Disabled" />
            <Typography color="dark" children="Dark" />
            <View style={styles.darkContainer}>
              <Typography color="light" children="Light" />
            </View>
            <Typography color="default" children="Default" />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Badges</Text>
          <Text style={styles.sectionSubtitle}>1. Standard</Text>

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

          <Text style={styles.sectionSubtitle}>2. Mini</Text>
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
          <Text style={styles.sectionTitle}>Inputs</Text>
          <View style={styles.sectionContent}>
            <Input placeholder="Default" />
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
          <Text style={styles.sectionTitle}>Spinners</Text>
          <Text style={styles.sectionSubtitle}>1. Colors</Text>
          <View style={styles.sectionContent}>
            <Spinner color="disabled" />
            <Spinner color="primary" />
            <Spinner color="dark" />
            <Spinner color="light" />
            <Spinner color="danger" />
            <Spinner color="warn" />
            <Spinner color="success" />
            <Spinner color="default" />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
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
  },
  sectionContent: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 30,
    borderColor: '#00000013',
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 10,
  },
  sectionSubtitle: {
    fontSize: 20,
    borderColor: '#00000013',
    borderBottomWidth: 1,
    paddingBottom: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 20,
  },
});

export default App;
