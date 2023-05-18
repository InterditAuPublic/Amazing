import React from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';

// eslint-disable-next-line react-hooks/rules-of-hooks

const Home = () => {
  // const [opacity, setOpacity] = React.useState(0);
  const fadeIn = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    setTimeout(() => {
      Animated.timing(fadeIn, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, 1000);
  }, [fadeIn]);
  return (
    <View style={[styles.container]}>
      <Animated.View style={[styles.container, {opacity: fadeIn}]}>
        <Text style={styles.text}>Home</Text>
      </Animated.View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
