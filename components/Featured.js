import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import Features from './Features';

const Featured = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://192.168.0.184:3000/api/features/get')
      .then(response => response.json())
      .then(responseJson => {
        setData(responseJson);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        decelerationRate={0.3}
        renderItem={({item}) => (
          <>
            <Features item={item} />
          </>
        )}
      />
    </View>
  );
};

export default Featured;
