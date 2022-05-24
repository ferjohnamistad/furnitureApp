import React, {useState, useEffect, useRef} from 'react';
import {View, FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useScrollToTop} from '@react-navigation/native';
import colors from '../assets/colors/colors';
import Product from './Product';

function Popular() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://192.168.0.184:3000/api/furniture/get')
      .then(response => response.json())
      .then(responseJson => {
        setData(responseJson);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const ref = useRef(null);

  useScrollToTop(ref);

  return (
    <View>
      <FlatList
        style={styles.flatlistStyle}
        ref={ref}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        decelerationRate={0.3}
        renderItem={({item}) => (
          <>
            <Product item={item} />
          </>
        )}
      />
      <View style={styles.backTop}>
        <TouchableOpacity>
          <Text style={styles.backText}> Back to Top</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Popular;

const styles = StyleSheet.create({
  popularSets: {
    fontSize: 25,
    fontFamily: 'Roboto-Bold',
    backgroundColor: colors.primary,
    borderRadius: 5,
  },
  flatlistStyle: {
    height: 505,
  },
  backTop: {
    alignItems: 'center',
    height: 50,
  },
  backText: {
    fontSize: 20,
    color: colors.black,
  },
});
