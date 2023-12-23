import React, { useRef } from 'react';
import { data } from './constants/data';

import { Tabs } from './components/Tabs';

import { StyleSheet, View, Animated, Dimensions, Image } from 'react-native';

export const TabAnimatedScreen: React.FC = () => {
  const { width, height } = Dimensions.get('screen');

  const scrollX = useRef(new Animated.Value(0)).current;

  const ref = React.useRef<any>();

  const onItemPress = (itemIndex: number) => {
    ref?.current?.scrollToOffset({
      offset: itemIndex * width,
    });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Animated.FlatList
        ref={ref}
        data={data}
        keyExtractor={(item) => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item }) => {
          return (
            <View style={{ width, height }}>
              <Image
                source={{ uri: item.image }}
                style={{ flex: 1, resizeMode: 'cover' }}
              />
              <View
                style={[
                  StyleSheet.absoluteFillObject,
                  { backgroundColor: 'rgba(0,0,0,0.3)' },
                ]}
              />
            </View>
          );
        }}
      />
      <Tabs scrollX={scrollX} data={data} onItemPress={onItemPress} />
    </View>
  );
};
