import DarkTheme from "my-awesome-components/src/themes/Dark";
import { BadgeStylesProp,BadgeMakeStyles } from "./props";
import { StyleSheet } from "react-native";


export const reservedBadgeColors = ['primary','secondary', 'warn', 'danger', 'success', 'light', 'dark', 'disabled', 'default'];

const badgeStyles: BadgeStylesProp = {
    primary:{
        backgroundColor: DarkTheme.primary,
    },
    disabled: {
        backgroundColor: DarkTheme.disabled,
    },
    dark:{
        backgroundColor: DarkTheme.dark,
    },
    light:{
        backgroundColor: DarkTheme.light,
    },
    secondary:{
        backgroundColor: DarkTheme.secondary,
    },
    default: {
        backgroundColor: DarkTheme.background,
    },
    success: {
        backgroundColor: DarkTheme.successDefault,
    },
    warn: {
        backgroundColor: DarkTheme.warnDefault,
    },
    danger: {
        backgroundColor: DarkTheme.dangerDefault,
    },
}

export default (props: BadgeMakeStyles) => {

    const {type, mini} = props;

    // mini = hasContent
    let display:"none" | "flex" | undefined = 'flex';

    if(!mini){
        display = 'none'
    }

    const baseBadgeStyles = badgeStyles[type || 'default']?.valueOf();


    const basePadding = 9;
    return StyleSheet.create({
        root: {
            //  Flex
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'flex-start',

            borderRadius: basePadding * 2,
            minHeight: 18,
            minWidth: 18,
            paddingHorizontal: basePadding,
            paddingBottom: basePadding / 2.5,
            paddingTop: basePadding / 2.5,

            marginBottom: 5,
            ...baseBadgeStyles,
            display
          },
          badgeContainer: {
            position: "absolute"
          },
          badgeText: {
            paddingHorizontal: 0
          }
    })
}