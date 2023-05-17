import React, { useRef } from 'react';
import { Animated, Dimensions, Image, View } from 'react-native';

const SquareAnimationGoUp = ({ height, width, scrollX }: { height: number, width: number, scrollX: Animated.Value }) => {

// allow to move the rocket from bottom to top, but not from top to bottom
    const translateY = Animated.modulo(scrollX, width).interpolate({
        inputRange: [0, width, width*2],
        outputRange: [0, height, 0],
        extrapolate: 'clamp',
    });


    return (
        <Animated.View
            style={{
                position: 'absolute',
                bottom: -150,
                transform: [

                    
                    // dont alow to move the rocket from top to bottom
                    { translateY },
                    

                    {rotate: '-45deg'}
                ],
            }}
        >
           
            <View style={{ width: 100, height: 100, alignItems: 'center', justifyContent: 'center', backgroundColor:'transparent'}}>
                <Image
                    source={require('../img/rocket.jpeg')}
                    style={{ width: 100, height: 100 }}
                />
            </View>


        </Animated.View>
    );



}

export default SquareAnimationGoUp;