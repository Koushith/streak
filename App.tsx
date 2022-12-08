import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Rubik_500Medium,
  Rubik_600SemiBold,
  useFonts as useRubik,
} from "@expo-google-fonts/rubik";
import {
  IBMPlexSans_700Bold,
  IBMPlexSans_500Medium,
  useFonts as useIBMSans,
} from "@expo-google-fonts/ibm-plex-sans";
import {
  IBMPlexMono_600SemiBold,
  useFonts as useIBMPlexMono,
} from "@expo-google-fonts/ibm-plex-mono";
import {
  Barlow_600SemiBold,
  Barlow_700Bold,
  useFonts as useBarlow,
} from "@expo-google-fonts/barlow";

import { DashBoardScreen, LoginScreen, RegisterScreen } from "./src/screens";

const Stack = createNativeStackNavigator();

export default function App() {
  const [barlowLoaded] = useBarlow({
    Barlow_600SemiBold,
    Barlow_700Bold,
  });

  const [ibmPlexMonoLoaded] = useIBMPlexMono({
    IBMPlexMono_600SemiBold,
  });

  const [ibmSansLoaded] = useIBMSans({
    IBMPlexSans_700Bold,
    IBMPlexSans_500Medium,
  });

  const [rubikLoaded] = useRubik({
    IBMPlexSans_700Bold,
    IBMPlexSans_500Medium,
  });

  if (!rubikLoaded || !ibmPlexMonoLoaded || !ibmSansLoaded || !barlowLoaded) {
    console.log("herererere");
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Dashboard" component={DashBoardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
