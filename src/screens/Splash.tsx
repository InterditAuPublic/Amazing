import * as React from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';
import {styles} from '../assets/styles/style';
import {Dispatch, SetStateAction} from 'react';

interface Props {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const Splash = ({setLoading}: Props) => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/animations/rocketSplash.json')}
        autoPlay
        loop={false}
        resizeMode="cover"
        onAnimationFinish={() => setLoading(false)}
      />
    </View>
  );
};

export default Splash;
