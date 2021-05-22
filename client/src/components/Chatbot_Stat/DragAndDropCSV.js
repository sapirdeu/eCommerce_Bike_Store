import React from 'react'
import { CSVReader, jsonToCSV } from 'react-papaparse'
import axios from 'axios'
import {postUploadCSV} from '../../redux/actions/dropzone_actions'
import {useDispatch} from 'react-redux';


function DragAndDropCSV() {
    const dispatch = useDispatch();

    function handleOnError (err){
        console.log(err)
    }

    function handleOnRemoveFile (event){
        console.log('---------------------------')
        console.log(event)
        console.log('---------------------------')
    }

    function onDropEvent (event, file) {
        console.log(event)
        console.log('---------------------------')
        // console.log(file)
        //console.log(event.type)
        if(event.type === "text/CSV" || event.type === "application/vnd.ms-excel"){
            console.log("CSV file")
            // const csvFile = jsonToCSV(file)
            //

            dispatch(postUploadCSV(file))
            // .then(response=>{
            //     console.log(response)
            // });
            // const request = 
            //     axios.post(`/api/product/article`, {csv: csvFile}) // CHANGE THE URL!!
            //     .then(response => response.data);
            // console.log(csvFile)

        }
        else{ 
                console.log("provide valid file type: " + event.type)
        }                                              
    }


    return (
        <div style={{width:'100%', height:'120px'}}>
            <CSVReader
                onDrop={(files, event) => onDropEvent(event, files)}
                onError={(err) => handleOnError(err)}
                addRemoveButton
                removeButtonColor='#FF3C3C'
                onRemoveFile={(event) => handleOnRemoveFile (event)}
                >
                    <span>Please drop a csv file here</span>
            </CSVReader>
       </div>
    )
}

export default DragAndDropCSV

// function mapStateToProps(state){
//     return{
//         products: state.products
//     }
// }

// export default connect(mapStateToProps)(withRouter(Home));
