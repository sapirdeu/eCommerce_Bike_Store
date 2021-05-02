import React, { useState, useEffect } from 'react'
import {useDispatch,connect} from 'react-redux'
import {auth} from '../redux/actions/user_actions'
import CircularProgress from '@material-ui/core/CircularProgress'

export default function(ComposedClass, reload, adminRoute=null){
    function Auth(props) {
        const [loading, setLoading] = useState(true);
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(auth())
            .then(response=>{
                let user = props.user.userData;
                
                if(user){   
                    if(!user.isAuth){
                        // if the user isn't authenticated and the route is a private route
                        if(reload){
                            props.history.push('/register_login')
                        }
                    } else{
                        // if the user is authenticated and the user isn't an admin
                        if(adminRoute && !user.isAdmin){
                            props.history.push('/user/dashboard')
                        }

                        // if the user is authenticated and the route is a private route
                        if(reload === false){
                            props.history.push('/user/dashboard')
                        }
                    }
                }
                setLoading(false);
            });
        }, [dispatch, props.user.userData, props.history]);
        

        if(loading){
            return (
                <div className="main_loader">
                    <CircularProgress style={{color: '#2196F3'}} thickness={7}/>
                </div>
            )
        }

        return (
            <ComposedClass {...props} user={props.user}/>
        )
    }

    function mapStateToProps(state){
        return{
            user: state.user
        }
    }
    
    return connect(mapStateToProps)(Auth)
}
