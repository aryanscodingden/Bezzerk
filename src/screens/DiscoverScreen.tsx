import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const DiscoverScreen = () => {
  const insets = useSafeAreaInsets();

  const categories = ['All', 'Tech', 'Design', 'Music', 'Fitness'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const events = [
    { id: '1', title: 'Tech Meetup 2023', location: 'San Francisco, CA', date: 'Oct 24', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', color: '#E3F2FD' },
    { id: '2', title: 'Design UX Workshop', location: 'Remote', date: 'Oct 26', image: 'https://images.unsplash.com/photo-1558442074-3c19857bc1dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', color: '#F3E5F5' },
    { id: '3', title: 'Indie Rock Concert', location: 'Local Venue', date: 'Nov 02', image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', color: '#FFF3E0' },
  ];

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Text style={styles.title}>Discover</Text>
        <View style={styles.searchBar}>
          <Feather name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput
            placeholder="Find events, people..."
            style={styles.searchInput}
            placeholderTextColor="#888"
          />
        </View>
      </View>

      <View style={styles.categoriesContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoriesScroll}>
          {categories.map((cat, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.categoryBadge, activeCategory === cat && styles.activeCategoryBadge]}
              onPress={() => setActiveCategory(cat)}
            >
              <Text style={[styles.categoryText, activeCategory === cat && styles.activeCategoryText]}>
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView contentContainerStyle={styles.eventsContainer}>
        <Text style={styles.sectionTitle}>Trending Near You</Text>

        {events.map((event) => (
          <TouchableOpacity key={event.id} activeOpacity={0.9} style={styles.eventCard}>
            <Image source={{ uri: event.image }} style={styles.eventImage} />
            <View style={[styles.eventContent, { backgroundColor: event.color }]}>
              <View style={styles.eventDateBox}>
                <Text style={styles.eventDateMonth}>{event.date.split(' ')[0]}</Text>
                <Text style={styles.eventDateDay}>{event.date.split(' ')[1]}</Text>
              </View>
              <View style={styles.eventInfo}>
                <Text style={styles.eventTitle}>{event.title}</Text>
                <View style={styles.eventLocationRow}>
                  <Feather name="map-pin" size={14} color="#666" />
                  <Text style={styles.eventLocationText}>{event.location}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.bookmarkButton}>
                <Feather name="bookmark" size={20} color="#333" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
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
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 15,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 16,
    paddingHorizontal: 15,
    height: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  categoriesContainer: {
    marginBottom: 20,
  },
  categoriesScroll: {
    paddingHorizontal: 15,
  },
  categoryBadge: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#FFF',
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#EAEAEA',
  },
  activeCategoryBadge: {
    backgroundColor: '#1E1E1E',
    borderColor: '#1E1E1E',
  },
  categoryText: {
    color: '#666',
    fontWeight: '500',
  },
  activeCategoryText: {
    color: '#FFF',
  },
  eventsContainer: {
    paddingHorizontal: 20,
    paddingBottom: 120, // Tab bar space
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 15,
  },
  eventCard: {
    borderRadius: 24,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  eventImage: {
    width: '100%',
    height: 150,
  },
  eventContent: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  eventDateBox: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  eventDateMonth: {
    fontSize: 10,
    color: '#E53935',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  eventDateDay: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  eventInfo: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  eventLocationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventLocationText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  bookmarkButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DiscoverScreen;
