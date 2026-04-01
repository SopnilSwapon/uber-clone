import { Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
export default function Onboarding() {
  return (
    <SafeAreaView className='flex h-full items-center justify-between bg-white'>
      <Text style={{ color: 'red' }} className='text-emerald-600'>Hello, Onboarding!</Text>
    </SafeAreaView>
  );
}

