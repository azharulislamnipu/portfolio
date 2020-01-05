import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './css/styles.scss';
import Home from './pages/Home';
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';
import Banner from './pages/dashboard/banner';

import Counter from './pages/dashboard/counter';
import Counters from './pages/dashboard/counter/counters';

import Social from './pages/dashboard/social';
import Socials from './pages/dashboard/social/socials'


import About from './pages/dashboard/about';
import Abouts from './pages/dashboard/about/abouts';


import Contact from './pages/dashboard/contact';
import Info from './pages/dashboard/info';
import Infos from './pages/dashboard/info/infos';

import FileUpload from './pages/dashboard/fileupload';
import Account from './pages/account';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import FlashMessagesList from './components/flash/FlashMessagesList';
import PrivateRoute from './ui/PrivateRoute';
import {connect} from 'react-redux';
import Notfound from './pages/404';
import Banners from './pages/dashboard/banner/banners';
class App extends Component {
    render() {
     
        return (
            <Fragment>
                <FlashMessagesList/>
                <Router>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/fileupload' component={FileUpload}/>

                    <PrivateRoute path="/banner" component={Banner} auth={this.props.auth}/>

                    <PrivateRoute path="/counter" component={Counter} auth={this.props.auth}/>
                    <PrivateRoute path="/counters" component={Counters} auth={this.props.auth}/>
                  

                    <PrivateRoute path="/contact" component={Contact} auth={this.props.auth}/>
                    <PrivateRoute path="/info" component={Info} auth={this.props.auth}/>
                    <PrivateRoute path="/infos" component={Infos} auth={this.props.auth}/>

                    <PrivateRoute path="/about" component={About} auth={this.props.auth}/>
                    <PrivateRoute path="/abouts" component={Abouts} auth={this.props.auth}/>

                    <PrivateRoute path="/social" component={Social} auth={this.props.auth}/>
                    <PrivateRoute path="/socials" component={Socials} auth={this.props.auth}/>

                    <PrivateRoute path="/banners" component={Banners} auth={this.props.auth}/>
                    <PrivateRoute path="/dashboard" component={Dashboard} auth={this.props.auth}/>
                    <PrivateRoute path="/account" component={Account} auth={this.props.auth}/>
                    <Route path="*" component={Notfound} />
                   
                </Switch>
                </Router>

            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(mapStateToProps)(App);
