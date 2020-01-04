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


