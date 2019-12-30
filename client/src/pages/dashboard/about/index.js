import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SocialList from './socialList';
import { createAbout } from '../../../store/actions/aboutActions';
import { addFlashMessage } from '../../../store/actions/flashMessages';
import Axios from 'axios'
 class Abouts extends Component {

    constructor(props) {
        super(props);
       this.state = {
            title: "",
            sub_title: "",
            about_image: "",
            about_info: "",

            selectedFile:'',
            filename: '',

            name: "",
            email: "",
            phone: "",
            address: "",
            age: "", 
            nationality: "", 
    
            social_info: [{ index: Math.random(), social_icon: "", social_link: "" }],
            status: "publish",
            error: {}
          };

        this.addNewRow = this.addNewRow.bind(this);
        this.deteteRow = this.deteteRow.bind(this);
        this.clickOnDelete = this.clickOnDelete.bind(this);
        this.selecthandleChange = this.selecthandleChange.bind(this);
      }

     

        handleChange = (e) => {
            if (["social_icon", "social_link"].includes(e.target.name)) {
                let social_info = [...this.state.social_info]
                social_info[e.target.dataset.id][e.target.name] = e.target.value;
            } else {
                this.setState({ [e.target.name]: e.target.value })
            }
        }
        addNewRow = (e) => {
            this.setState((prevState) => ({
                social_info: [...prevState.social_info, { index: Math.random(), social_icon: "", social_link: "" }],
            }));
        }

        deteteRow = (index) => {
            this.setState({
                social_info: this.state.social_info.filter((s, sindex) => index !== sindex),
            });
        }

      
        clickOnDelete(record) {
            this.setState({
                social_info: this.state.social_info.filter(r => r !== record)
            });
        }
   
        selecthandleChange(e) {
            this.setState({
              status: e.target.value
            });
          }
    changeHandler = event =>{

           this.setState({
               [event.target.name]: event.target.value
          })
            
    }

    getData = (e) => {
        e.preventDefault();
        
   

        const url = 'http://localhost:4000/api/abouts/5e09dc77d29951171c43d443';
        Axios.get(url)
           .then(res =>  {
               console.log(res.data.social_info)

               
        for(var i=0;i<res.data.social_info.length;i++)
        {
                if(res.data.social_info[i].social_icon !='' || res.data.social_info[i].social_link !='')
                {
                    console.log('social_icon',this.state.social_info[i].social_icon);
                    console.log('social_link',this.state.social_info[i].social_link);
                }
        }


                //   res.map((rs, index) => {
                     
                //               console.log(rs)

                //    })
               
           })
           .catch((error) => {
               console.log(error);
           })
      }

  

   filehander = e => {
    this.setState({selectedFile: e.target.files});
    this.setState({filename: e.target.files[0].name});
  };

    submitHandler = event => {
        event.preventDefault();


        let {  title, sub_title, about_image, about_info, 
            name, email, phone, address, age, nationality, 
              social_info, status,  error} = this.state;

        const formData = new FormData();
       
        formData.append('title', title);
        formData.append('sub_title', sub_title);
        formData.append('about_info', about_info);
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('address', address);
        formData.append('age', age);
        formData.append('nationality', nationality);
        formData.append('social_info', social_info);
        formData.append('status', status);
        formData.append('about_image_name', this.state.filename);
        formData.append('about_image', this.state.selectedFile[0]);
    

        for(var i=0;i<this.state.social_info.length;i++)
        {
                if(this.state.social_info[i].social_icon !='' || this.state.social_info[i].social_link !='')
                {
                    formData.append('social_icon',this.state.social_info[i].social_icon);
                    formData.append('social_link',this.state.social_info[i].social_link);
                }
        }

        this.props.createAbout(formData, this.props.addFlashMessage, this.props.history);


        console.log(this.state.social_info);

    } 

  render() {

    let {  title, sub_title, about_image, about_info, 
        name, email, phone, address, age, nationality, 
          social_info, status,  error} = this.state;

     
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

                                     
                                      <Form.Group controlId="about_info">
                                      <Form.Label>About Info</Form.Label>

                                      <Form.Control as="textarea" rows="4"  name='about_info' autoComplete="new-about_info"  placeholder="Enter Your About Details" value={about_info} onChange={this.changeHandler} />
                                   
                                      </Form.Group>

                                      <Form.Group controlId="name">
                                      <Form.Label>Name</Form.Label>
                                      <Form.Control type="text" name='name' autoComplete="new-name"  placeholder="Enter Your name" value={name} onChange={this.changeHandler} />
                                      </Form.Group>


                                      <Form.Group controlId="email">
                                      <Form.Label>Email</Form.Label>
                                      <Form.Control type="email" name='email' autoComplete="new-email"  placeholder="Enter Your Email" value={email} onChange={this.changeHandler} />
                                      </Form.Group>


                                      <Form.Group controlId="Phone">
                                      <Form.Label>Phone</Form.Label>
                                      <Form.Control type="text" name='phone' autoComplete="new-phone"  placeholder="Enter Your phone number" value={phone} onChange={this.changeHandler} />
                                      </Form.Group>

                                      <Form.Group controlId="address">
                                      <Form.Label>Address</Form.Label>
                                      <Form.Control as="textarea" rows="4"  name='address' autoComplete="new-address"  placeholder="Enter Your address" value={address} onChange={this.changeHandler} />
                                      </Form.Group>


                                      <Form.Group controlId="age">
                                      <Form.Label>Age</Form.Label>
                                      <Form.Control type="number" name='age' autoComplete="new-age"  placeholder="Enter Your age" value={age} onChange={this.changeHandler} />
                                      </Form.Group>

                                     <Form.Group controlId="nationality">
                                      <Form.Label>Nationality</Form.Label>
                                      <Form.Control type="text" name='nationality' autoComplete="new-nationality"  placeholder="Enter Your nationality" value={nationality} onChange={this.changeHandler} />
                                      </Form.Group>



                                      <Form.Group controlId="social">
                                      <Form.Label>Social Info</Form.Label>
                                      <SocialList add={this.addNewRow} delete={this.clickOnDelete.bind(this)} social_info={social_info}  handlechange={this.handleChange}/>
                                      </Form.Group>

                                    <Form.Group controlId="status.controler">
                                        <Form.Label>Status</Form.Label>
                                        <Form.Control
                                        as="select"
                                        name="status"
                                        onChange={this.selecthandleChange}
                                        value={status}
                                        >
                                        <option value="publish">Publish</option>
                                        <option value="revoke">Revoke</option>
                                        </Form.Control>
                                    </Form.Group>
                                   
                                     
                                       <Form.Group className='row'>
                                           <div className="col-sm-12 text-left">
                                               <Link className="btn btn-primary mr-2" to='/banners'>View List</Link>
                                            <button className="btn submit-btn btn-primary" type="submit">Create About</button>
                                            </div>
                                       </Form.Group>

                                     </Form>
        

                                     <button className="btn  btn-danger" onClick={this.getData}>Show</button>

                                    </div>
                                </div>
                            </div>  
                </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
    about: state.about,
})

export default connect(mapStateToProps, {createAbout, addFlashMessage})(Abouts)