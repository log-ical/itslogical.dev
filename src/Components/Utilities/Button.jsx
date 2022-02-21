import React from 'react';
import { StyleSheet, Button, View, SafeAreaView } from 'react-native-web';



export const BuildButton = ({ label, color, onChange }) => {
  return (
  <>
    <SafeAreaView style={styles.container}>
        <View>
          <Button
            title={label}
            color={color}
            onPress={onChange}
          />
        </View>
    </SafeAreaView>
  </>
  );
};


export default BuildButton;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    display: 'inline-block',
    width: 150,
  }
});
