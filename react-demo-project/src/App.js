import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Block from './components/product/Block';
import products from './productData';

const App = (props) => {
  return (
    <div>
      <Header/>
      <Block data={products}/>
    </div>
  );
};

export default App;
