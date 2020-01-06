import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createPortfolio } from "../../../store/actions/portfolioActions";
import { addFlashMessage } from "../../../store/actions/flashMessages";
import DatePicker from "react-datepicker";
class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",

      selectedFile: "",
      filename: "",

      gellaryFile:'',
      gellaryfilename:[''],
      
      feature_image: "",
      feature_image_name: "",
      gellary_image: [""],
      gellary_image_name: [""],
      client_name: "",
      created_by: "",
      completed_date: new Date(),
      skills: [""],
      status: "publish",
      error: {}
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.filehander = this.filehander.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  addSkills(e) {

    this.setState({ skills: [...this.state.skills, ""] })
  }

  changeSkillsvalue = (event, index) => {
    this.state.skills[index] = event.target.value;
    this.setState({ skills: this.state.skills });
  }
  removeSkills = (sidx) => {
    if (sidx > 0) {
      this.setState({
        skills: this.state.skills.filter((s, idx) => idx !== sidx)
      });
    }

  };





  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (
  //     JSON.stringify(nextProps.about.error) !== JSON.stringify(prevState.error)
  //   ) {
  //     return {
  //       error: nextProps.about.error
  //     };
  //   }
  //   return null;
  // }
  handleDate = date => {
    this.setState({
      completed_date: date
    });
  };
  handleChange(e) {
    this.setState({
      status: e.target.value
    });
  }
  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  filehander = e => {
    this.setState({ selectedFile: e.target.files });
    this.setState({ filename: e.target.files[0].name });
  };

 gellaryhander = e => {
    this.setState({ gellaryFile: e.target.files });

    for (var i = 0; i < e.target.files.length; i++) {
      this.setState({ gellaryfilename : e.target.files[i].name });
  }
 
  };

  submitHandler = event => {
    event.preventDefault();
    let {
      title,
      description,
      feature_image,
      gellary_image,
      client_name,
      created_by,
      completed_date,
      skills,
      status,
      error
    } = this.state;

    console.log(this.state.gellaryfilename);

    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("feature_image_name", this.state.filename);
    formData.append("feature_image", this.state.selectedFile[0]);

    formData.append("gellary_image", this.state.gellaryFile);
    formData.append("gellary_image_name[]", this.state.gellaryfilename);

    formData.append("client_name", client_name);
    formData.append("created_by", created_by);
    formData.append("completed_date", completed_date);
    formData.append("skills", skills);
    formData.append("status", status);

    this.props.createPortfolio(
      formData,
      this.props.addFlashMessage,
      this.props.history
    );
  };

  render() {
    let {
      title,
      description,
      feature_image,
      gellary_image,
      client_name,
      created_by,
      completed_date,
      skills,
      status,
      error
    } = this.state;

    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12">
            <div class="page-title-box">
              <div class="row align-items-center">
                <div class="col-md-8">
                  <h4 class="page-title mb-0">Dashboard</h4>
                  <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item">
                      <Link to={"/portfolios"}>Portfolios</Link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                       Create
                    </li>
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
                <h2 className="text-uppercase text-center">Create Portfolio</h2>

                <Form
                  onSubmit={this.submitHandler}
                  method="post"
                  enctype="multipart/form-data"
                >
                  <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="text"
                      name="title"
                      autoComplete="new-title"
                      placeholder="Enter Your title"
                      value={title}
                      onChange={this.changeHandler}
                    />
                    {/* {error.title && (
                      <span
                        className={
                          error.title
                            ? "invalid-feedback d-block"
                            : "invalid-feedback"
                        }
                      >
                        {error.title}
                      </span>
                    )} */}
                  </Form.Group>

                  <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>

                    
                    <Form.Control
                      as="textarea"
                      rows="4"
                      name="description"
                      autoComplete="new-description"
                      placeholder="Enter Your description"
                      value={description}
                      onChange={this.changeHandler}
                    />

                    {/* {error.description && (
                      <span
                        className={
                          error.description
                            ? "invalid-feedback d-block"
                            : "invalid-feedback"
                        }
                      >
                        {error.description}
                      </span>
                    )} */}
                  </Form.Group>

                  <Form.Group controlId="feature_image">
                    <Form.Label>Feature Image Upload</Form.Label>

                    <Form.Control
                      type="file"
                      name="feature_image"
                      onChange={this.filehander}
                    />
                    {/* {error.feature_image && (
                      <span
                        className={
                          error.feature_image
                            ? "invalid-feedback d-block"
                            : "invalid-feedback"
                        }
                      >
                        {error.feature_image}
                      </span>
                    )} */}
                  </Form.Group>


                  <Form.Group controlId="gellary_image">
                    <Form.Label>Gellary Image Upload</Form.Label>

                    <Form.Control
                      type="file"
                      name="gellary_image"
                      multiple
                      onChange={this.gellaryhander}
                    />
                    {/* {error.feature_image && (
                      <span
                        className={
                          error.feature_image
                            ? "invalid-feedback d-block"
                            : "invalid-feedback"
                        }
                      >
                        {error.feature_image}
                      </span>
                    )} */}
                  </Form.Group>

                  <Form.Group controlId="client_name">
                    <Form.Label>Client Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="client_name"
                      autoComplete="new-client_name"
                      placeholder="Enter Your Client Name"
                      value={client_name}
                      onChange={this.changeHandler}
                    />
                    {/* {error.client_name && (
                      <span
                        className={
                          error.client_name
                            ? "invalid-feedback d-block"
                            : "invalid-feedback"
                        }
                      >
                        {error.client_name}
                      </span>
                    )} */}
                  </Form.Group>

                 

                  <Form.Group controlId="created_by">
                    <Form.Label>Created By</Form.Label>
                    <Form.Control
                      type="text"
                      name="created_by"
                      autoComplete="new-created_by"
                      placeholder="Enter Your Created By"
                      value={created_by}
                      onChange={this.changeHandler}
                    />
                    {/* {error.created_by && (
                      <span
                        className={
                          error.created_by
                            ? "invalid-feedback d-block"
                            : "invalid-feedback"
                        }
                      >
                        {error.created_by}
                      </span>
                    )} */}
                  </Form.Group>

                  <Form.Group controlId="completed_date">
                    <Form.Label>Completed Date</Form.Label>
                    <DatePicker className="form-control" name='completed_date'
                    selected={this.state.completed_date}
                    onChange={this.handleDate} placeholder="dd/mm/yy" value={completed_date}
                    showYearDropdown
                    showMonthDropdown
                    scrollableYearDropdown
                  />
                  </Form.Group>

                  <Form.Group controlId="skills">
                    <Form.Label>Skills</Form.Label>
                    {this.state.skills.map((value, index) => {
                      return (

                        <div>

                          <Form.Control type="text" key={index} className='w-90 d-inline-block' placeholder='Enter Your skills' value={value} onChange={(e) => this.changeSkillsvalue(e, index)} />
                           {/* {error.skills && (
                      <span
                        className={
                          error.skills
                            ? "invalid-feedback d-block"
                            : "invalid-feedback"
                        }
                      >
                        {error.skills}
                      </span>
                    )} */}
                          <button type='button' className='btn btn-danger float-right ml-2' onClick={() => this.removeSkills(index)}>X</button>
                        
                        </div>
                      )
                    })}
                    <button className="btn btn-primary float-right mt-2" onClick={(e) => { e.preventDefault(); this.addSkills(e) }}>Add new Skill</button>
                  </Form.Group>
                  <Form.Group controlId="status.controler">
                    <Form.Label>Status</Form.Label>
                    <Form.Control
                      as="select"
                      name="status"
                      onChange={this.handleChange}
                      value={status}
                    >
                      <option value="publish">Publish</option>
                      <option value="revoke">Revoke</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group className="row">
                    <div className="col-sm-12 text-left">
                      <Link className="btn btn-primary mr-2" to="/abouts">
                        View List
                      </Link>
                      <button
                        className="btn submit-btn btn-primary"
                        type="submit"
                      >
                        Create Portfolio
                      </button>
                    </div>
                  </Form.Group>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  portfolios: state.portfolio
});

export default connect(mapStateToProps, { createPortfolio, addFlashMessage })(
  Portfolio
);
