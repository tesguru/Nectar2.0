import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import image from "@/constants/image";
import FavouriteCard from "@/components/Card/Favouritecard";

const Favourite = () => {
  return (
   <SafeAreaView className="flex-1">
        <Text className="text-center text-xl pt-6 pb-6 font-gilroy-bold">
          My Favourite
        </Text>
        <View className="border-gray-300  border-t" >
         <FavouriteCard
  title="Sprite Can"
  subtitle="35ml, Price"
  price={15}
  imageSrc={image.SpriteBottle}
  onPress={() => console.log("Card pressed!")}
/>
  <FavouriteCard
  title="Diet Coke"
  subtitle="35ml, Price"
  price={15}
  imageSrc={image.coke}
  onPress={() => console.log("Card pressed!")}
/>
  <FavouriteCard
  title="Apple & Grape Juice"
  subtitle="350ml, Price"
  price={15}
  imageSrc={image.appleandjuice}
  onPress={() => console.log("Card pressed!")}
/>
  <FavouriteCard
  title="Coca Cola Can"
  subtitle="35ml, Price"
  price={15}
  imageSrc={image.cocacola}
  onPress={() => console.log("Card pressed!")}
      />

        <FavouriteCard
  title="Pepsi Can"
  subtitle="35ml, Price"
  price={15}
  imageSrc={image.pepsi}
  onPress={() => console.log("Card pressed!")}
      />
        </View>
     
    </SafeAreaView>
  );
};

export default Favourite;
