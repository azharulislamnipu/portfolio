import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Title from '../../../../src/ui/title';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { connect } from "react-redux";
import { creatContact } from "../../../store/actions/contactActions";
import { addFlashMessage } from "../../../store/actions/flashMessages";
class Contact extends Component {
  constructor(props) {
    super();
    this.state = {
      fullname: "",
      email: "",
      organigation: "",
      subject: "",
      consult_date: new Date(),
      budget: "",
      description: "",
      phone: "",
      message: '',
      error: {}
    };

    this.handleDate = this.handleDate.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  handleDate = date => {
    this.setState({
      consult_date: date
    });
  };

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

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  submitHandler = event => {
    event.preventDefault();

    let { fullname, email, organigation, subject, consult_date, budget, description, phone } = this.state;
    consult_date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(consult_date);

    this.props.creatContact(
      { fullname, email, organigation, subject, consult_date, budget, description, phone },
      this.props.addFlashMessage
    );
  };
  render() {
    let { fullname, email, organigation, subject, consult_date, budget, description, phone, error } = this.state;

    return (
      <section className="contact-area">
        <Container className="contact-box mb-120">
          <Title title='CONTACT ME' headline='Let’s Chat' align='text-left' position='justify-content-start' style={{ headingcolor: '#ffffff', titlecolor: 'rgb(21, 18, 52)' }} />
          <Form onSubmit={this.submitHandler}>
            <Row>
              <Col lg={6} md={6} sm={12}>
                <Form.Group controlId="fullname">
                  <Form.Control type="text" name="fullname" placeholder="Full Name" value={fullname}
                    onChange={this.changeHandler} />
                  {error.fullname && (<span className={error.fullname ? 'invalid-feedback d-block' : 'invalid-feedback'} >
                    {error.fullname}
                  </span>
                  )}
                </Form.Group>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <Form.Group controlId="email">
                  <Form.Control type="email" name='email' placeholder="Email Address" value={email}
                    onChange={this.changeHandler} />
                  {error.email && (<span className={error.email ? 'invalid-feedback d-block' : 'invalid-feedback'} >
                    {error.email}
                  </span>
                  )}
                </Form.Group>
              </Col>

              <Col lg={6} md={6} sm={12}>
                <Form.Group controlId="organigation">
                  <Form.Control type="text" name="organigation" placeholder="Organigation" value={organigation}
                    onChange={this.changeHandler} />
                </Form.Group>
              </Col>

              <Col lg={6} md={6} sm={12}>
                <Form.Group controlId="subject">
                  <Form.Control type="text" name="subject" placeholder="Subject" value={subject}
                    onChange={this.changeHandler} />
                  {error.subject && (<span className={error.subject ? 'invalid-feedback d-block' : 'invalid-feedback'} >
                    {error.subject}
                  </span>
                  )}
                </Form.Group>
              </Col>

              <Col lg={6} md={6} sm={12}>
                <Form.Group controlId="date">

                  <DatePicker className="form-control" name='consult_date'
                    selected={this.state.consult_date}
                    onChange={this.handleDate} placeholder="dd/mm/yy" value={consult_date}
                    showYearDropdown
                    showMonthDropdown
                    scrollableYearDropdown
                  />

                  {error.consult_date && (<span className={error.consult_date ? 'invalid-feedback d-block' : 'invalid-feedback'} >
                    {error.consult_date}
                  </span>
                  )}
                </Form.Group>
              </Col>

              <Col lg={6} md={6} sm={12}>
                <Form.Group controlId="budget">
                  <Form.Control type="text" name='budget' placeholder="Budget" value={budget}
                    onChange={this.changeHandler} />

                  {error.budget && (<span className={error.budget ? 'invalid-feedback d-block' : 'invalid-feedback'} >
                    {error.budget}
                  </span>
                  )}
                </Form.Group>
              </Col>

              <Col lg={12} md={12} sm={12}>
                <Form.Group controlId="phonenumber">
                  <Form.Control type="text" name='phone' placeholder="Phonenumber" value={phone}
                    onChange={this.changeHandler} />
                  {error.phone && (<span className={error.phone ? 'invalid-feedback d-block' : 'invalid-feedback'} >
                    {error.phone}
                  </span>
                  )}
                </Form.Group>
              </Col>

              <Col lg={12} md={12} sm={12}>
                <Form.Group controlId="description">
                  <Form.Control as="textarea" rows="4" name='description' placeholder="Message" value={description}
                    onChange={this.changeHandler} />
                  {error.description && (<span className={error.description ? 'invalid-feedback d-block' : 'invalid-feedback'} >
                    {error.description}
                  </span>
                  )}
                </Form.Group>



              </Col>
              <Col lg={12} md={12} sm={12}>

                <Button type="submit">PROJECT ESTIMATE</Button>
              </Col>
            </Row>
          </Form>
        </Container>

        <Container>
          <Row>
            <Col lg={4} md={4} sm={6}>
              <div className="conatact-info-box">
                <div className="conatact-icon"><i className="fa fa-envelope"></i></div>
                <div className="box-content">
                  <h4 className="conatact-title">Email:</h4>
                  <div className="conatact-content">
                    <a href="mailto:hello@growth.com">hello@growth.com</a>
                    <a href="subash.ui.ux@gmail.com">hello@growth.com</a>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={4} sm={12}>
              <div className="conatact-info-box">
                <div className="conatact-icon"><i className="fa fa-phone"></i></div>
                <div className="box-content">
                  <h4 className="conatact-title">Phone:</h4>
                  <div className="conatact-content">
                    <a href="tel:+8801726901406">+8801726901406</a>
                    <a href="tel:+8801986926212">+8801986926212</a>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={4} md={4} sm={12}>
              <div className="conatact-info-box">
                <div className="conatact-icon"><i className="fa fa-map-marker"></i></div>
                <div className="box-content">
                  <h4 className="conatact-title">ADDRESS:</h4>
                  <div className="conatact-content">
                    <p>1600 Amphitheatre Parkway
Mountain View, Canada</p>
                  </div>
                </div>
              </div>
            </Col>

          </Row>
        </Container>

      </section>
    )
  }
}

const mapStateToProps = state => ({
  contacts: state.contact
});

export default connect(mapStateToProps, { creatContact, addFlashMessage })(
  Contact
);

