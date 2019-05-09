import React, { Component } from 'react';
import { Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import map from 'lodash/map';
//Internals
class AllItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch('https://snapmytrendbackend.herokuapp.com/products')
      .then(response => response.json())
      .then(products => this.setState({ products }));
  }

  render() {
    const { products } = this.state;

    return (
      <div className="items">
      {map(products, (product)=> (
        <div key={product.id} className="item">
          <Link to={`/products/${product.id}`}>
          <div className="product-img">
            <img alt={product.name} src={product.img} />
          </div>
          <div className="product-details">
            <h1 id="product-name">{product.name}</h1>
            <h4 id="product-description">{product.description}</h4>
          </div>
          </Link>
          <div className="price-add">
            <h5 id="product-price">${product.price}</h5>
            <Icon small id="add-icon">add_shopping_cart</Icon>
          </div>
        </div>
      ))}
    </div>
    );
  }

}

export default AllItems;
/* const AllItems = () => (
  <div className="items">
    {map(PRODUCTS, (product)=> (
      <div key={product.id} className="item">
        <Link to={`/products/${product.id}`}>
        <div className="product-img">
          <img alt={product.name} src={product.img} />
        </div>
        <div className="product-details">
          <h1 id="product-name">{product.name}</h1>
          <h4 id="product-description">{product.description}</h4>
        </div>
        </Link>
        <div className="price-add">
          <h5 id="product-price">${product.price}</h5>
          <Icon small id="add-icon">add_shopping_cart</Icon>
        </div>
      </div>
    ))}
  </div>
)

export default AllItems; */