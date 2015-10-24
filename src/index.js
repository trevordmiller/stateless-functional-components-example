import React from 'react';
import ReactDOM from 'react-dom';
import Products from './components/Products/Products';
import {products} from './example-data.js';

ReactDOM.render(<Products products={products} />, document.getElementById('app'));
