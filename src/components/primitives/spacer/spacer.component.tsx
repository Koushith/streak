import { Text, View } from "react-native";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

export const Spacer = () => {
  return (
    <View>
      <Text>Spacer</Text>
    </View>
  );
};
