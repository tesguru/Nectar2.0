import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import image from "@/constants/image";

import ZoneSelector from "@/components/Form/Form";
import { Feather } from "@expo/vector-icons";
import SelectForm from "@/components/Form/SelectForm";
import Form from "@/components/Form/Form";
import { Link, router } from "expo-router";
import { useForm, Controller } from "react-hook-form";
import { LoginFormData } from "@/types";
import { LoginFormSchema } from "@/components/validation/loginvalidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginData } from "@/api/apiservices";
import { useApiMutation } from "@/queryhandler/useMutation";
import LottieView from "lottie-react-native";
import useAuthStore from "@/store/authStore";
const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const {
    mutate: login, // login is coming from here
    isPending,
    data,
  } = useApiMutation(loginData, "Login successfully");

  const { setUser } = useAuthStore();
  const onSubmit = (data: LoginFormData) => {
    login(data, {
      onSuccess: (response) => {
        console.log("Login Successful:", response);

        if (response && response.data) {
          if (response && response.data) {
            setUser(response.data);
            router.push("/(root)/tabs/Shop");
          }
        }
      },
    });
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
            <View className="flex-col h-full bg-white ">
              <ImageBackground
                source={image.BackgroundGradient}
                className="w-full "
                resizeMode="cover"
              >
                <TouchableOpacity className="pt-3">
                  <Feather name="chevron-left" size={28} color="black" />
                </TouchableOpacity>
                <View className="flex-col items-center pt-16 ">
                  <Image
                    resizeMode="contain"
                    className="size-16"
                    source={image.nectarImageRed}
                  />
                </View>
              </ImageBackground>
              <View className="pt-20 pl-4">
                <Text className="text-4xl font-gilroy-semibold">Login</Text>
                <Text className="pt-2 text-gray-400 text-md font-gilroy-medium">
                  Enter your emails and password
                </Text>
              </View>
              <View className="pt-8 space-y-20 ">
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
                  disabled={isPending} // Disable button when loading
                  className={`py-6 shadow-md rounded-3xl bg-primary-100 shadow-zinc-300 flex-row justify-center items-center`}
                >
                  {isPending && (
                    <LottieView
                      source={require("@/components/Animation/loadinganimation.json")} // Adjust path
                      autoPlay
                      loop
                      style={{ width: 30, height: 20 }} // Set small size
                    />
                  )}
                  <Text className="ml-2 text-xl text-center text-white font-gilroy-semibold">
                    {isPending ? "Processing..." : "Submit"}
                  </Text>
                </TouchableOpacity>
              </View>

              <View className="flex-row justify-center flex-1 pt-6">
                <Text className="font-gilroy-bold">Don't have an account?</Text>
                <TouchableOpacity>
                  <Text className="px-2 rounded-lg font-gilroy-bold text-primary-100">
                    <Link href={"/(auth)/SignUp"} replace>
                      Sign Up
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

export default Login;
