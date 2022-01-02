import React, {useEffect} from 'react';
import {View, TextInput, StyleSheet, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {Picker} from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {theme} from '../common/theme';
import {
  capitalizeStr,
  formatGovernorateName,
  reverseGovernorateName,
} from '../helpers/stringHelpers';
import {locations} from '../common/locations';

const {height} = Dimensions.get('window');

const CheckoutForm = () => {
  const user = useSelector(state => state.authReducer);
  const isFocused = useIsFocused();

  const {
    control,
    handleSubmit,
    formState: {errors},
    clearErrors,
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      fullName: user
        ? `${capitalizeStr(user.firstName)} ${capitalizeStr(user.lastName)}`
        : '',
      governorate: 'Ariana',
      delegation: '',
      address: '',
      phone: user?.phone ? user.phone : '',
    },
  });

  useEffect(() => {
    clearErrors();
  }, [clearErrors, isFocused]);

  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View
            style={[
              styles.formField,
              errors.firstName && {borderColor: theme.colors.red},
            ]}>
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
              placeholder="Full name"
              placeholderTextColor={theme.colors.gray}
              returnKeyType="next"
              // onSubmitEditing={() => lastNameInput.current.focus()}
              blurOnSubmit={false}
              style={styles.input}
            />
          </View>
        )}
        name="fullName"
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={() => (
          <View style={styles.pickerContainer}>
            <MaterialCommunityIcons
              name="city-variant-outline"
              size={25}
              color={theme.colors.gray}
              style={styles.icon}
            />
            <Picker
              style={styles.picker}
              selectedValue={watch('governorate')}
              onValueChange={itemValue => {
                setValue('governorate', itemValue);
              }}
              dropdownIconColor={theme.colors.gray}>
              {Object.keys(locations).map(governorate => (
                <Picker.Item
                  key={governorate}
                  label={formatGovernorateName(governorate)}
                  value={formatGovernorateName(governorate)}
                />
              ))}
            </Picker>
          </View>
        )}
        name="fullName"
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={() => (
          <View style={styles.pickerContainer}>
            <Entypo
              name="address"
              size={25}
              color={theme.colors.gray}
              style={styles.icon}
            />
            <Picker
              style={styles.picker}
              selectedValue={watch('delegation')}
              onValueChange={itemValue => {
                setValue('delegation', itemValue);
              }}
              dropdownIconColor={theme.colors.gray}>
              {locations[
                reverseGovernorateName(watch('governorate'))
              ].delegations.map(delegation => (
                <Picker.Item
                  key={delegation}
                  label={formatGovernorateName(delegation)}
                  value={formatGovernorateName(delegation)}
                />
              ))}
            </Picker>
          </View>
        )}
        name="delegation"
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View
            style={[
              styles.formField,
              errors.firstName && {borderColor: theme.colors.red},
            ]}>
            <Ionicons
              name="location-outline"
              size={25}
              color={theme.colors.gray}
              style={styles.icon}
            />
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder="Adress"
              placeholderTextColor={theme.colors.gray}
              returnKeyType="next"
              // onSubmitEditing={() => lastNameInput.current.focus()}
              blurOnSubmit={false}
              style={styles.input}
            />
          </View>
        )}
        name="address"
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View
            style={[
              styles.formField,
              errors.firstName && {borderColor: theme.colors.red},
            ]}>
            <Ionicons
              name="call-outline"
              size={25}
              color={theme.colors.gray}
              style={styles.icon}
            />
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder="Phone"
              placeholderTextColor={theme.colors.gray}
              returnKeyType="next"
              // onSubmitEditing={() => lastNameInput.current.focus()}
              blurOnSubmit={false}
              style={styles.input}
            />
          </View>
        )}
        name="phone"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formField: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginRight: 5,
    marginTop: 20,
    paddingLeft: 5,
    paddingRight: 10,
    height: height * 0.06,
    borderBottomWidth: 1,
    borderColor: theme.colors.gray,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingBottom: 0,
    paddingLeft: 10,
    color: theme.colors.darkGray,
  },
  icon: {
    alignSelf: 'flex-end',
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 5,
    marginTop: 20,
    borderBottomWidth: 1,
    borderColor: theme.colors.gray,
    overflow: 'hidden',
    height: 40,
  },
  picker: {
    flex: 1,
    color: theme.colors.darkGray,
  },
});

export default CheckoutForm;
