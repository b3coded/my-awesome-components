import React from 'react';

import {View} from 'react-native';
import {Typography, Input} from '../lib';

const SectionInputs: React.FC<{styles: any}> = ({styles}) => {
  const Icon = () => <View style={styles.inputIcon} />;
  return (
    <View style={styles.section}>
      <Typography variant="h2" children="Inputs" />

      <Typography
        variant="h3"
        style={styles.sectionSubtitle}
        children="1. Borders"
      />
      <View style={styles.sectionContent}>
        <Input placeholder="Default" />

        <Input placeholder="Border bottom" border="bottom" />
        <Input placeholder="No border" border="none" />
      </View>

      <Typography
        variant="h3"
        style={styles.sectionSubtitle}
        children="2. Label"
      />
      <View style={styles.sectionContent}>
        <Input placeholder="With Label" label="Label" />
        <Input
          placeholder="Border bottom with Label"
          border="bottom"
          label="Label"
        />
        <Input placeholder="No border with Label" border="none" label="Label" />
      </View>

      <Typography
        variant="h3"
        style={styles.sectionSubtitle}
        children="3. Icon"
      />
      <View style={styles.sectionContent}>
        <Input placeholder="With right icon" IconRight={Icon} />
        <Input placeholder="With left icon" IconLeft={Icon} />
        <Input placeholder="With both icons" IconLeft={Icon} IconRight={Icon} />
      </View>
    </View>
  );
};

export default SectionInputs;
