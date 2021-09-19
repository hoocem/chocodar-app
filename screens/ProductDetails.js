import React from 'react';
import {
  View,
  Image,
  Text,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {useSingleProduct} from '../hooks/useProducts';
import Header from '../components/Header';
import SimilarProductCard from '../components/SimilarProductCard';
import VerticalDivider from '../components/VerticalDivider';
import {theme} from '../common/theme';
import {buildImageUri} from '../helpers/urlHelpers';

const {height} = Dimensions.get('window');

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const ProductDetails = ({navigation, route}) => {
  const {productId} = route.params;

  const {isLoading, isError, data} = useSingleProduct(productId);
  return (
    <>
      <Header onGoBack={navigation.goBack} />
      {isLoading && (
        <ActivityIndicator
          style={styles.loadingIndicator}
          size="large"
          color={theme.colors.primay}
        />
      )}
      {isError && <Text>Error...</Text>}
      {data && (
        <>
          <ScrollView style={styles.mainContainer}>
            <Image
              source={{
                uri: buildImageUri(data.image),
              }}
              style={styles.thumbnail}
              resizeMode="contain"
            />
            <View style={styles.detailsContainer}>
              <Text style={styles.title}>{data.name}</Text>
              <Text style={styles.price}>{data.price} DT</Text>
              <View style={styles.brandContainer}>
                <Text style={styles.brandText}>Brand: </Text>
                <TouchableOpacity>
                  <Text style={{color: theme.colors.blue}}>{data.brand}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Image
              source={require('../assets/images/free-shipping.jpg')}
              style={styles.adBanner}
            />
            <Text style={styles.similarproductsText}>Similar Products</Text>
            <FlatList
              data={DATA}
              renderItem={({item}) => <SimilarProductCard />}
              keyExtractor={item => item.id}
              horizontal={true}
              ItemSeparatorComponent={() => <VerticalDivider />}
              showsHorizontalScrollIndicator={false}
              style={styles.similarProductsContainer}
            />
          </ScrollView>
          <View style={styles.actionBtnContainer}>
            <TouchableOpacity style={styles.actionBtn}>
              <Text style={styles.actionBtnText}>ADD TO CART</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  loadingIndicator: {
    height: '95%',
  },
  mainContainer: {
    flex: 1,
  },
  thumbnail: {
    height: height * 0.4,
    width: '100%',
    backgroundColor: theme.colors.white,
  },
  detailsContainer: {
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: theme.colors.white,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
  },
  brandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  brandText: {
    fontSize: 14,
    color: theme.colors.black,
  },
  price: {
    marginTop: 10,
    color: theme.colors.primay,
    fontSize: 20,
    fontWeight: '800',
  },
  adBanner: {
    marginTop: 10,
    height: 100,
    width: '100%',
  },
  similarproductsText: {
    marginTop: 20,
    marginLeft: 10,
    color: theme.colors.black,
    fontSize: 20,
    fontWeight: '800',
  },
  similarProductsContainer: {
    width: '100%',
    marginVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: theme.colors.gray,
  },
  actionBtnContainer: {
    width: '100%',
    height: 50,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: theme.colors.white,
    shadowColor: '#000',
    elevation: 11,
    shadowOpacity: 1,
  },
  actionBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    borderRadius: 10,
    backgroundColor: theme.colors.primay,
  },
  actionBtnText: {
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default ProductDetails;
