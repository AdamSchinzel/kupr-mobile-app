import React, { useContext } from "react";
import { Box, Center, Divider, HStack, Spinner, useColorModeValue, View, VStack } from "native-base";
import Image from "react-native-image-progress";
import * as Progress from "react-native-progress";

import i18n from "../../i18n";

import LevelHeader from "../elements/LevelHeader";
import CheckedItem from "../elements/CheckedItem";

import { ILevelDescription } from "../../screens/RootStackParams";

import { StorageContext } from "../../utils/StorageProvider";
import { useLevelQuery } from "../../graphql";

const SolvedDetail = ({ difficulty, level }: ILevelDescription) => {
  const { data, loading, error } = useLevelQuery({
    variables: {
      levelNum: level,
      levelDif: difficulty,
    },
  });
  const { state, getTime } = useContext(StorageContext);
  const bgColor = useColorModeValue("white", "black");

  const task = state.savedLevels.find((l) => l.difficulty === difficulty && l.level === level);

  const solvedDate = new Date(task?.time.end as Date);
  const month = solvedDate.getUTCMonth() + 1;
  const day = solvedDate.getUTCDate();
  const year = solvedDate.getUTCFullYear();

  const solved = day + ". " + month + ". " + year;

  if (loading || !data) {
    return <Spinner />;
  }

  return (
    <View backgroundColor={bgColor} flex={1}>
      <VStack>
        <Box>
          <LevelHeader
            level={level}
            isDetail={true}
            difficulty={difficulty}
            text={i18n.t(difficulty) + " lv." + level}
            description={i18n.t("solved") + " " + solved}
          />
          <Divider />
        </Box>
        <Center>
          <Image
            source={{
              uri: `https://backend.esl.staging.decentree.com/files/${data?.kupr_difficulty_levels_aggregate.nodes[0].file}`,
            }}
            style={{
              width: 300,
              height: 420,
            }}
            resizeMode="contain"
            indicator={Progress.Circle}
          />
        </Center>

        <HStack alignSelf="center" space={8} backgroundColor="#F7F7FC" p={5} rounded="2xl">
          <CheckedItem type="solve" text={i18n.t("try") + ": " + task?.tries} />
          <CheckedItem
            type="time"
            text={
              i18n.t("time") +
              ": " +
              getTime(task?.time.start as Date, task?.time.end as Date).minutes +
              ":" +
              getTime(task?.time.start as Date, task?.time.end as Date).seconds +
              " min"
            }
          />
        </HStack>
      </VStack>
    </View>
  );
};

export default SolvedDetail;
