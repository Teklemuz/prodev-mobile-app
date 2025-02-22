import { View, Text, Image, Pressable } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

const Profile = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 p-4">
        <Text className="text-black text-4xl font-normal mb-6">Profile</Text>
        <View className="bg-[#34967C] h-[90px] mb-10 flex-row items-center rounded-md justify-between px-7">
          <View className="flex-row items-center gap-4">
            <Image source={require("@/assets/images/user-image.png")} />
            <View>
              <Text className="font-semibold text-xl text-white">
                Cole Baidoo
              </Text>
              <Text className="text-sm font-thin text-white">@block_cs</Text>
            </View>
          </View>
          <Feather name="edit-3" size={24} color="white" />
        </View>

        {/* Account Options */}
        <View className="h-[350px] gap-3 bg-white rounded-md p-4 mb-4">
          <Pressable className="flex-row items-center justify-between mb-2">
            <View className="flex-row items-center gap-4">
              <View className="w-12 h-12 bg-[#0601B4]/10 items-center justify-center rounded-full">
                <FontAwesome6 name="user" size={24} color="#0601B4" />
              </View>
              <View>
                <Text className="text-lg font-semibold mb-2">My Account</Text>
                <Text className="font-thin text-gray-700">
                  Make Changes to your account
                </Text>
              </View>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
          </Pressable>
          {/* Other Pressable items follow the same pattern */}
        </View>

        {/* More Section */}
        <Text className="text-black text-xl font-normal mb-6">More</Text>
        <View className="h-[139px] gap-3 bg-white rounded-md p-4 mb-4">
          <Pressable className="flex-row items-center justify-between mb-2">
            <View className="flex-row items-center gap-4">
              <View className="w-12 h-12 bg-[#0601B4]/10 items-center justify-center rounded-full">
                <FontAwesome6 name="user" size={24} color="#0601B4" />
              </View>
              <View>
                <Text className="text-lg font-semibold mb-2">My Account</Text>
                <Text className="font-thin text-gray-700">
                  Make Changes to your account
                </Text>
              </View>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
          </Pressable>
          {/* Other Pressable items */}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Profile;