import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import LottieView from "lottie-react-native";

import image from "@/constants/image";
import Form from "@/components/Form/Form";
import { SignUpFormData } from "@/types";
import { SignUpFormSchema } from "@/components/validation/loginvalidation";
import { useAuth } from "@/hooks/useAuth";

const SignUp = () => {
  const {
    control,
    handleSubmit,
  } = useForm<SignUpFormData>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
  });

  const { signUp, isSigningUp } = useAuth();

  const onSubmit = (data: SignUpFormData) => {
    signUp(data);
  };

  return (
    <SafeAreaView className="h-full">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1"
        >
          <ScrollView
            contentContainerClassName="flex-grow"
            keyboardShouldPersistTaps="handled"
          >
            <View className="flex-col h-full bg-white">
              {/* Header */}
              <ImageBackground
                source={image.BackgroundGradient}
                className="w-full"
                resizeMode="cover"
              >
                <TouchableOpacity className="pt-3">
                  <Link href={"/"} replace>
                    <Feather name="chevron-left" size={28} color="black" />
                  </Link>
                </TouchableOpacity>
                <View className="flex-col items-center pt-16">
                  <Image
                    resizeMode="contain"
                    className="size-16"
                    source={image.nectarImageRed}
                  />
                </View>
              </ImageBackground>

              {/* Title */}
              <View className="pt-20 pl-4">
                <Text className="text-4xl font-gilroy-semibold">Sign Up</Text>
                <Text className="pt-2 text-gray-400 text-md font-gilroy-medium">
                  Enter your credentials to continue
                </Text>
              </View>

              {/* Form */}
              <View className="pt-8 space-y-20">
                <Form
                  securetextentry={false}
                  control={control}
                  label="Username"
                  name="username"
                />
                <Form
                  securetextentry={false}
                  control={control}
                  label="Email"
                  name="email"
                />
                <Form
                  securetextentry={true}
                  control={control}
                  label="Password"
                  name="password"
                />
              </View>

       
              <View className="px-4 pt-9">
                <TouchableOpacity
                  onPress={handleSubmit(onSubmit)}
                  disabled={isSigningUp}
                  className="py-6 shadow-md rounded-3xl bg-primary-100 shadow-zinc-300 flex-row justify-center items-center"
                >
                  {isSigningUp && (
                    <LottieView
                      source={require("@/components/Animation/loadinganimation.json")}
                      autoPlay
                      loop
                      style={{ width: 30, height: 30 }}
                    />
                  )}
                  <Text className="ml-2 text-xl text-center text-white font-gilroy-semibold">
                    {isSigningUp ? "Processing..." : "Submit"}
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Footer */}
              <View className="flex-row justify-center flex-1 pt-6">
                <Text className="font-gilroy-bold">Already have an account?</Text>
                <TouchableOpacity>
                  <Text className="px-2 rounded-lg font-gilroy-bold text-primary-100">
                    <Link href={"/(auth)/Login"} replace>
                      Login
                    </Link>
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default SignUp;
