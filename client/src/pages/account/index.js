import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
class Account extends Component {
    render() {
        let {auth} = this.props;
        

        return (
                <div class="container-fluid"> 
                  
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="page-title-box">
                                <div class="row align-items-center">
                                    <div class="col-md-8">
                                        <h4 class="page-title mb-0">Dashboard</h4>
                                        <ol class="breadcrumb m-0">
                                            <li class="breadcrumb-item"><a href="#">azhardevs</a></li>
                                            <li class="breadcrumb-item active" aria-current="page">account</li>
                                        </ol>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
    
    
                    <div className="row">
                                <div className="col-xl-12">
                                    <div className="card">
                                        <div className="card-body">
                                        <h2 className="text-uppercase text-center">You are Welcome TO Profile</h2>
    
                                                <h3>name: {auth.user.name}</h3>
                                                <h4>Eamil: {auth.user.email}</h4>
                                                <h4>Role: {auth.user.role}</h4>

                                        </div>
                                    </div>
                                </div>  
                            </div>
    
    
    
               </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
 });
export default connect(mapStateToProps)(Account);