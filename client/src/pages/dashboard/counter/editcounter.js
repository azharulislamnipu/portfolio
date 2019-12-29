import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import { updateCounter } from '../../../store/actions/counterActions';
import { addFlashMessage } from '../../../store/actions/flashMessages';

import { Link } from 'react-router-dom'


class EditCounter extends Component {

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
            status: this.props.counter.status,
            error: this.props.counter.error
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
        console.log(this.props);

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
            <div class="container-fluid">

                <div class="row">
                    <div class="col-sm-12">
                        <div class="page-title-box">
                            <div class="row align-items-center">
                                <div class="col-md-8">
                                    <h4 class="page-title mb-0">Dashboard</h4>
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item"><Link to={'/dashboard'}>dashboard</Link></li>
                                        <li class="breadcrumb-item active" aria-current="page">Counter</li>
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
                                <h2 className="text-uppercase text-center">Update Counter</h2>


                                <Form onSubmit={this.submitHandler}>
                                
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
                                            <Form.Control as="select" name="status" value={status} onChange={this.handleChange.bind(this)}>
                                                <option value="publish">Publish</option>
                                                <option value="revoke">Revoke</option>
                                            </Form.Control>
                                        </Form.Group>

                                        <Form.Group className='row'>
                                            <div className="col-sm-12 text-right">
                                                <Link className="btn btn-primary mr-2" to='/counters'>View List</Link>
                                                <button className="btn btn-secondary ml-2" type="submit">Update Counter</button>
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
            
const mapStateToProps = state => ({
                    counters:state.counter
            })
            
export default connect(mapStateToProps, {updateCounter, addFlashMessage})(EditCounter)
