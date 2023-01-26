import Icon from "@expo/vector-icons/AntDesign";
import IconFea from "@expo/vector-icons/Feather";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";

import Home from "../../../pages/Home";
import Stats from "../../../pages/Stats";
import Trade from "../../../pages/Trade";
import Wallet from "../../../pages/Wallet";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          paddingBottom: 0,
          left: 20,
          right: 20,
          backgroundColor: "#ffffff",
          borderRadius: 15,
          height: 90,
          ...style.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#99ccd1" : "",
                ...style.icon,
              }}
            >
              <Icon name="home" size={32} color="#000000" />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Trade"
        component={Trade}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#99ccd1" : "",
                ...style.icon,
              }}
            >
              <IconFea name="trending-up" size={32} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Stats"
        component={Stats}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#99ccd1" : "",
                ...style.icon,
              }}
            >
              <Icon name="barschart" size={32} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#99ccd1" : "",
                ...style.icon,
              }}
            >
              <Icon name="wallet" size={32} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const style = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Tabs;
