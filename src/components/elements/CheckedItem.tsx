import { HStack, Icon, Text } from "native-base";
import { Feather } from "@expo/vector-icons";

const CheckedItem = ({ text, type }: { text: string; type: string }) => {
  return (
    <HStack space={2}>
      <Icon as={Feather} name={type === "solve" ? "check" : "clock"} size="md" />
      <Text style={{ fontFamily: "Montserrat_500Medium" }}>{text}</Text>
    </HStack>
  );
};

export default CheckedItem;
