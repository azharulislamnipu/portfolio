import React from "react"
const LanguageSkills = (props) => {
  let error = props.error;

  return (
    props.language_skills.map((val, idx) => {
      let title = `lang_title_${idx}`, name = `lang_name_${idx}`, progress = `lang_progress_${idx}`;
      // console.log(error);
      return (
        <table className='w-100'>
          <tr key={val.index}>
          <td>
            <input type="text"  name="lang_title" data-id={idx} id={title} className="form-control"
            placeholder={val.lang_title? val.lang_title :'Enter Your Progress Title' } onChange={props.handlechange} />
         
            {error.lang_title && (
                      <span
                        className={
                          error.lang_title
                            ? "invalid-feedback d-block"
                            : "invalid-feedback"
                        }
                      >
                        {error.lang_title}
                      </span>
                    )}
         
          </td>
          <td>
            <input type="text"  name="lang_name" id={name} data-id={idx} className="form-control" 
             placeholder={val.lang_name? val.lang_name :'Enter Your Progress Name' }  onChange={props.handlechange} />
            {error.lang_name && (
                      <span
                        className={
                          error.lang_name
                            ? "invalid-feedback d-block"
                            : "invalid-feedback"
                        }
                      >
                        {error.lang_name}
                      </span>
                    )}
         
          </td>

          <td>
            <input type="text"  name="lang_progress" id={progress} data-id={idx} className="form-control" 
            placeholder={val.lang_progress? val.lang_progress :'Enter Your Progress' } onChange={props.handlechange} />
            {error.lang_progress && (
                      <span
                        className={
                          error.lang_progress
                            ? "invalid-feedback d-block"
                            : "invalid-feedback"
                        }
                      >
                        {error.lang_progress}
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
export default LanguageSkills;