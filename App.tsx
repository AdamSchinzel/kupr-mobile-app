import { LogBox } from "react-native";
import { NativeBaseProvider } from "native-base";
import AppLoading from "expo-app-loading";

import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./src/screens/RootStackParams";
import "react-native-gesture-handler";

import { colorModeManager } from "./src/utils/colorModeManager";
import { StorageProvider } from "./src/utils/StorageProvider";

import { LevelScreen, CameraScreen, SuccessScreen, SolvedDetailScreen, NewPostScreen, HomeScreen } from "./src/screens";

import { theme } from "./config/theme";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
} from "@expo-google-fonts/montserrat";

import { ApolloProvider } from "@apollo/client";
import { client } from "./src/services/client";

const Stack = createStackNavigator<RootStackParamList>();

LogBox.ignoreLogs(["When server rendering"]);

const App = () => {
  const navigationRef = useNavigationContainerRef();

  const screens: {
    name: keyof RootStackParamList;
    component: React.ReactNode;
  }[] = [
    { name: "Home", component: HomeScreen },
    { name: "Level", component: LevelScreen },
    { name: "Camera", component: CameraScreen },
    { name: "Success", component: SuccessScreen },
    { name: "SolvedDetail", component: SolvedDetailScreen },
    { name: "NewPost", component: NewPostScreen },
  ];

  const [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <ApolloProvider client={client}>
        <NativeBaseProvider colorModeManager={colorModeManager} theme={theme}>
          <StorageProvider>
            <NavigationContainer ref={navigationRef}>
              <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: true }}>
                {screens.map((it: any) => (
                  <Stack.Screen key={it.name} {...it} />
                ))}
              </Stack.Navigator>
            </NavigationContainer>
          </StorageProvider>
        </NativeBaseProvider>
      </ApolloProvider>
    </>
  );
};

export default App;
