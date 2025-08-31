import { View, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";


interface CategoryProps {
  category: {
    id: string;
    categoryname: string;
    image: ImageSourcePropType; 
    bgcolor: string;
  };
}

const Categories: React.FC<CategoryProps> = ({ category }) => {
  return (
    <View
      className={`flex-col  w-[50%] rounded-xl   mb-4`}
      style={{ backgroundColor: category.bgcolor }}
    >
      <View className="items-center flex-1 flex-cow">
        <Image
          className="size-40"
          resizeMode="contain"
          source={category.image}
        />
      </View>
      {/* Set width & height */}
      <Text className="px-2 pb-6 text-2xl text-center font-giloy-extrabold">
        {category.categoryname}
      </Text>
    </View>
  );
};

export default Categories;
