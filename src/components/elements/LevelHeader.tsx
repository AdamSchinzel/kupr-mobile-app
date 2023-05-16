import { useColorModeValue, Heading, HStack, Icon, IconButton, Text, VStack } from "native-base";
import { Feather } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Difficultly, RootStackParamList } from "../../screens/RootStackParams";
import { useContext } from "react";
import { StorageContext } from "../../utils/StorageProvider";

interface IButtonProps {
  text: string;
  description: string;
  difficulty: Difficultly;
  level: number;
  isDetail: boolean;
}

type HomeScreenProp = StackNavigationProp<RootStackParamList, "Level">;

const LevelHeader = ({ text, description, difficulty, level, isDetail }: IButtonProps) => {
  const { resetLevel } = useContext(StorageContext);
  const navigation = useNavigation<HomeScreenProp>();
  const bgColor = useColorModeValue("black", "white");

  return (
    <HStack mt={10} mb={10} justifyContent="center">
      <IconButton
        _pressed={{ opacity: 0.4, backgroundColor: "transparent" }}
        position="absolute"
        left="0"
        ml={3}
        onPress={() => navigation.navigate("Home")}
        icon={<Icon as={Feather} name="arrow-left" color={bgColor} size={7} />}
        borderRadius="full"
      />
      <VStack alignItems="center">
        <Heading style={{ fontFamily: "Montserrat_600SemiBold" }}>{text}</Heading>
        <Text alignSelf="center" style={{ fontFamily: "Montserrat_500Medium" }}>
          {description}
        </Text>
      </VStack>
      {level !== 1 && !isDetail && (
        <IconButton
          _pressed={{ opacity: 0.4, backgroundColor: "transparent" }}
          position="absolute"
          right="0"
          mr={4}
          onPress={() => {
            resetLevel(difficulty);
            navigation.navigate("Home");
          }}
          icon={<Icon as={Feather} name="refresh-cw" color={bgColor} size={7} />}
          borderRadius="full"
        />
      )}
    </HStack>
  );
};

export default LevelHeader;
