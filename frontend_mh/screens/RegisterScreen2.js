import * as WebBrowser from "expo-web-browser";
import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { COLS } from "./COLS";

export default function App() {
  const [username, setUsername] = useState();
  const [Password, setPassword] = useState();
  const [display, setDisplay] = useState();

  function usernameHandler(enteredText) {
    setUsername(enteredText);
  }
  function PasswordHandler(enteredText) {
    setPassword(enteredText);
  }

  function SubmitHandler() {
    setDisplay("Submitted");
    console.log(username, Password);
    // const data = { input, email, DOB, Gender };
    // const options = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //   },
    //   body: JSON.stringify(data),
    // };
    // fetch("", options)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log("this is", data);
    //   });
  }

  return (
    <View>
      <View>
        <Text style={styles.headerC}>
          <Image source={require("../assets/images/arrow.png")} />
        </Text>
        <View>
          <TextInput
            style={styles.inputField}
            onChangeText={usernameHandler}
            placeholder="Name"
            placeholderTextColor="black"
          />
          <TextInput
            style={styles.inputField}
            placeholder="Email"
            onChangeText={PasswordHandler}
            placeholderTextColor="black"
          />
        </View>

        <TouchableOpacity onPress={SubmitHandler} style={styles.buttonText}>
          <Text style={styles.TextStyle}>Register</Text>
        </TouchableOpacity>
        <Text style={styles.formatting}>{display}</Text>

        <View style={styles.buttonFormat}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputField: {
    position: "relative",
    top: 80,
    marginVertical: 15,
    backgroundColor: COLS.C5_LIGHT_TEXT,
    width: 200,
    alignSelf: "center",
    height: 50,
    borderRadius: 5,
  },
  headerC: {
    backgroundColor: COLS.C5_LIGHT_TEXT,
    height: 60,
  },
  formatting: {
    alignSelf: "center",
  },
  buttonText: {
    position: "relative",
    top: 170,
    backgroundColor: COLS.C5_LIGHT_TEXT,
    color: COLS.C6_WHITE_TEXT,
    textAlign: "center",
    padding: 5,
    width: 150,
    alignSelf: "center",
    borderRadius: 5,
    marginVertical: 3,
  },
  buttonFormat: {
    position: "relative",
    top: 80,
    flexDirection: "row",
    backgroundColor: COLS.C5_LIGHT_TEXT,
    width: 200,
    justifyContent: "space-between",
    margin: 30,
    alignSelf: "center",
    borderRadius: 5,
    justifyContent: "space-between",
  },
  textStyle: {
    color: COLS.C6_WHITE_TEXT,
    alignSelf: "center",
  },
});
