import React from 'react'
import CountUp from 'react-countup';
import IconGenerate from '../../../ui' 
import Col from 'react-bootstrap/Col';
const InfoItem = (props) => {
    
    let {title, info_icon, info_name} = props.info;

    if(title == 'phone'){

        return (
            <Col lg={4} md={4} sm={12}>
            <div className="conatact-info-box">
            <div className="conatact-icon"><i className={info_icon}></i></div>
            <div className="box-content">
                <h4 className="conatact-title">{title}:</h4>
                <div className="conatact-content">

                    {
                    info_name.length > 0 ?
                    info_name.map(infoname => (
                    <a  href={`tel:${infoname}`}>{infoname}</a>
                    )) : <span>No info name</span>
                    }
                </div>
            </div>
            </div>
        </Col>
        )

    }else if(title == 'email'){

        return (
            <Col lg={4} md={4} sm={12}>
            <div className="conatact-info-box">
            <div className="conatact-icon"><i className={info_icon}></i></div>
            <div className="box-content">
                <h4 className="conatact-title">{title}:</h4>
                <div className="conatact-content">
                    {
                    info_name.length > 0 ?
                    info_name.map(infoname => (

                        <a  href={`mailto:${infoname}`}>{infoname}</a>
                    
                    )) : <span>No info name</span>
                    }

              
                </div>
            </div>
            </div>
        </Col>
        )
    }else{
        return (
            <Col lg={4} md={4} sm={12}>
            <div className="conatact-info-box">
            <div className="conatact-icon"><i className={info_icon}></i></div>
            <div className="box-content">
                <h4 className="conatact-title">{title}:</h4>
                <div className="conatact-content">
                 <p>
                 {

                    info_name.length > 0 ?
                    info_name.map(infoname => (

                        <span> {infoname} </span>

                    )) : <span>No info name</span>
                    }
                 </p>
                </div>
            </div>
            </div>
        </Col>
        )
    }
   

 
  
}
export default InfoItem;