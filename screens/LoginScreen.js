import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import react from "react";
import {View, Text, Image, TextInput,TouchableOpacity   } from 'react-native';
import Animated,{ FadeIn, FadeInDown, FadeInUp, FadeOut } from "react-native-reanimated";

export default function Loginscreen() {
const navigation = useNavigation()
    return(
        <View className="bg-white h-full w-full">
            <StatusBar style="light"/>
            <Image className="h-full w-full absolute" source={require('../assets/images/background.png')} />
             
             <View className='flex-row justify-around w-full absolute'>
            <Animated.Image entering={FadeInUp.delay(200).duration(600).springify().damping(3)} className="h-[225] w-[90] " source={require('../assets/images/light.png')} />
            <Animated.Image entering={FadeInUp.delay(200).duration(600).springify().damping(3)} className="h-[165] w-[65] " source={require('../assets/images/light.png')} />
             </View>
             <View className='h-full w-full flex justify-around pt-40 pb-10'>
                <View className='flex items-center'>
                    <Animated.Text entering={FadeInUp.duration(800).springify()} className='text-white font-bold tracking-wider text-5xl'>
                        Login
                    </Animated.Text>
                </View>
                <View className='flex items-center mx-4 space-y-4'>
                    <Animated.View entering={FadeInDown.duration(800).springify().delay(200)} className='bg-black/5 p-5  rounded-2xl w-full '>
                        <TextInput className='text-white'  placeholder="Email" placeholderTextColor={'gray'}/>
                    </Animated.View>
                    <Animated.View entering={FadeInDown.duration(800).springify().delay(400)} className='bg-black/5 p-5 rounded-2xl w-full mb-7'>
                        <TextInput className='text-white' placeholder="Password" placeholderTextColor={'gray'} secureTextEntry/>
                    </Animated.View>
                    <Animated.View entering={FadeInDown.duration(800).springify().delay(600)} className='w-full'>
                        <TouchableOpacity className='w-full bg-sky-300 p-3 rounded-2xl mb-3'>
                       <Text className='text-xl font-bold text-white text-center'>Login</Text>
                        </TouchableOpacity>
                    </Animated.View>
                    <Animated.View entering={FadeInDown.duration(800).springify().delay(800)} className='flex-row justify-center'>
                        <Text className='text-cyan-200'>Don't have an account? </Text>
                        <TouchableOpacity onPress={()=>navigation.push('Signup')}>
                            <Text className='text-sky-600'>SignUp</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </View>
             </View>
             </View>
             
    );
};

