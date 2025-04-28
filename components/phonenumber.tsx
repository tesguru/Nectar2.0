import React, { useRef, useState } from "react";
import { View } from "react-native";
import PhoneInput from "react-native-phone-number-input";

const PhoneNumberInput = () => {
  const phoneInput = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formattedValue, setFormattedValue] = useState("");

  return (
    <View className="px-6 font-gilroy-medium">
      <PhoneInput
        ref={phoneInput}
     // Default country (Nigeria)
        layout="first"
        onChangeText={(text) => setPhoneNumber(text)}
        onChangeFormattedText={(text) => setFormattedValue(text)}
        autoFocus
        disableArrowIcon={true} 
        containerStyle={{
          width: "100%",
          height: 55,  
          backgroundColor: "white", 
          borderBottomWidth: 1,  // ✅ Only bottom border
          borderBottomColor: "#ccc",  // ✅ Light gray border
          borderWidth: 0, 
          borderRadius: 0,
        }}
        textContainerStyle={{
          backgroundColor: "transparent",
          paddingVertical: 0, 
          paddingHorizontal: 0,
          marginLeft:-20, // ✅ Remove extra padding inside input
          borderColor: "transparent",
        }}
        flagButtonStyle={{
          paddingHorizontal: 0, // ✅ Reduce spacing between flag and input
        }}
      />
    </View>
  );
};

export default PhoneNumberInput;
