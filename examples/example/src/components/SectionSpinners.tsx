import React from 'react';

import {View} from 'react-native';
import {Button, Typography, Spinner} from '../lib';

const SectionSpinners: React.FC<{styles: any}> = ({styles}) => {
  return (
    <View style={styles.section}>
      <Typography variant="h2" children="Spinners" />

      <Typography
        variant="h3"
        style={styles.sectionSubtitle}
        children="1. Colors"
      />
      <View style={styles.sectionContent}>
        <Spinner color="disabled" />
        <Spinner color="primary" />
        <Spinner color="danger" />
        <Spinner color="warn" />
        <Spinner color="success" />
      </View>

      <Typography
        variant="h3"
        style={styles.sectionSubtitle}
        children="2. Sizes"
      />
      <View style={styles.sectionContent}>
        <Spinner color="primary" size="small" />
        <Spinner color="primary" size="large" />
        {/* Custom size */}
        <Spinner color="primary" size={60} />
      </View>
    </View>
  );
};

export default SectionSpinners;
