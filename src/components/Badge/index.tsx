import React from 'react';
import { View  } from 'react-native';
// import DarkTheme from 'my-awesome-components/src/themes/Dark';
import { BadgeProps } from './props';
import makeStyles from './styles'
import Typography from 'my-awesome-components/src/components/Typography';

const Badge: React.FC<BadgeProps> = ({ type, content, style, mini}) => {
    

    const isZero = content == 0;
    const hasContent = typeof content !== 'undefined' && content.toString().length > 0 && !isZero;
    
    
    const isMini = typeof mini !== 'undefined' && mini;
    const showValues = !isMini && hasContent ;

    let styles;
    if(isMini){
        styles = makeStyles({type,mini: isMini});
    }else{
        styles = makeStyles({type,mini: showValues});
    }

    
  return <View style={[styles.root, style]} >
      {showValues && <Typography children={content} style={styles.badgeText} />}
  </View>;
};

export default Badge;
