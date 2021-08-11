import React from 'react';
import PropTypes from 'prop-types';

export default class AddCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: [],
    };

    this.displayItem = this.displayItem.bind(this);
    this.setItem = this.setItem.bind(this);
  }

  componentDidMount() {
    this.setItem();
  }

  setItem() {
    const { query } = this.props;
    this.setState({ item: query });
  }

  displayItem() {
    const { item } = this.state;

    return (
      <div>
        {item.map((element) => (
          <div key={ element.id } data-testid="product">
            <h3 data-testid="shopping-cart-product-name">{ element.title }</h3>
            <img src={ element.thumbnail } alt="Produto" />
            <p>{ `R$: ${element.price}` }</p>
            <p
              data-testid="shopping-cart-product-quantity"
            >
              1
            </p>
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      this.displayItem()
    );
  }
}

AddCart.defaultProps = {
  query: PropTypes.shape({
    id: '',
    title: '',
    thumbnail: '',
    price: 0,
  }),
};

AddCart.propTypes = {
  query: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }),
};