import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createSkills } from "../../../store/actions/skillsActions";
import { addFlashMessage } from "../../../store/actions/flashMessages";
import ProfessionalSkills from './professionalSkills';
import ProgrammingSkills from './programmingSkills';
import LanguageSkills from './languageSkills';


class Skills extends Component {
  constructor(props) {
    super();

    this.state = {
      extra_skills: [''],
      professional_skills: [{ index: Math.random(), progress_title: "", progress_name: "" , progress:""}],
      programming_skills: [{ index: Math.random(), programming_lang_title: "", programming_lang_name: "" , programming_lang_progress:""}],
      language_skills: [{ index: Math.random(), lang_title: "", lang_name: "" , lang_progress:""}],
      progress_title:'',
      progress_name: '',
      progress: '',
      status: "publish",
      error: {}
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

handleProfessionalChange = (e) => {
    if (["progress_title", "progress_name", "progress"].includes(e.target.name)) {
        let professional_skills = [...this.state.professional_skills]
        professional_skills[e.target.dataset.id][e.target.name] = e.target.value;
    } else {
        this.setState({ [e.target.name]: e.target.value })
    }
}
addNewProfessionalRow = (e) => {
    this.setState((prevState) => ({
      professional_skills: [...prevState.professional_skills, { index: Math.random(), progress_title: "", progress_name:"", progress: "" }],
    }));
}

clickOnDeleteProfessional= (record) =>{
    this.setState({
      professional_skills: this.state.professional_skills.filter(r => r !== record)
    });
}



handleProgramingChange = (e) => {
    if (["programming_lang_title", "programming_lang_name", "programming_lang_progress"].includes(e.target.name)) {
        let programming_skills = [...this.state.programming_skills]
        programming_skills[e.target.dataset.id][e.target.name] = e.target.value;
    } else {
        this.setState({ [e.target.name]: e.target.value })
    }
}
addNewProgramingRow = (e) => {
    this.setState((prevState) => ({
      programming_skills: [...prevState.programming_skills, { index: Math.random(), programming_lang_title: "", programming_lang_name:"", programming_lang_progress: "" }],
    }));
}

clickOnDeletePrograming = (record) =>{
    this.setState({
      programming_skills: this.state.programming_skills.filter(r => r !== record)
    });
}



handleLanguageChange = (e) => {
  if (["lang_title", "lang_name", "lang_progress"].includes(e.target.name)) {
      let language_skills = [...this.state.language_skills]
      language_skills[e.target.dataset.id][e.target.name] = e.target.value;
  } else {
      this.setState({ [e.target.name]: e.target.value })
  }
}
addNewLanguageRow = (e) => {
  this.setState((prevState) => ({
    language_skills: [...prevState.language_skills, { index: Math.random(), lang_title: "", lang_name:"", lang_progress: "" }],
  }));
}

clickOnDeleteLanguage = (record) =>{
  this.setState({
    language_skills: this.state.language_skills.filter(r => r !== record)
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




  handleChange = e => {
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

    let { extra_skills, professional_skills, programming_skills,language_skills, status } = this.state;

     this.props.createSkills({ extra_skills, professional_skills, programming_skills, language_skills, status}, addFlashMessage, this.props.history);
      console.log(this.state);
  };

  render() {
    let { extra_skills, professional_skills, programming_skills, language_skills, status , error} = this.state;
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
                 
                 

                <Form.Group controlId="extra_skills">
                    <Form.Label>Extra Skills</Form.Label>
                    {extra_skills.map((value, index) => {
                      return (

                        <div>

                          <Form.Control type="text" key={index} className='w-90 d-inline-block' placeholder='Enter Your Skill Name' value={value} onChange={(e) => this.chaneExtraskillsValue(e, index)} />
                       
                        
                          <button type='button' className='btn btn-danger float-right ml-2' onClick={() => this.removeExtraskills(index)}><i className="fa fa-close" aria-hidden="true"></i></button>
                        
                        </div>
                      )
                    })}
                    <button className="btn btn-primary float-right mt-2" onClick={(e) => { e.preventDefault(); this.addExtraskills(e) }}><i className="fa fa-plus" aria-hidden="true"></i></button>
                  </Form.Group>



                  <Form.Group controlId="professional_skills">
                    <Form.Label>Professional Skills</Form.Label>
                  <ProfessionalSkills add={this.addNewProfessionalRow} delete={this.clickOnDeleteProfessional.bind(this)} professional_skills={professional_skills}  handlechange={this.handleProfessionalChange} error={error} />

                </Form.Group>


                <Form.Group controlId="programming_nskills">
                    <Form.Label>Programming Skills</Form.Label>
                  <ProgrammingSkills add={this.addNewProgramingRow} delete={this.clickOnDeletePrograming.bind(this)} programming_skills={programming_skills}  handlechange={this.handleProgramingChange} error={error} />

                </Form.Group>



                <Form.Group controlId="language_nskills">
                    <Form.Label>Language Skills</Form.Label>
                  <LanguageSkills add={this.addNewLanguageRow} delete={this.clickOnDeleteLanguage.bind(this)} language_skills={language_skills}  handlechange={this.handleLanguageChange} error={error} />

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
                      <Link className="btn btn-primary mr-2" to="/skills">
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
