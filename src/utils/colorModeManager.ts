import { StorageManager, ColorMode } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const colorModeManager: StorageManager = {
  get: async () => {
    try {
      const val = await AsyncStorage.getItem("@KUPR-color-mode");
      return val === "dark" ? "dark" : "light";
    } catch (e) {
      console.error(e);
      return "light";
    }
  },
  set: async (value: ColorMode) => {
    try {
      await AsyncStorage.setItem("@KUPR-color-mode", value as string);
    } catch (e) {
      console.error(e);
    }
  },
};
