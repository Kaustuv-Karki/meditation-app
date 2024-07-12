import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { GalleryPreviewData } from "@/constants/models/AffirmationCategory";
import { FlatList } from "react-native-gesture-handler";
import { Link } from "expo-router";

interface GuidedAffirmationsGalleryProps {
  title: string;
  preview: GalleryPreviewData[];
}

const GuidedAffirmationsGallery = ({
  title,
  preview,
}: GuidedAffirmationsGalleryProps) => {
  return (
    <View className="my-5">
      <View className="mb-2">
        <Text className="text-white font-bold text-xl">{title}</Text>
      </View>
      <View className="space-y-2">
        <FlatList
          data={preview}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Link href={`/affirmations/${item.id}`} asChild>
              <Pressable>
                <View className="h-32 w-32 rounded-md mr-4 overflow-hidden">
                  <Image
                    source={item.image}
                    resizeMode="cover"
                    className="h-full w-full"
                  />
                </View>
              </Pressable>
            </Link>
          )}
          horizontal
        />
      </View>
    </View>
  );
};

export default GuidedAffirmationsGallery;
