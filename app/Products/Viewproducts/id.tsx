import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { products } from "@/constants/data";

const id = () => {
  const { id } = useLocalSearchParams();
  const getproducts = products;
  const productDetails = getproducts.find((product) => product.id === id);
  const [count, setCount] = useState<number>(1);

  return (
    <SafeAreaView className="flex-1">
      <View className="px-4">
        <View className="bg-[#f3f7f3]  rounded-b-xl">
          <View className="flex-row justify-between pt-4">
           <TouchableOpacity className="">
                              <Link href={"/(root)/tabs/Explore"} replace>
                                <Feather name="chevron-left" size={30} color="black" />
                              </Link>
                          
                          </TouchableOpacity>
            <Feather name="download" size={28} color="black" />
          </View>
          <View className="">
            <Image resizeMode="contain" source={productDetails?.image} />
          </View>
        </View>
        <View className="pt-4 border-b border-gray-200">
          <View className="flex-row justify-between">
            <View className="">
              <Text className="text-2xl font-giloy-extrabold">
                {productDetails?.productname}
              </Text>
              <Text className="font-gilroy-light">1kg. Price</Text>
            </View>
            <View>
              <Feather name="chevron-right" size={28} color="black" />
            </View>
          </View>
          <View className="flex-row justify-between py-6">
            <View className="flex-row justify-between gap-6">
              <TouchableWithoutFeedback
                onPress={() => {
                  setCount(count - 1);
                }}
              >
                <Text className="text-3xl text-gray-black font-giloy-extrabold ">
                  -
                </Text>
              </TouchableWithoutFeedback>
              <Text className="p-2 px-4 border border-gray-200 rounded-xl font-gilroy-medium">
                {count}
              </Text>
              <TouchableWithoutFeedback
                className=""
                onPress={() => {
                  setCount(count + 1);
                }}
              >
                <Text className="text-3xl text-primary-100 text-gray-black font-giloy-extrabold ">
                  +
                </Text>
              </TouchableWithoutFeedback>
            </View>
            <Text className="text-xl font-giloy-extrabold">
              ${productDetails?.price}
            </Text>
          </View>
        </View>

        <View className="pt-6 border-b border-gray-200 ">
          <View className="pb-4">
            <View className="flex-row justify-between ">
              <Text className="text-2xl font-giloy-extrabold">
                Product Details
              </Text>
              <Feather name="chevron-down" size={20} color="black" />
            </View>
            <Text className="pt-2 font-gilroy-light">
              {productDetails?.description}
            </Text>
          </View>
        </View>
        <View className="pt-4">
          <View className="flex-row justify-between pb-6">
            <Text className="text-2xl font-giloy-extrabold">Nutrition</Text>
            <View className="flex-row justify-between gap-4">
              <TouchableWithoutFeedback className="bg-gray-300">
                <Text className="p-2 px-4 border border-gray-200 rounded-xl">
                  100gr
                </Text>
              </TouchableWithoutFeedback>
              <Feather name="chevron-down" size={20} color="black" />
            </View>
          </View>
        </View>
        <View className="pt-4 border-b border-gray-200">
          <View className="flex-row justify-between pb-6">
            <Text className="text-2xl font-giloy-extrabold">Review</Text>
            <View className="flex-row justify-between gap-4">
              <View className="flex-row gap-2">
                <TouchableWithoutFeedback className="bg-gray-300">
                  <Feather
                    className="text-black"
                    name="star"
                    size={28}
                    color="black"
                  />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback className="bg-gray-300">
                  <Feather className="" name="star" size={28} color="black" />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback className="bg-gray-300">
                  <Feather className="" name="star" size={28} color="black" />
                </TouchableWithoutFeedback>
              </View>
              <Feather
                className=""
                name="chevron-right"
                size={28}
                color="black"
              />
            </View>
          </View>
        </View>
        <View className="pt-3 ">
          <TouchableOpacity
            className={`py-6 shadow-md rounded-3xl bg-primary-100 shadow-zinc-300 flex-row justify-center items-center`}
          >
            <Text className="ml-2 text-xl text-center text-white font-gilroy-semibold">
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default id;
