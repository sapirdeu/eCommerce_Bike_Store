import React, {useState, useEffect} from 'react'

import FormFields from '../../utils/Form/FormFields'
import {update, generateData, isFormValid, populateFields} from '../../utils/Form/FormActions'
import {getSiteData, updateSiteData} from '../../../redux/actions/site_actions'

import {withRouter} from 'react-router-dom'
import {useDispatch,connect} from 'react-redux'

function UpdateSiteInfo(props) {
    const [formError, setFormError] = useState(false);
    const [formSuccess, setFormSucces] = useState(false);
    const [formData, setFormData] = useState({
        address:{
            element: 'input',
            value: '',
            config: {
                label: 'Address',
                name: 'address_input',
                type: 'text',
                placeholder: 'Enter the site address'
            },
            validation:{
                required: true,
            },
            valid: false,
            touched: false,
            validationMessage: '',
            showlabel: true
        },
        hours:{
            element: 'input',
            value: '',
            config: {
                label: 'Working hours',
                name: 'hours_input',
                type: 'text',
                placeholder: 'Enter the site working hours'
            },
            validation:{
                required: true,
            },
            valid: false,
            touched: false,
            validationMessage: '',
            showlabel: true
        },
        phone:{
            element: 'input',
            value: '',
            config: {
                label: 'Phone number',
                name: 'phone_input',
                type: 'text',
                placeholder: 'Enter the phone number'
            },
            validation:{
                required: true,
            },
            valid: false,
            touched: false,
            validationMessage: '',
            showlabel: true
        },
        email:{
            element: 'input',
            value: '',
            config: {
                label: 'Shop email',
                name: 'email_input',
                type: 'email',
                placeholder: 'Enter your email'
            },
            validation:{
                required: true,
            },
            valid: false,
            touched: false,
            validationMessage: '',
            showlabel: true
        }
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSiteData())
        .then((response)=>{
            const newFormData = populateFields(formData, response.payload[0]);
            setFormData(newFormData);
        })
    }, [dispatch]);

    const updateForm = (element) => {
        const newFormData = update(element, formData, 'site_info')
        setFormData(newFormData);
        setFormError(false);
    }

    function submitForm(event) {
        event.preventDefault();

        let dataToSubmit = generateData(formData, 'site_info');
        let formIsValid = isFormValid(formData, 'site_info');

        
        if(formIsValid) {
            dispatch(updateSiteData(dataToSubmit))
            .then(response=>{
                if(response.payload.success){
                    setFormError(false);
                    setFormSucces(true);

                    setTimeout(()=>{
                        setFormSucces(false);
                    }, 3000);

                } else{
                    setFormError(true);
                }
            }).catch(e => {
                setFormError(true);
            });

        } else {
            setFormError(true);
        }
    }


    return (
        <div>
            <form onSubmit={(event)=>submitForm(event)}>
                <h2 style={{marginBottom: '15px', marginTop: '10px'}}>Site info</h2>
                <FormFields
                    id={'address'}
                    formData={formData.address}
                    change={(element)=>updateForm(element)}
                />

                <FormFields
                    id={'hours'}
                    formData={formData.hours}
                    change={(element)=>updateForm(element)}
                />

                <FormFields
                    id={'phone'}
                    formData={formData.phone}
                    change={(element)=>updateForm(element)}
                />

                <FormFields
                    id={'email'}
                    formData={formData.email}
                    change={(element)=>updateForm(element)}
                />
                <div>
                    {formSuccess ? 
                        <div className="form_success">Success</div>
                        : null
                    }

                    {formError ? 
                        <div className="error_label">Please check your data</div>
                        : null
                    }

                    <button onClick={(event)=> submitForm(event)}>
                        Update
                    </button>
                </div>
            </form>
        </div>
    )
}

function mapStateToProps(state){
    return{
        site: state.site
    }
}

export default connect(mapStateToProps)(withRouter(UpdateSiteInfo));
