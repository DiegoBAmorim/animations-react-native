import { Animated, Dimensions } from 'react-native';

import { data } from '../../constants/data';

export const Indicator = ({ measures, scrollX }) => {
  const { width } = Dimensions.get('screen');

  const inputRange = data.map((_, index) => index * width);

  const indicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measures.map((measure) => measure.width),
  });

  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measures.map((measure) => measure.x),
  });

  return (
    <Animated.View
      style={{
        position: 'absolute',
        height: 4,
        width: indicatorWidth,
        left: 0,
        backgroundColor: 'white',
        bottom: -10,
        transform: [
          {
            translateX: translateX,
          },
        ],
      }}
    ></Animated.View>
  );
};
