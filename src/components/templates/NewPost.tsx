import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Icon,
  IconButton,
  Input,
  Menu,
  Text,
  TextArea,
  VStack,
  WarningOutlineIcon,
} from "native-base";
import { Formik } from "formik";
import { Feather } from "@expo/vector-icons";
import ImageView from "react-native-image-viewing";

import { useAddPostMutation, usePostsQuery } from "../../graphql";

import SubmitButton from "../elements/Button";
import FileItem from "../elements/FileItem";

import { NewPostScreenProp } from "../../screens/NewPostScreen";
import { useNavigation } from "@react-navigation/native";

import { useFilesHandler } from "../../hooks/useFilesHandler.ts";

import i18n from "../../i18n";

import { BRAND_COLOR, STORAGE_ENDPOINT } from "../../../config/constants";

interface INewPostInputProps {
  title: string;
  content: string;
  file: string;
}

const validate = (values: INewPostInputProps) => {
  const errors: any = {};

  if (values.title.length < 1) {
    errors.title = i18n.t("msg_field_required");
  }

  if (values.content.length < 1) {
    errors.content = i18n.t("msg_field_required");
  }

  if (values.file === "") {
    errors.file = i18n.t("msg_field_required");
  }

  return errors;
};

const NewPost = () => {
  const [savePost] = useAddPostMutation();

  const { isUploading, pickImage, takePhoto } = useFilesHandler();

  const navigation = useNavigation<NewPostScreenProp>();

  const [showDetailPhoto, setShowDetailPhoto] = useState<boolean>(false);

  const posts = usePostsQuery();

  const handleRefetch = () => posts.refetch();

  const handleDelete = (setFieldValue: (input: string, value: string) => void) => {
    setFieldValue("file", "");
  };

  return (
    <Flex mx="3%">
      <Flex flexDirection="row">
        <IconButton
          _pressed={{ opacity: 0.4, backgroundColor: "transparent" }}
          onPress={() => navigation.navigate("Posts")}
          icon={<Icon as={Feather} name="arrow-left" color="black" size={7} />}
          borderRadius="full"
        />
        <Heading style={{ fontFamily: "Montserrat_700Bold" }} m={5}>
          {i18n.t("new_post")}
        </Heading>
      </Flex>
      <Formik
        initialValues={{
          title: "",
          content: "",
          file: "",
        }}
        validate={validate}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={async (values) => {
          const result = await savePost({
            variables: {
              title: values.title,
              description: values.content,
              file: values.file,
            },
          });
          if (result) {
            handleRefetch();
            navigation.navigate("Posts");
          }
        }}>
        {({
          handleChange,
          handleBlur,
          submitForm,
          values,
          errors,
          isValid,
          validateForm,
          isSubmitting,
          setFieldValue,
        }) => (
          <VStack mt={5} space={4} mx={3}>
            <ImageView
              images={[{ uri: STORAGE_ENDPOINT + values.file }]}
              imageIndex={0}
              visible={showDetailPhoto}
              onRequestClose={() => setShowDetailPhoto(false)}
            />
            <FormControl isRequired isInvalid={errors.title != null && errors.title.length > 0}>
              <Text mb={1} style={{ fontFamily: "Montserrat_600SemiBold" }}>
                {i18n.t("title")}
              </Text>
              <Input
                style={{ fontFamily: "Montserrat_500Medium" }}
                borderRadius={16}
                size="lg"
                py={4}
                placeholder={i18n.t("title")}
                onChangeText={handleChange("title")}
                onBlur={handleBlur("title")}
                value={values.title}
              />
              {errors.title != null && errors.title.length > 0 && (
                <Flex flexDirection="row" alignItems="center">
                  <WarningOutlineIcon size="sm" color="red.500" mr={1.5} position="relative" top={0.5} />
                  <Text mt={1} color="red.500" style={{ fontFamily: "Montserrat_500Medium" }}>
                    {errors.title}
                  </Text>
                </Flex>
              )}
            </FormControl>
            <FormControl isRequired isInvalid={errors.content != null && errors.content.length > 0} mb={5}>
              <Text mb={1} style={{ fontFamily: "Montserrat_600SemiBold" }}>
                {i18n.t("content")}
              </Text>
              <TextArea
                style={{ fontFamily: "Montserrat_500Medium" }}
                isInvalid={errors.content != null && errors.content.length > 0}
                borderWidth={1}
                borderRadius={16}
                size="lg"
                py={4}
                h={40}
                placeholder={i18n.t("content")}
                onChangeText={handleChange("content")}
                onBlur={handleBlur("content")}
                value={values.content}
              />
              {errors.content != null && errors.content.length > 0 && (
                <Flex flexDirection="row" alignItems="center">
                  <WarningOutlineIcon size="sm" color="red.500" mr={1.5} position="relative" top={0.5} />
                  <Text mt={1} color="red.500" style={{ fontFamily: "Montserrat_500Medium" }}>
                    {errors.content}
                  </Text>
                </Flex>
              )}
            </FormControl>
            <FormControl isRequired isInvalid={errors.file != null && errors.file.length > 0} mb={5}>
              <Flex alignItems="center" flexDirection="row" justifyContent="space-between" mb={2}>
                <Text style={{ fontFamily: "Montserrat_600SemiBold" }}>{i18n.t("attached")}</Text>
                <Box>
                  <Menu
                    w="100%"
                    defaultIsOpen={false}
                    trigger={(triggerProps) => {
                      return (
                        <Button size="8" isLoading={isUploading} variant="subtle" {...triggerProps}>
                          <Icon as={Feather} name="plus" size="md" color={BRAND_COLOR} />
                        </Button>
                      );
                    }}>
                    <Menu.Item onPress={() => pickImage(setFieldValue)}>{i18n.t("from_gallery")}</Menu.Item>
                    <Menu.Item onPress={() => takePhoto(setFieldValue)}>{i18n.t("take_photo")}</Menu.Item>
                  </Menu>
                </Box>
              </Flex>
              {values.file === "" ? (
                <Text style={{ fontFamily: "Montserrat_400Regular" }} fontSize="md" italic mb={3}>
                  {i18n.t("no_file_uploaded")}
                </Text>
              ) : (
                <Box mb={3}>
                  <FileItem
                    name={i18n.t("file")}
                    onPress={() => setShowDetailPhoto(true)}
                    isDownloading={isUploading}
                    onMorePress={() => handleDelete(setFieldValue)}
                    isMoreDelete
                  />
                </Box>
              )}
              {errors.file != null && errors.file.length > 0 && (
                <Flex flexDirection="row" alignItems="center">
                  <WarningOutlineIcon size="sm" color="red.500" mr={1.5} position="relative" top={0.5} />
                  <Text mt={1} color="red.500" style={{ fontFamily: "Montserrat_500Medium" }}>
                    {errors.file}
                  </Text>
                </Flex>
              )}
            </FormControl>
            <SubmitButton
              isDisabled={isUploading}
              full
              isLoading={isSubmitting}
              onPress={() => {
                validateForm(values);
                if (isValid) submitForm();
              }}
              text={i18n.t("create")}
            />
          </VStack>
        )}
      </Formik>
    </Flex>
  );
};
export default NewPost;
