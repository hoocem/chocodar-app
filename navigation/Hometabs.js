import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from '../screens/Home';
import CategoryStackNav from '../navigation/CategoryStackNav';
import Cart from '../screens/Cart';
import AuthStackNav from '../navigation/AuthStackNav';
import {theme} from '../common/theme';

const Tab = createBottomTabNavigator();

const Hometabs = () => {
  const cart = useSelector(state => state.cartReducer);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primay,
        tabBarInactiveTintColor: '#606060',
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Ionicons name="home" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoryStackNav}
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="category" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({color}) => (
            <View>
              {!!cart.length && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{cart.length}</Text>
                </View>
              )}
              <Ionicons name="cart" color={color} size={30} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AuthStackNav}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color}) => (
            <Ionicons name="person" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    height: 18,
    width: 18,
    justifyContent: 'center',
    alignItems: 'flex-start',
    color: '#fff',
    position: 'absolute',
    zIndex: 10,
    top: 0,
    right: -2,
    padding: 1,
    backgroundColor: theme.colors.green,
    borderRadius: 8,
  },
  badgeText: {
    alignSelf: 'center',
    color: theme.colors.white,
    fontSize: 13,
  },
});

export default Hometabs;
