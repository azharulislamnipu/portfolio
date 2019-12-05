import React, { Component } from 'react'
import logo from '../../img/mylogo.png';
import {Link} from 'react-router-dom'
export default class Topbar extends Component {

    constructor(props) {
        super(props);
        // console.log(this.props.sibarSate);
        this.toogledropdonw = this.toogledropdonw.bind(this);
        // this.sibarExpendHandler = this.sibarExpendHandler.bind(this);

        this.state = {
            aria_expanded: false,
            // sibarExpend:false
        };

    }

    // sibarExpendHandler() {

    //     this.setState({sibarExpend: !this.state.sibarExpend})
    // }

    toogledropdonw() {


        this.setState({aria_expanded: !this.state.aria_expanded})
    }

 
  render() {


    return (
        <div className="topbar">

               
        <div className= {this.props.sibarSate? "d-none" : "topbar-left"}>
           <Link to='/' className='logo'>  <img src={logo} alt="" height="50" class="logo-large"/></Link>
        </div>

        <nav className="navbar-custom" style={ this.props.sibarSate? {marginLeft: '0',   transition: '.5s ease-in'} : {marginLeft: '240px',  transition: '.5s ease-in-out'}} >
    
            <ul className="navbar-right d-flex list-inline float-right mb-0" >
                <li className={this.state.aria_expanded ? 'list-inline-item dropdown notification-list show' :'list-inline-item dropdown notification-list'}>
                    <a className="nav-link dropdown-toggle arrow-none waves-effect nav-user" onClick={this.toogledropdonw} data-toggle="dropdown" href="javascript:void(0)" role="button"
                    aria-haspopup="false" aria-expanded={this.state.aria_expanded}>
                        <img src={logo} alt="user" class="rounded-circle"/>
                        <span class="d-none d-md-inline-block ml-1">Donald T. <i class="fa fa-angle-down"></i> </span>
                    </a>
                    <div className={this.state.aria_expanded ? "dropdown-menu dropdown-menu-right dropdown-menu-animated profile-dropdown show" : "dropdown-menu dropdown-menu-right dropdown-menu-animated profile-dropdown"}>
                        
                       <Link className="dropdown-item"  to='/profile'> <i className="fa fa-user text-muted mr-2"></i> Profile</Link>
                    
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#"><i className="fa fa-external-link text-muted mr-2"></i> Logout</a>
                    </div>
                </li>

            </ul>

            <ul className="list-inline menu-left mb-0">
                <li className="float-left">
                    <button className="button-menu-mobile open-left waves-effect" onClick={this.props.sibarExpend}>
                        <i className="fa fa-bars"></i>
                    </button>
                </li>                        
            </ul>

        </nav>

    </div>
    )
  }
}
