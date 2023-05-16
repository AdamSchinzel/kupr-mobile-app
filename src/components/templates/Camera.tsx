import { Linking } from "react-native";
import { useState, useContext, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { Text, View, Spinner, HStack, VStack, Alert, Button } from "native-base";

import { useNavigation } from "@react-navigation/native";
import { CameraNavigationProp } from "../../screens/CameraScreen";
import { Difficultly } from "../../screens/RootStackParams";

import i18n from "../../i18n";

import { ILevelType, StorageContext } from "../../utils/StorageProvider";

import { BRAND_COLOR } from "../../../config/constants";

import { uploadViaFetch } from "../../services/imageUpload";

const Camera = () => {
  const navigation = useNavigation<CameraNavigationProp>();
  const [hasPermissions, setHasPermission] = useState<boolean | null>(null);

  const { setNewTask, newTask } = useContext(StorageContext);

  const openSettings = () => {
    Linking.openSettings();
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      checkPhoto();
    });

    return unsubscribe;
  }, [navigation]);

  const checkPhoto = async () => {
    const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
    setHasPermission(cameraStatus.status === "granted");

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      const res = await uploadViaFetch(result, `${newTask?.difficulty}-${newTask?.level}.png`);
      if (res.match) {
        setNewTask({ ...(newTask as ILevelType), time: { start: newTask?.time.start as Date, end: new Date() } });
        navigation.push("Success");
      } else {
        setNewTask({
          ...(newTask as ILevelType),
          tries: (newTask?.tries as number) + 1,
        });
        navigation.navigate("Level", {
          difficulty: newTask?.difficulty as Difficultly,
          level: newTask?.level as number,
          modalVisible: true,
        });
      }
    } else {
      navigation.goBack();
    }
  };

  return (
    <>
      <View flex={1} justifyContent="center" alignItems="center">
        <HStack space={2} justifyContent="center">
          <Spinner accessibilityLabel="Loading result" size="lg" color={BRAND_COLOR} />
        </HStack>
      </View>
      {hasPermissions === false && (
        <Alert status="error">
          <VStack space={2} flexShrink={1} w="100%">
            <HStack space={4} alignItems="center" justifyContent="flex-start">
              <Alert.Icon />
              <Text fontWeight="medium" fontSize="md">
                {i18n.t("upload_permission_missing")}
              </Text>
            </HStack>
            <Text pl="8">{i18n.t("upload_permission_missing_enable")}</Text>
            <Button ml="8" onPress={openSettings}>
              {i18n.t("open_settings")}
            </Button>
          </VStack>
        </Alert>
      )}
    </>
  );
};

export default Camera;
