import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { Component } from 'react';

class UpdateCounter extends Component {


      state = {
        status: '',
        title:'',
        counter_number:'',
        counter_icon:'',
        error:{}
      };
      changeHandler = event =>{
        this.setState({
            [event.target.name]: event.target.value
            })
                
        }
   submitHandler = event => {
   event.preventDefault();

    let { title, counter_number, counter_icon, status} = this.props.counter;
    console.log(title, counter_number, counter_icon, status);
        

    } 

    render() {
    //  console.log(this.state);


        let { title, counter_number, counter_icon, status, error} = this.state;

        return (

             <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        <h3 className='text-dark'> Update Counter</h3>
        </Modal.Title>
      </Modal.Header>
      <Form  onSubmit={this.submitHandler}>
      <Modal.Body>
   
                                        
                                        <Form.Group controlId="title">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control type="text" name='title'   placeholder="Enter Your title" value={title}  onChange={this.changeHandler} />
                              

                                        </Form.Group>
  
                                        <Form.Group controlId="counterNumber">
                                        <Form.Label>Counter Number</Form.Label>
                                        <Form.Control type="text" name='counter_number'  placeholder="Enter Your Coutner Number" value={counter_number}  onChange={this.changeHandler} />
                                       
                               
                                        </Form.Group>
  
                                               
                                        <Form.Group controlId="counterIcon">
                                        <Form.Label>Counter Icon</Form.Label>
                                        <Form.Control type="text" name='counter_icon'  placeholder="Enter Your Counter Icon" value={counter_icon}  onChange={this.changeHandler} />
                               
                                        </Form.Group>

                                        <Form.Group controlId="status.ControlSelect1">
                                             <Form.Label>Status</Form.Label>
                                                        <Form.Control as="select" name='status' value={status}>
                                                        <option value='publish'>Publish</option>
                                                        <option value='revoke'>Revoke</option>
                                                       
                                                        </Form.Control>
                                        </Form.Group>


                                  
                               
  
                                   
          
      </Modal.Body>
      <Modal.Footer>
       <button className="btn btn-dark ml-2" type="submit">Update</button>
        <button className='btn btn-danger' onClick={this.props.onHide}>Close</button>
      </Modal.Footer>
      </Form>
    </Modal>
        )
    }
}
export default UpdateCounter;