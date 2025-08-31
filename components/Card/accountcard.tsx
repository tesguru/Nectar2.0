import React from "react";
import { View, Text, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

type AccountCardProps = {
  title: string;
  price: number | string;
  icon: keyof typeof Feather.glyphMap;  
  onPress?: () => void; 
};

const AccountCard: React.FC<AccountCardProps> = ({
  title,

  icon,
  onPress,
}) => {
  return (
    <Pressable
      className="flex-row items-center justify-between px-6 py-5 border-gray-300 mx-4 border-b"
      onPress={onPress}
    >

      <View>
        <Feather name={icon} size={20} color="black" />
      </View>

      <View className="flex-1 px-4">
        <Text className="font-gilroy-bold">{title}</Text>
      </View>

   
      <View className="flex-row items-center gap-2">
        <Feather name="chevron-right" size={20} color="black" />
      </View>
    </Pressable>
  );
};

export default AccountCard;
