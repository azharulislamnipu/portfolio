import React, { Component } from 'react'
import {connect} from 'react-redux';
import { loadSkills, removeSkills } from "../../../store/actions/skillsActions";
import  UpdateSkills from './updateSkills';
import { Link } from 'react-router-dom';
 class SkillsList extends Component {


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
        this.props.loadSkills();
    }
  

  
    render() {

     

       let { skills } = this.props.skills;

    
        return (
            <div class="container-fluid"> 
              
                <div class="row">
                    <div class="col-sm-12">
                        <div class="page-title-box">
                            <div class="row align-items-center">
                                <div class="col-md-8">
                                    <h4 class="page-title mb-0">Dashboard</h4>
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item"><Link to={'/skill'}>Skills Create</Link> </li>
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
                                            <th scope="col">Extra Title</th>
                                            <th scope="col">Professional Skills</th>
                                            <th scope="col">Programing language</th>
                                            <th scope="col">Language Skills</th>
                                            <th scope="col">Status</th>
                                            <th scope="col" className='text-center'>Actions</th>
                                      
                                            
                                        </tr>
                                    </thead>

 
                                  { (Array.isArray(skills) && skills.length) > 0 ? 
                                    <tbody>
                                    {
                                        skills.map((skill, index) => {
                                        
                                            let count = index + 1;
                                       
                                                return(
                                                <tr key={skill._id}>
                                            <th scope="row">#{count}</th>
                                        
                                       
                                            <td>
                                            {

                                                skill.extra_skills.length > 0 ?
                                                skill.extra_skills.map(extra_skill => (
                                                <span>{`${extra_skill.length >0 ? extra_skill+ ' , ' : extra_skill }`}</span>
                                                )) : <span>No extra skill </span>
                                                }
                                            
                                            </td>

                                            
                                            <td>
                                            {

                                                skill.professional_skills.length > 0 ?
                                                skill.professional_skills.map(professional_skill=> (

                                                <span>{`${professional_skill.progress_title}-${professional_skill.progress}`} ,  </span>
                                                )) : <span>No extra skill </span>
                                                }
                                            
                                            </td>

                                           

                                            <td>
                                            {

                                                skill.programming_skills.length > 0 ?
                                                skill.programming_skills.map(programming_skill=> (

                                                <span>{`${programming_skill.programming_lang_title}-${programming_skill.programming_lang_progress}`} ,  </span>
                                                )) : <span>No programming skill </span>
                                                }
                                            
                                            </td>

                                            <td>
                                            {

                                                skill.language_skills.length > 0 ?
                                                skill.language_skills.map(language_skill=> (

                                                <span>{`${language_skill.lang_title}-${language_skill.lang_progress}`} ,  </span>
                                                )) : <span>No extra skill </span>
                                                }
                                            
                                            </td>


                                            <td>{skill.status =='publish' ? <span class="badge badge-success">{skill.status}</span> : <span class="badge badge-danger">{skill.status}</span> }</td>
                                            <td className='text-center'>
                                            
                                            {this.state.id === skill._id?   <UpdateSkills show={this.state.updateModalOpen}
        onHide={this.closeUpdateModal}  skill={skill} /> : null }


                                                    <button className='btn btn-primary btn-sm m-1' onClick={() => this.openUpdateModal(skill._id)} >Edit</button>
                                                    <button className='btn btn-danger btn-sm m-1' onClick={ ()=> { this.props.removeSkills(skill._id)}} >Delete</button>
                                                  
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
    skills: state.skill
})

export default connect(mapStateToProps, { loadSkills, removeSkills })(SkillsList)
