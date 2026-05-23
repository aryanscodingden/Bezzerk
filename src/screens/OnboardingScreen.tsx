import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const { width } = Dimensions.get('window');

const OnboardingScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={require('../assets/onboarding_bg.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Bottom Card */}
        <View style={styles.cardContainer}>
          <View style={styles.cardContent}>
            <Text style={styles.title}>Step Into the{'\n'}World of Live Events</Text>
            <Text style={styles.subtitle}>
              Find exciting live events near you and join the action instantly everything just one tap away.
            </Text>

            {/* Pagination Dots */}
            <View style={styles.paginationContainer}>
              <View style={[styles.dot, styles.activeDot]} />
              <View style={styles.dot} />
              <View style={styles.dot} />
            </View>
          </View>

          {/* Custom Bottom Shape */}
          <View style={styles.bottomShapeContainer}>
            <Svg width={width} height={100} viewBox={`0 0 ${width} 100`}>
              {/* White background matching card */}
              <Path
                d={`
                  M 0 0
                  L ${width} 0
                  L ${width} 100
                  L 0 100 Z
                `}
                fill="#FFFFFF"
              />
              {/* Black curved button cutout */}
              <Path
                d={`
                  M ${width / 2 - 80} 100
                  C ${width / 2 - 50} 100, ${width / 2 - 60} 20, ${width / 2} 20
                  C ${width / 2 + 60} 20, ${width / 2 + 50} 100, ${width / 2 + 80} 100
                  Z
                `}
                fill="#151515"
              />
            </Svg>

            <TouchableOpacity
              style={styles.continueButton}
              onPress={() => navigation.replace('Main')}
              activeOpacity={0.8}
            >
              <Text style={styles.continueText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 40,
    alignItems: 'center',
  },
  cardContent: {
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
    lineHeight: 34,
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 30,
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  dot: {
    width: 25,
    height: 4,
    backgroundColor: '#D3D3D3',
    borderRadius: 2,
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: '#000',
  },
  bottomShapeContainer: {
    width: '100%',
    height: 100,
    position: 'relative',
  },
  continueButton: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },
  continueText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: -10, // Adjust text slightly downwards into the curve
  },
});

export default OnboardingScreen;
