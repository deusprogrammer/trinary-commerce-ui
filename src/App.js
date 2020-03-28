import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Product from './routes/Product';
import Categories from './routes/Categories';
import Category from './routes/Category';
import Cart from './routes/Cart';
import Checkout from './routes/Checkout';

import CartWidget from './components/CartWidget';

import CartHelper from './utils/CartHelper';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';


class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <header>
                        <h1>HEADER GOES HERE</h1>
                        <div style={{textAlign: "right", width: "90%", margin: "auto"}}><CartWidget contents={CartHelper.getCart()} /></div>
                    </header>
                    <Switch>
                        <Route path={`${process.env.PUBLIC_URL}/products/:id`} exact component={Product} />
                        <Route path={`${process.env.PUBLIC_URL}/categories`} exact component={Categories} />
                        <Route path={`${process.env.PUBLIC_URL}/categories/:id`} exact component={Category} />
                        <Route path={`${process.env.PUBLIC_URL}/cart`} exact component={Cart} />
                        <Route path={`${process.env.PUBLIC_URL}/checkout`} exact component={Checkout} />
                        <Redirect to={`${process.env.PUBLIC_URL}/categories`} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
