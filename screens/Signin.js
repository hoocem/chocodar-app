import React, {useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {useForm, Controller} from 'react-hook-form';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RNToasty} from 'react-native-toasty';
import SecondaryHeader from '../components/SecondaryHeader';
import {theme} from '../common/theme';
import {useSignin} from '../hooks/useAuth';
import {me} from '../services/auth';
import authActions from '../redux/auth/actions';

const {height} = Dimensions.get('window');
const {setUserContext} = authActions;

const Signin = ({navigation}) => {
  const dispatch = useDispatch();

  const passwordInput = useRef();

  const {mutate: signinMutaion} = useSignin({
    onError: err => {
      console.log('error = ', err.response.status);
      if (err.response.status === 401) {
        RNToasty.Error({
          title: 'Invalid email and password combination',
          position: 'top',
          duration: 1,
        });
      } else {
        RNToasty.Error({
          title: 'Something went wrong try agin',
          position: 'top',
          duration: 1,
        });
      }
    },
    onSuccess: async data => {
      const {token} = data.data;
      const res = await me(token);
      const signedinUser = {
        ...res.data.data,
        token,
      };

      dispatch(setUserContext(signedinUser));
    },
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = data => {
    signinMutaion(data);
  };

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
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View
              style={[
                styles.formField,
                errors.email && {borderColor: theme.colors.red},
              ]}>
              <Ionicons
                name="mail-outline"
                size={25}
                color={theme.colors.gray}
                style={styles.icon}
              />
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="Email"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => passwordInput.current.focus()}
                blurOnSubmit={false}
                style={styles.input}
              />
            </View>
          )}
          name="email"
        />
        {errors.email && (
          <Text style={styles.errorText}>Email is required.</Text>
        )}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View
              style={[
                styles.formField,
                errors.password && {borderColor: theme.colors.red},
              ]}>
              <Ionicons
                name="lock-closed-outline"
                size={25}
                color={theme.colors.gray}
                style={styles.icon}
              />
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="Password"
                secureTextEntry={true}
                ref={passwordInput}
                style={styles.input}
              />
            </View>
          )}
          name="password"
        />
        {errors.password && (
          <Text style={styles.errorText}>Password is required.</Text>
        )}
        <Text style={styles.forgotPwText}>Forgot Password?</Text>
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={styles.actionButton}>
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
  formField: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginRight: 5,
    marginTop: 40,
    paddingLeft: 5,
    paddingRight: 10,
    height: height * 0.06,
    borderBottomWidth: 1,
    borderColor: theme.colors.gray,
  },
  input: {
    flex: 1,
    fontSize: 18,
    paddingBottom: 0,
  },
  icon: {
    alignSelf: 'flex-end',
  },
  inputPrefix: {
    fontSize: 18,
    paddingBottom: 0,
    marginLeft: 5,
    marginBottom: 2,
    color: theme.colors.gray,
  },
  errorText: {
    color: theme.colors.red,
  },
});

export default Signin;
