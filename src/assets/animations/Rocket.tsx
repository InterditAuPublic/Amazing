import React, { useRef } from 'react';
import { Animated, Dimensions, Image, View } from 'react-native';

const RocketAnimation = ({ height, width, scrollX }: { height: number, width: number, scrollX: Animated.Value }) => {

    // const translateX = Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)).interpolate({
    //     inputRange: [0, 1],
    //     outputRange: [-width,width],
    //     extrapolate: 'clamp',
    // }); // describe the animation of the rocket from 0 to -width (from left to right)
  
    // // translate x from 0 to width
    // const translateY = Animated.modulo(scrollX, width).interpolate({
    //     inputRange: [0, width],
    //     outputRange: [0, -height],
    //     extrapolate: 'clamp',
    // }); // describe the animation of the rocket from 0 to -height (from bottom to top) 
    

    const translateY = Animated.modulo(scrollX, width).interpolate({  // describe the animation of the rocket from 0 to -height (from bottom to top)
        inputRange: [0, width], // height because we want to go up
        outputRange: [0, -width], // -height because we want to go up
        extrapolate: 'clamp',
    }); // why it move the animation goes in diagonal? : because the rocket is not a square but a rectangle 

    const translateX = Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)).interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolate: 'clamp',
    });
    
    return (
        <Animated.View
            style={{
                width: 100,
                height: 100,
                borderRadius: 20,
                position: 'absolute',
                
                transform: [
                    // { translateX },
                    { translateY },
                ],

            }}
        >
            <Image
                source={require('../img/rocket.jpeg')}
                style={{ width: 100, height: 100 }}
            />

            {/* <View style={{ width: 100, height: 100, alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    source={require('../img/rocket.jpeg')}
                    style={{ width: 60, height: 60 }}
                />
            </View> */}

        </Animated.View>
    );

};

export default RocketAnimation;