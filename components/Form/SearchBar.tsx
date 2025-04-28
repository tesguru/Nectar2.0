import React from "react";
import { View, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View className="flex-row items-center px-2 py-2 mx-4 bg-gray-200 rounded-2xl">
      <AntDesign name="search1" size={20} color="black" className="mr-2" />
      <TextInput
        placeholder="Search Store"
        placeholderTextColor="#888"
        className="flex-1 text-base placeholder:font-gilroy-medium rounded-2xl"
      />
    </View>
  );
};

export default SearchBar;
