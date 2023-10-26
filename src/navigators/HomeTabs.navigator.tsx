import { Text, TouchableOpacity } from "react-native";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/Home.screen";
import SettingsScreen from "../screens/Settings.screen";

const Tab = createBottomTabNavigator();

const HomeTabsScreens = () => {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerRight: () => (
          <TouchableOpacity
            style={{
              marginRight: 10,
              padding: 5,
            }}
            onPress={() => {
              navigation.navigate("Profile");
            }}
          >
            <Text>P</Text>
          </TouchableOpacity>
        ),
      })}
    >
      <Tab.Screen
        name="Products"
        component={HomeScreen}
        options={{
          tabBarLabel: "Products",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
          title: "Mandir Darshan",
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="playlist-check"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabsScreens;
