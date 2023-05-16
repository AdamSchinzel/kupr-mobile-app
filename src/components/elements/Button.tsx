import { Button as NativeButton, Text } from "native-base";

import { BRAND_COLOR } from "../../../config/constants";

interface IButtonProps {
  text: string;
  full?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  onPress: () => void;
}

const Button = ({ text, full, isLoading, isDisabled, onPress }: IButtonProps) => {
  return (
    <NativeButton
      isDisabled={isDisabled}
      isLoading={isLoading}
      m="auto"
      backgroundColor={BRAND_COLOR}
      alignSelf="center"
      p={4}
      rounded={20}
      w={full ? "100%" : "88%"}
      colorScheme={"blue"}
      onPress={onPress}>
      <Text color={"white"} style={{ fontFamily: "Montserrat_600SemiBold" }} fontSize="18px">
        {text}
      </Text>
    </NativeButton>
  );
};

export default Button;
