import { StackNavigationProp } from "@react-navigation/stack";

import LayoutSafeArea from "../components/layouts/LayoutSafeArea";
import Posts from "../components/templates/Posts";

import { RootStackParamList } from "./RootStackParams";

export type PostsScreenProp = StackNavigationProp<RootStackParamList, "Posts">;

const PostsScreen = () => {
  return (
    <LayoutSafeArea background="#F7F7FC">
      <Posts />
    </LayoutSafeArea>
  );
};

export default PostsScreen;
