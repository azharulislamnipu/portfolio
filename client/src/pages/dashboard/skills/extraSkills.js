import React from "react"
const ExtraSkills = (props) => {
  let error = props.error;

  return (
    props.extra_skills.map((val, idx) => {
      let extraSkill = `extra_skill-${idx}`;
      // console.log(error);
      return (
        <table className='w-100'>
          <tr key={val.index}>
          <td>
            <input type="text"  name="extra_skill" data-id={idx} id={extraSkill} className="form-control" placeholder='Enter Your Extra Skill Name' onChange={props.handlechange} />
         
            {error.extra_skill && (
                      <span
                        className={
                          error.extra_skill
                            ? "invalid-feedback d-block"
                            : "invalid-feedback"
                        }
                      >
                        {error.extra_skill}
                      </span>
                    )}
         
          </td>
       
          <td>
            {
            idx===0?<button onClick={()=>props.add()} type="button" className="btn btn-primary w-100 text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
            : <button className="btn btn-danger w-100" onClick={() => props.delete(val)} ><i className="fa fa-minus" aria-hidden="true"></i></button>
            }
          </td>
        </tr >
        </table>
      )
    })
  )
}
export default ExtraSkills; 