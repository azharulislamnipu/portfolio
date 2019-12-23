import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import {connect} from 'react-redux';
import { loadBanners } from '../../../store/actions/bannerActions';
import { addFlashMessage } from '../../../store/actions/flashMessages';

 class BannerList extends Component {


    componentDidMount(){
        this.props.loadBanners()
    }
  
    render() {


       let { banners } = this.props.banner;
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
                                        <li class="breadcrumb-item active" aria-current="page">Banner</li>
                                    </ol>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                


             <div className="row">
                 <div className="col-12">
                 
                 
           
                 </div>
             </div>
           </div>
    )
    }
}

const mapStateToProps = state => ({
    banner: state.banner,
})

export default connect(mapStateToProps, { loadBanners})(BannerList)
