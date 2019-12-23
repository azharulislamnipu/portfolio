import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class LeftSideBar extends Component {
    render() {
        return (
                  
            <div className={this.props.sibarSate? "slide-menu left side-menu" : "left side-menu"}>
                <div className="slimscroll-menu" id="remove-scroll">

                  
                    <div id="sidebar-menu">
                    
                        <ul className="metismenu" id="side-menu">
                            <li className="menu-title text-center">Main</li>
                            <li>
                            <Link to='dashboard' className="waves-effect"> <i className="fa fa-pie-chart fa-2x" aria-hidden="true"></i>
                                  <span> Dashboard </span> </Link>     
                            </li>
                    
                            <li class="menu-title">
                               <Link to='/banner' className="waves-effect"><i className="fa fa-archive fa-2x"></i> <span> Banner </span></Link>   
                            </li>

                            <li className="menu-title">
                            <Link to='/counter' className="waves-effect"><i className="fa fa-glass fa-2x"></i> <span> Counters </span></Link> 
                        
                            </li>

                            <li className="menu-title">
                            <a href="javascript:void(0);" className="waves-effect"><i className="fa fa-archive fa-2x"></i> <span> Portfolio </span> </a>
                            </li>

                            <li class="menu-title">
                            <a href="javascript:void(0);" className="waves-effect"><i className="fa fa-archive fa-2x"></i> <span> Banner </span> </a>
                            </li>

                            <li className="menu-title">
                            <a href="javascript:void(0);" className="waves-effect"><i className="fa fa-archive fa-2x"></i> <span> Banner </span> </a>
                            </li>


                            <li className="menu-title">
                            <a href="javascript:void(0);" className="waves-effect"><i className="fa fa-archive fa-2x"></i> <span> Banner </span> </a>
                            </li>


                            <li className="menu-title">
                            <a href="javascript:void(0);" className="waves-effect"><i className="fa fa-archive fa-2x"></i> <span> Banner </span> </a>
                            </li>

                        </ul>

                    </div>
                 
                    <div className="clearfix"></div>

                </div>
             

            </div>
         
        )
    }
}
