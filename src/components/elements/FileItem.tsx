import { TouchableOpacity } from "react-native-gesture-handler";

import { Flex, Icon, Spinner, Text } from "native-base";
import { Feather } from "@expo/vector-icons";

import { BRAND_COLOR } from "@../../../config/constants";

interface IFileItemProps {
  name: string;
  isMoreDelete?: boolean;
  isDownloading?: boolean;
  onPress: () => void;
  onMorePress?: () => void;
}

const FileItem: React.FC<IFileItemProps> = ({ name, isMoreDelete, isDownloading, onPress, onMorePress }) => {
  return (
    <Flex flexDirection="row" alignItems="center" justifyContent="space-between">
      <TouchableOpacity onPress={onPress}>
        <Flex direction="row">
          <Icon as={Feather} name="file" size="md" mr={2} />
          <Text style={{ fontFamily: "Montserrat_400Regular" }} isTruncated maxW={220}>
            {name}
          </Text>
        </Flex>
      </TouchableOpacity>
      <TouchableOpacity disabled={isDownloading} onPress={onMorePress}>
        {isDownloading ? (
          <Spinner />
        ) : (
          <Icon
            as={Feather}
            // @ts-ignore
            color={isMoreDelete && BRAND_COLOR}
            name={"x"}
            size="md"
          />
        )}
      </TouchableOpacity>
    </Flex>
  );
};

export default FileItem;
