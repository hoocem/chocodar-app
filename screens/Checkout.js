import React, {useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {Picker} from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AuthStackNav from '../navigation/AuthStackNav';
import {theme} from '../common/theme';
import SecondaryHeader from '../components/SecondaryHeader';
import CategoryTitle from '../components/CategoryTitle';
// import CheckoutForm from '../components/CheckoutForm';
import RadioButton from '../components/RadioButton';
import {
  capitalizeStr,
  formatGovernorateName,
  reverseGovernorateName,
} from '../helpers/stringHelpers';
import {locations} from '../common/locations';

const {height} = Dimensions.get('window');

const Checkout = ({navigation, route}) => {
  const user = useSelector(state => state.authReducer);
  const {subtotal} = route.params;
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

  const onSubmit = data => {
    console.log('data');
  };

  useEffect(() => {
    clearErrors();
  }, [clearErrors, isFocused]);

  return user && user.token ? (
    <>
      <SecondaryHeader
        name="Checkout"
        onGoBack={() => {
          navigation.goBack();
        }}
      />
      <ScrollView
        style={styles.contentContainer}
        showsVerticalScrollIndicator={false}>
        <CategoryTitle title="Address details" />
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
                  errors.fullName && {borderColor: theme.colors.red},
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
          {errors.fullName && (
            <Text style={styles.errorText}>Full name is required.</Text>
          )}
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
                  errors.address && {borderColor: theme.colors.red},
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
          {errors.address && (
            <Text style={styles.errorText}>Address name is required.</Text>
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
                  errors.phone && {borderColor: theme.colors.red},
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
          {errors.phone && (
            <Text style={styles.errorText}>Phone name is required.</Text>
          )}
        </View>
        <CategoryTitle title="Paiment method" style={styles.sectionTitle} />
        <RadioButton
          selected={true}
          name="Cash on delivery"
          style={styles.radioBtn}
          textStyle={styles.radioBtnText}
        />
        <CategoryTitle title="Summary" style={styles.sectionTitle} />
        <View style={styles.summaryRow}>
          <Text style={styles.summaryRyText}>Subtotal</Text>
          <Text style={styles.summaryRyText}>{subtotal} DT</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryRyText}>Shipping fee</Text>
          <Text style={styles.summaryRyText}>7 DT</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryRyText}>Total</Text>
          <Text style={styles.totalPrice}>{subtotal + 7} DT</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            console.log('should submit');
            handleSubmit(onSubmit);
          }}
          style={styles.actionButton}>
          <Text style={styles.actionButtonText}>PLACE MY ORDER</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  ) : (
    <AuthStackNav />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: theme.colors.lightGray,
  },
  sectionTitle: {
    marginTop: 30,
  },
  radioBtn: {
    marginTop: 10,
  },
  radioBtnText: {
    fontWeight: '500',
    fontSize: 16,
    color: theme.colors.darkGray,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingRight: 10,
  },
  summaryRyText: {
    fontWeight: '500',
    fontSize: 16,
    color: theme.colors.darkGray,
  },
  totalPrice: {
    fontWeight: '500',
    fontSize: 16,
    color: theme.colors.primay,
  },
  actionButton: {
    marginTop: 50,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
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
  errorText: {
    color: theme.colors.red,
  },
});

export default Checkout;
