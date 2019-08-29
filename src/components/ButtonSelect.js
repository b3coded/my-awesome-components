import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  Platform,
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet
} from 'react-native';

class ButtonSelect extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity>
          <Text>Exemplo</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Exemplo</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

ButtonSelect.propTypes = {
  activeColor: PropTypes.string,
  inactiveColor: PropTypes.string
};

export default ButtonSelect;
