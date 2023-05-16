import "react-native-gesture-handler";

import i18n from "../i18n";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "../screens/RootStackParams";

import { Icon } from "native-base";
import { Feather } from "@expo/vector-icons";

import { HomeScreen, PostsScreen } from "../screens";

import { BRAND_COLOR } from "../../config/constants";

const Tab = createBottomTabNavigator<RootStackParamList>();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarInactiveTintColor: "#999",
        tabBarActiveTintColor: BRAND_COLOR,
        tabBarHideOnKeyboard: true,
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: i18n.t("solve"),
          tabBarIcon: ({ color }) => <Icon mt={2} as={Feather} name="box" size={26} color={color} />,
          headerShown: false,
          tabBarHideOnKeyboard: true,
        }}
      />
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: i18n.t("posts"),
          tabBarIcon: ({ color }) => <Icon mt={2} as={Feather} name="inbox" size={26} color={color} />,
          headerShown: false,
          tabBarHideOnKeyboard: true,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
