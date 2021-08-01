import axios from 'axios'
import {
    POST_DROPZONE_UPLOAD_CSV,
} from './Types'
import {DROPZONE_SERVER} from '../../components/utils/Misc'

function postUploadCSV(csvFile){    
    const request = 
        axios.post(`${DROPZONE_SERVER}/uploadCSV`, csvFile)
        .then(response => {
            return response.data});
    
    return {
        type: POST_DROPZONE_UPLOAD_CSV, 
        payload: request
    }
}



export {
    postUploadCSV,
}