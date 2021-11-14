import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SecondaryHeader from '../components/SecondaryHeader';
import AuthField from '../components/AuthField';
import {theme} from '../common/theme';

const {height} = Dimensions.get('window');

const Signin = ({navigation}) => {
  return (
    <>
      <SecondaryHeader
        name="Login"
        onGoBack={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Welcome,</Text>
        <Text style={styles.subtitle}>Sign in to continue</Text>
        <AuthField placeholder="Email" iconName="mail-outline" />
        <AuthField placeholder="Password" iconName="lock-closed-outline" />
        <Text style={styles.forgotPwText}>Forgot Password?</Text>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.loginWithText}>Or, login with...</Text>
        <View style={styles.socialLoginContainer}>
          <TouchableOpacity style={styles.socialLoginItem}>
            <MaterialIcons name="facebook" size={30} color="#1977F2" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialLoginItem}>
            <Ionicons name="logo-google" size={30} color="#EA4335" />
          </TouchableOpacity>
        </View>
        <View style={styles.newUserContainer}>
          <Text style={styles.newUserText}>I'm a new user, </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signupText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    height: '100%',
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: theme.colors.white,
  },
  title: {
    color: theme.colors.darkGray,
    fontSize: 24,
    fontWeight: '700',
  },
  subtitle: {
    color: theme.colors.gray,
    fontSize: 20,
    fontWeight: '500',
  },
  forgotPwText: {
    alignSelf: 'flex-end',
    marginTop: 10,
    color: theme.colors.blue,
    fontWeight: '500',
  },
  actionButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    height: height * 0.0578,
    width: '100%',
    backgroundColor: theme.colors.primay,
    borderRadius: 10,
  },
  actionButtonText: {
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: '500',
  },
  loginWithText: {
    alignSelf: 'center',
    marginTop: 30,
    color: theme.colors.gray,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  socialLoginItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: theme.colors.gray,
  },
  newUserContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    position: 'absolute',
    bottom: '12%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  newUserText: {
    color: theme.colors.gray,
  },
  signupText: {
    color: theme.colors.primay,
    fontWeight: '500',
  },
});

export default Signin;
