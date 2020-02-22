import React from 'react';

import {View} from 'react-native';
import {Button, Typography} from '../lib';

const SectionText: React.FC<{styles: any}> = ({styles}) => {
  return (
    <View style={styles.section}>
      <Typography variant="h2" children="Typography" />
      <Typography
        variant="h3"
        style={styles.sectionSubtitle}
        children="1. Sizes"
      />

      <View style={styles.sectionContent}>
        <Typography variant="h1" children="h1" />
        <Typography variant="h2" children="h2" />
        <Typography variant="h3" children="h3" />
        <Typography variant="h4" children="h4" />
        <Typography variant="h5" children="h5" />
        <Typography variant="h6" children="h6" />
        <Typography variant="subtitle1" children="subtitle1" />
        <Typography variant="subtitle2" children="subtitle2" />
        <Typography variant="body1" children="body1" />
        <Typography variant="body2" children="body2" />
        <Typography variant="small1" children="small1" />
        <Typography variant="small2" children="small2" />
        <Typography variant="small3" children="small3" />
        <Typography variant="button" children="button" />
        <Typography variant="default" children="default" />
      </View>

      <Typography
        variant="h3"
        style={styles.sectionSubtitle}
        children="2. Colors"
      />

      <View style={styles.sectionContent}>
        <Typography color="primary" children="Primary" />
        <Typography color="secondary" children="Secondary" />
        <Typography color="disabled" children="Disabled" />
        <Typography color="default" children="Default" />
      </View>
    </View>
  );
};

export default SectionText;
