import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

const CalendarScreen = () => {
  const insets = useSafeAreaInsets();

  // Mock dates for a simple week view
  const weekDates = [
    { day: 'Mon', date: '12' },
    { day: 'Tue', date: '13' },
    { day: 'Wed', date: '14', active: true },
    { day: 'Thu', date: '15' },
    { day: 'Fri', date: '16' },
    { day: 'Sat', date: '17' },
    { day: 'Sun', date: '18' },
  ];

  // Mock events
  const events = [
    { id: '1', title: 'Morning Run', time: '07:00 AM', type: 'workout', color: '#E1BEE7', dotColor: '#8E24AA' },
    { id: '2', title: 'Team Standup', time: '10:00 AM', type: 'meeting', color: '#BBDEFB', dotColor: '#1E88E5' },
    { id: '3', title: 'Lunch with Sarah', time: '12:30 PM', type: 'social', color: '#FFECB3', dotColor: '#FFA000' },
    { id: '4', title: 'Deep Work: Project X', time: '02:00 PM', type: 'work', color: '#C8E6C9', dotColor: '#43A047' },
  ];

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <View>
          <Text style={styles.monthText}>October 2023</Text>
          <Text style={styles.dateText}>Today is Wednesday, Oct 14</Text>
        </View>
        <TouchableOpacity style={styles.iconButton}>
          <Feather name="search" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Week View */}
      <View style={styles.weekContainer}>
        {weekDates.map((item, index) => (
          <View key={index} style={[styles.dayContainer, item.active && styles.activeDayContainer]}>
            <Text style={[styles.dayText, item.active && styles.activeDayText]}>{item.day}</Text>
            <Text style={[styles.dateNumber, item.active && styles.activeDateNumber]}>{item.date}</Text>
            {item.active && <View style={styles.activeDot} />}
          </View>
        ))}
      </View>

      <ScrollView contentContainerStyle={styles.scheduleContainer}>
        <Text style={styles.scheduleTitle}>Schedule</Text>

        {/* Timeline Events */}
        {events.map((event, index) => (
          <View key={event.id} style={styles.eventRow}>
            <View style={styles.timeColumn}>
              <Text style={styles.timeText}>{event.time.split(' ')[0]}</Text>
              <Text style={styles.ampmText}>{event.time.split(' ')[1]}</Text>
            </View>

            {/* Timeline Line */}
            <View style={styles.timelineColumn}>
              <View style={[styles.timelineDot, { backgroundColor: event.dotColor }]} />
              {index !== events.length - 1 && <View style={styles.timelineLine} />}
            </View>

            {/* Event Card */}
            <TouchableOpacity style={[styles.eventCard, { backgroundColor: event.color }]}>
              <Text style={[styles.eventTitle, { color: event.dotColor }]}>{event.title}</Text>
              <Text style={[styles.eventType, { color: event.dotColor }]}>{event.type.toUpperCase()}</Text>
            </TouchableOpacity>
          </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  monthText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  dateText: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  weekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 30,
  },
  dayContainer: {
    alignItems: 'center',
    paddingVertical: 10,
    width: 45,
    borderRadius: 16,
  },
  activeDayContainer: {
    backgroundColor: '#1E1E1E',
  },
  dayText: {
    fontSize: 12,
    color: '#888',
    marginBottom: 8,
  },
  activeDayText: {
    color: '#FFF',
    fontWeight: '500',
  },
  dateNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  activeDateNumber: {
    color: '#FFF',
  },
  activeDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#FFF',
    marginTop: 6,
  },
  scheduleContainer: {
    paddingHorizontal: 20,
    paddingBottom: 120, // Tab bar space
  },
  scheduleTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 20,
  },
  eventRow: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  timeColumn: {
    width: 60,
    alignItems: 'flex-end',
    paddingRight: 10,
    paddingTop: 15,
  },
  timeText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  ampmText: {
    fontSize: 12,
    color: '#888',
  },
  timelineColumn: {
    width: 30,
    alignItems: 'center',
  },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginTop: 18,
    borderWidth: 2,
    borderColor: '#FFF',
  },
  timelineLine: {
    width: 2,
    flex: 1,
    backgroundColor: '#EAEAEA',
    marginTop: 5,
  },
  eventCard: {
    flex: 1,
    borderRadius: 16,
    padding: 15,
    justifyContent: 'center',
    minHeight: 80,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  eventType: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});

export default CalendarScreen;
