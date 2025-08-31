// hooks/useAuth.ts
import { router } from "expo-router";
import { useMutation } from "@tanstack/react-query";
import { loginData, createUser } from "@/api/apiservices";
import useAuthStore from "@/store/authStore";
import { LoginFormData, SignUpFormData } from "@/types";
import { handleApiSuccess, handleApiError } from "@/api/apiResponse";

export const useAuth = () => {
  const { setUser } = useAuthStore();
  const loginMutation = useMutation({
    mutationFn: (formData: LoginFormData) => loginData(formData),
    onSuccess: (response) => {
      if (response?.data) {
        setUser(response.data);
        handleApiSuccess("Login successful");
        router.push("/(root)/tabs/Shop");
      }
    },
    onError: (error) => {
      handleApiError(error);
    },
  });

  /** ---------------- SIGNUP ---------------- */
  const signUpMutation = useMutation({
    mutationFn: (formData: SignUpFormData) => createUser(formData),
    onSuccess: (response) => {
      if (response?.data) {
        handleApiSuccess("Account created successfully");
        router.push("/(auth)/Login");
      }
    },
    onError: (error) => {
      handleApiError(error);
    },
  });

  return {
    // Login
    login: loginMutation.mutate,
    isLoggingIn: loginMutation.isPending,

    // Sign Up
    signUp: signUpMutation.mutate,
    isSigningUp: signUpMutation.isPending,
  };
};
