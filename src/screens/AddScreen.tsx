import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const AddScreen = ({ navigation }: any) => {
  const insets = useSafeAreaInsets();

  const handleClose = () => {
    // Navigate back to the previous tab (assuming Inbox for now, or you could use navigation.goBack() if integrated carefully)
    navigation.navigate('Inbox');
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Text style={styles.title}>Create New</Text>
        <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
          <Feather name="x" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>

        {/* New Event Card */}
        <TouchableOpacity activeOpacity={0.8} style={styles.cardContainer}>
          <LinearGradient
            colors={['#FF9A9E', '#FECFEF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.card}
          >
            <View style={styles.iconContainer}>
              <Feather name="calendar" size={32} color="#FFF" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.cardTitle}>Event / Meeting</Text>
              <Text style={styles.cardSubtitle}>Schedule something to your calendar</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>

        {/* New Habit Card */}
        <TouchableOpacity activeOpacity={0.8} style={styles.cardContainer}>
          <LinearGradient
            colors={['#84FAB0', '#8FD3F4']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.card}
          >
            <View style={styles.iconContainer}>
              <Feather name="check-circle" size={32} color="#FFF" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.cardTitle}>New Habit</Text>
              <Text style={styles.cardSubtitle}>Build a consistent daily routine</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>

        {/* Log Workout Card */}
        <TouchableOpacity activeOpacity={0.8} style={styles.cardContainer}>
          <LinearGradient
            colors={['#A18CD1', '#FBC2EB']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.card}
          >
            <View style={styles.iconContainer}>
              <Ionicons name="barbell-outline" size={32} color="#FFF" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.cardTitle}>Log Workout</Text>
              <Text style={styles.cardSubtitle}>Sync a Hevy link or create manually</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  closeButton: {
    padding: 8,
    backgroundColor: '#EAEAEA',
    borderRadius: 20,
  },
  content: {
    padding: 20,
    paddingBottom: 100, // Space for the tab bar
  },
  cardContainer: {
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  card: {
    borderRadius: 24,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFF',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
  },
});

export default AddScreen;
