import React from "react";
import ProductView from "../../components/ProductView";
import Product from "../../types/Product";
import ProductService from "../../services/ProductService";

interface ProductListState {
  products: Product[];
}

/**
 * Product List Container
 * @extends {Component<Props, State>}
 */
class ProductList extends React.Component<{}, ProductListState> {
  state = {
    products: [] as Product[],
  };


  componentDidMount(){
    this.retrieveproducts = this.retrieveproducts.bind(this)
    this.retrieveproducts()
  }

  async retrieveproducts(){
    await ProductService.getAll().then(
      response => {
        console.log(response)
        const products = response.data;
        this.setState( {products});
      }
    ).catch(
      error => {
        console.log(error)
      }
    )
  }
  /**
   * Renders the container.
   * @return {string} - HTML markup for the container
   */
  render() {
    var productsList: any[] = [];
    this.state.products.forEach((product) => {
      productsList.push(<ProductView product={product} />);
    });
    return productsList;
    
  }

}

export default ProductList;