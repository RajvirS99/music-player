import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useFonts, Roboto_300Light, Roboto_100Thin, Roboto_400Regular } from '@expo-google-fonts/roboto'

//for vector icons
import { Ionicons } from '@expo/vector-icons'
//uuid for unique ID's
import { v4 as uuidv4 } from 'uuid';

//App Components
import Player from './components/player';

export default function App() {

  // Google Fonts
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular
  });

  const trackList = [
    {
      id: uuidv4(),
      title: "Track 1",
      artistName: "Artist 1"
    },
    {
      id: uuidv4(),
      title: "Track 2",
      artistName: "Artist 2"
    },
    {
      id: uuidv4(),
      title: "Track 3",
      artistName: "Artist 3"
    },
    {
      id: uuidv4(),
      title: "Track 4",
      artistName: "Artist 4"
    },
    {
      id: uuidv4(),
      title: "Track 5",
      artistName: "Artist 5"
    },
  ];

  //list item
  const Item = ({ title, artistName }) => (
    <TouchableOpacity style={styles.track}>
      <Image style={styles.albumArt} source={{ uri: 'https://picsum.photos/id/1002/200', }} />
      <View style={{ paddingLeft: 10 }}>
        <Text style={styles.trackFontSize}> {title} </Text>
        <Text style={styles.ArtistName}> {artistName} </Text>
      </View>
    </TouchableOpacity>
  );

  //function for rendering the track List
  const renderItem = ({ item }) => (
    <Item style={styles.trackName} title={item.title} artistName={item.artistName} />
  );

  return (
    <View style={styles.container}>
     
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style= {styles.appHeading}>Library</Text>
      <Ionicons style={{padding:10,}} name="settings" size={40}  color="black" />
    </View>

      
      <FlatList
        data={trackList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Player />
      <StatusBar style="auto" />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingLeft: 15,
    paddingRight: 15,
    fontFamily: 'Roboto_300Light',
  },

  appHeading: {
    fontSize: 40,
    paddingBottom: 25,
  },

  track: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    // backgroundColor: '#b4f1f1',
    borderRadius: 10,
    marginBottom: 10,
  },

  trackFontSize: {
    fontSize: 20,
  },
  albumArt: {
    height: 50,
    width: 50,
    borderRadius: 5,
  }
});
