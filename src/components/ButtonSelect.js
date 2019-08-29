import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  Platform,
  View,
  TouchableNativeFeedback,
  StyleSheet
} from 'react-native';

class ButtonSelect extends Component {
  render() {
    return <View />;
  }
}

ButtonSelect.propTypes = {
  activeColor: PropTypes.string,
  inactiveColor: PropTypes.string
};

export default ButtonSelect;
