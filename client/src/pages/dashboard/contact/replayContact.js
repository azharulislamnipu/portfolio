import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import React, { Component } from "react";
import { connect } from "react-redux";
// import { updateCounter } from "../../../store/actions/counterActions";
import { addFlashMessage } from "../../../store/actions/flashMessages";
class ReplayContact extends Component {


    constructor(props) {
        super(props);
        this.state = {
          status: "",
          email: "",
          description: "",
          subject: "",
          error: {}
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
      }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      JSON.stringify(nextProps.contacts.error) !==
      JSON.stringify(prevState.error)
    ) {
      return {
        error: nextProps.contacts.error
      };
    }
    return null;
  }

  componentDidMount() {
    this.setState({
      subject:  this.props.contacts.error.subject ?  this.state.subject : this.props.contact.subject,
      email:  this.props.contacts.error.email ?  this.state.email :  this.props.contact.email,
      status: this.props.contact.status
    });
  }
  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleChange(e) {
    this.setState({
      status: e.target.value
    });
  }

  submitHandler = event => {
    event.preventDefault();

    let { subject, email, description, status, error } = this.state;

    console.log(this.state);
    // this.props.updateCounter(this.props.counter._id, this.state, this.props.addFlashMessage, this.props);

  };


  render() {
   

    let { subject, email, description, status, error } = this.state;
    console.log(this.props.contact.subject);
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h3 className="text-dark"> Update Counter</h3>
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={this.submitHandler}>
          <Modal.Body>
             <Form.Group controlId="subject">
                  <Form.Control type="text" name="subject" placeholder="Subject" value={subject}
                    onChange={this.changeHandler} readOnly />
                  {error.subject && (<span className={error.subject ? 'invalid-feedback d-block' : 'invalid-feedback'} >
                    {error.subject}
                  </span>
                  )}
                </Form.Group>

                <Form.Group controlId="email">
                  <Form.Control type="text" name="email" placeholder="Subject" value={email}
                    onChange={this.changeHandler} readOnly />
                  {error.email && (<span className={error.email ? 'invalid-feedback d-block' : 'invalid-feedback'} >
                    {error.email}
                  </span>
                  )}
                </Form.Group>

            <Form.Group controlId="description">
                  <Form.Control as="textarea" rows="4" name='description' placeholder="Message" value={description}
                    onChange={this.changeHandler} />
                  {error.description && (<span className={error.description ? 'invalid-feedback d-block' : 'invalid-feedback'} >
                    {error.description}
                  </span>
                  )}
            </Form.Group>


            <Form.Group controlId="status.ControlSelect1">
              <Form.Label>Status</Form.Label>
              <Form.Control as="select" name="status" value={status}  onChange={this.handleChange.bind(this)}>
                <option value="approve">approve</option>
                <option value="unapprove">unapprove</option>
              </Form.Control>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-dark ml-2" type="submit">
              Update
            </button>
            <button className="btn btn-danger" onClick={this.props.onHide}>
              Close
            </button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contact
});

export default connect(mapStateToProps, {  addFlashMessage })(ReplayContact);