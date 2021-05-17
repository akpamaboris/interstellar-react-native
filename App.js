import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Platform,
  Image,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";

import { StatusBar } from "expo-status-bar";

const App = () => {
  console.log(Constants.statusBarHeight);
  const androidStatusBarHeight = Constants.statusBarHeight;
  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollView}>
        <View style={{ height: 90, backgroundColor: "#212121" }}>
          <Image
            source={require("./imdb.png")}
            resizeMode="contain"
            style={styles.logo}
          />
        </View>
        <View style={{ height: 100, backgroundColor: "black" }}>
          <Text style={{ color: "white", margin: 20, fontSize: 35 }}>
            Interstellar
          </Text>
        </View>
        <View
          style={{
            height: 70,
            backgroundColor: "black",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Text style={{ color: "white" }}>2014</Text>
          <Text style={{ color: "white" }}>PG-13</Text>
          <Text style={{ color: "white" }}>2h 49min</Text>
          <Text style={{ color: "white" }}>Adventure, Drama,Sci-Fi</Text>
        </View>
        <View
          style={{
            height: 200,
            backgroundColor: "black",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <View>
            <Image
              source={require("./inter.jpg")}
              resizeMode="center"
              style={styles.image}
            />
          </View>
          <View style={{ width: 200 }}>
            <View style={{ justifyContent: "space-around" }}>
              <Text style={{ color: "white", width: 140 }}>
                A team of explorers travel through a wormhole in space in an
                attempt to ensure humanity's survival
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  backgroundColor: "blue",
                  padding: 20,
                  textAlign: "center",
                  marginTop: 20,
                }}
              >
                <Text style={{ color: "white" }}> + ADD TO WATCHLIST</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "black",
            height: 100,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Ionicons name="star" size={32} color="green" />
            <Text style={{ color: "white" }}>8.6/10</Text>
            <Text style={{ color: "white" }}>1.1M</Text>
          </View>
          <View>
            <Ionicons name="star" size={32} color="green" />
            <Text style={{ color: "white" }}>RATE THIS</Text>
          </View>
          <View>
            <Text style={{ color: "white" }}>74</Text>
            <Text style={{ color: "white" }}>Metascore</Text>
            <Text style={{ color: "white" }}>46 critic reviews</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "black",
            height: 100,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>
            Top Billed Cast
          </Text>
          <Text style={{ color: "blue" }}>SEE ALL</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "black",
            justifyContent: "spaceAround",
          }}
        >
          <View>
            <Image
              source={require("./Matthew.jpeg")}
              resizeMode="contain"
              style={styles.imageCine}
            />
            <Text
              style={{
                color: "white",
                maxWidth: 50,
                textAlign: "center",
                marginLeft: 27,
              }}
            >
              Matthew Mcconaughey
            </Text>
            <Text
              style={{
                color: "white",
                width: 50,
                textAlign: "center",
                marginLeft: 27,
              }}
            >
              Cooper
            </Text>
          </View>
          <View>
            <Image
              source={require("./anne.jpeg")}
              resizeMode="contain"
              style={styles.imageCine}
            />
            <Text
              style={{
                color: "white",
                width: 50,
                textAlign: "center",
                marginLeft: 27,
              }}
            >
              Anne Hathaway
            </Text>
            <Text
              style={{
                color: "white",
                width: 50,
                textAlign: "center",
                marginLeft: 27,
              }}
            >
              Brand
            </Text>
          </View>
          <View>
            <Image
              source={require("./Jessica.jpeg")}
              resizeMode="contain"
              style={styles.imageCine}
            />
            <Text style={{ color: "white", width: 50, marginLeft: 27 }}>
              Jessica Chastain
            </Text>
            <Text style={{ color: "white", width: 50, marginLeft: 27 }}>
              Murph
            </Text>
          </View>
        </View>
        <View style={{ backgroundColor: "black", height: 200, paddingTop: 20 }}>
          <Text style={{ color: "white" }}>Director</Text>
          <Text style={{ color: "white" }}>Christopher Nolan</Text>
          <View style={{ paddingTop: 20 }}>
            <Text style={{ color: "white" }}>Writers</Text>
            <Text style={{ color: "white" }}>Jonathan Nolan</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  scrollView: {
    marginTop: Platform.OS === "android" ? 42 : 0,
  },
  logo: {
    height: 50,
    width: 80,
    margin: 20,
  },
  image: {
    height: 100,
    width: 90,
  },
  imageCine: {
    height: 100,
    width: 120,
  },
});
