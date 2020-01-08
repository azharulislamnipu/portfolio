import React, { Component } from 'react'
import {connect} from 'react-redux';
 import {loadPortfolios , removePortfolio} from '../../../store/actions/portfolioActions';
import { Link } from "react-router-dom";
import UpdatePortfolio from "./updatePortfolio";
import ViewDetails from "./viewDetails";

 class Portfolios extends Component {

    state = {
        updateModalOpen: false,
        viewModalOpen: false,
        error:'',
        id: ''
    }

      static getDerivedStateFromProps(nextProps, prevState) {
    if (
      JSON.stringify(nextProps.portfolios.error) !== JSON.stringify(prevState.error)
    ) {
      return {
        error: nextProps.portfolios.error
      };
    }
    return null;
  }


    openUpdateModal = (id) => {
        this.setState({
            updateModalOpen: true,
            id
        })
    }
    openViewModal = (id) => {
        this.setState({
            viewModalOpen: true,
            id
        })
    }

    closeUpdateModal = () => {
        this.setState({
            updateModalOpen: false,
            viewModalOpen: false,
            id: ''
        })
    }
    componentDidMount(){
        this.props.loadPortfolios();
    }


    render() {
        let { portfolios } = this.props.portfolios;
 
        return (
            <div class="container-fluid"> 
              
                <div class="row">
                    <div class="col-sm-12">
                        <div class="page-title-box">
                            <div class="row align-items-center">
                                <div class="col-md-8">
                                    <h4 class="page-title mb-0">Dashboard</h4>
                                    <ol class="breadcrumb m-0">
                                         <li class="breadcrumb-item"><Link to={'/portfolio'}>Portfolio</Link> </li>
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
                            <h4 class="mt-0 header-title">Latest Portfolio</h4>
                            <div class="table-responsive mt-4">
                                <table class="table table-hover mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">(#) Id</th>
                                            <th scope="col">Feature Image</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Project Type</th>
                                            <th scope="col">Created By</th>
                                            <th scope="col">status</th>
                                   
                                            <th scope="col" className='text-center'>Actions</th>
                                      
                                            
                                        </tr>
                                    </thead>

                                    { (Array.isArray(portfolios) && portfolios.length) > 0 ? 
                                    <tbody>
                                    {
                                        portfolios.map((portfolio, index) => {
                                        
                                            let count = index + 1;
                                       
                                                return(
                                                <tr key={portfolio._id}>
                                            <th scope="row">#{count}</th>
                                            <td><img src={portfolio.image_url+''+portfolio.feature_image} class="thumb-lg rounded-circle mr-2" alt={portfolio.feature_image}/></td>
                                            <td>{portfolio.title}</td>
                                            <td className='w-25'>{portfolio.description}</td>
                                            <td>{portfolio.type}</td>
                                            <td>{portfolio.created_by}</td>
                                        
                                            <td>{portfolio.status =='publish' ? <span class="badge badge-success">{portfolio.status}</span> : <span class="badge badge-danger">{portfolio.status}</span> }</td>
                                            <td>
                                          

                                            {this.state.id === portfolio._id?   <UpdatePortfolio show={this.state.updateModalOpen}
        onHide={this.closeUpdateModal}  portfolio={portfolio} error={this.state.error} /> : null }

        {this.state.id === portfolio._id?   <ViewDetails show={this.state.viewModalOpen}
        onHide={this.closeUpdateModal}   portfolio={portfolio} /> : null }

        
                                    
                                                    <button className='btn btn-primary btn-sm m-1' onClick={() => this.openUpdateModal(portfolio._id)} >Edit</button>
                                                    <button className='btn btn-danger btn-sm m-1' onClick={ ()=> { this.props.removePortfolio(portfolio._id)}} >Delete</button>
                                                    <button className='btn btn-secondary btn-sm m-1'  onClick={() => this.openViewModal(portfolio._id)}  >View</button>
                                                
                                            </td>
                                        </tr>
                                            )
                                            

                                          
                                        })
                                    }
                                 </tbody> : <p>There is no About</p>}

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
    portfolios: state.portfolio,
})

export default connect(mapStateToProps, { loadPortfolios, removePortfolio })(Portfolios)