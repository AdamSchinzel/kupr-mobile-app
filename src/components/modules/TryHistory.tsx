import { useState, useContext } from "react";
import { View, FlatList, useColorModeValue, Heading, Box, Text, Flex, Image, Icon } from "native-base";
import { Feather } from "@expo/vector-icons";

import TryItem from "../elements/TryItem";

import i18n from "../../i18n";

import { ILevelType, StorageContext } from "../../utils/StorageProvider";

interface ICardProps {
  heading: string;
}

const TryHistory = ({ heading }: ICardProps) => {
  const { state, clearStorage } = useContext(StorageContext);

  const renderItem = ({ item }: { item: ILevelType }) => <TryItem {...item} />;
  const keyExtractor = (item: ILevelType) => item.time.start.toString();
  const itemSeparator = () => <Box height={6} />;

  return (
    <View flex={1} w="100%" backgroundColor={useColorModeValue("white", "black")} roundedTop={"3xl"} mt={10}>
      <Flex flexDirection="row" alignItems="center" justifyContent="space-between">
        <Heading style={{ fontFamily: "Montserrat_600SemiBold" }} textAlign="left" m={5} ml="6%" mb={7}>
          {heading}
        </Heading>
        {state?.savedLevels.length !== 0 && (
          <Icon as={Feather} name="trash" size={6} mb={2} mr="6%" onPress={clearStorage} />
        )}
      </Flex>

      {state?.savedLevels.length === 0 ? (
        <Flex alignItems="center" mt="12%">
          <Image source={require("../../../assets/empty.png")} size="xl" mb={4} alt="empty history" />
          <Text
            style={{ fontFamily: "Montserrat_500Medium" }}
            fontSize="md"
            fontWeight="medium"
            color="gray.400"
            px={10}
            textAlign="center">
            {i18n.t("empty")}
          </Text>
        </Flex>
      ) : (
        <FlatList
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={itemSeparator}
          data={state?.savedLevels}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default TryHistory;
