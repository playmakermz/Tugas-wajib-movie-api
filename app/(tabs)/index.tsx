import { useState, useCallback, useEffect } from "react"
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {styles} from './style'
import { Feather } from '@expo/vector-icons'
import { ScrollView } from "react-native-gesture-handler";
import { MovieList, MovieDetail } from "./component";
import foundBasic from './foundBasic.json'
import {API_ACCESS_TOKEN, API_KEY} from './constant'

const Tab = createBottomTabNavigator() // Tab Navigator 
const Stack = createNativeStackNavigator(); // Button Navigator

function Home(){
  let movieLists = [
    {
      title: 'Now Playing in Theater',
      path: 'movie/now_playing?language=en-US&page=1',
      coverType: 'backdrop',
    },
    {
      title: 'Upcoming Movies',
      path: 'movie/upcoming?language=en-US&page=1',
      coverType: 'poster',
    },
    {
      title: 'Top Rated Movies',
      path: 'movie/top_rated?language=en-US&page=1',
      coverType: 'poster',
    },
    {
      title: 'Popular Movies',
      path: 'movie/popular?language=en-US&page=1',
      coverType: 'poster',
    },
  ]


  return(
    <ScrollView showsVerticalScrollIndicator={true}>
    <View>

      {movieLists.map((item) => (

<MovieList 
title={item.title}
path={item.path}
coverType={item.coverType}
key={item.title}
/> 
      
      ))}
    </View>
    </ScrollView>
  )
}

function Search(){
  return(
    <View>
      <Text>
        Halo 
      </Text>
    </View>
  )
}

function Favorite(){
  return(
    <View>
      <Text>
        Halo 
      </Text>
    </View>
  )
}

function App(){
  return(
    <Tab.Navigator>

<Tab.Screen
      name="Home"
      options={{
        tabBarIcon: ({ color }) => (
          <Feather name="home" size={28} color={color} />
        ),
        headerShown: false,
      }}>

{() => (<Stack.Navigator initialRouteName="Home">
  <Stack.Screen name="Home" component={Home}/>
  <Stack.Screen name="MovieDetail" component={MovieDetail} />
  </Stack.Navigator>)
  }

      </Tab.Screen>

<Tab.Screen name="Search" component={Search} options={{
        tabBarIcon: ({ color }) => (
          <Feather name="search" size={28} color={color} />
        ),
        headerShown: true,
      }}
    />


<Tab.Screen name="Favorite" component={Favorite} options={{
        tabBarIcon: ({ color }) => (
          <Feather name="heart" size={28} color={color} />
        ),
        headerShown: true,
      }}
    />


</Tab.Navigator>
  )
}

export default App