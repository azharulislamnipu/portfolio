import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createSkills } from "../../../store/actions/skillsActions";
import { addFlashMessage } from "../../../store/actions/flashMessages";
import ProfessionalSkills from './professionalSkills';


class Skills extends Component {
  constructor(props) {
    super();

    this.state = {
      extra_skills: [''],
      professional_skills: [{ index: Math.random(), projectName: "", task: "" }],
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

  handleProfessionalChange = (e) => {
    if (["projectName", "task"].includes(e.target.name)) {
        let professional_skills = [...this.state.professional_skills]
        professional_skills[e.target.dataset.id][e.target.name] = e.target.value;
    } else {
        this.setState({ [e.target.name]: e.target.value })
    }
}
addNewProfessionalRow = (e) => {
    this.setState((prevState) => ({
      professional_skills: [...prevState.professional_skills, { index: Math.random(), projectName: "", task: "" }],
    }));
}

deteteProfessionalRow = (index) => {
    this.setState({
      professional_skills: this.state.professional_skills.filter((s, sindex) => index !== sindex),
    });
}


clickOnDeleteProfessional(record) {
    this.setState({
      professional_skills: this.state.professional_skills.filter(r => r !== record)
    });
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
      JSON.stringify(nextProps.skills.error) !==
      JSON.stringify(prevState.error)
    ) {
      return {
        error: nextProps.skills.error
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

    let { extra_skills, professional_skills, professional_title, professional_progress_name, professional_progress, status } = this.state;

      // this.props.createSkills({ extra_skills, status}, addFlashMessage, this.props.history);
      console.log(this.state);
  };

  render() {
    let { extra_skills, professional_skills, professional_title, professional_progress_name, professional_progress, status } = this.state;
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
                 
                 

                  <Form.Group controlId="info_name">
                    <Form.Label>Extra Skills</Form.Label>
                    {this.state.extra_skills.map((value, index) => {
                      return (

                        <div>

                          <Form.Control type="text" key={index} className='w-90 d-inline-block' placeholder='Enter Your Skill Name' value={value} onChange={(e) => this.chaneExtraskillsValue(e, index)} />
                          <button type='button' className='btn btn-danger float-right ml-2' onClick={() => this.removeExtraskills(index)}>X</button>
                        </div>
                      )
                    })}
                    <button className="btn btn-primary float-right mt-2" onClick={(e) => { e.preventDefault(); this.addExtraskills(e) }}>Add new Info</button>
                  </Form.Group>


                  <ProfessionalSkills add={this.addNewProfessionalRow} delete={this.clickOnDeleteProfessional.bind(this)} taskList={professional_skills}  handlechange={this.handleProfessionalChange} />



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
  skills: state.skill
});

export default connect(mapStateToProps, { createSkills, addFlashMessage })(
  Skills
);
