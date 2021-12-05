import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useSelector} from 'react-redux';
import AuthStackNav from '../navigation/AuthStackNav';
import {theme} from '../common/theme';
import SecondaryHeader from '../components/SecondaryHeader';
import CategoryTitle from '../components/CategoryTitle';
import CheckoutForm from '../components/CheckoutForm';
import RadioButton from '../components/RadioButton';

const {height} = Dimensions.get('window');

const Checkout = ({navigation, route}) => {
  const user = useSelector(state => state.authReducer);
  const {subtotal} = route.params;

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
        <CheckoutForm />
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
          delayPressIn={50}
          style={styles.actionButton}
          onPress={() => navigation.navigate('Home')}>
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
});

export default Checkout;
