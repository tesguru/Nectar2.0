import image from '@/constants/image';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';


const BellPepperCard = () => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <View className="bg-white flex rounded-xl overflow-hidden w-40 m-2.5 shadow shadow-black/10 shadow-offset-[0px]/[2px] shadow-radius-1 elevation-3">
      <Image
        source={image.Beverages}
        className="w-full h-28"
      />
      <View className="p-3 ">
        <Text className="text-base font-semibold mb-1 text-gray-800">Bell Pepper Red</Text>
        <Text className="text-sm text-gray-600 mb-1">1kg</Text>
        <Text className="text-lg font-bold text-green-700 mb-3">$4.99</Text>
        
        <View className="flex-row items-center justify-between">
          <TouchableOpacity 
            className={`w-8 h-8 rounded-full bg-gray-100 items-center justify-center ${quantity === 0 ? 'opacity-50' : ''}`}
            onPress={decrementQuantity}
            disabled={quantity === 0}
          >
            <Text className="text-lg font-bold text-gray-700">-</Text>
          </TouchableOpacity>
          
          <View className="min-w-10 items-center">
            <Text className="text-base font-medium">{quantity}</Text>
          </View>
          
          <TouchableOpacity 
            className="w-8 h-8 rounded-full bg-gray-100 items-center justify-center"
            onPress={incrementQuantity}
          >
            <Text className="text-lg font-bold text-gray-700">+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BellPepperCard;