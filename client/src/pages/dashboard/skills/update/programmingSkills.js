import React from "react"
const ProgrammingSkills = (props) => {
  let error = props.error;

  return (
    props.programming_skills.map((val, idx) => {
      let title = `title-${idx}`, name = `name-${idx}`, progress = `progress-${idx}`;
      // console.log(error);
      return (
        <table className='w-100'>
          <tr key={val.index}>
          <td>
            <input type="text"  name="programming_lang_title" data-id={idx} id={title} className="form-control" placeholder='Enter Your Progress Title' onChange={props.handlechange} />
         
            {error.programming_lang_title && (
                      <span
                        className={
                          error.programming_lang_title
                            ? "invalid-feedback d-block"
                            : "invalid-feedback"
                        }
                      >
                        {error.programming_lang_title}
                      </span>
                    )}
         
          </td>
          <td>
            <input type="text"  name="programming_lang_name" id={name} data-id={idx} className="form-control" placeholder='Enter Your Progress Name' onChange={props.handlechange} />
            {error.programming_lang_name && (
                      <span
                        className={
                          error.programming_lang_name
                            ? "invalid-feedback d-block"
                            : "invalid-feedback"
                        }
                      >
                        {error.programming_lang_name}
                      </span>
                    )}
         
          </td>

          <td>
            <input type="text"  name="programming_lang_progress" id={progress} data-id={idx} className="form-control" placeholder='Enter Your Progress' onChange={props.handlechange} />
            {error.programming_lang_progress && (
                      <span
                        className={
                          error.programming_lang_progress
                            ? "invalid-feedback d-block"
                            : "invalid-feedback"
                        }
                      >
                        {error.programming_lang_progress}
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
export default ProgrammingSkills;