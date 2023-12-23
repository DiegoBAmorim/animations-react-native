import React, { useEffect, useState } from 'react';
import { View, Animated, Dimensions } from 'react-native';
import { Tab } from '../Tab';
import { Indicator } from '../Indicator';
import { Measure, TabData } from '../../../../@types/tabAnimated';

type Props = {
  data: TabData[];
  scrollX: Animated.Value;
  onItemPress: (index: number) => void;
};

const { width } = Dimensions.get('screen');

export const Tabs = ({ data, scrollX, onItemPress }: Props) => {
  const [measures, setMeasures] = useState<Measure[]>([]);
  const containerRef = React.useRef<any>();

  useEffect(() => {
    const m = [];

    data.forEach((item) => {
      item.ref.current.measureLayout(
        containerRef.current,
        (x: number, y: number, width: number, height: number) => {
          m.push({ x, y, width, height });

          if (m.length === data.length) {
            setMeasures(m);
          }
        }
      );
    });
  }, [measures]);

  return (
    <View style={{ position: 'absolute', top: 80, width }}>
      <View
        ref={containerRef}
        style={{
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          flex: 1,
        }}
      >
        {data.map((item, index) => {
          return (
            <Tab
              key={item.key}
              item={item}
              total={data.length}
              ref={item.ref}
              onItemPress={() => onItemPress(index)}
            />
          );
        })}
      </View>
      {measures.length > 0 && (
        <Indicator measures={measures} scrollX={scrollX} />
      )}
    </View>
  );
};
