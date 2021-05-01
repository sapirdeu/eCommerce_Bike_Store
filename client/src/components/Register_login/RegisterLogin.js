import React from 'react'
import MyButton from '../utils/MyButton'
import Login from './Login'

function RegisterLogin(props) {
    return (
        <div className="page_wrapper">
            <div className="container">
                <div className="register_login_container">
                    <div className="left">
                        <h1>New Customers</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                        <MyButton
                            type="default"
                            title="create an account"
                            linkTo="/register"
                            addStyles={{
                                margin: '10px 0 0 0'
                            }}
                        />
                    </div>

                    <div className="right">
                        <h2>Registered Customers</h2>
                        <p>If you have an account please log in.</p>
                        <Login {...props}/>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default RegisterLogin
