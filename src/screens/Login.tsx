import React from 'react';
import {
  Text,
  StyleSheet,
  Animated,
  SafeAreaView,
  Image,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
import * as Animed from 'react-native-reanimated';

const Login = () => {
  const {height, width} = Dimensions.get('window');

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
    <Animated.View style={[styles.container]}>
      {/* <FastImage
        source={require('../assets/img/space.jpg')}
        resizeMode="cover"
        style={styles.imageBackground}
      /> */}

      <TouchableOpacity
        style={styles.closeButtonFixedBottomImageContainer}
        onPress={() => navigation.goBack()}>
        <Text style={{color: '#fff', fontSize: 20}}>X</Text>
      </TouchableOpacity>

      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.text}>Login</Text>
        <View style={[styles.form]}>
          {/* <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#fff"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#fff"
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
          /> */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Animated.View>
  );
};

export default Login;

const styles = StyleSheet.create({
  imageBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  safeArea: {
    flex: 1,
    // alignItems: 'center',
    // alignItems: 'flex-start',
  },
  container: {
    flex: 1,
    // backgroundColor: 'red',
    justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  form: {
    flex: 1,
    // backgroundColor: 'red',
    justifyContent: 'flex-end',
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20,

    fontSize: 16,
    color: '#444',
    height: 44,
    marginBottom: 20,
    borderRadius: 2,
  },
  button: {
    height: 42,
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  closeButtonFixedBottomImageContainer: {
    position: 'absolute',
    top: 40,
    right: 30,
  },
  closeButtonFixedBottomImage: {
    width: 20,
    height: 20,
  },
});
