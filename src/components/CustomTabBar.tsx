import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, Text } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Svg, { Path } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');
const TAB_BAR_HEIGHT = 80;

const CustomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <View style={styles.svgContainer}>
        <Svg width={width} height={TAB_BAR_HEIGHT + 30} viewBox={`0 0 ${width} ${TAB_BAR_HEIGHT + 30}`}>
          <Path
            d={`
              M 0 30
              C 0 30, 20 30, 30 30
              L ${width / 2 - 45} 30
              C ${width / 2 - 25} 30, ${width / 2 - 25} 10, ${width / 2} 10
              C ${width / 2 + 25} 10, ${width / 2 + 25} 30, ${width / 2 + 45} 30
              L ${width - 30} 30
              C ${width - 20} 30, ${width} 30, ${width} 30
              L ${width} ${TAB_BAR_HEIGHT + 30}
              L 0 ${TAB_BAR_HEIGHT + 30}
              Z
            `}
            fill="#1E1E1E"
          />
        </Svg>
      </View>

      <View style={styles.tabBarContent}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          if (route.name === 'Add') {
            return (
              <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                onPress={onPress}
                style={styles.addButtonContainer}
              >
                <LinearGradient
                  colors={['#FF8A65', '#FF5252']}
                  style={styles.addButton}
                >
                  <Ionicons name="add" size={32} color="#FFF" />
                </LinearGradient>
              </TouchableOpacity>
            );
          }

          let icon;
          if (route.name === 'Inbox') {
            return null; // Don't show Inbox in the tab bar
          }
          if (route.name === 'Discover') {
            icon = <Feather name="search" size={24} color={isFocused ? '#FFF' : '#888'} />;
          } else if (route.name === 'Map') {
            icon = <Feather name="map-pin" size={24} color={isFocused ? '#FFF' : '#888'} />;
          } else if (route.name === 'Calendar') {
            icon = <Feather name="calendar" size={24} color={isFocused ? '#FFF' : '#888'} />;
          } else if (route.name === 'Profile') {
            icon = <Feather name="user" size={24} color={isFocused ? '#FFF' : '#888'} />;
          }

          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              style={styles.tabItem}
            >
              {icon}
              <Text style={[styles.tabText, { color: isFocused ? '#FFF' : '#888' }]}>
                {route.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'transparent',
  },
  svgContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabBarContent: {
    flexDirection: 'row',
    height: TAB_BAR_HEIGHT,
    paddingTop: 30,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 10,
    marginTop: 4,
  },
  addButtonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -40, // Elevate the button
  },
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FF5252',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
});

export default CustomTabBar;
