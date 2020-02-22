import React from 'react';

import {View} from 'react-native';
import {Typography, Badge} from '../lib';

const SectionBadges: React.FC<{styles: any}> = ({styles}) => {
  return (
    <View style={styles.section}>
      <Typography variant="h2" children="Badges" />
      <Typography
        variant="h3"
        style={styles.sectionSubtitle}
        children="1. Standard"
      />

      <View style={styles.sectionContent}>
        <Badge content={1} type="disabled" />
        <Badge content={10} type="primary" />
        <Badge content={10} type="dark" />
        <Badge content={10} type="light" />
        <Badge content={'99+'} type="danger" />
        <Badge content={10} type="warn" />
        <Badge content={10} type="success" />
        <Badge content={10} type="default" />
      </View>

      <Typography
        variant="h3"
        style={styles.sectionSubtitle}
        children="2. Mini"
      />
      <View style={styles.sectionContent}>
        <Badge mini type="disabled" />
        <Badge mini type="primary" />
        <Badge mini type="dark" />
        <Badge mini type="light" />
        <Badge mini type="danger" />
        <Badge mini type="warn" />
        <Badge mini type="success" />
        <Badge mini type="default" />
      </View>
    </View>
  );
};

export default SectionBadges;
