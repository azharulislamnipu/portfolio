import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import {connect} from 'react-redux';
import { loadBanners } from '../../../store/actions/bannerActions';
import { addFlashMessage } from '../../../store/actions/flashMessages';

 class Banners extends Component {


    componentDidMount(){
        this.props.loadBanners()
    }
  
    render() {


       let { banners } = this.props.banner;
   
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
                                        <li class="breadcrumb-item active" aria-current="page">Banner</li>
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
                            <h4 class="mt-0 header-title">Latest Transactions</h4>
                            <div class="table-responsive mt-4">
                                <table class="table table-hover mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">(#) Id</th>
                                            <th scope="col">Image</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Descrition</th>
                                            <th scope="col">Desination</th>
                                            <th scope="col">CV</th>
                                            <th scope="col">Actions</th>
                                      
                                            
                                        </tr>
                                    </thead>

 
                                  { (Array.isArray(banners) && banners.length) > 0 ? 
                                    <tbody>
                                    {
                                        banners.map((banner, index) => {
                                        
                                            let count = index + 1;
                                       
                                                return(
                                                <tr key={banner._id}>
                                            <th scope="row">#{count}</th>
                                            <td>
                                                <div>
                                                    <img src={`${banner.image_url}/uploads/${banner.image}`} alt="" class="thumb-lg rounded-circle mr-2"/>
                                                </div>
                                            </td>
                                            <td>{banner.title}</td>
                                            <td>{banner.description}</td>
                                            <td>
                                            {

                                                banner.designation.length > 0 ?
                                                banner.designation.map(degintion => (
                                                <span>{`${degintion.length >0 ? degintion+ ' , ' : degintion }`}</span>
                                                )) : <span>No Designation</span>
                                            }
                                            </td>
                                          
                                            <td>
                                                <a href={`${banner.image_url}/uploads/${banner.cv}`} className='btn btn-info'> Doawnload CV</a>
                                           
                                            </td>
                                        
                                            <td>
                                                <div>
                                                    <a href="#" class="btn btn-primary btn-sm mr-2">Edit</a>
                                                    <a href="#" class="btn btn-danger btn-sm ml-2">Delete</a>
                                                </div>
                                            </td>
                                        </tr>
                                            )
                                            
                                            
                                          
                                        })
                                    }
                                 </tbody> : <p>There is no Banner</p>}
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
    banner: state.banner,
})

export default connect(mapStateToProps, { loadBanners})(Banners)
