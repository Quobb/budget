import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import * as FileSystem from 'expo-file-system';
import {Asset} from 'expo-asset'

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const loadDatabase = async  () =>{
 const dbName = "mySQLiteDB.db";
 const dbAsset = require("../../assets/mySQLiteDB.db");
}

const Home = () => {
  return (
    <ThemedView style={styles.container}
      >
      <Text>app</Text>
     <StatusBar style="auto" />
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
   container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
})