import axios from 'axios'
import {
    POST_DROPZONE_UPLOAD_CSV,
} from './Types'
import {DROPZONE_SERVER} from '../../components/utils/Misc'

function postUploadCSV(csvFile){    
    const request = 
        axios.post(`${DROPZONE_SERVER}/uploadCSV`, csvFile)//{csv: csvFile})
        .then(response => {
            // console.log(csvFile)
            return response.data});
    
    return {
        type: POST_DROPZONE_UPLOAD_CSV, 
        payload: request
    }
}


// function clearProductDetail(){
//     return {
//         type: CLEAR_PRODUCT_DETAIL, 
//         payload: ''
//     }
// }


export {
    postUploadCSV,
}