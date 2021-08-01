import React from 'react'
import MyButton from '../utils/MyButton'
import Login from './Login'

function RegisterLogin(props) {
    return (
            <div className="container">
                <div className="register_login_container">
                    <div className="left">
                        <h2>New Customers</h2>
                        <p>Join us today in order to get the best and most suitable bike for you and your friends &amp; family! Stay tuned for the newest offers!</p>
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
    )
}

export default RegisterLogin
