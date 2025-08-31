import React from "react";
import { View, Text, Image, ImageSourcePropType } from "react-native";
import { Feather } from "@expo/vector-icons";

type FavouriteCardProps = {
  title: string;
  subtitle: string;
  price: number | string;
  imageSrc: ImageSourcePropType;
  onPress?: () => void; 
};

const FavouriteCard: React.FC<FavouriteCardProps> = ({
  title,
  subtitle,
  price,
  imageSrc,
  onPress,
}) => {
  return (
    <View
      className="flex-row items-center justify-between px-6 py-5 border-gray-300 mx-4 border-b"
      onTouchEnd={onPress} 
    >
      <View>
        <Image resizeMode="contain" source={imageSrc} className="w-16 h-16" />
      </View>

 
      <View className="flex-1 px-4">
        <Text className="font-gilroy-bold">{title}</Text>
        <Text className="font-gilroy-light">{subtitle}</Text>
      </View>

   
      <View className="flex-row items-center gap-2">
        <Text className="font-gilroy-bold">${price}</Text>
        <Feather name="chevron-right" size={20} color="black" />
      </View>
    </View>
  );
};

export default FavouriteCard;
