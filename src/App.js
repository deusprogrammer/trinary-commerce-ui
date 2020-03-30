import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom';

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
import SearchWidget from './components/SearchWidget';
import ResultDisplay from './routes/ResultDisplay';

import connect from './utils/ReduxHelper';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <header style={{marginBottom: "10px"}}>
                        <h1>HEADER GOES HERE</h1>
                        <div className="header-bar row">
                            <div className="col-2" style={{textAlign: "left"}}><Link to="/">Home</Link></div>
                            <div className="col" style={{textAlign: "center"}}><SearchWidget /></div>
                            <div className="col-2" style={{textAlign: "right"}}><CartWidget contents={this.props.cartContents} /></div>
                        </div>
                    </header>
                    <div className="content-area row">
                        <div className="categories col-xs-8 col-lg-2">
                            <Categories />
                        </div>
                        <div className="content-display col">
                            <Switch>
                                <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home} />
                                <Route path={`${process.env.PUBLIC_URL}/results/:search`} exact component={ResultDisplay} />
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

export default connect(App);
