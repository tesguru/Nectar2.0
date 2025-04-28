import PhoneNumberInput from '@/components/phonenumber';
import images from '@/constants/image';
import React from 'react';
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const Signin = () => {
  return (
 <SafeAreaView className="h-full bg-white ">
  <ScrollView contentContainerClassName="h-full">
    <View className="bg-white">

      <View className="relative">
     <Image className="w-full h-80" source={images.nectarImage}/>
     <Image  className="absolute top-2 right-[60px] size-12" source={images.nectarRotate}></Image>
     </View>
     <Text className="text-3xl pl-[20px] pt-10 leading-[40px] font-gilroy-semibold pb-4">
  Get your groceries{"\n"}with nectar
</Text>
     <PhoneNumberInput/>
     <Text className="pt-10 pb-10 text-center text-black-100 font-gilroy-medium">Or connect with social media</Text>
     <View className="px-8">
     <TouchableOpacity className="py-6 mb-5 text-white shadow-md rounded-2xl bg-info-100 shadow-zinc-300">
    <View className="flex flex-row items-center gap-8 pl-6 ">
    <Image resizeMode="contain"  className="w-6 h-6" source={images.google}></Image>
    <Text className="ml-2 text-xl text-white font-gilroy-semibold">Continue with Google</Text>
    </View>
  </TouchableOpacity>
  <TouchableOpacity className="py-6 shadow-md rounded-2xl bg-info-200 shadow-zinc-300">
    <View className="flex flex-row items-center gap-8 pl-6">
    <Image resizeMode="contain"  className="w-5 h-6" source={images.facebook}></Image>
    <Text className="ml-2 text-xl text-white font-gilroy-semibold">Continue with Facebook</Text>
    </View>
  </TouchableOpacity>
  </View>
    </View>
  </ScrollView>
 </SafeAreaView>
  )
}

export default Signin