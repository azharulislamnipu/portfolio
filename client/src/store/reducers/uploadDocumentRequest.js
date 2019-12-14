import * as Types from '../actions/types';

const uploadDocumentRequest = (state = [], action) => {
    switch(action.type){
        case Types.UPLOAD_IMAGE: {
            let uploadfile = [...state]
            let data = new FormData();
            console.log(data);
            data.append('data', uploadfile);
            data.unshift(action.payload.data)
            return data;
        }
    default: return state;
    }

}

export default uploadDocumentRequest;
