import { useContext, useEffect } from "react";
import { Box, Center, Divider, Spinner, useColorModeValue, View } from "native-base";
import Image from "react-native-image-progress";
import * as Progress from "react-native-progress";

import i18n from "../../i18n";

import { useNavigation } from "@react-navigation/native";
import { Difficultly } from "../../screens/RootStackParams";

import LevelHeader from "../elements/LevelHeader";
import Button from "../elements/Button";

import { FailModal } from "../modules/FailModal";

import { LevelNavigationProp } from "../../screens/LevelScreen";

import { StorageContext } from "../../utils/StorageProvider";
import { useLevelQuery } from "../../graphql/index";

const Level = ({
  difficulty,
  level,
  modalVisibility,
}: {
  difficulty: Difficultly;
  level: number;
  modalVisibility: boolean | undefined;
}) => {
  const { setNewTask, newTask } = useContext(StorageContext);
  const { data, loading, error } = useLevelQuery({
    variables: {
      levelNum: level,
      levelDif: difficulty,
    },
  });
  const bgColor = useColorModeValue("white", "black");
  const navigation = useNavigation<LevelNavigationProp>();
  const start = new Date();

  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      setNewTask(null);
    });
  }, [navigation, newTask]);

  if (loading || !data) {
    return <Spinner />;
  }

  return (
    <View backgroundColor={bgColor} flex={1}>
      <FailModal
        header={i18n.t("retry")}
        text={i18n.t("build_is_not_right")}
        modalVisible={modalVisibility ? modalVisibility : false}
        setModalVisible={navigation.setParams}
      />
      <LevelHeader
        difficulty={difficulty}
        text={i18n.t("build")}
        description={i18n.t(difficulty) + " lv." + level}
        level={level}
      />

      <Divider />
      {/* Find puzzle picture */}
      <Center>
        <Image
          source={{
            uri: `https://backend.esl.staging.decentree.com/files/${data?.kupr_difficulty_levels_aggregate.nodes[0].file}`,
          }}
          indicator={Progress.Circle}
          style={{
            width: 400,
            height: 520,
          }}
          resizeMode="contain"
        />
      </Center>

      <Divider />

      <Button
        onPress={() => {
          if (!newTask) {
            setNewTask({ difficulty: difficulty, level: level, time: { start: start, end: null }, tries: 1 });
          }
          navigation.navigate("Camera");
        }}
        text={i18n.t("done")}
      />
    </View>
  );
};

export default Level;
