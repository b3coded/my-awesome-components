import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewPropTypes
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function MultiButtonSelect({
  onChange = () => {},
  buttons = [],
  containerStyle = {},
  buttonStyle = {},
  textStyle = {},
  activeBackground,
  inactiveBackground,
  activeColor,
  inactiveColor,
  scroll = true
}) {
  const [selectedItems, setSelectedItems] = useState([]);

  async function handleChange(i = 0) {
    const found = await selectedItems.filter(e => e === i);

    if (found.length > 0) {
      setSelectedItems([...(await selectedItems.filter(e => e !== i))]);
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
  activeColor: PropTypes.string.isRequired,
  inactiveColor: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  buttonStyle: PropTypes.objectOf(ViewPropTypes.style),
  containerStyle: PropTypes.objectOf(ViewPropTypes.style)
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
