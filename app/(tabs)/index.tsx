import { Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
export default function HomeScreen() {
  return (
    <SafeAreaView className='bg-white h-full'>
      <Text className="text-red-600">Hell there</Text>
      <Text className="text-red-600" style={{color: 'red'}}>Hell there</Text>
    </SafeAreaView>
  );
}

