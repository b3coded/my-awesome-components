import React from 'react';
import {ScrollViewProps} from 'react-native';

export type AppContainerMakeStyles = {
  AppBar?: React.ReactNode | React.FC;
};
export type AppContainerProps = ScrollViewProps & AppContainerMakeStyles;
