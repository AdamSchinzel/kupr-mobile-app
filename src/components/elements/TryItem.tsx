import { useContext } from "react";
import { HStack, Icon, Pressable, Text, useToast, VStack } from "native-base";
import { Feather } from "@expo/vector-icons";
import i18n from "../../i18n";

import { ILevelType, StorageContext } from "../../utils/StorageProvider";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenProp } from "../../screens/HomeScreen";

const TryItem = ({ time, tries, difficulty, level }: ILevelType) => {
  const { getTime, internet } = useContext(StorageContext);
  const navigation = useNavigation<HomeScreenProp>();
  const toast = useToast();
  const id = "internet-toast";

  return (
    <Pressable
      _pressed={{ opacity: 0.4 }}
      pl={7}
      pr={5}
      onPress={() => {
        if (internet) {
          navigation.navigate("SolvedDetail", { difficulty, level });
        } else {
          if (!toast.isActive(id)) {
            toast.show({
              id,
              title: "You are offline",
            });
          }
        }
      }}>
      <HStack justifyContent="space-between" alignItems="center">
        <VStack>
          <Text style={{ fontFamily: "Montserrat_600SemiBold" }} fontSize="14px">
            {i18n.t(difficulty)} lv.{level}
          </Text>
          <Text style={{ fontFamily: "Montserrat_500Medium" }} color="#A6A6A6" fontSize="13px">
            {i18n.t("try")}: {tries}, {i18n.t("time")} {getTime(time.start, time.end as Date).minutes}:
            {getTime(time.start, time.end as Date).seconds} min
          </Text>
        </VStack>

        <Icon as={Feather} name="chevron-right" size="lg" color="#838C97" />
      </HStack>
    </Pressable>
  );
};

export default TryItem;
