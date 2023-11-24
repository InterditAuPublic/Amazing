import React from 'react';
import {View, StyleSheet} from 'react-native';
import LavaLampLoading from '../components/LavaLampLoading';
// import BlobAnimation from '../components/BlopAnimation';

const LavaScreen = () => {
  return (
    <View style={styles.container}>
      {/* <LavaLampLoading /> */}
      {/* <BlobAnimation /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LavaScreen;
