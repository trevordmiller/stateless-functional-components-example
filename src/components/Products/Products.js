import React from 'react';
import Snippet from '../Snippet/Snippet';
import {styles} from './styles';

const Products = (props) => {
  const snippets = props.products.map((product, index) => {
    return (
      <section key={index} style={styles.cushion}>
        <Snippet imageSrc={product.imageSrc} summary={product.summary} details={product.details} />
      </section>
    );
  });
  return (
    <main>
      {snippets}
    </main>
  );
};

Products.propTypes = {
  products: React.PropTypes.array.isRequired
};

export default Products;
