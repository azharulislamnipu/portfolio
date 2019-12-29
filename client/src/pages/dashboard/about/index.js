import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import TaskList from './tasklist.js';
 class Abouts extends Component {

    constructor(props) {
        super(props);

        this.addNewRow = this.addNewRow.bind(this);
        this.deteteRow = this.deteteRow.bind(this);
        this.clickOnDelete = this.clickOnDelete.bind(this);
      }
state = {
          title: "",
          sub_title: "",
          about_image: "",
          about_info: "",
          name: "",
          email: "",
          phone: "",
          address: "",
          age: "", 
          nationality: "", 
          description:"",
          social_link:[''],
          taskList: [{ index: Math.random(), projectName: "", task: "" }],
          status: "publish",
          error: {}
        };
     

        handleChange = (e) => {
            if (["projectName", "task"].includes(e.target.name)) {
                let taskList = [...this.state.taskList]
                taskList[e.target.dataset.id][e.target.name] = e.target.value;
            } else {
                this.setState({ [e.target.name]: e.target.value })
            }
        }
        addNewRow = (e) => {
            this.setState((prevState) => ({
                taskList: [...prevState.taskList, { index: Math.random(), projectName: "", task: "" }],
            }));
        }

        deteteRow = (index) => {
            this.setState({
                taskList: this.state.taskList.filter((s, sindex) => index !== sindex),
            });
        }

      
        clickOnDelete(record) {
            this.setState({
                taskList: this.state.taskList.filter(r => r !== record)
            });
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

    submitHandler = event => {
        event.preventDefault();


    
         let {  about_image} = this.state;
        const formData = new FormData();
       
        // formData.append('title', title);
        // formData.append('description', description);
    
        // for (var i = 0; i < designation.length; i++) {
        //     formData.append('designation[]', designation[i]);
        // }

        // formData.append('cv', this.state.cvfile[0]);
        // formData.append('cvname', this.state.cvname);
        // formData.append('image', this.state.selectedFile[0]);
        formData.append('about_image', this.state.filename);
    
    
        // for(var i=0;i<this.state.taskList.length;i++)
        // {
        //         if(this.state.taskList[i].projectName==='' || this.state.taskList[i].task==='')
        //         {
                    
        //             return false;
        //         }
        // }

        console.log(this.state);

    } 

  render() {

    let {  title, sub_title, about_image, about_info, social_link, error , subCatagory ,taskList } = this.state;
    return (
      <div class="container-fluid">

                <div class="row">
                    <div class="col-sm-12">
                        <div class="page-title-box">
                            <div class="row align-items-center">
                                <div class="col-md-8">
                                    <h4 class="page-title mb-0">Dashboard</h4>
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item"><Link to={'/abouts'}>Abouts</Link></li>
                                        <li class="breadcrumb-item active" aria-current="page">about</li>
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
                                    <h2 className="text-uppercase text-center">Create About</h2>


                                    <Form  onSubmit={this.submitHandler}  method="post"  enctype="multipart/form-data">
                                        
                                      <Form.Group controlId="title">
                                      <Form.Label>Title</Form.Label>
                                      <Form.Control type="text" name='title' autoComplete="new-title"  placeholder="Enter Your title" value={title} onChange={this.changeHandler} />
                                     
                                      </Form.Group>
                                      <Form.Group controlId="subtitle">
                                      <Form.Label>Sub Title</Form.Label>
                                      <Form.Control type="text" name='sub_title' autoComplete="new-sub_title"  placeholder="Enter Your Sub Title" value={sub_title} onChange={this.changeHandler} />
                                      </Form.Group>

                                      <Form.Group controlId="image">
                                      <Form.Label>Image Upload</Form.Label>

                                      <Form.Control type="file" name='about_image' multiple  onChange={this.filehander} />
                                      
                                      </Form.Group>

                                      <TaskList add={this.addNewRow} delete={this.clickOnDelete.bind(this)}taskList={taskList}  handlechange={this.handleChange} />
                                   
                                     
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
export default Abouts;