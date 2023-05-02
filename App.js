import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import c from 'tailwind-react-native-classnames';

export default function App() {
  return (
    <View style={c`flex-1 items-center bg-red-500 justify-center`}>
    <Text style={c`text-2xl font-bold text-gray-800 h-full`}>my first react app</Text>
    <View style={c`text-2xl w-full h-full bg-blue-300 font-bold text-white items-center justify-center flex`}>
      <Text>my file</Text>
    </View>
  </View>
  );
}
