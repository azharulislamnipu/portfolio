import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import {connect} from 'react-redux';
import { createBanner } from '../../store/actions/bannerActions';
 class Banner extends Component {

    constructor()
    {
        super();
       
    }

    state ={
        title:'',
        description:'',
        degination:[''],
        cv:'',
        image:null,
        error:{}
    }

    addDegination(e){

        this.setState({degination:[...this.state.degination, ""]})
    }
 

    chanevalue = (event, index) => {
        this.state.degination[index] = event.target.value;
        this.setState({degination: this.state.degination});
    }

    changeHandler = event =>{

        this.setState({
            [event.target.name]:event.target.value
        })
    }


      uploadSingleFile = (e) =>{
          

        this.setState({
            image: URL.createObjectURL(e.target.files[0])
        })
    }

    
    submitHandler = event => {
        event.preventDefault();

        console.log(this.state.image)
            let {  title, description, degination, cv, image } = this.state;

            this.props.createBanner({  title, description, degination, cv, image });
            // console.log( this.state);
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


                                    <Form  onSubmit={this.submitHandler}  enctype="multipart/form-data">
                                        
                                      <Form.Group controlId="title">
                                      <Form.Label>Title</Form.Label>
                                      <Form.Control type="text" name='title' autoComplete="new-title"  placeholder="Enter Your title" value={title} onChange={this.changeHandler} />
                                      </Form.Group>
                                      <Form.Group controlId="description">
                                      <Form.Label>Description</Form.Label>
                                      <Form.Control type="text" name='description' autoComplete="new-description"  placeholder="Enter Your Description" value={description} onChange={this.changeHandler} />
                                      </Form.Group>
                                      <Form.Group controlId="degination">
                                      <Form.Label>Degination</Form.Label>
                                      {this.state.degination.map((value, index) => {
                                          return(
                                        
                                                <Form.Control type = "text" key={index}   placeholder='Enter Your Degination' value={value} onChange={(e) => this.chanevalue(e, index)}/>
                                            
                                          )
                                      })}
                                      <button className="btn btn-primary float-right mt-2" onClick={(e) => { e.preventDefault(); this.addDegination(e)}}>Add new Degination</button>
                                      </Form.Group>
                                      <Form.Group controlId="cv">
                                      <Form.Label>CV Upload</Form.Label>
                                      <Form.Control type="file" name='cv' autoComplete="new-cv"  placeholder="Upload You Cv" value={cv} onChange={this.changeHandler} />
                                      </Form.Group>
                                      <Form.Group controlId="image">
                                      <Form.Label>Image Upload</Form.Label>

                        
                                      <Form.Control type="file" name='image' onChange={this.uploadSingleFile} />
                                 
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

export default connect(null, { createBanner })(Banner)
