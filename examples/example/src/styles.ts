import {StyleSheet} from 'react-native';

export default (theme: any) =>
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
