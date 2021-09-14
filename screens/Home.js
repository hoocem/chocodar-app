import React from 'react';
import Header from '../components/Header';
import FilterBar from '../components/FilterBar';
import CategoryTitle from '../components/CategoryTitle';

export const Home = () => {
  return (
    <>
      <Header />
      <FilterBar />
      <CategoryTitle title="All products" />
    </>
  );
};

export default Home;
