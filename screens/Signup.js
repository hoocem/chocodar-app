import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {useForm, Controller} from 'react-hook-form';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SecondaryHeader from '../components/SecondaryHeader';
import RadioButton from '../components/RadioButton';
import {theme} from '../common/theme';
import {useSignup} from '../hooks/useAuth';
import authActions from '../redux/auth/actions';

const {height} = Dimensions.get('window');
const {setUserContext} = authActions;

const Signup = ({navigation}) => {
  const dispatch = useDispatch();

  const lastNameInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();
  const phoneInput = useRef();

  const [gender, setGender] = useState(null);

  const {mutate: signupMutaion} = useSignup({
    onError: err => {
      console.log('error = ', err);
    },
    onSuccess: (data, variables) => {
      const token = data.data;
      const user = {
        ...variables,
        token,
      };

      dispatch(setUserContext(user));
    },
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
    },
  });

  const onSubmit = data => {
    const payload = {
      ...data,
      gender,
    };

    signupMutaion(payload);
  };

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
          <RadioButton
            selected={gender === 'male'}
            onPress={() => setGender('male')}
            name="Male"
            style={styles.radioBtn}
          />
          <RadioButton
            selected={gender === 'female'}
            onPress={() => setGender('female')}
            name="Female"
            style={styles.radioBtn}
          />
        </View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={styles.formField}>
              <Ionicons
                name="person-outline"
                size={25}
                color={theme.colors.gray}
                style={styles.icon}
              />
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="First name"
                returnKeyType="next"
                onSubmitEditing={() => lastNameInput.current.focus()}
                style={styles.input}
              />
            </View>
          )}
          name="firstName"
        />
        {errors.firstName && <Text>This is required.</Text>}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={styles.formField}>
              <Ionicons
                name="person-outline"
                size={25}
                color={theme.colors.gray}
                style={styles.icon}
              />
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="Last name"
                returnKeyType="next"
                onSubmitEditing={() => emailInput.current.focus()}
                ref={lastNameInput}
                style={styles.input}
              />
            </View>
          )}
          name="lastName"
        />
        {errors.lastName && <Text>This is required.</Text>}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={styles.formField}>
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
                ref={emailInput}
                style={styles.input}
              />
            </View>
          )}
          name="email"
        />
        {errors.email && <Text>This is required.</Text>}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={styles.formField}>
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
                returnKeyType="next"
                onSubmitEditing={() => phoneInput.current.focus()}
                ref={passwordInput}
                style={styles.input}
              />
            </View>
          )}
          name="password"
        />
        {errors.password && <Text>This is required.</Text>}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={styles.formField}>
              <Ionicons
                name="call-outline"
                size={25}
                color={theme.colors.gray}
                style={styles.icon}
              />
              <Text style={styles.inputPrefix}>+216 </Text>
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="Phone"
                keyboardType="phone-pad"
                ref={phoneInput}
                style={styles.input}
              />
            </View>
          )}
          name="phone"
        />
        {errors.phone && <Text>This is required.</Text>}
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={styles.actionButton}>
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
});

export default Signup;
