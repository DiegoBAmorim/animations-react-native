import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

type Props = {
  item: any;
  total: number;
  onItemPress: () => void;
};

export const Tab = React.forwardRef<View, Props>(
  ({ item, total, onItemPress }, ref) => {
    return (
      <TouchableOpacity onPress={onItemPress}>
        <View ref={ref}>
          <Text
            style={{
              color: 'white',
              fontSize: 84 / total,
              fontWeight: 'bold',
              textTransform: 'uppercase',
            }}
          >
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
);
