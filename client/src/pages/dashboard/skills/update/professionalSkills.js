import React from "react"
const ProfessionalSkills = (props) => {
  let error = props.error;

  return (
    props.professional_skills.map((val, idx) => {
      let title = `progress_title_${idx}`, name = `progress_name_${idx}`, progress = `progress${idx}`;
      // console.log(error);
      return (
        <table className='w-100'>
          <tr key={val.index}>
          <td>
            <input type="text"  name="progress_title" data-id={idx} id={title} className="form-control" placeholder='Enter Your Progress Title' onChange={props.handlechange}/>
         
            {error.progress_title && (
                      <span
                        className={
                          error.progress_title
                            ? "invalid-feedback d-block"
                            : "invalid-feedback"
                        }
                      >
                        {error.progress_title}
                      </span>
                    )}
         
          </td>
          <td>
            <input type="text"  name="progress_name" id={name} data-id={idx} className="form-control" placeholder='Enter Your Progress Name' onChange={props.handlechange} />
            {error.progress_name && (
                      <span
                        className={
                          error.progress_name
                            ? "invalid-feedback d-block"
                            : "invalid-feedback"
                        }
                      >
                        {error.progress_name}
                      </span>
                    )}
         
          </td>

          <td>
            <input type="text"  name="progress" id={progress} data-id={idx} className="form-control" placeholder='Enter Your Progress' onChange={props.handlechange} />
            {error.progress && (
                      <span
                        className={
                          error.progress
                            ? "invalid-feedback d-block"
                            : "invalid-feedback"
                        }
                      >
                        {error.progress}
                      </span>
                    )}
         
          </td>

          <td>
            {
            idx===0?<button onClick={()=>props.add()} type="button" className="btn btn-primary w-100 text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
            : <button className="btn btn-danger w-100" onClick={() => props.delete(val)} ><i className="fa fa-close" aria-hidden="true"></i></button>
            }
          </td>
        </tr >
        </table>
      )
    })
  )
}
export default ProfessionalSkills;