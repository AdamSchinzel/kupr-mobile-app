import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

import LayoutSafeArea from "../components/layouts/LayoutSafeArea";
import Camera from "../components/templates/Camera";

import { RootStackParamList } from "./RootStackParams";

export type CameraScreenProp = StackScreenProps<RootStackParamList, "Camera">;
export type CameraNavigationProp = StackNavigationProp<RootStackParamList, "Camera">;

function CameraScreen() {
  return (
    <LayoutSafeArea>
      <Camera />
    </LayoutSafeArea>
  );
}

export default CameraScreen;
