import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet,
} from 'react-native';
import Header from '../components/Header';
import CategoryTitle from '../components/CategoryTitle';
import CategoryCard from '../components/CategoryCard';
import {theme} from '../common/theme';
import {useCategories} from '../hooks/useCategories';
import Divider from '../components/Divider';

const Categories = ({navigation}) => {
  const {isLoading, isError, data} = useCategories();

  const navigateToCategory = (categoryId, categoryName) => {
    navigation.navigate('SingleCategory', {
      categoryId,
      categoryName,
    });
  };

  return (
    <>
      <Header />
      <View style={styles.mainContainer}>
        <View style={styles.titleContainer}>
          <CategoryTitle s title="All categories" />
        </View>
        {isLoading && (
          <ActivityIndicator
            style={styles.loadingIndicator}
            size="large"
            color={theme.colors.primay}
          />
        )}
        {isError && <Text>Error...</Text>}
        {data && (
          <FlatList
            data={data}
            renderItem={({item}) => (
              <CategoryCard
                category={item}
                navigateToCategory={navigateToCategory}
              />
            )}
            ItemSeparatorComponent={() => <Divider />}
            keyExtractor={item => item._id}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={styles.columnWrapperStyle}
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  titleContainer: {
    margin: 10,
  },
  loadingIndicator: {
    height: '95%',
  },
});

export default Categories;
