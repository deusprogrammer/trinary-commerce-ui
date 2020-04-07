import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom';

import Product from './routes/Product';
import Categories from './routes/Categories';
import Category from './routes/Category';
import Cart from './routes/Cart';
import Checkout from './routes/Checkout';
import CartWidget from './components/CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './routes/Home';
import SearchWidget from './components/SearchWidget';
import ResultDisplay from './routes/ResultDisplay';
import connect from './utils/ReduxHelper';

import { FaHome, FaCcMastercard , FaCcVisa, FaFacebookSquare } from 'react-icons/fa';

class App extends React.Component {
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
                        <div className="header-bar row align-middle">
                            <div className="col-2" style={{textAlign: "left"}}><Link to="/"><FaHome size='1.5em'/></Link></div>
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
                                <Route path={`${process.env.PUBLIC_URL}/results/:search/:page`} exact component={ResultDisplay} />
                                <Route path={`${process.env.PUBLIC_URL}/products/:id`} exact component={Product} />
                                <Route path={`${process.env.PUBLIC_URL}/categories/:id/:page`} exact component={Category} />
                                <Route path={`${process.env.PUBLIC_URL}/cart`} exact component={Cart} />
                                <Route path={`${process.env.PUBLIC_URL}/checkout`} exact component={Checkout} />
                                <Redirect to={`${process.env.PUBLIC_URL}/`} />
                            </Switch>
                        </div>
                    </div>                    
                </div>
                
                <footer className="bg-dark bg-cover" style={{height: "100px", color:"#efefef"}}>
                    <div className="container">
                        <div className="row padding-top-halfEm" >                            
                            <div className="col-4">                            
                            <a href="https://www.facebook.com/KWGamesStore/" target="_blank">
                                <FaFacebookSquare className="facebookLink" size="2em"/>
                            </a>                           
                            </div>
                            <div className="col-4">
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <div className="col">
                                    <span className="padding-right-10"><FaCcMastercard size="2em"/></span>
                                    <FaCcVisa size="2em" />
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
