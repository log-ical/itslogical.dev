import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native-web";

export const InputBox = ({label, handleChange, text}) => {
  return (
    <div className="inputBox">
      {label}
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={handleChange}
          value={text}
          spellCheck="false"
        />
      </SafeAreaView>
    </div>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 10,
    width: 250,
    margin: 2,
    borderWidth: 1,
    padding: 10,
    borderColor: "#FEFEFE",
    color: "#FEFEFE",
  },
});

export default InputBox;