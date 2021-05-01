import React, { useState } from 'react'
import FormFields from '../utils/Form/FormFields'
import {update, generateData, isFormValid} from '../utils/Form/FormActions'

import {withRouter} from 'react-router-dom'
import {useDispatch,connect} from 'react-redux'
import {loginUser} from '../../redux/actions/user_actions'

function Login(props) {
    const [formError, setFormError] = useState(false);
    const [formData, setFormData] = useState({
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
        password:{
            element: 'input',
            value: '',
            config: {
                name: 'password_input',
                type: 'password',
                placeholder: 'Enter your password'
            },
            validation:{
                required: true,
            },
            valid: false,
            touched: false,
            validationMessage: ''
        }
    });

    const dispatch = useDispatch();

    const updateForm = (element) => {
        const newFormData = update(element, formData, 'login')
        setFormData(newFormData);
        setFormError(false);
    }

    function submitForm(event) {
        event.preventDefault();

        let dataToSubmit = generateData(formData, 'login');
        let formIsValid = isFormValid(formData, 'login');

        if(formIsValid) {
            dispatch(loginUser(dataToSubmit))
            .then(response=>{
                if(response.payload.loginSuccess){
                    props.history.push('/user/dashboard');
                } else{
                    setFormError(true);
                }
            });
        } else {
            setFormError(true);
        }
    }


    return (
        <div className="signin_wrapper">
            <form onSubmit={(event)=>submitForm(event)}>
                <FormFields
                    id={'email'}
                    formData={formData.email}
                    change={(element)=>updateForm(element)}
                />

                <FormFields
                    id={'password'}
                    formData={formData.password}
                    change={(element)=>updateForm(element)}
                />

                {formError ? 
                    <div className="error_label">Please check your data</div>
                    : null
                }

                <button onClick={(event)=> submitForm(event)}>
                    Log in
                </button>
            </form>
        </div>
    )
}

export default connect()(withRouter(Login)); 
