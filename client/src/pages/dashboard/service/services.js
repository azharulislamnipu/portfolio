import React, { Component } from 'react'
import {connect} from 'react-redux';
import {  loadService, removeService } from '../../../store/actions/serviceActions';
import  UpdateService from './updateService';
import { Link } from 'react-router-dom';
 class Counters extends Component {


    state = {
        updateModalOpen: false,
        id: ''
    }
    openUpdateModal = (id) => {
        this.setState({
            updateModalOpen: true,
            id
        })
    }


    closeUpdateModal = () => {
        this.setState({
            updateModalOpen: false,
            id: ''
        })
    }

    componentDidMount(){
        this.props.loadService();
    }
  

  
    render() {

       let { services } = this.props.services;
    
        return (
            <div class="container-fluid"> 
              
                <div class="row">
                    <div class="col-sm-12">
                        <div class="page-title-box">
                            <div class="row align-items-center">
                                <div class="col-md-8">
                                    <h4 class="page-title mb-0">Dashboard</h4>
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item"><Link to={'/service'}>Service</Link> </li>
                                        <li class="breadcrumb-item active" aria-current="page">List</li>
                                    </ol>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                


            
                <div className="row">
                 <div className="col-12">
                 <div class="card">
                        <div class="card-body">
                            <h4 class="mt-0 header-title">Latest Service</h4>
                            <div class="table-responsive mt-4">
                                <table class="table table-hover mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">(#) Id</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Icon</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Status</th>
                                            <th scope="col" className='text-center'>Actions</th>

                                        </tr>
                                    </thead>

 
                                  { (Array.isArray(services) && services.length) > 0 ? 
                                    <tbody>
                                    {
                                        services.map((service, index) => {
                                        
                                            let count = index + 1;
                                       
                                                return(
                                                <tr key={service._id}>
                                            <th scope="row">#{count}</th>
                                        
                                            <td>{service.title}</td>
                                            <td>{service.icon}</td>
                                            <td>{service.description}</td>
                                          
                                            <td>{service.status =='publish' ? <span class="badge badge-success">{service.status}</span> : <span class="badge badge-danger">{service.status}</span> }</td>
                                            <td className='text-center'>
                                            

                                            {this.state.id === service._id?   <UpdateService show={this.state.updateModalOpen}
        onHide={this.closeUpdateModal}  service={service} /> : null }


                                                    <button className='btn btn-primary btn-sm m-1' onClick={() => this.openUpdateModal(service._id)} >Edit</button>
                                                    <button className='btn btn-danger btn-sm m-1' onClick={ ()=> { this.props.removeService(service._id)}} >Delete</button>
                                            </td>
                                        </tr>
                                            )
                                            

                                          
                                        })
                                    }
                                 </tbody> : <p>There is no Counter</p>}
                                </table>
                            </div>
                        </div>
                    </div>

                    
                 </div>
             </div>

             

           </div>
    )
    }
}

const mapStateToProps = state => ({
    services: state.service,
})

export default connect(mapStateToProps, { loadService, removeService })(Counters)
