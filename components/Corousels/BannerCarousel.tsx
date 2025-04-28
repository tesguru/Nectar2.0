import React, { useRef, useState } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import Swiper from "react-native-swiper";
import { BannerData } from "@/constants/data";
import image from "@/constants/image";

const BannerCarousel = () => {
  const swipeRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View className="h-40 px-2">
      <Swiper
        ref={swipeRef}
        loop={false}
        autoplay
        dot={
          <View className=" w-[4px] -mb-8  h-[4px] rounded-full bg-gray-400 mx-1" />
        }
        activeDot={
          <View className="w-[20px] -mb-8  h-[4px] rounded-full bg-primary-100 mx-1" />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
        containerStyle={{ justifyContent: "center" }}
      >
        {BannerData.map((item) => (
          <View key={item.id} className="items-center justify-center">
            <ImageBackground
              className="w-full h-48 mt-6 overflow-hidden rounded-lg bg-gray-50"
              resizeMode="contain"
              source={image.BannerBackground}
            >
              <View className="relative flex-row items-center justify-center h-full">
                <Image
                  className="absolute left-0 size-40 "
                  resizeMode="contain"
                  source={item.image}
                />
                <View className="pl-40">
                  <Text className="text-2xl font-giloy-extrabold">
                    {item.title}
                  </Text>
                  <Text className="font-giloy-extrabold text-primary-100">
                    {item.discount}
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default BannerCarousel;
