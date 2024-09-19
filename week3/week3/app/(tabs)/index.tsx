import React from 'react';
import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import FirstScreen from '../screen/FirstScreen';
import SecondScreen from '../screen/SecondScreen';
import ThreeScreen from '../screen/ThreeScreen';
import FourScreen from '../screen/FourScreen';

export default function HomeScreen() {
  return (
      <FourScreen/>
  );
}

const styles = StyleSheet.create({
 
});
