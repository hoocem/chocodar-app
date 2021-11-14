import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SecondaryHeader from '../components/SecondaryHeader';
import RadioButton from '../components/RadioButton';
import AuthField from '../components/AuthField';
import {theme} from '../common/theme';

const {height} = Dimensions.get('window');

const Signup = ({navigation}) => {
  return (
    <>
      <SecondaryHeader
        name="Sign up"
        onGoBack={() => {
          navigation.goBack();
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.contentContainer}>
        <Text style={styles.title}>Create Account,</Text>
        <Text style={styles.subtitle}>Sign up to get started</Text>
        <View style={styles.genderContainer}>
          <FontAwesome name="transgender" size={25} color={theme.colors.gray} />
          <RadioButton selected={true} name="Male" style={styles.radioBtn} />
          <RadioButton name="Female" style={styles.radioBtn} />
        </View>
        <AuthField iconName="person-outline" placeholder="First Name" />
        <AuthField iconName="person-outline" placeholder="Last Name" />
        <AuthField iconName="mail-outline" placeholder="Email" />
        <AuthField iconName="lock-closed-outline" placeholder="Password" />
        <AuthField iconName="call-outline" placeholder="Phone" prefix="+216" />
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Register</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    height: '100%',
    paddingTop: 10,
    paddingBottom: 40,
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
  genderContainer: {
    flexDirection: 'row',
    marginTop: 40,
    width: '100%',
  },
  radioBtn: {
    marginLeft: 30,
  },
  actionButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
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
});

export default Signup;
