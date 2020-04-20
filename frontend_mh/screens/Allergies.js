import React, { useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Flatlist,
  Switch,
  Button,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { COLS } from "./COLS";
import { MonoText } from "../components/StyledText";

export default function HomeScreen() {
  const [celery, setCelery] = useState(false);
  const [gluten, setGluten] = useState(false);
  const [crustaceans, setCrustaceans] = useState(false);
  const [eggs, setEggs] = useState(false);
  const [fish, setFish] = useState(false);
  const [lupin, setLupin] = useState(false);
  const [milk, setMilk] = useState(false);
  const [molluscs, setMolluscs] = useState(false);
  const [mustard, setMustard] = useState(false);
  const [treeNuts, settreeNuts] = useState(false);
  const [peanuts, setPeanuts] = useState(false);
  const [sesame_Seeds, setSesame_Seeds] = useState(false);
  const [soybeans, setsoyBeans] = useState(false);
  const [dioxide, setDioxide] = useState(false);
  const [post, setPost] = useState();

  function celeryHandler() {
    if (celery === false) {
      setCelery(true);
    } else if (celery === true) {
      setCelery(false);
    }
  }
  function glutenHandler() {
    if (gluten === false) {
      setGluten(true);
    } else if (gluten === true) {
      setGluten(false);
    }
  }
  function crustaceansHandler() {
    if (crustaceans === false) {
      setCrustaceans(true);
      console.log("hello");
    } else if (crustaceans === true) {
      setCrustaceans(false);
      console.log("Goodbye");
    }
  }
  function eggHandler() {
    if (eggs === false) {
      setEggs(true);
    } else if (eggs === true) {
      setEggs(false);
    }
  }
  function fishHandler() {
    if (fish === false) {
      setFish(true);
    } else if (fish === true) {
      setFish(false);
    }
  }
  function lupinHandler() {
    if (lupin === false) {
      setLupin(true);
    } else if (lupin === true) {
      setLupin(false);
    }
  }
  function milkHandler() {
    if (milk === false) {
      setMilk(true);
    } else if (milk === true) {
      setMilk(false);
    }
  }
  function molluscsHandler() {
    if (molluscs === false) {
      setMolluscs(true);
    } else if (molluscs === true) {
      setMolluscs(false);
    }
  }
  function mustardHandler() {
    if (mustard === false) {
      setMustard(true);
      console.log("hello");
    } else if (mustard === true) {
      setMustard(false);
      console.log("Goodbye");
    }
  }
  function treeNutsHandler() {
    if (treeNuts === false) {
      settreeNuts(true);
    } else if (treeNuts === true) {
      settreeNuts(false);
    }
  }
  function peanutsHandler() {
    if (peanuts === false) {
      setPeanuts(true);
    } else if (peanuts === true) {
      setPeanuts(false);
    }
  }
  function seasame_SeedsHandler() {
    if (sesame_Seeds === false) {
      setSesame_Seeds(true);
    } else if (sesame_Seeds === true) {
      setSesame_Seeds(false);
    }
  }
  function soybeanHandler() {
    if (soybeans === false) {
      setsoyBeans(true);
    } else if (soybeans === true) {
      setsoyBeans(false);
    }
  }
  function dioxideHandler() {
    if (dioxide === false) {
      setDioxide(true);
    } else if (dioxide === true) {
      setDioxide(false);
    }
  }
  function postHandler() {
    setPost("submitted");

    console.log({
      celery,
      gluten,
      crustaceans,
      eggs,
      fish,
      lupin,
      milk,
      molluscs,
      mustard,
      treeNuts,
      peanuts,
      sesame_Seeds,
      soybeans,
      dioxide,
    });
  }

  return (
    <ScrollView style={styles.backgroundColor}>
      <Text style={styles.Font}> Allergies</Text>
      <View style={styles.container}>
        <Text style={styles.text}> Celery</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={celery ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={celeryHandler}
          value={celery}
        />
        <Text style={styles.text}> Crustaceans</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={crustaceans ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={crustaceansHandler}
          value={crustaceans}
        />
        <Text style={styles.text}> Eggs </Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={eggs ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={eggHandler}
          value={eggs}
        />
        <Text style={styles.text}> Fish</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={fish ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={fishHandler}
          value={fish}
        />

        <Text style={styles.text}> Gluten</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={gluten ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={glutenHandler}
          value={gluten}
        />
        <Text style={styles.text}> Lupin</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={lupin ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={lupinHandler}
          value={lupin}
        />
        <Text style={styles.text}> Milk</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={milk ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={milkHandler}
          value={milk}
        />
        <Text style={styles.text}> Molluscs</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={molluscs ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={molluscsHandler}
          value={molluscs}
        />
        <Text style={styles.text}> Mustard</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={mustard ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={mustardHandler}
          value={mustard}
        />

        <Text style={styles.text}> Peanuts</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={peanuts ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={peanutsHandler}
          value={peanuts}
        />
        <Text style={styles.text}> Seasame Seeds</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={sesame_Seeds ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={seasame_SeedsHandler}
          value={sesame_Seeds}
        />
        <Text style={styles.text}> Soybeans</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={soybeans ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={soybeanHandler}
          value={soybeans}
        />
        <Text style={styles.text}> Suphur Dioxide</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={dioxide ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={dioxideHandler}
          value={dioxide}
        />
        <Text style={styles.text}> Tree nuts</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={treeNuts ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={treeNutsHandler}
          value={treeNuts}
        />

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.formatted}>
            <Text>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.formatted} onPress={postHandler}>
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
        <Text> {post}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: COLS.C_BG,
  },
  container: {
    margin: 10,
    backgroundColor: COLS.C_BG,
  },
  Font: {
    alignSelf: "center",
    marginBottom: 10,
    marginTop: 20,
  },
  text: {
    margin: 5,
    left: 40,
  },
  switch: {
    right: 40,
    bottom: 27,
  },
  buttons: {
    flexDirection: "row",
  },
  formatted: {
    backgroundColor: COLS.C5_LIGHT_TEXT,
    width: 80,
    padding: 10,
    alignSelf: "center",
    margin: 5,
    borderRadius: 5,
    left: 100,
  },
});