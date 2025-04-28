import React, { useState } from "react";
import { View, Button, Text } from "react-native";

const ChildComponent = ({ handlePress }) => {
  console.log("ChildComponent re-rendered!");
  return <Button title="Press Me" onPress={handlePress} />;
};

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // This function gets re-created every time the component re-renders
  const handlePress = () => {
    console.log("Button Pressed!");
  };

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increase Count" onPress={() => setCount(count + 1)} />
      <ChildComponent handlePress={handlePress} />
    </View>
  );
};

export default ParentComponent;
