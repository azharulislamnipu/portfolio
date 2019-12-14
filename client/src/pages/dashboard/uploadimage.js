import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import {connect} from 'react-redux';
import { uploadSuccess } from '../../store/actions/uploadActions';
 class Uploadimage extends Component {

    state ={
        image:null,
        error:{}
    }

 
    changeHandler = event =>{
        this.setState({
            [event.target.name]: event.target.files[0]
        })
    }

    submitHandler = event => {
        event.preventDefault();

        let {image} = this.state; 

        this.props.uploadSuccess({image});

        console.log(image);
    
    } 


    render() {
        let {  title, description, degination, cv, image } = this.state;

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
                                        <li class="breadcrumb-item active" aria-current="page">Image upload</li>
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
                                    <h2 className="text-uppercase text-center">Image Upload</h2>


                                    <Form  onSubmit={this.submitHandler}  method="post"  enctype="multipart/form-data">
                       
                                      <Form.Group controlId="image">
                                      <Form.Label>Image Upload</Form.Label>

                                      <Form.Control type="file" name='image' multiple  onChange={this.changeHandler} />
                                 
                                      </Form.Group>
                                       <Form.Group className='row'>
                                           <div className="col-sm-12 text-right">
                                            <button className="btn submit-btn btn-primary" type="submit">Add Banner</button>
                                            </div>
                                       </Form.Group>

                                     </Form>
        

                                            

                                    </div>
                                </div>
                            </div>  
                        </div>



           </div>
    )
    }
}

export default connect(null,{uploadSuccess})(Uploadimage)
