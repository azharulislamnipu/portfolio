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
import Profile from './components/dashboard/profile';
import Dboard from './pages/Dboard';
import DashboardLayoutRoute from "./layouts/DashboardLayoutRoute";  
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import FlashMessagesList from './components/flash/FlashMessagesList';
import PrivateRoute from './ui/PrivateRoute';
import {connect} from 'react-redux';
import Notfound from './pages/404'
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
                    <Route path='/dboard' component={Dboard}/>
    
                    <Route path='/profile' component={Profile}/>
                    <DashboardLayoutRoute path="/layout2" component={Profile} />  
                    <PrivateRoute path="/dashboard" component={Dashboard} auth={this.props.auth}/>
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
