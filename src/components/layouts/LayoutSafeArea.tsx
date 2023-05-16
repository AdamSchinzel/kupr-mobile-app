import { View } from "native-base";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const LayoutSafeArea = (props: any) => {
  const insets = useSafeAreaInsets();

  return (
    <View {...props} flex={1} paddingTop={insets.top} paddingLeft={insets.left} paddingRight={insets.right}>
      <StatusBar translucent style="dark" />
      {props.children}
    </View>
  );
};

export default LayoutSafeArea;
