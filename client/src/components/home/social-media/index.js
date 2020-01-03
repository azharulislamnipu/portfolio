import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Title from '../../../../src/ui/title';
import {connect} from 'react-redux';
import { loadSocials } from '../../../store/actions/socialActions';
import SocialMediaItem from './SocialMediaItem';
export class SocialMedia extends Component {
    
    componentDidMount(){
        this.props.loadSocials();
    }
    showSocialmediaItem = () => (
      
        this.props.socials.socials.map((social,key) =>{
            if(social.status === 'publish'){
              return (  
                   <SocialMediaItem Key={key} social={social} />
              )
            }
        })
      )
    render() {
        return (
           <section className="social-media">
               <Container className='mb-5'>
            {<Title title='SOCIAL MEDIA' headline='Lets Be Friends' align='text-right' position='justify-content-end' style={{ headingcolor: '#ffffff', titlecolor: '#ffc107' }} />}
              </Container>
              <Container>
              <Row>

                  {this.showSocialmediaItem()}

                  <Col lg={4} md={6} sm={12}>
                  <div className="social-media-nfo">
				    <div className="social-media-container">
			         <a className="arrow-button" href="#">
                         <span className="button-icon"><i className="fa fa-linkedin"></i></span>
                         <span className="button-text">
                             <span className="top_label">Linkeding</span>
                             <span className="button-title">Professional social profile</span>
                             </span>
                             </a>	
                   </div>
				</div>
                  </Col>

                  <Col lg={4} md={6} sm={12}>
                  <div className="social-media-nfo">
				    <div className="social-media-container">
			         <a className="arrow-button" href="#">
                         <span className="button-icon"><i className="fa fa-facebook"></i></span>
                         <span className="button-text">
                             <span className="top_label">Facebook</span>
                             <span className="button-title">Network base social profile</span>
                             </span>
                             </a>	
                   </div>
				</div>
                  </Col>


                  <Col lg={4} md={6} sm={12}>
                  <div className="social-media-nfo">
				    <div className="social-media-container">
			         <a className="arrow-button" href="#">
                         <span className="button-icon"><i className="fa fa-instagram"></i></span>
                         <span className="button-text">
                             <span className="top_label">Linkeding</span>
                             <span className="button-title">Image base social communications</span>
                             </span>
                             </a>	
                   </div>
				</div>
                  </Col>

                  <Col lg={4} md={6} sm={12}>
                  <div className="social-media-nfo">
				    <div className="social-media-container">
			         <a className="arrow-button" href="#">
                         <span className="button-icon"><i className="fa fa-twitter"></i></span>
                         <span className="button-text">
                             <span className="top_label">Twitter</span>
                             <span className="button-title">Random thoughts</span>
                             </span>
                             </a>	
                   </div>
				</div>
                  </Col>


                  <Col lg={4} md={6} sm={12}>
                  <div className="social-media-nfo">
				    <div className="social-media-container">
			         <a className="arrow-button" href="#">
                         <span className="button-icon"><i className="fa fa-skype"></i></span>
                         <span className="button-text">
                             <span className="top_label">Skype</span>
                             <span className="button-title">Comunicate with video calls</span>
                             </span>
                             </a>	
                   </div>
				</div>
                  </Col>


                  <Col lg={4} md={6} sm={12}>
                  <div className="social-media-nfo">
				    <div className="social-media-container">
			         <a className="arrow-button" href="#">
                         <span className="button-icon"><i className="fa fa-envelope-o"></i></span>
                         <span className="button-text">
                             <span className="top_label">Email</span>
                             <span className="button-title">azharulislamnipu@gmail.com</span>
                             </span>
                             </a>	
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
    socials: state.social,
  })
export default connect(mapStateToProps, { loadSocials })(SocialMedia)


