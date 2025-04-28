import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SelectForm = () => {
  const [zone, setZone] = useState<string>("Banasree");

  const handleZoneChange = (newZone: string) => {
    setZone(newZone);
  };

  return (
    <View className="px-4 my-4">
      <Text className="mb-1 text-gray-500 text-md font-gilroy-semibold">
        Your Zone
      </Text>
      <TouchableOpacity className="flex-row items-center justify-between py-2 border-b border-gray-300">
        <Text className="text-base text-black font-gilroy-semibold">
          {zone}
        </Text>
        <AntDesign name="down" size={16} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

export default SelectForm;
