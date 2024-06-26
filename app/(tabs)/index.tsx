import { useState, useEffect } from "react"
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
  // https://developer.themoviedb.org/reference/search-movie
  // ref: https://github.com/toyamarodrigo/rn-movieapp/blob/master/src/api/movies.js
  // ref bentuk link: https://github.com/toyamarodrigo/rn-movieapp/blob/master/src/api/movies.js
  let [find, setFind] = useState('') // State penerima perubahan submit, dan memberikan aba-aba
  let [found, setFound] = useState(foundBasic) // State yang akan menerima hasil search!
  let [form, setForm] = useState('') // State untuk form

    // Cari Movie disaat state berubah
    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=es-ES&query=${find}`)
      .then(response => response.json())
      .then(response => {setFound(response.results)})
      .catch(err => console.error(err));
    }, [find]);

    console.log(found)

  return(
    <ScrollView showsVerticalScrollIndicator={true}>
    <View>
    <TextInput
        style={styles.input}
        placeholder="Masukan Nama Film"
        onChangeText={setForm}
        value={form}
      />
      <TouchableOpacity style={styles.button} onPress={() => {setFind(form); setForm(''); console.log(find)}}>
        <Text style={styles.button}>Press Here</Text>
      </TouchableOpacity>


      <View style={styles.parSearch}>
      
        {found.map((item, index) => (

         <View key={index} style={styles.parItem}>
           <Text>backdrop_path : {item.backdrop_path}</Text>
          <Text>Title : {item.title}</Text>
          <Text>Overview : {item.overview}</Text>
         </View>

        ))}
      
    </View>


  </View>
  </ScrollView>
  )
}

function App(){
  let [fav, setFav] = useState([])

  console.log(`Dari App  ${fav.map((item) => item.title)}`)

  function Favorite(){
    return(
      <ScrollView showsVerticalScrollIndicator={true}>
    <View>
      {fav.map((item) => (

      <View key={item.title}>
        <Text>======================= Title {item.title} ==================</Text>
      <Text>title: {item.title}</Text>
      <Text>overview: {item.overview}</Text>
      </View>

      ))}
    </View>
    </ScrollView>
    )
  }

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
  <Stack.Screen name="MovieDetail" component={MovieDetail} initialParams={{fav: fav, setFav: setFav}} />
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
        headerShown: false,
      }}
    
    />


   </Tab.Navigator>
  )
}

export default App

