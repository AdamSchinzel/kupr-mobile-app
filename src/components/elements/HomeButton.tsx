import { useContext } from "react";
import { Button as NativeButton, Center, Icon, Text, useColorModeValue, useToast } from "native-base";
import { Feather } from "@expo/vector-icons";

import { StorageContext } from "../../utils/StorageProvider";

import i18n from "../../i18n";

interface IButtonProps {
  text: string;
  onPress: () => void;
  icon: string;
  iconColor: string;
}

const HomeButton = ({ iconColor, icon, text, onPress }: IButtonProps) => {
  const { internet } = useContext(StorageContext);
  const bgColor = useColorModeValue("white", "black");
  const toast = useToast();
  const id = "internet-toast";

  return (
    <NativeButton
      _pressed={{ position: "relative", bottom: "2px" }}
      borderRadius={16}
      shadow="1"
      alignContent="center"
      rounded="2xl"
      h="85"
      w="150px"
      backgroundColor={bgColor}
      onPress={() => {
        if (internet) {
          onPress();
        } else {
          if (!toast.isActive(id)) {
            toast.show({
              id,
              title: i18n.t("no_internet"),
              duration: 1500,
            });
          }
        }
      }}>
      <Center>
        <Icon as={Feather} name={icon} size="2xl" color={iconColor} mb={1} />
        <Text style={{ fontFamily: "Montserrat_600SemiBold" }}>{text}</Text>
      </Center>
    </NativeButton>
  );
};

export default HomeButton;
