import { useContext } from "react";
import { View, Heading, HStack, VStack } from "native-base";

import i18n from "../../i18n";

import { useNavigation } from "@react-navigation/native";
import { Difficultly } from "../../screens/RootStackParams";

import HomeButton from "../elements/HomeButton";

import { HomeScreenProp } from "../../screens/HomeScreen";

import { StorageContext } from "../../utils/StorageProvider";

const DifficultySection = ({ heading }: { heading: string }) => {
  const { state } = useContext(StorageContext);
  const navigation = useNavigation<HomeScreenProp>();

  return (
    <View mx="6%" mb={5} w="100%">
      <Heading style={{ fontFamily: "Montserrat_700Bold" }} mb={8} mt={5}>
        {heading}
      </Heading>
      <VStack space={5} w="90%" alignItems="center">
        <HStack space={5}>
          <HomeButton
            iconColor="#6668C9"
            icon="smile"
            onPress={() =>
              navigation.navigate("Level", {
                difficulty: Difficultly.beginner,
                level: state?.beginnerLevel as number,
              })
            }
            text={i18n.t("beginner")}
          />
          <HomeButton
            iconColor="#EF5E66"
            icon="trending-up"
            onPress={() =>
              navigation.navigate("Level", {
                difficulty: Difficultly.advanced,
                level: state?.advancedLevel as number,
              })
            }
            text={i18n.t("advanced")}
          />
        </HStack>
        <HStack space={5}>
          <HomeButton
            iconColor="#F9C26D"
            icon="star"
            onPress={() =>
              navigation.navigate("Level", {
                difficulty: Difficultly.expert,
                level: state?.expertLevel as number,
              })
            }
            text={i18n.t("expert")}
          />
          <HomeButton
            iconColor="#66C68F"
            icon="zap"
            onPress={() => {
              navigation.navigate("Level", {
                difficulty: Difficultly.specialist,
                level: state?.specialistLevel as number,
              });
            }}
            text={i18n.t("specialist")}
          />
        </HStack>
      </VStack>
    </View>
  );
};

export default DifficultySection;
