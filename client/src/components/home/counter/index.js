import React, { Component } from 'react';
import CounterItem from './CounterItem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {connect} from 'react-redux';
import {  loadCounters } from '../../../store/actions/counterActions';
class Counters extends Component {

  state = {
    counterItems: [{
      counternumber: 490,
      type:"lins of code",
      icon:'fa-code',
      duration:2
    
    },
    {
      counternumber: 545,
      type:"Cup of Tea",
      icon:'fa-coffee',
      duration:2.5
    
    },
    {
      counternumber: 690,
      type:"lins of code",
      icon:'fa-rocket',
      duration:3
    
    },
    {
      counternumber: 990,
      type:"lins of code",
      icon:'fa-heart-o',
      duration:4
    
    },
      
    ]
}

componentDidMount(){
  this.props.loadCounters()
}



showCounterItem = () => (
  // this.state.counterItems.map((items,key) => (
  //     <CounterItem key={key} number={items.counternumber} type={items.type} icon={items.icon} duration={items.duration} />
  // ))
 
  this.props.counters.counters.map((counter,key) =>{
      if(counter.status === 'publish'){
        return ( <CounterItem key={key} number={counter.counter_number} type={counter.title} icon={counter.counter_icon} duration='4' />)
      }
  })
)

 
  render() {
    return (
      <section className="counter-area">
        <Container>
          <Row className="align-items-center">
           {this.showCounterItem()}
          </Row>
          </Container>
      </section>
    )
  }
}
const mapStateToProps = state => ({
  counters: state.counter,
})

export default connect(mapStateToProps, { loadCounters })(Counters)