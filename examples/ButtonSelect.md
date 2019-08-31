```js
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { ButtonSelect } from 'my-awesome-components';

const buttons = [
  { id: 1, text: 'Calças' },
  { id: 2, text: 'Camisas' },
  { id: 3, text: 'Sapatos' },
  { id: 4, text: 'Chapéus' },
  { id: 5, text: 'Bolsas' },
  { id: 6, text: 'Pulseiras' }
];

export default function Example() {
  // By default 0 is the initial selected item
  const [buttonSelected, setButtonSelected] = useState(0);

  function handleChange(selected) {
    setButtonSelected(selected);
  }

  return (
    <View>
      <ButtonSelect
        activeBackground="#000"
        inactiveBackground="#FFF"
        activeColor="#FFF"
        inactiveColor="#000"
        buttons={buttons}
        onChange={selected => handleChange(selected)}
        buttonStyle={{
          borderRadius: 50
        }}
      />
      <Text>Selected : {buttons[buttonSelected].text}</Text>
    </View>
  );
}
```
