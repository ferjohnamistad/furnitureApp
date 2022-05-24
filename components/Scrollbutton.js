import React, {useState} from 'react';
import {Icon} from 'react-native';

  
const Scrollbutton = () => {
  
    return (
      <View>
        // infinitely scrolling list setup goes here
  
        <Icon 
          name="north" 
          type="material" 
          color='teal'
          raised 
          reverse 
          containerStyle={styles.scrollTopButton} 
        />
      </View>
    );
  };
  
  
export default Scrollbutton;


const styles = StyleSheet.create({
  scrollTopButton: {
    position: 'absolute',
    bottom: 0,
    right: 0
  },
});