import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Feed from '../screens/Feed';

type RootStackParamsList = {
  Feed: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamsList>();

export default function RootStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="feed"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="feed" component={Feed} />
    </Stack.Navigator>
  );
}
