import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  ViewPropTypes
} from 'react-native';

export default function ButtonSelect({
  onChange,
  buttons,
  containerStyle,
  buttonStyle,
  textStyle,
  activeBackground,
  inactiveBackground,
  activeColor,
  inactiveColor,
  scroll = true
}) {
  const [buttonSelected, setButtonSelected] = useState(0);

  function handleChange(i = 0) {
    if (buttonSelected === i) return;
    setButtonSelected(i);
  }

  useEffect(() => {
    onChange(buttonSelected);
  }, [buttonSelected]);

  return (
    <View>
      <ScrollView
        horizontal
        scrollEnabled={scroll}
        style={[styles.container, containerStyle]}
        contentContainerStyle={[styles.content]}
        showsHorizontalScrollIndicator={false}
      >
        {buttons.map((item, i) => {
          const selected = i === buttonSelected;
          return (
            <TouchableOpacity
              style={[
                styles.button,
                buttonStyle,
                {
                  backgroundColor: selected
                    ? activeBackground
                    : inactiveBackground
                }
              ]}
              activeOpacity={0.8}
              key={item.id}
              onPress={() => handleChange(i)}
            >
              <Text
                style={[
                  styles.text,
                  textStyle,
                  { color: selected ? activeColor : inactiveColor }
                ]}
              >
                {item.text}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

ButtonSelect.propTypes = {
  /** @type {String} Text Color when active */
  activeColor: PropTypes.string.isRequired,

  /** @type {String} Text Color when inactive */
  inactiveColor: PropTypes.string.isRequired,

  /** @type {String} Background Color when active */
  activeBackground: PropTypes.string.isRequired,

  /** @type {String} Background Color when inactive */
  inactiveBackground: PropTypes.string.isRequired,

  /** @type {Array} Array of Buttons */
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      /** @type {Any} Id of a button */
      id: PropTypes.any.isRequired,

      /** @type {String} Button Text */
      text: PropTypes.string.isRequired
    })
  ).isRequired,

  /** @type {function} Function triggered when button is pressed */
  /** @returns {Number} A id of selected button */
  onChange: PropTypes.func.isRequired,

  /** @type {Object} Custom Styles for each button */
  buttonStyle: PropTypes.objectOf(ViewPropTypes.style),

  /** @type {Object} Custom Styles for container */
  containerStyle: PropTypes.objectOf(ViewPropTypes.style),

  /** @type {Object} Custom Styles for button text */
  textStyle: PropTypes.objectOf(ViewPropTypes.style)
};

const styles = StyleSheet.create({
  content: {
    minWidth: '100%'
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 0,
    marginVertical: 5
  },
  button: {
    margin: 5,
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    paddingHorizontal: 20
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18
  }
});
