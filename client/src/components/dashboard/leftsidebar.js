import React, { Component } from 'react'

export default class LeftSideBar extends Component {
    render() {
        return (
                  
            <div className={this.props.sibarSate? "slide-menu left side-menu" : "left side-menu"}>
                <div className="slimscroll-menu" id="remove-scroll">

                  
                    <div id="sidebar-menu">
                    
                        <ul className="metismenu" id="side-menu">
                            <li className="menu-title text-center">Main</li>
                            <li>
                                <a href="" className="waves-effect">
                                <i className="fa fa-pie-chart fa-2x" aria-hidden="true"></i>
                                  <span> Dashboard </span>
                                </a>
                            </li>
                    
                            <li class="menu-title">
                            <a href="javascript:void(0);" className="waves-effect"><i className="fa fa-archive fa-2x"></i> <span> Banner </span> </a>
                            </li>

                            <li className="menu-title">
                            <a href="javascript:void(0);" className="waves-effect"><i className="fa fa-archive fa-2x"></i> <span> About </span> </a>
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
