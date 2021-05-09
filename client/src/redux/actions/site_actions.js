import axios from 'axios'
import {
    GET_SITE_DATA,
    UPDATE_SITE_DATA
} from './Types'
import {SITE_SERVER} from '../../components/utils/Misc'

function getSiteData(){
    const request = 
        axios.get(`${SITE_SERVER}/site_data`)
        .then(response => response.data);
    
    return {
        type: GET_SITE_DATA, 
        payload: request
    }
}

function updateSiteData(dataToSubmit){
    const request = 
        axios.post(`${SITE_SERVER}/site_data`, dataToSubmit)
        .then(response => response.data);
    
    return {
        type: UPDATE_SITE_DATA, 
        payload: request
    }
}

export {getSiteData, updateSiteData}
