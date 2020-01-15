import React from 'react'
import CountUp from 'react-countup';
import IconGenerate from '../../../ui' 
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
const ProfessionaSkillItem = (props) => {
    let { progress_title,
        progress_name,
        progress } =  props.professional_skills;

        console.log(props.professional_skills);
  return (


    <div className="single-skille">


    {props.professional_skills.map((professional_skill, index) => {
         let { progress_title,
            progress_name,
            progress } =  professional_skill;
        return (
            <div>
                <h4>{progress_title}</h4>

            <div className="progress-wrrap  fourtypercent">
            <div className="progress-title">{progress}%</div>
            <ProgressBar now={progress} />
            </div>
            </div>
        );
      })}


  
  </div>
 
  )
}
export default ProfessionaSkillItem;