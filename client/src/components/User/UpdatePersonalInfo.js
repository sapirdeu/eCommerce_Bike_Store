import React, {useState, useEffect} from 'react'
import FormFields from '../utils/Form/FormFields'
import {update, generateData, isFormValid, populateFields} from '../utils/Form/FormActions'
import {updateUserData, clearUpdateUser} from '../../redux/actions/user_actions'

import {withRouter} from 'react-router-dom'
import {useDispatch,connect} from 'react-redux'

function UpdatePersonalInfo(props) {
    const [formError, setFormError] = useState(false);
    const [formSuccess, setFormSucces] = useState(false);
    const [formData, setFormData] = useState({
        name:{
            element: 'input',
            value: '',
            config: {
                name: 'name_input',
                type: 'text',
                placeholder: 'Enter your name'
            },
            validation:{
                required: true,
            },
            valid: false,
            touched: false,
            validationMessage: ''
        },
        lastname:{
            element: 'input',
            value: '',
            config: {
                name: 'lastname_input',
                type: 'text',
                placeholder: 'Enter your lastname'
            },
            validation:{
                required: true,
            },
            valid: false,
            touched: false,
            validationMessage: ''
        },
        email:{
            element: 'input',
            value: '',
            config: {
                name: 'email_input',
                type: 'email',
                placeholder: 'Enter your email'
            },
            validation:{
                required: true,
                email: true
            },
            valid: false,
            touched: false,
            validationMessage: ''
        },
    });

    useEffect(() => {
        const newFormData = populateFields(formData, props.user.userData);
        setFormData(newFormData);
    }, []);

    const dispatch = useDispatch();

    const updateForm = (element) => {
        const newFormData = update(element, formData, 'update_user')
        setFormData(newFormData);
        setFormError(false);
    }

    function submitForm(event) {
        event.preventDefault();

        let dataToSubmit = generateData(formData, 'update_user');
        let formIsValid = isFormValid(formData, 'update_user');
   
        if(formIsValid) {
            dispatch(updateUserData(dataToSubmit))
            .then(response=>{
                if(response.payload.success){
                    setFormSucces(true);

                    setTimeout(()=>{
                        dispatch(clearUpdateUser());
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
                <h2 style={{marginTop: '15px', marginBottom: '15px'}}>Personal Account Information</h2>
                <div className="form_block_two">
                    <div className="block">
                        <FormFields
                            id={'name'}
                            formData={formData.name}
                            change={(element)=>updateForm(element)}
                        />
                    </div>
                    <div className="block">
                        <FormFields
                            id={'lastname'}
                            formData={formData.lastname}
                            change={(element)=>updateForm(element)}
                        />
                    </div>
                </div>

                <div>
                    <FormFields
                        id={'email'}
                        formData={formData.email}
                        change={(element)=>updateForm(element)}
                    />
                </div>

                {formSuccess ? 
                    <div className="form_success">Success</div>
                    : null
                }
                
                {formError ? 
                    <div className="error_label">Please check your data</div>
                    : null
                }

                <button onClick={(event)=> submitForm(event)}>
                    Update personal info
                </button>
            </form>
        </div>
    )
}

function mapStateToProps(state){
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(withRouter(UpdatePersonalInfo));
