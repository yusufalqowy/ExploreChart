import React, { useState, useRef, FC } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Animated,
  Easing,
  ViewStyle,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface AccordionViewProps{
    style?:ViewStyle;
    title:string;
    children:any;
    onVisibleChange?:(isVisible:boolean)=>void;
}

const AccordionView : FC<AccordionViewProps> = ({ style, title, children, onVisibleChange }) => {
  const [open, setOpen] = useState(false);
  const animatedController = useRef(new Animated.Value(0)).current;
  const [bodySectionHeight, setBodySectionHeight] = useState(1000);

  const bodyHeight = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: [0, bodySectionHeight],
  });

  const arrowAngle = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: ['0rad', `${Math.PI}rad`],
  });

  const toggleListItem = () => {
    if (open) {
      Animated.timing(animatedController, {
          duration: 300,
          toValue: 0,
          easing: Easing.bezier(0.4, 0.0, 0.2, 1),
          useNativeDriver: false
      }).start();
      onVisibleChange?.call(this, true);
    } else {
      Animated.timing(animatedController, {
          duration: 300,
          toValue: 1,
          easing: Easing.bezier(0.4, 0.0, 0.2, 1),
          useNativeDriver: false
      }).start();
      onVisibleChange?.call(this, true);
    }
    setOpen(!open);
  };

  return (
    <View style={style}>
      <TouchableWithoutFeedback onPress={() => toggleListItem()}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Animated.View style={{ transform: [{ rotateZ: arrowAngle }] }}>
            <MaterialIcons name="keyboard-arrow-down" size={20} color="black" />
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
      <Animated.View style={[styles.bodyBackground, { height: bodyHeight }]} key={1} >
        <View
          style={styles.bodyContainer}
          onLayout={event =>{
            let layout = event.nativeEvent.layout;
            setBodySectionHeight(layout.height);
          }
          }>
          {children}
        </View>
      </Animated.View>
    </View>
  );
};
export default AccordionView;

const styles = StyleSheet.create({
  title:{
    fontSize:21,
    fontWeight:'bold'
  },
  bodyBackground: {
    overflow: 'hidden',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  bodyContainer: {
    padding: 8,
    position:'absolute',
    bottom: 0,
  },
});
