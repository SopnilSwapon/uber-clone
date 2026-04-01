import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Swipper from "react-native-swiper";

import CustomButton from "@/components/CustomButton";
import { onboarding } from "@/constant";
import { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Onboarding() {
  const swiperRef = useRef<Swipper>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isLastSlide = activeIndex === onboarding.length - 1;
  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-up");
        }}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>
      <Swipper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="w-[32px] h-[4px] bg-[#E2E8F0] mx-1 rounded-full" />
        }
        activeDot={
          <View className="w-[32px] h-[4px] bg-[#0286ff] mx-1 rounded-full" />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => (
          <View key={item.id} className="flex justify-center items-center p-5">
            <Image
              source={item.image}
              className="w-full h-[300px]"
              resizeMode="contain"
            />
            <View className="flex items-center justify-center p-5">
              <Text className="text-3xl text-center font-bold text-black">
                {item.title}
              </Text>
            </View>
            <Text className="text-center font-JakartaSemiBold text-[#858585] mx-10 mt-3 text-lg">
              {item.description}
            </Text>
          </View>
        ))}
      </Swipper>
      <CustomButton
        title={isLastSlide ? "Get Started" : "Next"}
        onPress={
          isLastSlide
            ? () => router.replace("/(auth)/sign-up")
            : () => swiperRef.current?.scrollBy(1)
        }
        className={"w-[90%] mt-10 mb-5"}
      />
    </SafeAreaView>
  );
}
