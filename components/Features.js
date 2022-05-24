import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../assets/colors/colors';

const Features = ({item}) => {
  return (
    <View style={styles.prodWrapper}>
      <View style={styles.podCard}>
        <Image style={styles.podImage} source={{uri: item.feat_pic}} />
        <View style={styles.textCont}>
          <Text style={styles.podText}>Item: {item.feat_name}</Text>
          <Text style={styles.podText}>Type: {item.feat_type}</Text>
          <Text style={styles.podText}>Color: {item.feat_size}</Text>
          <Text style={styles.podText}>Price: PHP{item.feat_price}</Text>
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

export default Features;

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
    marginRight: 15,
    marginLeft: 20,
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
