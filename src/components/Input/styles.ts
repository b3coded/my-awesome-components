import DarkTheme from "my-awesome-components/src/themes/Dark";
import { InputStylesProp,InputMakeStyles } from "./props";
import { StyleSheet } from "react-native";


export const reservedInputColors = ['primary','secondary', 'warn', 'danger', 'success', 'light', 'dark', 'disabled', 'default'];

const inputStyles: InputStylesProp = {
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

export default (props: InputMakeStyles) => {

    const {type} = props;


    const baseInputStyles = inputStyles[type || 'default']?.valueOf();


    const basePadding = 8;
    return StyleSheet.create({
        root: {
            //  Flex
            flexGrow: 1,

            borderRadius: basePadding,
            minHeight: 18,
            minWidth: 18,
            paddingHorizontal: basePadding,
            paddingVertical: basePadding,
            borderColor: DarkTheme.divider,
            borderBottomWidth: 1,

            marginBottom: 5,
            ...baseInputStyles,
          },
          InputContainer: {
            position: "absolute"
          },
          InputText: {
            paddingHorizontal: 0
          }
    })
}