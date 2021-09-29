import React from "react";
import Product from "../../types/Product";

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

  /**
   * Renders the container.
   * @return {string} - HTML markup for the container
   */
  render() {
    return <div> Products Here </div> ;
  }

}

export default ProductList;