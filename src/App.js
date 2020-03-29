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
import Home from './routes/Home';


class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <header>
                        <h1>HEADER GOES HERE</h1>
                        <div style={{textAlign: "right", width: "90%", margin: "auto"}}><CartWidget contents={CartHelper.getCart()} /></div>
                    </header>
                    <div className="content-area row" style={{width: "90%", margin: "auto"}}>
                        <div className="categories col-sm-4 col-md-3 col-lg-3">
                            <Categories />
                        </div>
                        <div className="content-display col-sm-8 col-md-9 col-lg-9">
                            <Switch>
                                <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home} />
                                <Route path={`${process.env.PUBLIC_URL}/products/:id`} exact component={Product} />
                                <Route path={`${process.env.PUBLIC_URL}/categories/:id`} exact component={Category} />
                                <Route path={`${process.env.PUBLIC_URL}/cart`} exact component={Cart} />
                                <Route path={`${process.env.PUBLIC_URL}/checkout`} exact component={Checkout} />
                                <Redirect to={`${process.env.PUBLIC_URL}/`} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
