import Modal from "react-bootstrap/Modal";
import ModalDialog from "react-bootstrap/ModalDialog";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCounter } from "../../../store/actions/counterActions";
import { addFlashMessage } from "../../../store/actions/flashMessages";
class UpdateCounter extends Component {


    state = {
    status: "",
    title: "",
    counter_number: "",
    counter_icon: "",
    duration: "",
    error: {}
    };


  componentDidMount() {
    this.setState({
      title: this.props.counter.title,
      counter_number: this.props.counter.counter_number,
      counter_icon: this.props.counter.counter_icon,
      duration: this.props.counter.duration,
      status: this.props.counter.status
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

 isObjectEmpty = obj => {

    return Object.getOwnPropertyNames(obj).length >= 1
 
 }


  submitHandler = event => {
    event.preventDefault();
    // console.log(title, counter_number, counter_icon, status);
    // this.props.updateCounter({ title, counter_number, counter_icon, status })
    
 


    this.props.updateCounter(this.props.counter._id, this.state);
    // console.log(this.props);
   
      this.props.onHide();
    




   
  //  if(this.isObjectEmpty(this.props.counters.error)){
  //    console.log(this.props.counters.error);
  //  }else{
  //   this.props.onHide(true);
  //  }
    // if(this.props.counters.error.counter_number !== ''){
    //   this.props.onHide(true);
    // }else{
    // this.props.onHide();
    // }
 
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      JSON.stringify(nextProps.counters.error) !==
      JSON.stringify(prevState.error)
    ) {
      return {
        error: nextProps.counters.error
      };
    }
    return null;
  }

  render() {
   


    let { title, counter_number, counter_icon, duration, status, error } = this.state;

    console.log(this.props);

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
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
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

            <Form.Group controlId="counterNumber">
              <Form.Label>Counter Number</Form.Label>
              <Form.Control
                type="text"
                name="counter_number"
                placeholder="Enter Your Coutner Number"
                value={counter_number}
                onChange={this.changeHandler}
              />
              {error.counter_number && (
                      <span
                        className={
                          error.counter_number
                            ? "invalid-feedback d-block"
                            : "invalid-feedback"
                        }
                      >
                        {error.counter_number}
                      </span>
                    )}
            </Form.Group>

            <Form.Group controlId="counterIcon">
              <Form.Label>Counter Icon</Form.Label>
              <Form.Control
                type="text"
                name="counter_icon"
                placeholder="Enter Your Counter Icon"
                value={counter_icon}
                onChange={this.changeHandler}
              />
              {error.counter_icon && (
                      <span
                        className={
                          error.counter_icon
                            ? "invalid-feedback d-block"
                            : "invalid-feedback"
                        }
                      >
                        {error.counter_icon}
                      </span>
                    )}
            </Form.Group>

            <Form.Group controlId="duration">
              <Form.Label>Duration</Form.Label>
              <Form.Control
                type="text"
                name="duration"
                placeholder="Enter Duration"
                value={duration}
                onChange={this.changeHandler}
              />
              {error.duration && (
                      <span
                        className={
                          error.duration
                            ? "invalid-feedback d-block"
                            : "invalid-feedback"
                        }
                      >
                        {error.duration}
                      </span>
                    )}
            </Form.Group>

            <Form.Group controlId="status.ControlSelect1">
              <Form.Label>Status</Form.Label>
              <Form.Control as="select" name="status" value={status}  onChange={this.handleChange.bind(this)}>
                <option value="publish">Publish</option>
                <option value="revoke">Revoke</option>
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
  counters: state.counter
});

export default connect(mapStateToProps, { updateCounter, addFlashMessage })(UpdateCounter);