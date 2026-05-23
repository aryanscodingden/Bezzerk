import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const InboxScreen = () => {
  const insets = useSafeAreaInsets();
  const [todos, setTodos] = useState([
    { id: '1', text: 'Morning stretch', completed: true },
    { id: '2', text: 'Review daily schedule', completed: false },
    { id: '3', text: 'Reply to emails', completed: false },
  ]);

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <ScrollView
      style={[styles.container, { paddingTop: insets.top }]}
      contentContainerStyle={styles.contentContainer}
    >
      {/* Header / Greeting */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Good morning, User! ✨</Text>
        <Text style={styles.subGreeting}>Ready to tackle your day?</Text>
      </View>

      {/* AI Planner Card */}
      <TouchableOpacity activeOpacity={0.9} style={styles.aiCardContainer}>
        <LinearGradient
          colors={['#7F00FF', '#E100FF']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.aiCard}
        >
          <View style={styles.aiCardContent}>
            <Feather name="zap" size={28} color="#FFF" style={styles.aiIcon} />
            <View>
              <Text style={styles.aiCardTitle}>Plan my day</Text>
              <Text style={styles.aiCardSubtitle}>Tap to let AI organize your schedule</Text>
            </View>
          </View>
          <Feather name="chevron-right" size={24} color="#FFF" />
        </LinearGradient>
      </TouchableOpacity>

      {/* Stats Grid */}
      <View style={styles.statsGrid}>
        {/* Gym Tracker */}
        <View style={[styles.statCard, { backgroundColor: '#E3F2FD' }]}>
          <View style={[styles.statIconContainer, { backgroundColor: '#BBDEFB' }]}>
            <Ionicons name="barbell" size={24} color="#1976D2" />
          </View>
          <Text style={styles.statTitle}>Gym</Text>
          <Text style={styles.statValue}>Push Day</Text>
          <Text style={styles.statSubtext}>Sync with Hevy</Text>
        </View>

        {/* Habit Tracker */}
        <View style={[styles.statCard, { backgroundColor: '#F3E5F5' }]}>
          <View style={[styles.statIconContainer, { backgroundColor: '#E1BEE7' }]}>
            <Feather name="check-circle" size={24} color="#7B1FA2" />
          </View>
          <Text style={styles.statTitle}>Habits</Text>
          <Text style={styles.statValue}>3/5 done</Text>
          <Text style={styles.statSubtext}>Keep it up!</Text>
        </View>
      </View>

      {/* To-Do List Section */}
      <View style={styles.todoSection}>
        <Text style={styles.sectionTitle}>Up Next</Text>
        <View style={styles.todoList}>
          {todos.map(todo => (
            <TouchableOpacity
              key={todo.id}
              style={styles.todoItem}
              onPress={() => toggleTodo(todo.id)}
            >
              <View style={[
                styles.checkbox,
                todo.completed && styles.checkboxCompleted
              ]}>
                {todo.completed && <Feather name="check" size={14} color="#FFF" />}
              </View>
              <Text style={[
                styles.todoText,
                todo.completed && styles.todoTextCompleted
              ]}>
                {todo.text}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Bottom spacing for the custom tab bar */}
      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  contentContainer: {
    padding: 20,
  },
  header: {
    marginTop: 20,
    marginBottom: 30,
  },
  greeting: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  subGreeting: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  aiCardContainer: {
    shadowColor: '#7F00FF',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
    marginBottom: 30,
  },
  aiCard: {
    borderRadius: 24,
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  aiCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  aiIcon: {
    marginRight: 16,
  },
  aiCardTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  aiCardSubtitle: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  statCard: {
    flex: 1,
    borderRadius: 24,
    padding: 20,
    marginHorizontal: 5,
  },
  statIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  statTitle: {
    fontSize: 16,
    color: '#666',
    fontWeight: '600',
    marginBottom: 4,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  statSubtext: {
    fontSize: 12,
    color: '#888',
  },
  todoSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 16,
  },
  todoList: {
    backgroundColor: '#FFF',
    borderRadius: 24,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#E0E0E0',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxCompleted: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  todoText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  todoTextCompleted: {
    color: '#999',
    textDecorationLine: 'line-through',
  },
});

export default InboxScreen;
