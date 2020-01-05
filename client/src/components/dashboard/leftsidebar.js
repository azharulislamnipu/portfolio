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
                            <Link to='/counter' className="waves-effect"><i className="fa fa-glass fa-2x"></i> <span> Counter </span></Link> 
                        
                            </li>
                            
                            <li className="menu-title">
                             <Link to='/about' className="waves-effect"><i className="fa fa-shield fa-2x"></i> <span> About </span></Link>
                            </li>

                            <li className="menu-title">
                            <Link to='/social' className="waves-effect"><i className="fa fa-snapchat-ghost fa-2x"></i> <span> Social </span></Link> 
                            </li>

                            <li className="menu-title">
                            <Link to='/contact' className="waves-effect"><i className="fa fa-comments fa-2x"></i> <span> Contact </span></Link> 
                            </li>
                            <li className="menu-title">
                            <Link to='/info' className="waves-effect"><i className="fa fa-th-large fa-2x"></i> <span> Info </span></Link> 
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
