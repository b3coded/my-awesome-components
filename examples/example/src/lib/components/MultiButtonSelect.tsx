import React, { useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

type Props = {
  onChange: (value: any) => any;
  buttons: any;
  containerStyle: any;
  buttonStyle: any;
  textStyle: any;
  activeBackground: any;
  inactiveBackground: any;
  activeColor: any;
  inactiveColor: any;
  scroll: boolean;
};

const MultiButtonSelect: React.FC<Props> = ({
  onChange,
  buttons,
  containerStyle,
  buttonStyle,
  textStyle,
  activeBackground,
  inactiveBackground,
  activeColor,
  inactiveColor,
  scroll = true,
}) => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

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
        {buttons.map((item: any) => {
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
                    : inactiveBackground,
                },
              ]}
              activeOpacity={0.8}
              key={item.id}
              onPress={() => handleChange(item.id)}
            >
              <Text
                style={[
                  styles.text,
                  textStyle,
                  { color: selected ? activeColor : inactiveColor },
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
};

export default MultiButtonSelect;

const styles = StyleSheet.create({
  content: {
    minWidth: '100%',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 0,
    marginVertical: 5,
  },
  button: {
    margin: 5,
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    paddingHorizontal: 20,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
