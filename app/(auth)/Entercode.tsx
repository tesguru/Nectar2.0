import {
  View,
  Text,
  Image,
  ScrollView,
  Keyboard,
  Animated,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import images from "@/constants/image";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { SafeAreaView } from "react-native-safe-area-context";

const EnterCode = () => {
  const [iconPosition] = useState(new Animated.Value(0));
  const [keyboardVisible, setKeyboardVisible] = useState<boolean>(false);
  const [code, setCode] = useState("");

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
        Animated.timing(iconPosition, {
          toValue: -120,
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
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View className="px-3">
            {/* Back Button */}
            <TouchableOpacity>
              <MaterialIcons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>

            {/* Title */}
            <Text className="pt-16 text-3xl pl-7 font-giloy-extrabold">
              Enter your 4-digit Code
            </Text>

            {/* Description */}
            <Text className="pt-10 pl-4 text-xl text-gray-500 text-start font-giloy-extrabold">
              Code
            </Text>

            {/* Input Field */}
            <View className="w-70 h-[55px] bg-white border-b border-gray-300 mt-2">
              <TextInput
                className="flex-1 px-4 text-lg tracking-widest"
                keyboardType="numeric"
                placeholder="----"
                value={code}
                onChangeText={setCode}
                maxLength={5}
                autoFocus
              />
            </View>

            {/* Animated Forward Button */}
            <Animated.View
              style={{
                transform: [{ translateY: iconPosition }],
              }}
              className="flex-col items-end justify-end pr-3 mt-[300px]"
            >
              <TouchableOpacity disabled={code.length < 4}>
                <Image className="size-16" source={images.fowardIcon} />
              </TouchableOpacity>
            </Animated.View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default EnterCode;
