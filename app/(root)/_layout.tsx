import React from "react";
import { Tabs } from "expo-router";
import { Image, Text, View } from "react-native";
import image from "@/constants/image";

const TabLayout = () => {
  const TabIcon = ({
    focused,
    icon,
    title,
  }: {
    focused: boolean;
    icon: any;
    title: string;
  }) => (
    <View className="flex flex-col items-center flex-1">
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 24,
          height: 24,
          tintColor: focused ? "#53B175" : "black",
          opacity: focused ? 1 : 0.8, 
          transform: [{ scale: focused ? 1.1 : 1 }],
        }}
      />

      <Text
        className={`${
          focused
            ? "text-primary-100 font-giloy-extrabold"
            : "text-black font-giloy-extrabold"
        } text-xs w-full text-center mt-1`}
      >
        {title}
      </Text>
    </View>
  );

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          minHeight: 70,
          paddingTop: 12,
        },
      }}
    >
      <Tabs.Screen
        name="tabs/Shop"
        options={{
          title: "Shop",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={image.Shop} title="Shop" />
          ),
        }}
      />
      <Tabs.Screen
        name="tabs/Explore"
        options={{
          title: "Explore",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={image.Explore} title="Explore" />
          ),
        }}
      />
     
      <Tabs.Screen
        name="tabs/Favourite"
        options={{
          title: "Favourite",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={image.Favourite}
              title="Favourite"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="tabs/Account"
        options={{
          title: "Account",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={image.Account} title="Account" />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
