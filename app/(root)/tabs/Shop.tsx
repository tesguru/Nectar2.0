import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import image from "@/constants/image";
import SearchBar from "@/components/Form/SearchBar";
import BannerCarousel from "@/components/Corousels/BannerCarousel";
import { products } from "@/constants/data";
import Products from "@/components/RenderItems/product";
import useAuthStore from "@/store/authStore";
const Shop = () => {
  const { user } = useAuthStore();
  console.log(user);
  return (
    <SafeAreaView className="flex-1">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="items-center pt-12">
          {/* Header */}
          <Image
            resizeMode="contain"
            className="size-8"
            source={image.nectarImageRed}
          />
          <View className="flex-row gap-2 pt-5 pb-6">
            <Text>
              {user?.username}
              <Image
                resizeMode="contain"
                source={image.Exclude}
                className="size-4"
              />
            </Text>
            <Text className="text-xl font-gilroy-medium">Dhaka, Banassre</Text>
          </View>
          <SearchBar />
          <BannerCarousel />
        </View>

        {/* Exclusive Offer Section */}
        <View className="flex-row justify-between w-full px-4 pt-6 pb-3">
          <Text className="text-3xl font-gilroy-bold">Exclusive Offer</Text>
          <Text className="font-gilroy-medium text-md text-primary-100">
            See all
          </Text>
        </View>

        <FlatList
          data={products}
          renderItem={({ item }) => <Products product={item} />}
          keyExtractor={(item) => item.id}
          horizontal
          nestedScrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 20 }}
        />

        {/* Best Selling Section */}
        <View className="flex-row justify-between w-full px-4 pt-4 pb-3">
          <Text className="text-3xl font-gilroy-bold">Best Selling</Text>
          <Text className="font-gilroy-medium text-md text-primary-100">
            See all
          </Text>
        </View>

        <FlatList
          data={products}
          renderItem={({ item }) => <Products product={item} />}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 20 }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Shop;
