import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import {connect} from 'react-redux';
import {  loadCounters, removeCounter } from '../../../store/actions/counterActions';
import { addFlashMessage, deleteFlashMessage } from '../../../store/actions/flashMessages';
import { Link } from 'react-router-dom'
 class Counters extends Component {


    componentDidMount(){
        this.props.loadCounters()
    }
  
    render() {


       let { counters } = this.props.counters;

       console.log(this.props)
   
        return (
            <div class="container-fluid"> 
              
                <div class="row">
                    <div class="col-sm-12">
                        <div class="page-title-box">
                            <div class="row align-items-center">
                                <div class="col-md-8">
                                    <h4 class="page-title mb-0">Dashboard</h4>
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item"><Link to={'/counter'}>Counter</Link> </li>
                                        <li class="breadcrumb-item active" aria-current="page">List</li>
                                    </ol>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                


            
                <div className="row">
                 <div className="col-12">

                 <div class="card">
                        <div class="card-body">
                            <h4 class="mt-0 header-title">Latest Counter</h4>
                            <div class="table-responsive mt-4">
                                <table class="table table-hover mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">(#) Id</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Counter Number</th>
                                            <th scope="col">Counter Icon</th>
                                          
                                            <th scope="col">Actions</th>
                                      
                                            
                                        </tr>
                                    </thead>

 
                                  { (Array.isArray(counters) && counters.length) > 0 ? 
                                    <tbody>
                                    {
                                        counters.map((counter, index) => {
                                        
                                            let count = index + 1;
                                       
                                                return(
                                                <tr key={counter._id}>
                                            <th scope="row">#{count}</th>
                                        
                                            <td>{counter.title}</td>
                                            <td>{counter.counter_number}</td>
                                            <td>{counter.counter_icon}</td>
                                            <td>
                                                <div>
                                                    <a href="#" class="btn btn-primary btn-sm mr-2">Edit</a>
                                                    <button className='btn btn-danger btn-sm ml-2' onClick={ ()=> { this.props.deleteFlashMessage(counter._id)}} >Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                            )
                                            

                                          
                                        })
                                    }
                                 </tbody> : <p>There is no Counter</p>}
                                </table>
                            </div>
                        </div>
                    </div>

                 
                 
                 </div>
             </div>

             

           </div>
    )
    }
}

const mapStateToProps = state => ({
    counters: state.counter,
})

export default connect(mapStateToProps, { loadCounters, removeCounter , deleteFlashMessage})(Counters)
