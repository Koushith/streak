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
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect } from "react";

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
    Rubik_500Medium,
    Rubik_600SemiBold,
  });

  // const onLayoutRootView = useCallback(async () => {
  //   if (rubikLoaded || ibmPlexMonoLoaded || ibmSansLoaded || barlowLoaded) {
  //     console.log("all fonts loaded");
  //     await SplashScreen.hideAsync();
  //   }
  // }, [rubikLoaded, ibmPlexMonoLoaded, ibmSansLoaded, barlowLoaded]);

  const fontsLoaded = () => {
    if (!rubikLoaded || !ibmPlexMonoLoaded || !ibmSansLoaded || !barlowLoaded) {
      console.log("herererere");
      return null;
    }
  };

  useEffect(() => {
    fontsLoaded();
    console.log("ran on mount");
    console.log(rubikLoaded, ibmPlexMonoLoaded, ibmSansLoaded, barlowLoaded);
  }, [rubikLoaded, ibmPlexMonoLoaded, ibmSansLoaded, barlowLoaded]);

  return (
    <View>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={DashBoardScreen} />
        </Stack.Navigator>
        <ExpoStatusBar style="dark" />
      </NavigationContainer>
    </View>
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
