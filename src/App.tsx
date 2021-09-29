import React from "react";
import './App.css';
import ProductDetail from './containers/ProductDetail';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from "./containers/Header";
import ProductList from "./containers/ProductList";

const pathname = window.location.href  
  console.log(pathname)
const localHost = "http://localhost:3000/"
function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header/>
      {
        pathname === localHost ? <ProductList/> : <ProductDetail/>
      }
    </React.Fragment>
  );
}

export default App;
