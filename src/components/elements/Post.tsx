import { Box, Flex, Text } from "native-base";
import * as Progress from "react-native-progress";
import Image from "react-native-image-progress";

import { formatDate } from "../../utils/formatDate";

interface IPostProps {
  created: string;
  title: string;
  description: string;
  file: string;
}

const Post = ({ created, title, description, file }: IPostProps) => {
  return (
    <Flex bg="white" w="100%" borderRadius={16} mb={5} borderWidth={1} borderColor="lightgray">
      <Image
        borderTopLeftRadius={16}
        borderTopRightRadius={16}
        source={{
          uri: `https://backend.esl.staging.decentree.com/files/${file}`,
        }}
        indicator={Progress.Circle}
        style={{
          width: "100%",
          height: 200,
        }}
        resizeMode="cover"
      />
      <Box p={5}>
        <Flex mb={2} flexDirection="row" alignItems="center" justifyContent="space-between">
          <Text style={{ fontFamily: "Montserrat_600SemiBold" }} maxW={"70%"} fontSize="16px">
            {title}
          </Text>
          <Text style={{ fontFamily: "Montserrat_500Medium" }}>{formatDate(created)}</Text>
        </Flex>
        <Text style={{ fontFamily: "Montserrat_500Medium" }}>{description}</Text>
      </Box>
    </Flex>
  );
};

export default Post;
