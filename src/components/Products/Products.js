import React, { Component } from 'react';
import hotdogImage from '../../assets/images/hotdog.png';
import ProductsList from './ProductsList';

export default class Products extends Component {

  constructor() {
    super();

    this.state = {
      products: []
    };

    this.filterByExpiration = this.filterByExpiration.bind(this);
  }

  componentDidMount() {
    fetch('https://formula-test-api.herokuapp.com/menu')
      .then(response => response.json())
      .then(items => { this.filterByExpiration(items) })
  }

  filterByExpiration(items) {
    const today = new Date();
    this.setState({
      products: items.filter(item => {
        const splitDate = item.expirationDate.split("-");
        const currentDate = new Date(splitDate[2], splitDate[0] - 1, splitDate[1]);
        return currentDate > today;
      })
    })
  }

  render() {
    return (
      <div>
        <div className="flex-banner">
          <div className="logo-container">
            <img src={hotdogImage} alt="" />
          </div>
          <p className="slogan-title">Dirty Dogs serves all-beef, vegan and vegetarian hot dogs.</p>
          <button className="slogan-btn">More Dogs ‘n Make Em Hot</button>
        </div>
        <ProductsList products={this.state.products} />
      </div>
    );
  }
}
