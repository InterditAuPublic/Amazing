import React, { useRef } from 'react';
import {
  Animated,
  FlatList,
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from 'react-native';

import ArSvg from './assets/svg/ArSvg';
import ChatSvg from './assets/svg/ChatSvg';
import LaunchSvg from './assets/svg/LaunchSvg';
import FingerprintSvg from './assets/svg/FingerprintSvg';
import LoadingSvg from './assets/svg/LoadingSvg';
import LoginSvg from './assets/svg/LoginSvg';

import RocketAnimation from './assets/animations/Rocket';
import SquareAnimationGoUp from './assets/animations/Ballons';



const { width, height } = Dimensions.get('screen');

// background colors for each screen (6 light colors)
const BACKGROUNDS = ['#A5BBFF', '#56D4FF', '#00E8FF', '#32F7D3', '#A0FD9B', '#F9F871'];

const DATA = [
  {
    id: 1,
    title: 'First Item',
    description: 'This is the first item',
    image: LaunchSvg,
    animation: SquareAnimationGoUp
  },
  {
    id: 2,
    title: 'Second Item',
    description: 'This is the second item',
    image: ChatSvg,
    animation: SquareAnimationGoUp
  },
  {
    id: 3,
    title: 'Third Item',
    description: 'This is the third item',
    image: ArSvg,
    animation: SquareAnimationGoUp
  },
  {
    id: 4,
    title: 'Fourth Item and this is a long title',
    description: 'This is the fourth item and this is a long description',
    image: LoadingSvg,
    animation: RocketAnimation
  },
  {
    id: 5,
    title: 'Fifth Item',
    description: 'This is the fifth item and this is a long description',
    image: FingerprintSvg,
    animation: RocketAnimation
  },
  {
    id: 6,
    title: 'Sixth Item',
    description: 'This is the sixth item',
    image: LoginSvg,
    animation: RocketAnimation
  },
  // {
  //   id: 7,
  //   title: 'Seventh Item',
  //   description: 'This is the seventh item',
  //   image: ArSvg,
  //   // animation: RocketAnimation
  // },
  // {
  //   id: 8,
  //   title: 'Eighth Item',
  //   description: 'This is the eighth item',
  //   image: ChatSvg,
  //   // animation: RocketAnimation
  // }
];

const Background = ({ scrollX }: { scrollX: Animated.Value }) => {
  const backgroundColor = scrollX.interpolate({
    inputRange: BACKGROUNDS.map((_, i) => i * width),
    outputRange: BACKGROUNDS.map((bg) => bg),
  });
  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        {
          backgroundColor,
        },
      ]}
    />
  );
};



const SquareAnimationFront = ({ scrollX }: { scrollX: Animated.Value }) => {

  const rotate = scrollX.interpolate({
    inputRange: [10, width, width * 2],
    outputRange: ['35deg', '-35deg', '35deg'],
  });
  const rotate2 = Animated.modulo(scrollX, width).interpolate({
    inputRange: [0, width],
    outputRange: ['35deg', '-35deg'],
  });
  const rotate3 = Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)).interpolate({
    inputRange: [0, 1],
    outputRange: ['35deg', '-35deg'],
  });
  const rotate4 = Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)).interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['35deg', '90deg', '125deg'],
  });
  const rotate5 = Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)).interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });
  const square = Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)).interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, width, 0],
  });
  const square2 = Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)).interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -width, 0],
  });
  const square3 = Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)).interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, width, 0],
  });
  const squareInterpolated = Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)).interpolate({
    inputRange: [0, width, width * 2, width * 3, width * 4, width * 5, width * 6, width * 7],
    outputRange: [0, width, 0, width, 0, width, 0, width],
  });

  return (
    <View style={{ position: 'absolute', top: 0, bottom: 50, left: 0, right: 0, }}>
      <Animated.View
        style={{
          width: width,
          height: width,
          backgroundColor: 'rgba(255,255,255,0.3)',
          transform: [
            { perspective: 500 },
            { rotateY: rotate5 },
            { translateX: square2 },
            { rotate: rotate5 },
          ],

        }}
      />
    </View>
  );

};

const SquareAnimationBack = ({ scrollX }: { scrollX: Animated.Value }) => {

  const rotate = scrollX.interpolate({
    inputRange: [10, width, width * 2],
    outputRange: ['35deg', '-35deg', '35deg'],
  });
  const rotate2 = Animated.modulo(scrollX, width).interpolate({
    inputRange: [0, width],
    outputRange: ['35deg', '-35deg'],
  });
  const rotate3 = Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)).interpolate({
    inputRange: [0, 1],
    outputRange: ['35deg', '-35deg'],
  });
  const rotate4 = Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)).interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['35deg', '90deg', '125deg'],
  });
  const rotate5 = Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)).interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const square = Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)).interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, width, 0],
  });
  const square2 = Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)).interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -width, 0],
  });
  const square3 = Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)).interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, width, 0],
  });
  const squareInterpolated = Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)).interpolate({
    inputRange: [0, width, width * 2, width * 3, width * 4, width * 5, width * 6, width * 7],
    outputRange: [0, width, 0, width, 0, width, 0, width],
  });

  return (
    <View style={{ position: 'absolute', top: 0, bottom: 50, left: 0, right: 0, }}>
      <Animated.View
        style={{
          width: width,
          height: width,
          backgroundColor: 'rgba(255,255,255,0.3)',
          transform: [
            { perspective: 500 },
            { rotateY: rotate5 },
            { translateX: square3 },
            { rotate: rotate5 },
          ],

        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginTop: 20,
          }}
        >Back</Text>
      </Animated.View>
    </View>
  );
};

