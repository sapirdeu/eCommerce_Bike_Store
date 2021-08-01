import React from 'react'
import { CSVReader } from 'react-papaparse'
import {postUploadCSV} from '../../redux/actions/dropzone_actions'
import {useDispatch} from 'react-redux';


function DragAndDropCSV() {
    const dispatch = useDispatch();

    function handleOnError (err){
        console.log(err)
    }

    function handleOnRemoveFile (event){
        console.log(event)
    }

    function onDropEvent (event, file) {
        if(event.type === "text/CSV" || event.type === "application/vnd.ms-excel"){
            dispatch(postUploadCSV(file))
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
                    <span>Please drop a CSV file here</span>
            </CSVReader>
       </div>
    )
}

export default DragAndDropCSV
