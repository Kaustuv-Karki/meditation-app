import { View, Text, ImageBackground, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { GalleryPreviewData } from "@/constants/models/AffirmationCategory";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery";
import AppGradient from "@/components/AppGradient";
import { AntDesign } from "@expo/vector-icons";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";

const AffirmationPractice = () => {
  const { itemid } = useLocalSearchParams();
  const router = useRouter();
  const [affirmation, setAffirmation] = useState<GalleryPreviewData>();
  const [sentences, setSentences] = useState<string[]>([]);
  useEffect(() => {
    for (let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++) {
      const affirmationData = AFFIRMATION_GALLERY[idx].data;
      console.log(itemid);
      const found = affirmationData.find(
        (affirmation) => affirmation.id === Number(itemid)
      );
      if (found) {
        setAffirmation(found);
        const affirmationArray = found.text.split(".");
        if (affirmationArray[affirmationArray.length - 1] === "") {
          affirmationArray.pop();
        }
        setSentences(affirmationArray);
        return;
      }
    }
  }, []);

  console.log(affirmation, AFFIRMATION_GALLERY[0].data);
  return (
    <GestureHandlerRootView className="flex-1">
      <ImageBackground
        source={affirmation?.image}
        resizeMode="cover"
        className="flex-1">
        <AppGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.9)"]}>
          <Pressable
            onPress={() => router.back()}
            className="absolute top-16 left-6">
            <AntDesign name="leftcircleo" size={42} color="white" />
          </Pressable>
          <ScrollView className="mt-20" showsVerticalScrollIndicator={false}>
            <View className="h-full justify-center">
              {sentences.map((sentence, idx) => (
                <Text
                  className="text-white text-3xl mb-12 font-bold text-center"
                  key={idx}>
                  {sentence}.
                </Text>
              ))}
            </View>
          </ScrollView>
        </AppGradient>
      </ImageBackground>
    </GestureHandlerRootView>
  );
};

export default AffirmationPractice;
