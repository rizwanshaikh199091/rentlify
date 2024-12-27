import {
  Dimensions,
  Image,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {memo, useRef} from 'react';
import Carousel from 'react-native-reanimated-carousel';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  useDerivedValue,
} from 'react-native-reanimated';

interface ICustomCarousel {
  data: string[];
  height: number;
  autoPlay?: boolean;
  dotBottom?: number;
  onPress?: () => void;
}

const CustomCarousel = ({
  data,
  height,
  autoPlay = false,
  dotBottom = 40,
  onPress,
}: ICustomCarousel) => {
  const width = Dimensions.get('window').width;
  const currentPosition = useSharedValue(0);
  const isScrolling = useSharedValue(false);
  const carouselRef = useRef<any>(null);

  const derivedCurrentPosition = useDerivedValue(() => {
    return currentPosition.value;
  });

  const handleSnap = (index: number) => {
    currentPosition.value = withTiming(index);
    isScrolling.value = false;
  };

  // Animated style for the dots
  const animatedDotStyle = (index: number) => {
    return useAnimatedStyle(() => {
      const isActive = derivedCurrentPosition.value === index;
      return {
        backgroundColor: withTiming(isActive ? '#e7e7e7' : '#5e5e5e', {
          duration: 300,
          easing: Easing.inOut(Easing.ease),
        }),
        transform: [
          {
            scale: withTiming(isActive ? 1.2 : 1, {
              duration: 300,
              easing: Easing.inOut(Easing.ease),
            }),
          },
        ],
      };
    });
  };

  return (
    <View>
      <View>
        <Carousel
          ref={carouselRef}
          width={width}
          height={height}
          data={data}
          autoPlay={autoPlay}
          autoPlayInterval={1500}
          loop={data.length > 1}
          onSnapToItem={handleSnap}
          onScrollStart={() => (isScrolling.value = true)}
          onScrollEnd={() => (isScrolling.value = false)}
          renderItem={({item, index}) => (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => {
                if (!isScrolling.value) {
                  onPress && onPress(); // Properly call onPress if provided
                }
              }}>
              <Image
                source={typeof item === 'string' ? {uri: item} : item}
                style={styles.image}
              />
            </TouchableWithoutFeedback>
          )}
        />
      </View>

      {data.length > 1 && (
        <View style={{...styles.dotContainer, bottom: dotBottom}}>
          {data.map((_item, index: number) => (
            <Animated.View
              key={index + '&'}
              style={[styles.dots, animatedDotStyle(index)]}
            />
          ))}
        </View>
      )}

      {/* {smokeImage && (
        <View style={styles.smokeImageContainer}>
          <Image source={IMAGES.Court.smokeImage} style={styles.smokeImage} />
        </View>
      )} */}
    </View>
  );
};

export default memo(CustomCarousel);

const styles = StyleSheet.create({
  dotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
  },
  dots: {
    marginHorizontal: 8,
    width: 8,
    height: 8,
    borderRadius: 50,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  smokeImage: {
    width: '100%',
    height: 80,
  },
  smokeImageContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -20,
  },
});
