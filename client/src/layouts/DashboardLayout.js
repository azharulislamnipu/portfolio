import React, { Component } from 'react';  
import Topbar from '../components/dashboard/topbar';
import LeftSideBar from '../components/dashboard/leftsidebar';
import Footer from '../components/dashboard/dbFooter';
class DashboardLayout extends Component {
    
    constructor(props) {
        super(props);
        this.sibarExpendHandler = this.sibarExpendHandler.bind(this);
        this.state = {
            sibarExpend:false
        };

    }

    sibarExpendHandler() {

        this.setState({sibarExpend: !this.state.sibarExpend})
    }

    render() {
    
        return (

              <div id="wrapper">

<Topbar sibarSate={this.state.sibarExpend} sibarExpend={ this.sibarExpendHandler} history={this.props.children.props.history} />
<LeftSideBar sibarSate={this.state.sibarExpend}/>

<div class="content-page" style={ this.state.sibarExpend? {marginLeft: '70px',  transition: '.5s ease-in'} : {marginLeft: '240px',  transition: '.5s ease-in-out'}}>
 
    <div class="content">
        
            {this.props.children}
    </div> 

    <Footer/>
</div>



</div>


        )
    }
}

  export default DashboardLayout;