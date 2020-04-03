import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom';

import axios from 'axios';

import Product from './routes/Product';
import Categories from './routes/Categories';
import Category from './routes/Category';
import Cart from './routes/Cart';
import Home from './routes/Home';
import CartSuccess from './routes/CartSuccess';
import ResultDisplay from './routes/ResultDisplay';

import CartWidget from './components/CartWidget';
import SearchWidget from './components/SearchWidget';
import LocationWidget from './components/LocationWidget';

import connect from './utils/ReduxHelper';

import config from './utils/config';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

class App extends React.Component {
    componentDidMount() {
        axios.get(config.baseUrl + "/locations")
            .then(response => {
                this.props.setLocations(response.data)
                this.props.setCurrentLocation(response.data[0])
            })
    }

    render() {
        return (
            <Router>
                <div className="container">
                    <header style={{marginBottom: "10px"}}>
                        <div className="row">
                            <div className="col">
                                <h1>Knight Watch Games</h1>
                            </div>
                        </div>
                        <div className="header-bar row">
                            <div className="col-2" style={{textAlign: "left"}}><Link to="/">Home</Link></div>
                            <div className="col" style={{textAlign: "center"}}><SearchWidget /></div>
                            <div className="col" style={{textAlign: "center"}}><LocationWidget /></div>
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
                                <Route path={`${process.env.PUBLIC_URL}/results/:search/:page`} exact component={ResultDisplay} />
                                <Route path={`${process.env.PUBLIC_URL}/products/:id`} exact component={Product} />
                                <Route path={`${process.env.PUBLIC_URL}/categories/:id/:page`} exact component={Category} />
                                <Route path={`${process.env.PUBLIC_URL}/cart`} exact component={Cart} />
                                <Route path={`${process.env.PUBLIC_URL}/cart/success`} exact component={CartSuccess} />
                                <Redirect to={`${process.env.PUBLIC_URL}/`} />
                            </Switch>
                        </div>
                    </div>                    
                </div>
                
                <footer className="bg-dark bg-cover" style={{height: "100px"}}>
                    <div className="container">
                        <div className="row">                            
                            <div className="col-4">
                                blah                                
                            </div>
                            <div className="col-4">
                                This is a contest
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <div className="col">
                                        this is content
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </Router>
        );
    }
}

export default connect(App);
