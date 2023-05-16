import { useContext, useState } from "react";
import { Box, Center, Flex, Heading, Image, Text, View, VStack } from "native-base";

import i18n from "../../i18n";
import { Scope } from "i18n-js";

import SuccessImage from "../../../assets/success-image.png";

import Button from "../elements/Button";
import CheckedItem from "../elements/CheckedItem";

import { ILevelType, StorageContext } from "../../utils/StorageProvider";

import { SuccessNavigationProp } from "../../screens/SuccessScreen";
import { useNavigation } from "@react-navigation/native";

import { Difficultly } from "@/screens/RootStackParams";
import { MAX_LEVELS } from "../../../config/constants";

const Success = () => {
  const navigation = useNavigation<SuccessNavigationProp>();
  const { newTask, saveLevel, getTime, state } = useContext(StorageContext);

  const [tmpState, setTmpState] = useState(newTask);

  return (
    <View flex={1} justifyContent="space-evenly" alignItems="center">
      <VStack m="auto" alignItems="center" space="16">
        <Heading style={{ fontFamily: "Montserrat_600SemiBold" }}>{i18n.t("congrats")}</Heading>
        <Image source={SuccessImage} size="2xl" alt="congrats" />
      </VStack>
      <VStack alignItems="center" space={5}>
        <Center>
          <Heading style={{ fontFamily: "Montserrat_700Bold" }}>
            {i18n.t(tmpState?.difficulty as Scope)} LV.{tmpState?.level}
          </Heading>
          <Text style={{ fontFamily: "Montserrat_500Medium" }} color="#A6A6A6" mt={1}>
            {i18n.t("successfully_solved")}
          </Text>
        </Center>
        <VStack alignItems="flex-start" space={3}>
          <CheckedItem type="solve" text={i18n.t("try") + ": " + tmpState?.tries} />
          <CheckedItem
            type="time"
            text={
              i18n.t("time") +
              ": " +
              getTime(tmpState?.time.start as Date, tmpState?.time.end as Date).minutes +
              ":" +
              getTime(tmpState?.time.start as Date, tmpState?.time.end as Date).seconds +
              " min"
            }
          />
        </VStack>
      </VStack>
      <Button
        onPress={() => {
          if (tmpState?.level === MAX_LEVELS) {
            saveLevel(newTask as ILevelType);
            navigation.navigate("Home");
          } else {
            saveLevel(newTask as ILevelType);
            navigation.navigate("Level", {
              difficulty: newTask?.difficulty as Difficultly,
              level: (newTask?.level as number) + 1,
            });
          }
        }}
        text={tmpState?.level === MAX_LEVELS ? i18n.t("back") : i18n.t("next")}
      />
    </View>
  );
};

export default Success;
