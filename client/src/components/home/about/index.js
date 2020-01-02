import React, { Component } from 'react';
import {connect} from 'react-redux';
import Container from 'react-bootstrap/Container';
import {  loadAbouts } from '../../../store/actions/aboutActions';
import AboutDetails from './aboutDetails';
class About extends Component {
    componentDidMount(){
        this.props.loadAbouts();
    }

    showAboutDetails = () => (
       
       
        this.props.abouts.abouts.map((about,key) =>{
            if(about.status === 'publish'){
              return (  
                    <AboutDetails about={about}/> 
              )
            }
        })
      )

    render() {

    
        return (
            <section id='about' className='about-area ptb-100'>
                <Container>
                 {this.showAboutDetails()}
              </Container>
            </section>
            
        )
    }
}

const mapStateToProps = state => ({
    abouts: state.about,
  })
  
  export default connect(mapStateToProps, { loadAbouts })(About)