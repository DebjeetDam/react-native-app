import { Text, TouchableOpacity, View } from "react-native";
import React, { Component } from "react";

export default function CustomButton({
  title,
  handlePress,
  containerStyles,
  isLoading,
}) {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary-100 rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text className="text-primary font-psemibold text-lg">{title}</Text>
    </TouchableOpacity>
  );
}
