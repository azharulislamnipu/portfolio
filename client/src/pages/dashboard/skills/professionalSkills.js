import React from "react"
const ProfessionalSkills = (props) => {
  return (
    props.professional_skills.map((val, idx) => {
      let title = `title-${idx}`, name = `name-${idx}`, progress = `progress-${idx}`;
      return (
        <tr key={val.index}>
          <td>
            <input type="text"  name="progress_title" data-id={idx} id={title} className="form-control " onChange={props.handlechange} />
          </td>
          <td>
            <input type="text"  name="progress_name" id={name} data-id={idx} className="form-control " onChange={props.handlechange} />
          </td>

          <td>
            <input type="text"  name="progress" id={progress} data-id={idx} className="form-control " onChange={props.handlechange} />
          </td>

          <td>
            {
            idx===0?<button onClick={()=>props.add()} type="button" className="btn btn-primary text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
            : <button className="btn btn-danger" onClick={() => props.delete(val)} ><i className="fa fa-minus" aria-hidden="true"></i></button>
            }
          </td>
        </tr >
      )
    })
  )
}
export default ProfessionalSkills 