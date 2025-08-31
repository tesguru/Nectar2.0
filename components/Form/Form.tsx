import React from "react";
import { View, Text, TextInput, KeyboardTypeOptions } from "react-native";
import { Controller, Control } from "react-hook-form";

interface FormInputs {
  label: string;
  name: string;
  control: Control<any>;
  keyboardType?: KeyboardTypeOptions;
  securetextentry: boolean;
}

const Form: React.FC<FormInputs> = ({
  label,
  name,
  control,
  keyboardType = "default",
  securetextentry = false,
}) => {
  return (
    <View className="px-4 my-4">
      <Text className="mb-1 text-gray-500 text-md font-gilroy-semibold">
        {label}
      </Text>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <TextInput
              keyboardType={keyboardType}
              value={value}
              secureTextEntry={securetextentry}
              onChangeText={onChange} 
              className="flex-row items-center justify-between py-2 border-b border-gray-300"
            />
            {error && <Text className="text-red-400">{error.message}</Text>}
          </>
        )}
      />
    </View>
  );
};

export default Form;
