import { RefreshControl } from "react-native";
import { useContext } from "react";
import { Heading, View, FlatList, Flex, useToast, Image, Text } from "native-base";

import i18n from "../../i18n";

import { usePostsQuery } from "../../graphql";

import ActionButton from "../elements/ActionButton";
import Post from "../elements/Post";

import { StorageContext } from "../../utils/StorageProvider";

import { PostsScreenProp } from "../../screens/PostsScreen";
import { useNavigation } from "@react-navigation/native";

const Posts = () => {
  const { internet } = useContext(StorageContext);
  const navigation = useNavigation<PostsScreenProp>();

  const posts = usePostsQuery();
  const postsData = posts.data?.kupr_posts_aggregate.nodes;

  const toast = useToast();
  const id = "internet-toast";

  const handleRefetch = () => posts.refetch();

  return (
    <View flex={1} flexDirection="column">
      <Flex mx="6%" mb={5} flexDirection="row" alignItems="center" justifyContent="space-between">
        <Heading style={{ fontFamily: "Montserrat_700Bold" }} mb={5} mt={5}>
          {i18n.t("posts")}
        </Heading>
        <ActionButton
          onPress={() => {
            if (internet) {
              navigation.navigate("NewPost");
            } else {
              if (!toast.isActive(id)) {
                toast.show({
                  id,
                  title: "You are offline",
                  duration: 1500,
                });
              }
            }
          }}
        />
      </Flex>
      {!internet ? (
        <Flex alignItems="center" mt="50%">
          <Text
            style={{ fontFamily: "Montserrat_500Medium" }}
            fontSize="md"
            fontWeight="medium"
            color="gray.400"
            px={10}
            textAlign="center">
            {i18n.t("no_internet")}
          </Text>
        </Flex>
      ) : (
        <FlatList
          px="6%"
          data={postsData}
          refreshControl={<RefreshControl refreshing={posts.loading} />}
          refreshing={posts.loading}
          onRefresh={() => handleRefetch()}
          renderItem={(row) => (
            <Post
              key={row.index}
              created={row.item.created_at}
              title={row.item.title}
              description={row.item.description}
              file={row.item.file}
            />
          )}
        />
      )}
    </View>
  );
};

export default Posts;
