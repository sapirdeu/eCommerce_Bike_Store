// import React, { useState } from 'react'
// import {useDispatch} from 'react-redux'
// import {postCSVFile} from '../../redux/actions/dropzone_actions'

// function DropzoneCSV() {
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [loaded, setLoaded] = useState(0);
    
//     const dispatch = useDispatch();

//     const onChangeHandler=event=>{

//         console.log(event.target.files[0]);
//         setSelectedFile(event.target.files[0]);
//         //console.log(selectedFile)
//         // setLoaded(0);
//     }

//     const onClickHandler = () => {
//         console.log(selectedFile)
//         const data = new FormData() 
//         for (const key in selectedFile) {
//             data.append(key, selectedFile[key]);
//         }

//         data.append("file", selectedFile)

//         //console.log(data)
//         // Display the values
//         // for (var value of data.values()) {
//         //     console.log("in loop");
//         //     console.log(value);
//         // }

//         dispatch(postCSVFile(data)).then(response=>{
//             console.log('here')
//             console.log(response)
//         });
//     }


//     return (
//         <div class='container'>
//             <div class='row'>
//                 <div class='offset-md-3 col-md-6'>
//                     <div class='form-group files'>
//                         <label>Upload CSV File</label>
//                         <input type="file" class="form-control" multiple="" onChange={(event)=>onChangeHandler(event)}/>
//                     </div>
//                     <button type="button" class="btn btn-success btn-block" onClick={(event)=>onClickHandler(event)}>Upload</button>
//                 </div>

//             </div>
            
//        </div>
//     )
// }

// export default DropzoneCSV
