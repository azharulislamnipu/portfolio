import React from 'react'
const Followme = (props) => {
  return (
                    <div className="follow-me">
                        <p>Follow Me : </p>
                        <ul className="social-media-about">
                          {
                            props.followme.socials.map((social,key) =>{
                            if(social.status === 'publish'){
                              return (  
                                    <li><a href={social.social_link} target='_blank'><i className={social.social_icon}></i></a></li>
                              )
                            }
                        })
                          }
             
                        </ul>
                    </div>
  )
}
export default Followme;