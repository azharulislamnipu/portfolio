import React, { Component } from 'react'
import {connect} from 'react-redux';
import { loadInfos, removeInfo } from "../../../store/actions/infoActions";
import  UpdateCounter from './updateCounter';
import { Link } from 'react-router-dom';
 class Infos extends Component {


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
        this.props.loadInfos();
    }
  

  
    render() {

       let { infos } = this.props.infos;

    
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
                                            <th scope="col">Title</th>
                                            <th scope="col">Info Icon</th>
                                            <th scope="col">Info Name</th>
                                            <th scope="col">Status</th>
                                            <th scope="col" className='text-center'>Actions</th>
                                      
                                            
                                        </tr>
                                    </thead>

 
                                  { (Array.isArray(infos) && infos.length) > 0 ? 
                                    <tbody>
                                    {
                                        infos.map((info, index) => {
                                        
                                            let count = index + 1;
                                       
                                                return(
                                                <tr key={info._id}>
                                            <th scope="row">#{count}</th>
                                        
                                            <td>{info.title}</td>
                                            <td>{info.info_icon}</td>
                                            <td>
                                            {

                                                info.info_name.length > 0 ?
                                                info.info_name.map(infoname => (
                                                <span>{`${infoname.length >0 ? infoname+ ' , ' : infoname }`}</span>
                                                )) : <span>No info name</span>
                                                }
                                            
                                            </td>
                                            <td>{info.status =='publish' ? <span class="badge badge-success">{info.status}</span> : <span class="badge badge-danger">{info.status}</span> }</td>
                                            <td className='text-center'>
                                            

                                            {this.state.id === info._id?   <UpdateCounter show={this.state.updateModalOpen}
        onHide={this.closeUpdateModal}  info={info} /> : null }


                                                    <button className='btn btn-primary btn-sm m-1' onClick={() => this.openUpdateModal(info._id)} >Edit</button>
                                                    <button className='btn btn-danger btn-sm m-1' onClick={ ()=> { this.props.removeInfo(info._id)}} >Delete</button>
                                                  
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
    infos: state.info,
})

export default connect(mapStateToProps, { loadInfos, removeInfo })(Infos)
