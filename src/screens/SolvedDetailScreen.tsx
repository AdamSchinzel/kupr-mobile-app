import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

import LayoutSafeArea from "../components/layouts/LayoutSafeArea";
import SolvedDetail from "../components/templates/SolvedDetail";

import { RootStackParamList } from "./RootStackParams";

export type SolvedDetailScreenProp = StackScreenProps<RootStackParamList, "SolvedDetail">;
export type SolvedDetailNavigationProp = StackNavigationProp<RootStackParamList, "SolvedDetail">;

function SolvedDetailScreen({ route }: SolvedDetailScreenProp) {
  const { difficulty, level } = route.params;

  return (
    <LayoutSafeArea backgroundColor="white">
      <SolvedDetail difficulty={difficulty} level={level} />
    </LayoutSafeArea>
  );
}

export default SolvedDetailScreen;
