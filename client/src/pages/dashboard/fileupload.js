import React, { Component , Fragment, useState} from 'react'
import axios from 'axios';
 class FileUpload extends Component {



      state = { selectedFile: null, loaded: null, filename:'', title:'' };
    
  
     onChange = e => {
      this.setState({title: e.target.value});
    };
    filehandle = e => {
      this.setState({selectedFile: e.target.files});
      this.setState({filename: e.target.files[0].name});
    };

     onSubmit = e => {
        e.preventDefault();
        const formData = new FormData();
        console.log(this.state.selectedFile[0]);
        formData.append('file', this.state.selectedFile[0]);
        formData.append('title', this.state.title);

        let {  title } = this.state;
    
        axios.post('http://localhost:4000/upload', formData).then((res) => {
          console.log(res.statusText);
        });


      };

    render() {
        return (
     <Fragment>
   
   <div className="container pt-4 pb-4">

   <form onSubmit={this.onSubmit}>

        <input
                  type='text'
                  name="title"
                  className="form-control"
                  value={this.state.title}
                  onChange={this.onChange}
                />
        <div className='custom-file mb-4'>

          <input
            type='file'
            id='customFile'
            name="file"
            onChange={this.filehandle}
          />
          <label className='custom-file-label' htmlFor='customFile'>
            {this.state.filename}
          </label>
        </div>
        <input
          type='submit'
          value='Upload'
          className='btn btn-primary btn-block mt-4'
        />
      </form>
   </div>
 
    </Fragment>
        )
    }
}
export default  FileUpload;