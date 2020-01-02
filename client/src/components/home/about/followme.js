import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const Followme = (props) => {

  return (

                    <div className="follow-me">
                        <p>Follow Me : </p>
                        <ul className="social-media-about">
                           <li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
                           <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                           <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                           <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                           <li><a href="#"><i className="fa fa-behance"></i></a></li>
                           <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                        </ul>
                    </div>
  )
}
export default Followme;