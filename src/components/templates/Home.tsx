import { View } from "native-base";

import i18n from "../../i18n";

import DifficultySection from "../modules/DifficultySection";
import TryHistory from "../modules/TryHistory";

const Home = () => {
  return (
    <View flex={1} flexDirection="column">
      <DifficultySection heading={i18n.t("difficulty_heading")} />
      <TryHistory heading={i18n.t("last_saved")} />
    </View>
  );
};

export default Home;
