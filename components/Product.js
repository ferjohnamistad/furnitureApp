import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../assets/colors/colors';

const Product = ({item}) => {
  return (
    <View style={styles.prodWrapper}>
      <View style={styles.podCard}>
        <Image style={styles.podImage} source={{uri: item.fur_pic}} />
        <View style={styles.textCont}>
          <Text style={styles.podText}>Item: {item.fur_name}</Text>
          <Text style={styles.podText}>Type: {item.fur_type}</Text>
          <Text style={styles.podText}>Color: {item.fur_color}</Text>
          <Text style={styles.podText}>Price: PHP{item.fur_price}</Text>
        </View>
      </View>
      <View>
        <View style={styles.bottomMenu}>
          <TouchableOpacity>
            <Text style={styles.bottomButtons}>View Item</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.bottomButtons}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  prodWrapper: {
    justifyContent: 'center',
    flex: 1,
    marginTop: 25,
    marginRight: 10,
    marginLeft: 10,
  },
  podCard: {
    borderRadius: 25,
    backgroundColor: colors.light,
    flexDirection: 'row',
    marginBottom: 10,
  },
  podText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    margin: 5,
    color: colors.black,
  },
  podImage: {
    resizeMode: 'contain',
    width: 150,
    height: 150,
    marginTop: 25,
    marginBottom: 10,
    marginRight: 10,
  },
  textCont: {
    marginTop: 15,
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bottomButtons: {
    fontFamily: 'Roboto-Bold',
    fontSize: 15,
    color: colors.black,
    borderColor: colors.black,
    borderWidth: 1,
    padding: 5,
    marginBottom: 2,
  },
});
