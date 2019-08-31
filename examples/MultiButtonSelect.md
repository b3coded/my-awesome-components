```js
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { MultiButtonSelect } from 'my-awesome-components';

const multiButtons = [
  { id: 1, text: 'Tecnologia' },
  { id: 2, text: 'Música' },
  { id: 3, text: 'Artes' },
  { id: 4, text: 'Ciências' },
  { id: 5, text: 'Negócios' },
  { id: 6, text: 'Moda' }
];

export default function Example() {
  const [selectedItems, setSelectedItems] = useState([]);

  function handleMultiChange(selected) {
    setSelectedItems(selected);
  }

  return (
    <View>
      <MultiButtonSelect
        activeBackground="#000"
        inactiveBackground="#FFF"
        activeColor="#FFF"
        inactiveColor="#000"
        buttons={multiButtons}
        onChange={selected => handleMultiChange(selected)}
        buttonStyle={{
          borderRadius: 50
        }}
      />
      <Text>Itemns : {selectedItems}</Text>
    </View>
  );
}
```
