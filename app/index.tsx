import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

import BeachImage from "@/assets/meditation-images/beach.webp";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();
  return (
    <View className="flex-1">
      <ImageBackground
        source={BeachImage}
        resizeMode="cover"
        className="flex-1">
        <LinearGradient
          className="flex-1"
          colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.9)"]}>
          <SafeAreaView className="flex-1 px-1 justify-between">
            <View>
              <Text className="text-center text-white font-bold text-4xl">
                Meditation App
              </Text>
              <Text className="text-center text-white font-regular text-2xl mt-3">
                Simplifying Meditation for Everyone
              </Text>
            </View>
            <CustomButton
              onPress={() => router.push("/nature-meditate")}
              title="Get Started"
            />
            <StatusBar style="light" />
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default Index;
