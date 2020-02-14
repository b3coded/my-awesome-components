import React from 'react';
import {ScrollView, StyleSheet, Text, StatusBar, View} from 'react-native';
import {Button, Typography, Badge, Input} from 'my-awesome-components';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Buttons</Text>

          <Button content="Default" />
          <Button variant="primary" content="Primary" />
          <Button variant="outline" content="Outline" />
          <Button variant="dark" content="Dark" />
          <Button variant="light" content="Light" />
          <Button variant="success" content="Success" />
          <Button variant="danger" content="Danger" />
          <Button variant="warn" content="Warn" />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Typography</Text>

          <Text style={styles.sectionSubtitle}>1. Sizes</Text>
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

          <Text style={styles.sectionSubtitle}>2. Colors</Text>
          <Typography color="primary" children="Primary" />
          <Typography color="secondary" children="Secondary" />
          <Typography color="disabled" children="Disabled" />
          <Typography color="dark" children="Dark" />
          <View style={styles.darkContainer}>
            <Typography color="light" children="Light" />
          </View>
          <Typography color="default" children="Default" />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Badges</Text>
          <Text style={styles.sectionSubtitle}>1. Standard</Text>

          <Badge content={1} type="disabled" />
          <Badge content={10} type="primary" />
          <Badge content={10} type="dark" />
          <Badge content={10} type="light" />
          <Badge content={'99+'} type="danger" />
          <Badge content={10} type="warn" />
          <Badge content={10} type="success" />
          <Badge content={10} type="default" />

          <Text style={styles.sectionSubtitle}>2. Mini</Text>

          <Badge mini type="disabled" />
          <Badge mini type="primary" />
          <Badge mini type="dark" />
          <Badge mini type="light" />
          <Badge mini type="danger" />
          <Badge mini type="warn" />
          <Badge mini type="success" />
          <Badge mini type="default" />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Inputs</Text>

          <Input placeholder="Username" />
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
  section: {
    marginBottom: 30,
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
