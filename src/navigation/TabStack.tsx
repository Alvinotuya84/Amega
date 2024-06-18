import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashBoardScreen from '@/src/screens/Tabs/DashBoardScreen';
import MarketDataScreen from '@/src/screens/Tabs/MarketDataScreen';
import ProfileScreen from '@/src/screens/Tabs/ProfileScreen';

const MainTab = createBottomTabNavigator();

function TabStack() {
  return (
    <MainTab.Navigator>
      <MainTab.Screen name="DashboardScreen" component={DashBoardScreen} />
      <MainTab.Screen name="MarketDataScreen" component={MarketDataScreen} />
      <MainTab.Screen name="ProfileScreen" component={ProfileScreen} />
    </MainTab.Navigator>
  );
}
export default TabStack;
