import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import {connect} from 'react-redux';
import { loadCounters } from '../../store/actions/counterActions';
import { addFlashMessage } from '../../store/actions/flashMessages';

import { Link } from 'react-router-dom'


 class CounterList extends Component {


    componentDidMount(){
        this.props.loadCounters();
    }

    submitHandler = () => {

    }
  
    render() {



        let {counters} = this.props;
   
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
                                        <li class="breadcrumb-item"><a href="#">azhardevs</a></li>
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
                                    <h2 className="text-uppercase text-center">Create Banner</h2>


                                    <Form  onSubmit={this.submitHandler}  method="post"  enctype="multipart/form-data">
                                        
                                      <Form.Group controlId="title">
                                      <Form.Label>Title</Form.Label>
                                      <Form.Control type="text" name='title' autoComplete="new-title"  placeholder="Enter Your title" value={title} onChange={this.changeHandler} />
                                    
                                      </Form.Group>
                                      <Form.Group controlId="description">
                                      <Form.Label>Description</Form.Label>
                                      <Form.Control type="text" name='description' autoComplete="new-description"  placeholder="Enter Your Description" value={description} onChange={this.changeHandler} />
                                     
                                     
                                      </Form.Group>
                                
                                       <Form.Group className='row'>
                                           <div className="col-sm-12 text-right">
                                            <button className="btn submit-btn btn-primary" type="submit">Add Banner</button>
                                            </div>
                                       </Form.Group>

                                     </Form>
        

                                            

                                    </div>
                                </div>
                            </div>  
                </div>

                


             

             <div className="row">
                 <div className="col-12">
               
           
                 <h1>Counters: </h1>
                    {counters.length > 0 ? <ul className='list-group'>
                        {
                            counters.map(counter => (
                                <li
                                    key={counter._id}
                                    className='list-group-item'>
                                    <p>Title: {counter.title}</p>
                                    <p>Number: {counter.countnumber}</p>
                                    <p>Icon: {counter.counter_icon}</p>
                                </li>
                            ))
                        }
                    </ul> : <p>There is no Counter</p>}
                 
                 </div>
             </div>
           </div>
    )
    }
}

const mapStateToProps = state => ({
    counters:state.counters
})

export default connect(mapStateToProps, {loadCounters })(CounterList)
