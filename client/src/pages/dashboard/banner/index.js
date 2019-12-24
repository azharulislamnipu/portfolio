import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import {connect} from 'react-redux';
import { createBanner } from '../../../store/actions/bannerActions';
import { addFlashMessage } from '../../../store/actions/flashMessages';

import { Link } from 'react-router-dom'


 class Banner extends Component {

    state ={
        title:'',
        description:'',
        designation:[''],
        cv:'',
        selectedFile:'',
        filename: '',
        cvfile:'',
        cvname:'',
        error:{}
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (
          JSON.stringify(nextProps.banner.error) !== JSON.stringify(prevState.error)
        ) {
          return {
            error: nextProps.banner.error
          };
        }
        return null;
      }

    addDesignation(e){

        this.setState({designation:[...this.state.designation, ""]})
    }
 

    chanevalue = (event, index) => {
        this.state.designation[index] = event.target.value;
        this.setState({designation: this.state.designation});
    }

    changeHandler = event =>{

           this.setState({
               [event.target.name]: event.target.value
          })
            
    }



   filehander = e => {
    this.setState({selectedFile: e.target.files});
    this.setState({filename: e.target.files[0].name});
  };

  cvhander = e => {
    this.setState({cvfile: e.target.files});
    this.setState({cvname: e.target.files[0].name});
  };



    submitHandler = event => {
        event.preventDefault();
        let {  title, description, designation, cv , image} = this.state;
        const formData = new FormData();
       
        formData.append('title', title);
        formData.append('description', description);
    
        for (var i = 0; i < designation.length; i++) {
            formData.append('designation[]', designation[i]);
        }

        formData.append('cv', this.state.cvfile[0]);
        formData.append('cvname', this.state.cvname);
        formData.append('image', this.state.selectedFile[0]);
        formData.append('imagename', this.state.filename);
    
        this.props.createBanner(formData, this.props.addFlashMessage,this.props.history);


    } 


 

  
    render() {
        let {  title, description, designation, cv, image, error  } = this.state;

      let { banners } = this.props.banner;
      console.log(this.props);

   
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
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-body">
                                    <h2 className="text-uppercase text-center">Create Banner</h2>


                                    <Form  onSubmit={this.submitHandler}  method="post"  enctype="multipart/form-data">
                                        
                                      <Form.Group controlId="title">
                                      <Form.Label>Title</Form.Label>
                                      <Form.Control type="text" name='title' autoComplete="new-title"  placeholder="Enter Your title" value={title} onChange={this.changeHandler} />
                                      {error.title && (<span className= {error.title ? 'invalid-feedback d-block' : 'invalid-feedback' } >
                                            {error.title}
                                        </span>
                                        )}
                                      </Form.Group>
                                      <Form.Group controlId="description">
                                      <Form.Label>Description</Form.Label>
                                      <Form.Control type="text" name='description' autoComplete="new-description"  placeholder="Enter Your Description" value={description} onChange={this.changeHandler} />
                                      {error.description && (<span className= {error.description ? 'invalid-feedback d-block' : 'invalid-feedback' } >
                                            {error.description}
                                        </span>
                                        )}
                                     
                                      </Form.Group>
                                      <Form.Group controlId="degination">
                                      <Form.Label>Designation</Form.Label>
                                      {this.state.designation.map((value, index) => {
                                          return(
                                        
                                                <Form.Control type = "text" key={index}   placeholder='Enter Your Degination' value={value} onChange={(e) => this.chanevalue(e, index)}/>
                                            
                                          )
                                      })}
                                      <button className="btn btn-primary float-right mt-2" onClick={(e) => { e.preventDefault(); this.addDesignation(e)}}>Add new Degination</button>
                                      </Form.Group>
                                      <Form.Group controlId="cv">
                                      <Form.Label>CV Upload</Form.Label>
                                      <Form.Control type="file" name='cv' autoComplete="new-cv"  placeholder="Upload You Cv" multiple onChange={this.cvhander} />
                                      {error.cv && (<span className= {error.cv ? 'invalid-feedback d-block' : 'invalid-feedback' } >
                                            {error.cv}
                                        </span>
                                        )}
                                      </Form.Group>
                                      <Form.Group controlId="image">
                                      <Form.Label>Image Upload</Form.Label>

                                      <Form.Control type="file" name='image' multiple  onChange={this.filehander} />
                                      {error.image && (<span className= {error.image ? 'invalid-feedback d-block' : 'invalid-feedback' } >
                                            {error.image}
                                        </span>
                                        )}
                                      </Form.Group>
                                       <Form.Group className='row'>
                                           <div className="col-sm-12 text-right">
                                               <Link className="btn btn-primary mr-2" to='/banners'>View List</Link>
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

const mapStateToProps = state => ({
    banner: state.banner,
    addFlashMessage
})

export default connect(mapStateToProps, { createBanner, addFlashMessage})(Banner)
