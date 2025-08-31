import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Image } from "react-native";
import image from "@/constants/image";
import { Feather } from "@expo/vector-icons";
import AccountCard from "@/components/Card/accountcard";
import RoundedAvatar from "@/components/RoundedAvatar";

const Account = () => {
  return (
   <SafeAreaView className="flex-1">

    <View className=" flex-row gap-2 p-5 pt-8">
      <RoundedAvatar  source={image.roundedAvatar} />
      <View className="pt-4">
  <Text className="font-gilroy-bold">Afsar Hassan</Text>
  <Text className="font-gilroy-medium">olaogunteslim@gmail.com</Text>
      </View>
    
      </View>


       <View className="border-gray-300 border-t">
  <AccountCard
    title="Orders"
    price={15}
    icon="shopping-bag"
    onPress={() => console.log("Orders pressed!")}
  />
  <AccountCard
    title="My Details"
    price={15}
    icon="user"
    onPress={() => console.log("Details pressed!")}
  />
  <AccountCard
    title="Delivery Address"
    price={15}
    icon="map-pin"
    onPress={() => console.log("Delivery pressed!")}
  />
  <AccountCard
    title="Payment Method"
    price={15}
    icon="credit-card"
    onPress={() => console.log("Payment pressed!")}
  />
  <AccountCard
    title="Promo Card"
    price={15}
    icon="gift"
    onPress={() => console.log("Promo pressed!")}
  />
</View>

     
    </SafeAreaView>
  );
};

export default Account;
