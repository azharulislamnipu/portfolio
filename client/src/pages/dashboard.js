import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logout} from '../store/actions/authActions';
import { addFlashMessage } from '../store/actions/flashMessages';
class DashBoard extends Component {
  render() {

    // console.log(this.props);
    return (
     
     <div className="dashboad-wrapper">
                   <h2>Welcome To Dashboard Page</h2>

                   {
                     
                       this.props.auth.isAuthenticated? <button type='button' onClick={()=>{ this.props.logout(this.props.history)}} className='btn badge-danger'>Log Out</button> :
                       <Link to='/login' className='btn btn-primary'>Log In</Link>
                   }
,
                   
     </div>
    )
  }
}
const mapStateToProps = state => ({
    auth: state.auth
 });
export default connect(mapStateToProps,{logout})(DashBoard);