import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';

import Products from './routes/Products';
import Product from './routes/Product';
import NewProducts from './routes/NewProducts';
import Cart from './routes/Cart';
import Checkout from './routes/Checkout';

import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <header>
                        <h1>HEADER GOES HERE</h1>
                    </header>
                    <Switch>
                        <Route path={`${process.env.PUBLIC_URL}/products`} exact component={Products}/>
                        <Route path={`${process.env.PUBLIC_URL}/products/new`} exact component={NewProducts}/>
                        <Route path={`${process.env.PUBLIC_URL}/products/:id`} exact component={Product} />
                        <Route path={`${process.env.PUBLIC_URL}/cart`} exact component={Cart} />
                        <Route path={`${process.env.PUBLIC_URL}/checkout`} exact component={Checkout} />
                        <Redirect to={`${process.env.PUBLIC_URL}/products/new`} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
