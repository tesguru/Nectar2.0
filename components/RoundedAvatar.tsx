import React from "react";
import { Image, ImageSourcePropType } from "react-native";

type AvatarProps = {
  size?: number;
  source: ImageSourcePropType;
};

const RoundedAvatar: React.FC<AvatarProps> = ({ size = 60, source }) => {
  return (
    <Image
      source={source}
      className="rounded-full"
      style={{ width: size, height: size }}
    />
  );
};

export default RoundedAvatar;
