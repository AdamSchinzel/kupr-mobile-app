import { Button, Flex, Icon, Text } from "native-base";
import { Feather } from "@expo/vector-icons";

import { BRAND_COLOR } from "../../../config/constants";

import i18n from "../../i18n";

interface IActionButtonProps {
  onPress: () => void;
}

const ActionButton = ({ onPress }: IActionButtonProps) => {
  return (
    <Button
      display="flex"
      alignItems="center"
      background={BRAND_COLOR}
      width="120px"
      height="40px"
      borderRadius={50}
      onPress={onPress}>
      <Flex flexDirection="row" justifyContent="center" alignItems="center">
        <Icon as={Feather} name="plus" size="lg" color="#fff" />
        <Text pr={1} color="white" style={{ fontFamily: "Montserrat_600SemiBold" }} fontSize="16px" ml={1}>
          {i18n.t("add")}
        </Text>
      </Flex>
    </Button>
  );
};

export default ActionButton;
