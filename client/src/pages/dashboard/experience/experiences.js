import React, { Component } from 'react'
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { loadExperience, removeExperience } from "../../../store/actions/experienceActions";
import UpdateExperience from './updateExperience';
 class Experiences extends Component {


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
        this.props.loadExperience();
    }
  

  
    render() {

       let { experiences } = this.props.experiences;

    console.log( this.props);
        return (
            <div class="container-fluid"> 
              
                <div class="row">
                    <div class="col-sm-12">
                        <div class="page-title-box">
                            <div class="row align-items-center">
                                <div class="col-md-8">
                                    <h4 class="page-title mb-0">Dashboard</h4>
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item"><Link to={'/info'}>Info</Link> </li>
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
                            <h4 class="mt-0 header-title">Latest Info</h4>
                            <div class="table-responsive mt-4">
                                <table class="table table-hover mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">(#) Id</th>
                                            <th scope="col">Company Name</th>
                                            <th scope="col">Icon</th>
                                            <th scope="col">Designation</th>
                                            <th scope="col">Start Date</th>
                                            <th scope="col">End Date</th>
                                            <th scope="col">Status</th>
                                            <th scope="col" className='text-center'>Actions</th>
                                      
                                            
                                        </tr>
                                    </thead>

 
                                  { (Array.isArray(experiences) && experiences.length) > 0 ? 
                                    <tbody>
                                    {
                                        experiences.map((experience, index) => {
                                        
                                            let count = index + 1;
                                           let start_date = new Date(experience.start_date);
                                           start_date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(start_date);

                                           let end_date = new Date(experience.end_date);
                                           end_date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(end_date);
                                                return(
                                                <tr key={experience._id}>
                                            <th scope="row">#{count}</th>
                                        
                                            <td>{experience.company_name}</td>
                                            <td>{experience.icon}</td>
                                            <td>
                                            {experience.designation}
                                            
                                            </td>
                                            <td>
                                            {start_date}
                                            
                                            </td>
                                            <td>
                                            {end_date}
                                            
                                            </td>
                                            <td>{experience.status =='publish' ? <span class="badge badge-success">{experience.status}</span> : <span class="badge badge-danger">{experience.status}</span> }</td>
                                            <td className='text-center'>
                                            

                                            {this.state.id === experience._id?   <UpdateExperience show={this.state.updateModalOpen}
        onHide={this.closeUpdateModal}  experience={experience} /> : null }


                                                    <button className='btn btn-primary btn-sm m-1' onClick={() => this.openUpdateModal(experience._id)} >Edit</button>
                                                    <button className='btn btn-danger btn-sm m-1' onClick={ ()=> { this.props.removeExperience(experience._id)}} >Delete</button>
                                                  
                                            </td>
                                        </tr>
                                            )
                                            

                                          
                                        })
                                    }
                                 </tbody> : <p>There is no Info</p>}
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
    experiences: state.experience
})

export default connect(mapStateToProps, { loadExperience, removeExperience })(Experiences)
