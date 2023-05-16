import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

import LayoutSafeArea from "../components/layouts/LayoutSafeArea";
import Level from "../components/templates/Level";

import { RootStackParamList } from "./RootStackParams";

export type LevelScreenProp = StackScreenProps<RootStackParamList, "Level">;
export type LevelNavigationProp = StackNavigationProp<RootStackParamList, "Level">;

const LevelScreen = ({ route }: LevelScreenProp) => {
  const { difficulty, level, modalVisible } = route.params;

  return (
    <LayoutSafeArea backgroundColor="white">
      <Level difficulty={difficulty} level={level} modalVisibility={modalVisible} />
    </LayoutSafeArea>
  );
};

export default LevelScreen;
