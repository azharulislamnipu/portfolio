import React, { Component } from 'react'
import {connect} from 'react-redux';
import {  loadSocials, removeSocial } from '../../../store/actions/socialActions';
import  UpdateSocial from './updateSocial';
import { Link } from 'react-router-dom';
import ViewDetails from './viewDetails'
 class Socials extends Component {


    state = {
        updateModalOpen: false,
         viewModalOpen: false,
        id: ''
    }
    openUpdateModal = (id) => {
        this.setState({
            updateModalOpen: true,
            id
        })
    }

        openViewModal = (id) => {
        this.setState({
            viewModalOpen: true,
            id
        })
    }

    closeUpdateModal = () => {
        this.setState({
            updateModalOpen: false,
             viewModalOpen: false,
            id: ''
        })
    }

    componentDidMount(){
        this.props.loadSocials();
    }
  

  
    render() {

       let { socials } = this.props.socials;
    
        return (
            <div class="container-fluid"> 
              
                <div class="row">
                    <div class="col-sm-12">
                        <div class="page-title-box">
                            <div class="row align-items-center">
                                <div class="col-md-8">
                                    <h4 class="page-title mb-0">Dashboard</h4>
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item"><Link to={'/social'}>Social</Link> </li>
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
                            <h4 class="mt-0 header-title">Latest Counter</h4>
                            <div class="table-responsive mt-4">
                                <table class="table table-hover mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">(#) Id</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Social Type</th>
                                            <th scope="col">Social Icon</th>
                                            <th scope="col">Social Tag Line</th>
                                            <th scope="col">Social Link</th>
                                            <th scope="col">Status</th>
                                          
                                            <th scope="col" className='text-center'>Actions</th>
                                      
                                            
                                        </tr>
                                    </thead>

 
                                  { (Array.isArray(socials) && socials.length) > 0 ? 
                                    <tbody>
                                    {
                                        socials.map((social, index) => {
                                        
                                            let count = index + 1;
                                       
                                                return(
                                                <tr key={social._id}>
                                            <th scope="row">#{count}</th>
                                        
                                            <td>{social.title}</td>
                                            <td>{social.type}</td>
                                            <td>{social.social_icon}</td>
                                            <td>{social.social_tag}</td>
                                            <td>{social.social_link}</td>
                                            <td>{social.status =='publish' ? <span class="badge badge-success">{social.status}</span> : <span class="badge badge-danger">{social.status}</span> }</td>
                                            <td className='text-center'>
                                            

                                            {this.state.id === social._id?   <UpdateSocial show={this.state.updateModalOpen}
        onHide={this.closeUpdateModal}  social={social} /> : null }

             {this.state.id === social._id?   <ViewDetails show={this.state.viewModalOpen}
        onHide={this.closeUpdateModal}   social={social} /> : null }

                                                    <button className='btn btn-primary btn-sm m-1' onClick={() => this.openUpdateModal(social._id)} >Edit</button>
                                                    <button className='btn btn-danger btn-sm m-1' onClick={ ()=> { this.props.removeSocial(social._id)}} >Delete</button>
                                                    <button className='btn btn-secondary btn-sm m-1'  onClick={() => this.openViewModal(social._id)}  >View</button>
                                            </td>
                                        </tr>
                                            )
                                            

                                          
                                        })
                                    }
                                 </tbody> : <p>There is no Socials</p>}
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
    socials: state.social,
})

export default connect(mapStateToProps, { loadSocials, removeSocial })(Socials)