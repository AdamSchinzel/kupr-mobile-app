import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

import LayoutSafeArea from "../components/layouts/LayoutSafeArea";
import Success from "../components/templates/Success";

import { RootStackParamList } from "./RootStackParams";

export type SuccessScreenProp = StackScreenProps<RootStackParamList, "Success">;
export type SuccessNavigationProp = StackNavigationProp<RootStackParamList, "Success">;

const SuccessScreen = () => {
  return (
    <LayoutSafeArea>
      <Success />
    </LayoutSafeArea>
  );
};

export default SuccessScreen;
