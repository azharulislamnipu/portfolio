import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { creatInfo } from "../../../store/actions/infoActions";
import { addFlashMessage } from "../../../store/actions/flashMessages";


class Skills extends Component {
  constructor(props) {
    super();

    this.state = {
      extra_skills: [''],
      professional_skills: [''],
      professional_title:'',
      professional_progress_name: '',
      professional_progress: '',
      status: "publish",
      error: {}
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  addExtraskills = e => {

    this.setState({ extra_skills: [...this.state.extra_skills, ""] })
  }

  chaneExtraskillsValue = (event, index) => {
    this.state.extra_skills[index] = event.target.value;
    this.setState({ extra_skills: this.state.extra_skills });
  }
  removeExtraskills = (sidx) => {
    if (sidx > 0) {
      this.setState({
        extra_skills: this.state.extra_skills.filter((s, idx) => idx !== sidx)
      });
    }

  };


  handleChange(e) {
    this.setState({
      status: e.target.value
    });
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      JSON.stringify(nextProps.infos.error) !==
      JSON.stringify(prevState.error)
    ) {
      return {
        error: nextProps.infos.error
      };
    }
    return null;
  }


  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  submitHandler = event => {
    event.preventDefault();

    let { title, info_icon, info_name, status } = this.state;

    this.props.creatInfo(
      { title, info_icon, info_name, status },
      this.props.addFlashMessage,
      this.props.history
    );
  };

  render() {
    let { title, info_icon, info_name, status, error } = this.state;
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
                      <Link to={"/skills"}>Skills</Link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Skills Create
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
                <h2 className="text-uppercase text-center">Skills Create</h2>

                <Form onSubmit={this.submitHandler}>
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

                    {error.title && (
                      <span
                        className={
                          error.title
                            ? "invalid-feedback d-block"
                            : "invalid-feedback"
                        }
                      >
                        {error.title}
                      </span>
                    )}
                  </Form.Group>
                  <Form.Group controlId="info_icon">
                    <Form.Label>Info Icon</Form.Label>
                    <Form.Control
                      type="text"
                      name="info_icon"
                      autoComplete="new-info_icon"
                      placeholder="Enter Your Counter Icon"
                      value={info_icon}
                      onChange={this.changeHandler}
                    />
                    {error.info_icon && (
                      <span
                        className={
                          error.info_icon
                            ? "invalid-feedback d-block"
                            : "invalid-feedback"
                        }
                      >
                        {error.info_icon}
                      </span>
                    )}
                  </Form.Group>

                  <Form.Group controlId="info_name">
                    <Form.Label>Extra Skills</Form.Label>
                    {this.state.extra_skills.map((value, index) => {
                      return (

                        <div>

                          <Form.Control type="text" key={index} className='w-90 d-inline-block' placeholder='Enter Your Info Name' value={value} onChange={(e) => this.chaneExtraskillsValue(e, index)} />
                          <button type='button' className='btn btn-danger float-right ml-2' onClick={() => this.removeExtraskills(index)}>X</button>
                        </div>
                      )
                    })}
                    <button className="btn btn-primary float-right mt-2" onClick={(e) => { e.preventDefault(); this.addExtraskills(e) }}>Add new Info</button>
                  </Form.Group>

                  <Form.Group controlId="status.ControlSelect1">
                    <Form.Label>Status</Form.Label>
                    <Form.Control
                      as="select"
                      name="status"
                      onChange={this.handleChange.bind(this)}
                      value={status}
                    >
                      <option value="publish">Publish</option>
                      <option value="revoke">Revoke</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group className="row">
                    <div className="col-sm-12 text-right">
                      <Link className="btn btn-primary mr-2" to="/infos">
                        View List
                      </Link>
                      <button
                        className="btn submit-btn btn-primary"
                        type="submit"
                      >
                        Create Info
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
  infos: state.info
});

export default connect(mapStateToProps, { creatInfo, addFlashMessage })(
  Skills
);
