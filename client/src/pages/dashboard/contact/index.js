import React, { Component } from 'react'
import {connect} from 'react-redux';
import {  loadContacts , removeContact} from '../../../store/actions/contactActions';
import  ReplayContact from './replayContact';
import { Link } from 'react-router-dom';
import ViewDetails from './viewDetails';
 class Counters extends Component {


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
        this.props.loadContacts();
    }
  

  
    render() {

       let { contacts } = this.props.contacts;

    
    
        return (
            <div class="container-fluid"> 
              
                <div class="row">
                    <div class="col-sm-12">
                        <div class="page-title-box">
                            <div class="row align-items-center">
                                <div class="col-md-8">
                                    <h4 class="page-title mb-0">Dashboard</h4>
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item"><Link to={'/contacts'}>contacts</Link> </li>
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
                            <h4 class="mt-0 header-title">Latest Contact</h4>
                            <div class="table-responsive mt-4">
                                <table class="table table-hover mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">(#) Id</th>
                                            <th scope="col">Fullname</th>
                                            <th scope="col">Contact Email</th>
                                            <th scope="col">Subject</th>
                                            <th scope="col">Phone</th>
                                     
                                            <th scope="col">Status</th>
                                          
                                            <th scope="col" className='text-center'>Actions</th>
                                      
                                            
                                        </tr>
                                    </thead>

 
                                  { (Array.isArray(contacts) && contacts.length) > 0 ? 
                                    <tbody>
                                    {
                                        contacts.map((contact, index) => {
                                            let { fullname, email, organigation, subject, consult_date, budget, description, phone } = this.state;
                                            let count = index + 1;
                                       
                                                return(
                                                <tr key={contact._id}>
                                            <th scope="row">#{count}</th>
                                        
                                            <td>{contact.fullname}</td>
                                            <td>{contact.email}</td>
                                    
                                            <td>{contact.subject}</td>
                                            <td>{contact.phone}</td>
                                        
                                            <td>{contact.status == 'unapprove' ? <span class="badge badge-danger">{contact.status}</span> : <span class="badge badge-success">{contact.status}</span> }</td>
                                            <td className='text-center'>
                                            
 
                                            {this.state.id === contact._id?   <ReplayContact show={this.state.updateModalOpen}
        onHide={this.closeUpdateModal}  contact={contact} /> : null }

             {this.state.id === contact._id?   <ViewDetails show={this.state.viewModalOpen}
        onHide={this.closeUpdateModal}   contact={contact} /> : null } 

                                                    <button className='btn btn-primary btn-sm m-1' onClick={() => this.openUpdateModal(contact._id)} >Replay</button>
                                                    <button className='btn btn-danger btn-sm m-1' onClick={ ()=> { this.props.removeContact(contact._id)}} >Delete</button>
                                                    <button className='btn btn-secondary btn-sm m-1'  onClick={() => this.openViewModal(contact._id)}  >View</button>
                                            </td>
                                        </tr>
                                            )
                                            

                                          
                                        })
                                    }
                                 </tbody> : <p>There is no Contact</p>}
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
    contacts: state.contact,
})

export default connect(mapStateToProps, { loadContacts, removeContact })(Counters)
