import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewPropTypes,
  ScrollView
} from 'react-native';

export default function MultiButtonSelect({
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
  const [selectedItems, setSelectedItems] = useState([]);

  async function handleChange(i = 0) {
    const found = selectedItems.filter(e => e === i);

    if (found.length > 0) {
      setSelectedItems([...selectedItems.filter(e => e !== i)]);
    } else {
      setSelectedItems([...selectedItems, i]);
    }
  }

  useEffect(() => {
    onChange(selectedItems);
  }, [selectedItems]);

  return (
    <View>
      <ScrollView
        horizontal
        scrollEnabled={scroll}
        style={[styles.container, containerStyle]}
        contentContainerStyle={[styles.content]}
        showsHorizontalScrollIndicator={false}
      >
        {buttons.map(item => {
          const selected =
            selectedItems.filter(e => e === item.id).length !== 0;

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
              onPress={() => handleChange(item.id)}
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

MultiButtonSelect.propTypes = {
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
  /** @returns {Array} A array of selected buttons */
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
