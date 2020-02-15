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

const ButtonSelect: React.FC<Props> = ({
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
        {buttons.map((item: any, i: number) => {
          const selected = i === buttonSelected;
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
              onPress={() => handleChange(i)}
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

export default ButtonSelect;
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
