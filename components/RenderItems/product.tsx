import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { ImageSourcePropType } from "react-native"; 
import { Button } from "react-native";
import { router } from "expo-router";


interface ProductInputs {
  product: {
    id: string;
    productname: string;
    details: string;
    price: string;
    image: string | ImageSourcePropType;
  };
}

const Products: React.FC<ProductInputs> = ({ product }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        router.push({
          pathname: "/Products/Viewproducts/id",
          params: { id: product.id },
        });
      }}
    >
      <View className="px-3 pb-3 ml-3 border border-gray-200 rounded-xl">
        <View>
          <Image
            className=" size-40"
            resizeMode="contain"
            source={product.image}
            alt="JJ"
          />
        </View>
        <View className="pl-3">
          <Text className="text-xl font-gilroy-bold text-start">
            {product.productname}
          </Text>
          <Text className="text-xl font-gilroy-light">{product.details}</Text>
        </View>
        <View className="flex-row justify-between pt-9">
          <Text className="text-xl font-giloy-extrabold">${product.price}</Text>
          <TouchableOpacity className="px-4 py-2 rounded-2xl bg-primary-100">
            <Text className="text-2xl font-bold text-white ">+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Products;
