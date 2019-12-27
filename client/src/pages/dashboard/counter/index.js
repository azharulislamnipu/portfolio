import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
import { creatCounter } from "../../../store/actions/counterActions";
import { addFlashMessage } from "../../../store/actions/flashMessages";

import { Link } from "react-router-dom";

class Counter extends Component {
  constructor(props) {
    super();
    this.state = {
      status: "publish",
      title: "",
      counter_number: "",
      counter_icon: "",
      error: {}
    };
  }

  handleChange(e) {
    this.setState({
      status: e.target.value
    });
  }
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

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  submitHandler = event => {
    event.preventDefault();

    let { title, counter_number, counter_icon, status } = this.state;

    this.props.creatCounter(
      { title, counter_number, counter_icon, status },
      this.props.addFlashMessage,
      this.props.history
    );
  };

  render() {
    let { title, counter_number, counter_icon, error } = this.state;

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
                    <li class="breadcrumb-item">
                      <Link to={"/dashboard"}>dashboard</Link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Counter
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
                <h2 className="text-uppercase text-center">Create Counter</h2>

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

                  <Form.Group controlId="counterNumber">
                    <Form.Label>Counter Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="counter_number"
                      autoComplete="new-counter_number"
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
                      autoComplete="new-counter_icon"
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

                  <Form.Group controlId="status.ControlSelect1">
                    <Form.Label>Status</Form.Label>
                    <Form.Control
                      as="select"
                      name="status"
                      onChange={this.handleChange.bind(this)}
                      value={this.state.status}
                    >
                      <option value="publish">Publish</option>
                      <option value="revoke">Revoke</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group className="row">
                    <div className="col-sm-12 text-right">
                      <Link className="btn btn-primary mr-2" to="/counters">
                        View List
                      </Link>
                      <button
                        className="btn submit-btn btn-primary"
                        type="submit"
                      >
                        Add Counter
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
  counters: state.counter
});

export default connect(mapStateToProps, { creatCounter, addFlashMessage })(
  Counter
);