const SquareRotate = ({ scrollX }: { scrollX: Animated.Value }) => {

  const rotate = scrollX.interpolate({
    inputRange: [10, width, width * 2],
    outputRange: ['35deg', '-35deg', '35deg'],
  });
  const rotate2 = Animated.modulo(scrollX, width).interpolate({
    inputRange: [0, width],
    outputRange: ['35deg', '-35deg'],
  });
  const rotate3 = Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)).interpolate({
    inputRange: [0, 1],
    outputRange: ['35deg', '-35deg'],
  });
  const rotate4 = Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)).interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['35deg', '90deg', '125deg'],
  });
  const rotate5 = Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)).interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });
  const square = Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)).interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, width, 0],
  });
  const square2 = Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)).interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -width, 0],
  });
  const square3 = Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)).interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, width, 0],
  });
  const squareInterpolated = Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)).interpolate({
    inputRange: [0, width, width * 2, width * 3, width * 4, width * 5, width * 6, width * 7],
    outputRange: [0, width, 0, width, 0, width, 0, width],
  });

  return (
    <View style={{ position: 'absolute', top: 0, bottom: 50, left: 0, right: 0, }}>
      <Animated.View
        style={{
          width: width,
          height: width,
          backgroundColor: 'rgba(255,255,255,0.3)',
          transform: [
            { rotateY: rotate5 },
            { translateX: square3 },
            { rotate: rotate5 },
          ],

        }}
      />
    </View>
  );
};

const Indicator = ({ scrollX }: { scrollX: Animated.Value }) => {
  return (
    <View style={{ flexDirection: 'row', position: 'absolute', bottom: 80 }}>
      {DATA.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={`dot-${i}`}
            style={{
              height: 10,
              width: dotWidth,
              borderRadius: 5,
              backgroundColor: 'blue',
              marginHorizontal: 5,
              opacity
            }}
          />
        );
      })}
    </View>
  );
};

const IndicatorSlug = ({ scrollX }: { scrollX: Animated.Value }) => {
  return (
    <View style={{ flexDirection: 'row', position: 'absolute', bottom: 50 }}>
      {DATA.map((_, i) => {

        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp',

        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.5, 1, 0.5],
          extrapolate: 'clamp',
        });

        const translateX = scrollX.interpolate({
          inputRange,
          outputRange: [0, 1, 0],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={`dot-${i}`}
            style={{
              height: 10,
              width: dotWidth,
              borderRadius: 5,
              backgroundColor: 'blue',
              // borderColor: 'white',
              // borderWidth: 2,
              marginHorizontal: 5,
              opacity,
              transform: [
                {
                  scale,
                },
                {
                  translateX,
                },
              ],
            }}
          />
        );

      })}
    </View>
  );


};


function App(): JSX.Element {

  const scrollX = useRef(new Animated.Value(0)).current; // scrollX value

  return (
    <SafeAreaView style={styles.container}>
      <Background scrollX={scrollX} />
      {/* <RocketAnimation scrollX={scrollX} height={height} width={width} /> */}
      {/* <SquareAnimationFront scrollX={scrollX} /> */}
      {/* <SquareAnimationBack scrollX={scrollX} /> */}
      <SquareRotate scrollX={scrollX} />

      <SquareAnimationGoUp scrollX={scrollX} height={height} width={width} />

      <Animated.FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={DATA}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } }}],
          { useNativeDriver: false }
        )}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const AnimationComponent = item.animation;
          return (
            <View style={{ width, alignItems: 'center', padding: 20, paddingBottom: 100 }}>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {/* <AnimationComponent scrollX={scrollX} height={height} width={width} /> */}
                <item.image width={width/2} height={height/2} color={BACKGROUNDS[item.id % BACKGROUNDS.length]} />
                <Text style={{ fontSize: 24, fontWeight: '700', marginBottom: 10, color: 'white' }}>
                  {item.title}
                </Text>
                <Text style={{ fontSize: 18, fontWeight: '500', color: 'white' }}>
                  {item.description}
                </Text>
              </View>
            </View>
          );
        }}
      />
      <IndicatorSlug scrollX={scrollX} />
      <Button title="Go to login" onPress={() => console.log('login')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carousel: {
    width: width,
    height: height,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'tomato',

  },
  item: {
    backgroundColor: 'tomato',
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    color: 'white',
    fontSize: 24,
  },
  itemImage: {
    width: 200,
    height: 200,
  },


});

export default App;
