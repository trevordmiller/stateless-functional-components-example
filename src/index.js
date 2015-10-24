import React from 'react';
import Products from './components/Products/Products';
import {products} from './example-data.js';

React.render(<Products products={products} />, document.getElementById('app'));
