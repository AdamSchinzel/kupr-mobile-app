import { Platform } from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

import i18n from "../i18n";

import { useToast } from "native-base";

import uploadFile from "../services/UploadFileService";

import { TOAST_DURATION } from "../../config/constants";

export const useFilesHandler = () => {
  const toast = useToast();

  const [hasPermissions, setHasPermission] = useState<boolean | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const checkPermission = async () => {
    if (Platform.OS === "ios") {
      const cameraRollStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
      setHasPermission(cameraRollStatus.status === "granted" && cameraStatus.status === "granted");
    }
  };

  const pickImage = async (setFieldValue: (input: string, value: string) => void) => {
    await checkPermission();

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    uploadMedia(result, setFieldValue);
  };

  const takePhoto = async (setFieldValue: (input: string, value: string) => void) => {
    await checkPermission();

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
    });

    uploadMedia(result, setFieldValue);
  };

  const uploadMedia = async (media: any, setFieldValue: (input: string, value: string) => void) => {
    if (!media.cancelled) {
      try {
        setIsUploading(true);
        const result = await uploadFile(media);
        const mediaObj = JSON.parse(result || "");
        console.log(mediaObj);
        if (mediaObj && mediaObj.uploaded) {
          setFieldValue("file", mediaObj.id);
          setIsUploading(false);
          toast.show({
            title: i18n.t("msg_upload_success"),
            duration: TOAST_DURATION,
          });
        } else if (mediaObj.message === "File too large (over 30MB)") {
          setIsUploading(false);
          console.log("check7");

          toast.show({
            title: i18n.t("msg_upload_fail"),
            duration: TOAST_DURATION,
          });
        } else {
          console.log("check8");

          setIsUploading(false);
          toast.show({
            title: i18n.t("msg_upload_fail"),
            duration: TOAST_DURATION,
          });
        }
      } catch (error: any) {
        console.log(error);
        toast.show({
          title: i18n.t("msg_fail_title"),
          duration: TOAST_DURATION,
        });
        setIsUploading(false);
      }
    }
  };

  return {
    hasPermissions,
    isUploading,
    checkPermission,
    pickImage,
    takePhoto,
    uploadMedia,
  };
};
