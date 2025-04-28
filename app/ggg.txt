import image from "@/constants/image";
import { router } from "expo-router";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function home() {
  const handlePress = () => {
    router.push("/(auth)/Signin");
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <ImageBackground source={image.manlogo} className="flex-1 w-full h-full ">
        <View className="flex-col items-center justify-end h-full pb-24">
          <Image
            resizeMode="contain"
            source={image.icon}
            className="pl-3 size-12"
          />
          <Text className="pt-4 text-5xl font-light text-white font-giloy-extrabold">
            Welcome
          </Text>
          <Text className="pt-3 text-5xl font-light text-white font-giloy-extrabold">
            to our store
          </Text>
          <Text className="px-4 text-center text-white font-gilroy-medium">
            Get your groceries in as fast as one hour
          </Text>

          <TouchableOpacity
            className="py-3 rounded-full bg-primary-100 w-80 mt-9"
            onPress={handlePress}
          >
            <Text className="text-lg font-semibold text-center text-white font-gilroy-semibold">
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
