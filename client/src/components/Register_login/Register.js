// import React, { useState } from 'react'
// import FormFields from '../utils/Form/FormFields'
// import {update, generateData, isFormValid} from '../utils/Form/FormActions'
// import Dialog from '@material-ui/core/Dialog'

// import {withRouter} from 'react-router-dom'
// import {useDispatch,connect} from 'react-redux'
// import {registerUser} from '../../redux/actions/user_actions'

// function Register(props) {
//     const [formError, setFormError] = useState(false);
//     const [formSuccess, setFormSucces] = useState(false);
//     const [formData, setFormData] = useState({
//         name:{
//             element: 'input',
//             value: '',
//             config: {
//                 name: 'name_input',
//                 type: 'text',
//                 placeholder: 'Enter your name'
//             },
//             validation:{
//                 required: true,
//             },
//             valid: false,
//             touched: false,
//             validationMessage: ''
//         },
//         lastname:{
//             element: 'input',
//             value: '',
//             config: {
//                 name: 'lastname_input',
//                 type: 'text',
//                 placeholder: 'Enter your lastname'
//             },
//             validation:{
//                 required: true,
//             },
//             valid: false,
//             touched: false,
//             validationMessage: ''
//         },
//         email:{
//             element: 'input',
//             value: '',
//             config: {
//                 name: 'email_input',
//                 type: 'email',
//                 placeholder: 'Enter your email'
//             },
//             validation:{
//                 required: true,
//                 email: true
//             },
//             valid: false,
//             touched: false,
//             validationMessage: ''
//         },
//         password:{
//             element: 'input',
//             value: '',
//             config: {
//                 name: 'password_input',
//                 type: 'password',
//                 placeholder: 'Enter your password'
//             },
//             validation:{
//                 required: true,
//             },
//             valid: false,
//             touched: false,
//             validationMessage: ''
//         },
//         confirmPassword:{
//             element: 'input',
//             value: '',
//             config: {
//                 name: 'confirm_password_input',
//                 type: 'password',
//                 placeholder: 'Confirm your password'
//             },
//             validation:{
//                 required: true,
//                 confirm: 'password'
//             },
//             valid: false,
//             touched: false,
//             validationMessage: ''
//         }
//     });

//     const dispatch = useDispatch();

//     const updateForm = (element) => {
//         const newFormData = update(element, formData, 'register')
//         setFormData(newFormData);
//         setFormError(false);
//     }

//     function submitForm(event) {
//         event.preventDefault();

//         let dataToSubmit = generateData(formData, 'register');
//         let formIsValid = isFormValid(formData, 'register');

        
//         if(formIsValid) {            
//             dispatch(registerUser(dataToSubmit))
//             .then(response=>{
//                 if(response.payload.success){
//                     setFormError(false);
//                     setFormSucces(true);

//                     setTimeout(()=>{
//                         props.history.push('/register_login');
//                     }, 3000);  

//                 } else{
//                     setFormError(true);
//                 }
//             }).catch(e => {
//                 setFormError(true);
//             });

//         } else {
//             setFormError(true);
//         }
//     }


//     return (
//         <div className="page_wrapper">
//             <div className="container">
//                 <div className="register_login_container">
//                     <div className="left">
//                         <form onSubmit={(event)=>submitForm(event)}>
//                             <h2>Personal Information</h2>
//                             <div className="form_block_two">
//                                 <div className="block">
//                                     <FormFields
//                                         id={'name'}
//                                         formData={formData.name}
//                                         change={(element)=>updateForm(element)}
//                                     />
//                                 </div>
//                                 <div className="block">
//                                     <FormFields
//                                         id={'lastname'}
//                                         formData={formData.lastname}
//                                         change={(element)=>updateForm(element)}
//                                     />
//                                 </div>
//                             </div>

//                             <div>
//                                 <FormFields
//                                     id={'email'}
//                                     formData={formData.email}
//                                     change={(element)=>updateForm(element)}
//                                 />
//                             </div>
                            
//                             <h2>Verify Password</h2>
//                             <div className="form_block_two">
//                                 <div className="block">
//                                     <FormFields
//                                         id={'password'}
//                                         formData={formData.password}
//                                         change={(element)=>updateForm(element)}
//                                     />
//                                 </div>
//                                 <div className="block">
//                                     <FormFields
//                                         id={'confirmPassword'}
//                                         formData={formData.confirmPassword}
//                                         change={(element)=>updateForm(element)}
//                                     />
//                                 </div>
//                             </div>
                            
//                             {formError ? 
//                                 <div className="error_label">Please check your data</div>
//                                 : null
//                             }

//                             <button onClick={(event)=> submitForm(event)}>
//                                 Create an Account
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </div>

//             <Dialog open={formSuccess}>
//                 <div className="dialog_alert">
//                     <div>Congratulations!!</div>
//                     <div>You will be redirected to the LOGIN in a couple seconds...</div>
//                 </div>
//             </Dialog>

//         </div>
//     )
// }

// export default connect()(withRouter(Register));
