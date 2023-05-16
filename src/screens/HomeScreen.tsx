import { StackNavigationProp } from "@react-navigation/stack";

import LayoutSafeArea from "../components/layouts/LayoutSafeArea";
import Home from "../components/templates/Home";

import { RootStackParamList } from "./RootStackParams";

export type HomeScreenProp = StackNavigationProp<RootStackParamList, "Home">;

const HomeScreen = () => {
  return (
    <LayoutSafeArea background="#F7F7FC">
      <Home />
    </LayoutSafeArea>
  );
};

export default HomeScreen;
