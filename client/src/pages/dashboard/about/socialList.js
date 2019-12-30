import React from "react"
const SocialList = (props) => {
  return (
    props.social_info.map((val, idx) => {
      let social_icon = `social_icon-${idx}`, social_link = `social_link-${idx}`
      return (
       <table className='w-100'>
       <tr key={val.index}>
          <td>
            <input type="text"  name="social_icon" data-id={idx} id={social_icon} placeholder="Please Enter Social Icon name" className="form-control " onChange={props.handlechange} />
          </td>
          <td>
            <input type="text"  name="social_link" id={social_link} data-id={idx} placeholder="Please Eenter Social Link url" className="form-control " onChange={props.handlechange} />
          </td>
         
          <td className='text-center'>
            {
            idx===0?<button onClick={()=>props.add()} type="button" className="btn btn-primary text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
            : <button className="btn btn-danger" onClick={() => props.delete(val)} ><i className="fa fa-minus" aria-hidden="true"></i></button>
            }
          </td>
        </tr >
       </table>
      )
    })
  )
}
export default SocialList;