import React, { Component } from 'react';
import ProductsList from './ProductsList';
import Banner from '../Banner';

export default class Products extends Component {

  constructor() {
    super();

    this.state = {
      products: []
    };

    this.filterByExpiration = this.filterByExpiration.bind(this);
  }

  async componentDidMount() {
    const response = await fetch('https://formula-test-api.herokuapp.com/menu');
    const items = await response.json();
    await this.filterByExpiration(items);
  }

  filterByExpiration(items) {
    const today = new Date();
    this.setState({
      products: items.filter(item => {
        const splitDate = item.expirationDate.split('-');
        const currentDate = new Date(splitDate[2], splitDate[0] - 1, splitDate[1]);
        return currentDate > today;
      })
    })
  }

  render() {
    return (
      <div>
        <Banner />
        <ProductsList products={this.state.products} />
      </div>
    );
  }
}
