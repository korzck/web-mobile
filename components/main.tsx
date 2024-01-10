import React, { useEffect, useState } from 'react';
import { View, FlatList, TextInput, StyleSheet, Button } from 'react-native';
import axios from 'axios';
import ObjectCard, { ObjectInt } from './objectcard';
import NavigationBar from './navbar';
import {  TouchableOpacity, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useInterval } from './utils';



type RootStackParamList = {
    MainScreen: undefined;
    ObjectDetailsScreen: { object: ObjectInt };
  };
  
  type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MainScreen'>;
  
  interface MainScreenProps {
    navigation: MainScreenNavigationProp;
  }
  
  const MainScreen: React.FC<MainScreenProps> = ({ navigation }) => {
    const [objects, setObjects] = useState<ObjectInt[]>([]);
    const [filteredObjects, setFilteredObjects] = useState<ObjectInt[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
  
    const fetchData = async () => {
      // console.log(searchQuery)
      try {
        const response = await axios.get('http://192.168.160.14:8080/items', {
          params: {
            "title": searchQuery,
          }
        });
        // console.log("resp is", response.data?.items)
        if (response.status === 200) {
          setObjects(response.data?.items);
          setFilteredObjects(response.data);
        } else {
          throw new Error('Failed to get data from the server');
        }
        // setTimeout(fetchData, 1000)
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
      fetchData();
    }, []);

    // useInterval(() => {
    //   fetchData()
    // }, 1000)
  

  
    const handleDetailsPress = (object: ObjectInt) => {
      console.log('Details Pressed:', object.title);
      navigation.navigate('ObjectDetailsScreen', { object });
    };
  
    const renderObjectCard = ({ item }: { item: ObjectInt }) => {
      return (
        <TouchableOpacity onPress={() => handleDetailsPress(item)}>
          <ObjectCard object={item} onDetailsPress={() => {}} />
        </TouchableOpacity>
      );
    };
  
    return (
      <View style={styles.container}>
        <NavigationBar />
        <TextInput
          style={styles.input}
          placeholder="Введите название для поиска"
          onChangeText={(text) => setSearchQuery(text)}
          value={searchQuery}
        />
        <Button color={'#198754'} title='Поиск' onPress={fetchData}></Button>
        <FlatList
          data={objects}
          renderItem={renderObjectCard}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 0,
    },
    input: {
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      paddingHorizontal: 10,
      marginBottom: 10,
      marginTop: 10,
    },
  });
  
  export default MainScreen;