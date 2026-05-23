import React from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Platform } from 'react-native';
// MapView breaks on web, so we dynamically import or use a mock
let MapView: any = View;
let Marker: any = View;

if (Platform.OS !== 'web') {
  const Maps = require('react-native-maps');
  MapView = Maps.default;
  Marker = Maps.Marker;
}
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Feather, Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const MapScreen = () => {
  const insets = useSafeAreaInsets();

  // Mock event markers
  const markers = [
    { id: '1', coordinate: { latitude: 37.78825, longitude: -122.4324 }, title: 'Tech Meetup' },
    { id: '2', coordinate: { latitude: 37.795, longitude: -122.41 }, title: 'Design Workshop' },
    { id: '3', coordinate: { latitude: 37.77, longitude: -122.42 }, title: 'Indie Concert' },
  ];

  return (
    <View style={styles.container}>
      {Platform.OS === 'web' ? (
        <View style={[styles.map, { backgroundColor: '#e0e0e0', justifyContent: 'center', alignItems: 'center' }]}>
          <Text>Map cannot be displayed on web preview.</Text>
        </View>
      ) : (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          // Using standard map for reliable rendering across platforms without extra API keys right now
        >
          {markers.map((marker) => (
            <Marker key={marker.id} coordinate={marker.coordinate}>
              <View style={styles.customMarker}>
                <View style={styles.markerInner}>
                  <Ionicons name="location" size={20} color="#FFF" />
                </View>
              </View>
            </Marker>
          ))}
        </MapView>
      )}

      {/* Floating Header */}
      <View style={[styles.headerOverlay, { top: insets.top + 10 }]}>
        <View style={styles.searchPill}>
          <Feather name="search" size={18} color="#666" />
          <Text style={styles.searchText}>Search events map...</Text>
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Feather name="sliders" size={18} color="#1A1A1A" />
        </TouchableOpacity>
      </View>

      {/* Floating Bottom Card Preview */}
      <View style={styles.bottomOverlay}>
        <View style={styles.previewCard}>
          <View style={styles.previewImagePlaceholder}>
            <Feather name="image" size={24} color="#CCC" />
          </View>
          <View style={styles.previewContent}>
            <Text style={styles.previewTitle}>Explore the Area</Text>
            <Text style={styles.previewSubtitle}>3 events happening nearby</Text>
          </View>
          <TouchableOpacity style={styles.previewAction}>
            <Feather name="arrow-right" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: width,
    height: height,
  },
  customMarker: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 82, 82, 0.2)', // Light red halo
    justifyContent: 'center',
    alignItems: 'center',
  },
  markerInner: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FF5252',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FF5252',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 4,
  },
  headerOverlay: {
    position: 'absolute',
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchPill: {
    flex: 1,
    height: 46,
    backgroundColor: '#FFF',
    borderRadius: 23,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  searchText: {
    color: '#888',
    marginLeft: 10,
    fontSize: 14,
  },
  filterButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  bottomOverlay: {
    position: 'absolute',
    bottom: 110, // Above the tab bar
    left: 20,
    right: 20,
  },
  previewCard: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
  },
  previewImagePlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  previewContent: {
    flex: 1,
  },
  previewTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  previewSubtitle: {
    fontSize: 13,
    color: '#666',
  },
  previewAction: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1E1E1E',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MapScreen;
