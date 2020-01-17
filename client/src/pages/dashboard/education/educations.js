import React, { Component } from 'react'
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { loadEducation, removeEducation } from "../../../store/actions/educationActions";
import UpdateEducation from './updateEducation';
 class Educations extends Component {

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
        this.props.loadEducation();
    }
  

  
    render() {

       let { educations } = this.props.educations;

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
                                        <li class="breadcrumb-item"><Link to={'/education'}>Education</Link> </li>
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
                            <h4 class="mt-0 header-title">Latest Educations</h4>
                            <div class="table-responsive mt-4">
                                <table class="table table-hover mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">(#) Id</th>
                                            <th scope="col">Organization Name</th>
                                            <th scope="col">Program Title</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Start Date</th>
                                            <th scope="col">End Date</th>
                                            <th scope="col">Status</th>
                                            <th scope="col" className='text-center'>Actions</th>
                                        </tr>
                                    </thead>

 
                                  { (Array.isArray(educations) && educations.length) > 0 ? 
                                    <tbody>
                                    {
                                        educations.map((education, index) => {
                                        
                                            let count = index + 1;
                                           let start_date = new Date(education.start_date);
                                           start_date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(start_date);

                                           let end_date = new Date(education.end_date);
                                           end_date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(end_date);
                                                return(
                                                <tr key={education._id}>
                                            <th scope="row">#{count}</th>
                                        
                                            <td>{education.organization_name}</td>
                                            <td>{education.program_title}</td>
                                            <td>
                                            {education.description}
                                            
                                            </td>
                                            <td>
                                            {start_date}
                                            
                                            </td>
                                            <td>
                                            {end_date}
                                            
                                            </td>
                                            <td>{education.status =='publish' ? <span class="badge badge-success">{education.status}</span> : <span class="badge badge-danger">{education.status}</span> }</td>
                                            <td className='text-center'>
                                            

                                            {this.state.id === education._id?   <UpdateEducation show={this.state.updateModalOpen}
        onHide={this.closeUpdateModal}  education={education} /> : null }


                                                    <button className='btn btn-primary btn-sm m-1' onClick={() => this.openUpdateModal(education._id)} >Edit</button>
                                                    <button className='btn btn-danger btn-sm m-1' onClick={ ()=> { this.props.removeEducation(education._id)}} >Delete</button>
                                                  
                                            </td>
                                        </tr>
                                            )
                                            

                                          
                                        })
                                    }
                                 </tbody> : <p>There is no Education</p>}
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
    educations: state.education
})

export default connect(mapStateToProps, { loadEducation, removeEducation })(Educations)
