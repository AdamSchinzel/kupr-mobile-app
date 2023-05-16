import NewPost from "../components/templates/NewPost";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";

import LayoutSafeArea from "../components/layouts/LayoutSafeArea";

import { RootStackParamList } from "./RootStackParams";

export type NewPostScreenProp = StackNavigationProp<RootStackParamList, "NewPost">;

const NewPostScreen = () => {
  return (
    <LayoutSafeArea background="#fff">
      <NewPost />
    </LayoutSafeArea>
  );
};

export default NewPostScreen;
