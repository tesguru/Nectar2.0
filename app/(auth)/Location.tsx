import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import image from "@/constants/image";

import ZoneSelector from "@/components/Form/Form";
import { Feather } from "@expo/vector-icons";
import SelectForm from "@/components/Form/SelectForm";

const Location = () => {
  return (
    <SafeAreaView className="h-full">
      <View className="flex-col h-full bg-white ">
        <ImageBackground
          source={image.BackgroundGradient}
          className="w-full "
          resizeMode="cover"
        >
          <TouchableOpacity className="pt-3">
            <Feather name="chevron-left" size={28} color="black" />
          </TouchableOpacity>
          <View className="flex-col items-center pt-20 ">
            <Image
              resizeMode="contain"
              className="size-[200px]"
              source={image.maplocation}
            />
          </View>
        </ImageBackground>
        <View>
          <Text className="text-3xl text-center font-gilroy-semibold">
            Select Your Location
          </Text>
          <Text className="px-8 pt-2 text-xl text-center text-gray-400 font-gilroy-medium">
            Switch on your location to stay in tune with what’s happening in
            your area
          </Text>
        </View>
        <View className="pt-8 space-y-20 ">
          <SelectForm />
          <SelectForm />
        </View>
        <View className="px-4 pt-9">
          <TouchableOpacity className="py-6 shadow-md rounded-3xl bg-primary-100 shadow-zinc-300">
            <Text className="text-xl text-center text-white font-gilroy-semibold">
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Location;
