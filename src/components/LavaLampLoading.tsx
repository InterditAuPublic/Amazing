import React, {useRef, useEffect} from 'react';
import {View, Animated, Easing, StyleSheet} from 'react-native';
import Svg, {Circle} from 'react-native-svg';

const LavaLampLoading = () => {
  const animatedValues = useRef(
    [...Array(5)].map(() => new Animated.Value(0)),
  ).current;

  useEffect(() => {
    const animate = () => {
      Animated.parallel(
        animatedValues.map((value, index) =>
          Animated.loop(
            Animated.timing(value, {
              toValue: 1,
              duration: 5000 + index * 1000,
              easing: Easing.linear,
              useNativeDriver: false,
            }),
          ),
        ),
      ).start();
    };

    animate();
  }, [animatedValues]);

  const lavaLampParts = animatedValues.map((value, index) => {
    const translateY = value.interpolate({
      inputRange: [0, 1],
      outputRange: [0, Math.random() * 20 - 10],
    });

    const scale = value.interpolate({
      inputRange: [0, 1],
      outputRange: [0.8, 1.2],
    });

    return (
      <Animated.View
        key={index}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: [{translateY}, {translateX: -10}, {scale}],
        }}>
        <Svg height="200" width="200">
          <Circle cx="10" cy="10" r="10" fill="red" />
        </Svg>
      </Animated.View>
    );
  });

  return <View style={{flex: 1, position: 'relative'}}>{lavaLampParts}</View>;
};

export default LavaLampLoading;
