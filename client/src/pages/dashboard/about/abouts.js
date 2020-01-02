import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import {connect} from 'react-redux';
 import {loadAbouts , removeAbout} from '../../../store/actions/aboutActions';
import { Link } from "react-router-dom";
import UpdateAbout from "./updateAbout";
import ViewDetails from "./viewDetails";

 class Abouts extends Component {

    state = {
        updateModalOpen: false,
        viewModalOpen: false,
        error:'',
        id: ''
    }

      static getDerivedStateFromProps(nextProps, prevState) {
    if (
      JSON.stringify(nextProps.abouts.error) !== JSON.stringify(prevState.error)
    ) {
      return {
        error: nextProps.abouts.error
      };
    }
    return null;
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
        this.props.loadAbouts();
    }


    render() {
        let { abouts } = this.props.abouts;

        return (
            <div class="container-fluid"> 
              
                <div class="row">
                    <div class="col-sm-12">
                        <div class="page-title-box">
                            <div class="row align-items-center">
                                <div class="col-md-8">
                                    <h4 class="page-title mb-0">Dashboard</h4>
                                    <ol class="breadcrumb m-0">
                                         <li class="breadcrumb-item"><Link to={'/about'}>About</Link> </li>
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
                            <h4 class="mt-0 header-title">Latest Abouts</h4>
                            <div class="table-responsive mt-4">
                                <table class="table table-hover mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">(#) Id</th>
                                            <th scope="col">Image</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Sub Title</th>
                                            <th scope="col">About Info</th>
                                            <th scope="col">status</th>
                                   
                                            <th scope="col" className='text-center'>Actions</th>
                                      
                                            
                                        </tr>
                                    </thead>

                                    { (Array.isArray(abouts) && abouts.length) > 0 ? 
                                    <tbody>
                                    {
                                        abouts.map((about, index) => {
                                        
                                            let count = index + 1;
                                       
                                                return(
                                                <tr key={about._id}>
                                            <th scope="row">#{count}</th>
                                            <td><img src={about.about_image_url} class="thumb-lg rounded-circle mr-2" alt="about-image"/></td>
                                            <td>{about.title}</td>
                                            <td>{about.sub_title}</td>
                                            <td className='w-25'>{about.about_info}</td>
                                        
                                            <td>{about.status =='publish' ? <span class="badge badge-success">{about.status}</span> : <span class="badge badge-danger">{about.status}</span> }</td>
                                            <td>
                                          

                                            {this.state.id === about._id?   <UpdateAbout show={this.state.updateModalOpen}
        onHide={this.closeUpdateModal}  bio={about.bio} about={about} error={this.state.error} /> : null }

        {this.state.id === about._id?   <ViewDetails show={this.state.viewModalOpen}
        onHide={this.closeUpdateModal}  bio={about.bio} about={about} /> : null }

        
                                    
                                                    <button className='btn btn-primary btn-sm m-1' onClick={() => this.openUpdateModal(about._id)} >Edit</button>
                                                    <button className='btn btn-danger btn-sm m-1' onClick={ ()=> { this.props.removeAbout(about._id)}} >Delete</button>
                                                    <button className='btn btn-secondary btn-sm m-1'  onClick={() => this.openViewModal(about._id)}  >View</button>
                                                
                                            </td>
                                        </tr>
                                            )
                                            

                                          
                                        })
                                    }
                                 </tbody> : <p>There is no About</p>}

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
    abouts: state.about,
})

export default connect(mapStateToProps, { loadAbouts, removeAbout })(Abouts)