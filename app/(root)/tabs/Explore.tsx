import { View, Text, SafeAreaView, FlatList } from "react-native";
import SearchBar from "@/components/Form/SearchBar";
import { categories } from "@/constants/data";
import Categories from "@/components/RenderItems/categories";

const Explore = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="items-center pt-12 pb-4">
        <Text className="pb-3 text-2xl font-giloy-extrabold">
          Find Products
        </Text>
        <SearchBar />
      </View>
      <View className="flex-1">
        <FlatList
          data={categories}
          renderItem={({ item }) => <Categories category={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
          numColumns={2}
          contentContainerStyle={{ paddingHorizontal: 11, paddingBottom: 20 }}
          columnWrapperStyle={{ justifyContent: "space-between", gap: 8 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Explore;
