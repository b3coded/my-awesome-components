import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewPropTypes
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function ButtonSelect({
  onChange,
  buttons,
  buttonStyle,
  activeBackground,
  inactiveBackground,
  activeColor,
  inactiveColor
}) {
  const [buttonSelected, setButtonSelected] = useState(0);

  function handleChange(i = 0) {
    if (buttonSelected === i) return;
    setButtonSelected(i);
    onChange(i);
  }

  return (
    <ScrollView horizontal style={styles.container}>
      {buttons.map((item, i) => {
        const selected = i === buttonSelected;
        return (
          <TouchableOpacity
            style={{
              ...styles.button,
              ...buttonStyle,
              backgroundColor: selected ? activeBackground : inactiveBackground
            }}
            key={item.id}
            onPress={() => handleChange(i)}
          >
            <Text style={{ color: selected ? activeColor : inactiveColor }}>
              {item.text}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

ButtonSelect.propTypes = {
  activeColor: PropTypes.string.isRequired,
  inactiveColor: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  buttonStyle: PropTypes.objectOf(ViewPropTypes.style)
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', flexWrap: 'wrap', flexGrow: 0 },
  button: {
    margin: 5,
    borderWidth: 1,
    borderColor: '#000',
    padding: 5
  }
});
