import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import colors from '../assets/colors/colors';
import {Menu, Provider} from 'react-native-paper';

import Popular from './Popular';
import Featured from './Featured';

MaterialCommunityIcons.loadFont();

const Home = () => {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const Tab = createMaterialTopTabNavigator();

  return (
    <View style={styles.body}>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <View>
          <Image
            style={styles.furLogo}
            source={require('../assets/image/brooksLogo.png')}
          />
        </View>
        <Provider>
          <View style={styles.menuWrapper}>
            <Menu
              visible={visible}
              onDismiss={closeMenu}
              anchor={
                <TouchableOpacity onPress={openMenu}>
                  <MaterialCommunityIcons
                    name="dots-vertical-circle"
                    style={styles.menuButton}
                    size={25}
                  />
                </TouchableOpacity>
              }>
              <Menu.Item
                onPress={() => {
                  Alert.alert('Already in Homepage');
                }}
                title="Home"
              />
              <Menu.Item
                onPress={() => {
                  Alert.alert('About');
                }}
                title="About"
              />
              <Menu.Item
                onPress={() => {
                  Alert.alert('Mark down prices');
                }}
                title="Special Offers"
              />
            </Menu>
          </View>
        </Provider>
      </View>
      {/* flatlist */}

      <Tab.Navigator
        initialRouteName="Popular"
        screenOptions={{
          tabBarLabelStyle: {fontSize: 20},
          tabBarActiveTintColor: colors.black,
          tabBarStyle: {backgroundColor: colors.light},
          // zIndex: -3,
        }}>
        <Tab.Screen
          name="Popular"
          component={Popular}
          options={{tabBarLabel: 'Popular'}}
        />
        <Tab.Screen
          name="Featured"
          component={Featured}
          options={{tabBarLabel: 'Featured'}}
        />
      </Tab.Navigator>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  furLogo: {
    resizeMode: 'contain',
    width: 120,
    height: 60,
  },
  categorieWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 30,
  },
  categorieText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 25,
    color: 'black',
  },
  menuWrapper: {
    alignSelf: 'flex-end',
  },
  menuButton: {
    color: colors.black,
    marginTop: 15,
    // minHeight: 350,
    zIndex: 15,
    position: 'relative',
  },
});
