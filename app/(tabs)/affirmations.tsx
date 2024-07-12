import { View, Text, ScrollView, FlatList } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery";
import GuidedAffirmationsGallery from "@/components/GuidedAffirmationsGallery";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Affirmations = () => {
  return (
    <GestureHandlerRootView className="flex-1">
      <AppGradient colors={["#3D7EAA", "#FFE47A"]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className="text-zinc-50 text-3xl  font-bold">
            These are the positive affirmations
          </Text>
          <View>
            {AFFIRMATION_GALLERY.map((gallery) => (
              <GuidedAffirmationsGallery
                key={gallery.title}
                title={gallery.title}
                preview={gallery.data}
              />
            ))}
          </View>
        </ScrollView>
      </AppGradient>
    </GestureHandlerRootView>
  );
};

export default Affirmations;
