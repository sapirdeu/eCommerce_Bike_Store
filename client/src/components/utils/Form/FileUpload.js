import React, {useEffect, useState} from 'react'
import Dropzone  from 'react-dropzone'
import axios from 'axios'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlusCircle} from '@fortawesome/fontawesome-free-solid';
import CircularProgress from '@material-ui/core/CircularProgress'

function FileUpload(props) {
    const [uploadedFiles, setUploadedFiles] = useState([])
    const [uploading, setUploading] = useState(false)

    useEffect(() => {
        if (props.reset){
            setUploadedFiles([])
        }
    }, [props.reset]);

    const onDrop = (files) => {
        setUploading(true);
        let formData = new FormData();
        const config = {
            header: {'Content-Type': 'multipart/form-data'}
        }

        formData.append("file", files[0]);

        axios.post('/api/users/uploadimage', formData, config)
        .then(response => {
            setUploading(false);
            setUploadedFiles([...uploadedFiles, response.data]);
        });
    }

    useEffect(() => {
        props.imagesHandler(uploadedFiles)
    }, [uploadedFiles]);

    const onRemove = (id) => {
        axios.get(`/api/users/removeimage?public_id=${id}`)
        .then(response => {
            let images = uploadedFiles.filter(item=>{
                return item.public_id !== id;
            });

            setUploadedFiles(images);
            props.imagesHandler(images);

        });
    }

    const showUploadedImages = () => (
        uploadedFiles.map(item=>(
            <div
                className="dropzone_box"
                key={item.public_id}
                onClick={()=>onRemove(item.public_id)}
            >
                <div 
                    className="wrap"
                    style={{background:`url(${item.url}) no-repeat`}}
                >
                </div>
            </div>
        ))
    )

    return (
        <div>
            <section>
                <div className="dropzone clear">
                <Dropzone 
                    onDrop={(e)=>onDrop(e)}
                    multiple={false}
                    className="dropzone_box"
                    style={{
                        float: 'left',
                        width: '25%',
                        height: '160px',
                        padding: '10px',
                        boxSizing: 'border-box'
                    }}
                >
                    {({getRootProps, getInputProps}) => (
                        <section>
                            <div 
                                {...getRootProps()} 
                                style={{
                                    backgroundColor: '#eaeaea',
                                    height: '100%',
                                    textAlign: 'center',
                                    padding: '31px',
                                    boxSizing: 'border-box',
                                    fontSize: '49px',
                                    backgroundSize:' contain !important',
                                    backgroundPosition: 'center center !important',
                                    border: '1px solid #eaeaea',
                                }}
                            >
                                <input {...getInputProps()} />
                                <FontAwesomeIcon
                                    icon={faPlusCircle}
                                />
                            </div>
                        </section>
                    )}
                </Dropzone>
                    
                {showUploadedImages()}

                {
                    uploading ?
                        <div className="dropzone_box" style={{
                            textAlign: 'center',
                            paddingTop: '60px'
                        }}>
                            <CircularProgress
                                style={{color:'#00bcd4'}}
                                thickness={7}
                            />
                        </div>
                    :null
                }

                </div>
            </section>
        </div>
    )
}

export default FileUpload
