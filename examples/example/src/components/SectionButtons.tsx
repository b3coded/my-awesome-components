import React from 'react';

import {View} from 'react-native';
import {Button, Typography} from '../lib';

const SectionButtons: React.FC<{styles: any}> = ({styles}) => {
  return (
    <View>
      <View style={styles.section}>
        <Typography variant="h2" children="Buttons" />

        <View style={styles.sectionContent}>
          <Button children="Default" />
          <Button variant="primary" children="Primary" />
          <Button variant="outline" children="Outline" />
          <Button variant="success" children="Success" />
          <Button variant="danger" children="Danger" />
          <Button variant="warn" children="Warn" />
        </View>
      </View>
    </View>
  );
};

export default SectionButtons;
