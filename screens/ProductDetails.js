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
import {useSingleProduct, useSimilarProducts} from '../hooks/useProducts';
import Header from '../components/Header';
import SimilarProductCard from '../components/SimilarProductCard';
import VerticalDivider from '../components/VerticalDivider';
import {theme} from '../common/theme';
import {buildImageUri} from '../helpers/urlHelpers';

const {height} = Dimensions.get('window');

const ProductDetails = ({navigation, route}) => {
  const {productId} = route.params;

  const {isLoading, isError, data} = useSingleProduct(productId);
  const {
    isLoading: similarLoading,
    isError: similarError,
    data: similar,
  } = useSimilarProducts(productId);

  const displayDetails = id => {
    navigation.push('ProductDetails', {
      productId: id,
    });
  };

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
          <ScrollView
            style={styles.mainContainer}
            showsVerticalScrollIndicator={false}>
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
            {similarLoading && (
              <View style={styles.similarLoadingContainer}>
                <ActivityIndicator size="large" color={theme.colors.primay} />
              </View>
            )}
            {similarError && <Text>Error...</Text>}
            {similar && (
              <FlatList
                data={similar}
                renderItem={({item}) => (
                  <SimilarProductCard
                    product={item}
                    displayDetails={displayDetails}
                  />
                )}
                keyExtractor={item => item._id}
                horizontal={true}
                ItemSeparatorComponent={() => <VerticalDivider />}
                showsHorizontalScrollIndicator={false}
                style={styles.similarProductsContainer}
              />
            )}
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
    marginTop: 10,
    marginBottom: 30,
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
  similarLoadingContainer: {
    marginVertical: 10,
  },
});

export default ProductDetails;
