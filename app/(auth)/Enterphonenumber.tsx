import {
  View,
  Text,
  Image,
  ScrollView,
  Keyboard,
  Animated,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import images from "@/constants/image";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import PhoneNumberInput from "@/components/phonenumber";

const Enterphonenumber = () => {
  const [iconPosition] = useState(new Animated.Value(0));
  const [keyboardVisible, setKeyboardVisible] = useState<boolean>(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
        Animated.timing(iconPosition, {
          toValue: -70,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
        Animated.timing(iconPosition, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [iconPosition]);

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="px-3">
          <View>
            <TouchableOpacity>
              <MaterialIcons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text className="pt-16 text-3xl pl-7 font-giloy-extrabold">
              Enter your mobile number
            </Text>
            <View>
              <Text className="pt-10 text-xl text-gray-300 pl-7 font-giloy-extrabold">
                Mobile number
              </Text>
              <PhoneNumberInput />
            </View>

            <Animated.View
              style={{
                transform: [{ translateY: iconPosition }],
              }}
              className="flex-col items-end justify-end pr-3 mt-[300px]"
            >
              <Image className="size-16" source={images.fowardIcon} />
            </Animated.View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Enterphonenumber;
