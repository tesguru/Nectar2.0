import { Stack } from "expo-router";
import "./global.css";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Toast from "react-native-toast-message";
import { LogBox } from "react-native";
import { StatusBar } from "expo-status-bar"; // Import StatusBar

// LogBox.ignoreAllLogs(true); // Hide logs in UI

// const originalConsoleWarn = console.warn;
// console.warn = (...args) => {
//   console.log("⚠️ LOG:", ...args); // Show logs in terminal
//   originalConsoleWarn(...args);
// };

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Gilroy-Bold": require("../assets/fonts/Gilroy-Bold.ttf"),
    "Gilroy-ExtraBold": require("../assets/fonts/Gilroy-ExtraBold.otf"),
    "Gilroy-Light": require("../assets/fonts/Gilroy-Light.ttf"),
    "Gilroy-Medium": require("../assets/fonts/Gilroy-Medium.ttf"),
    "Gilroy-Regular": require("../assets/fonts/Gilroy-Regular.ttf"),
    "Gilroy-SemiBold": require("../assets/fonts/Gilroy-SemiBold.ttf"),
  });
  const queryClient = new QueryClient();
  useEffect(() => {
    async function prepare() {
      // Prevent hiding before fonts load
      if (fontsLoaded) {
        await SplashScreen.hideAsync(); // Hide when fonts are ready
      }
    }
    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Stack screenOptions={{ headerShown: false }} />
        <Toast />
      </QueryClientProvider>
    </>
  );
}
