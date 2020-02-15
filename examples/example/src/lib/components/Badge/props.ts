import {  ViewStyle,  StyleProp } from 'react-native';


export type BadgeType = 'primary' | 'secondary' | 'light' | 'dark' | 'disabled'| 'default' | 'danger' | 'warn' | 'success' ;

export type BadgeStylesProp = {
  [x in BadgeType]: StyleProp<ViewStyle>;
}

export type BadgeMakeStyles = {
  type?: BadgeType;
  mini?: boolean;
}

export type BadgeProps = BadgeMakeStyles & {
    content?: string | number;
    style?: StyleProp<ViewStyle>;
    
};
