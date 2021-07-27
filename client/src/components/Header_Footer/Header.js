import React, { useState} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch,connect} from 'react-redux'
import {withRouter} from 'react-router';
import {logoutUser} from '../../redux/actions/user_actions'



function Header(props) {
    const [page] = useState([
        {
            name: 'Home',
            linkTo: '/',
            public: true
        },
        {
            name: 'Bikes',
            linkTo: '/shop',
            public: true
        }
    ])

    const [pageResearcher] = useState([
        {
            name: 'Home',
            linkTo: '/',
            public: true
        },
        {
            name: 'Chatbot Statistics',
            linkTo: '/chatbotResearch',
            public: true
        },
        {
            name: 'Rental Bikes Business PoC',
            linkTo: '/anomaliesResearch',
            public: true
        }
    ])

    const [user] = useState([
        {
            name: 'My Cart',
            linkTo: '/user/cart',
            public: false
        },
        {
            name: 'My Account',
            linkTo: '/user/dashboard',
            public: false
        },
        {
            name: 'Log In',
            linkTo: '/register_login',
            public: true
        },
        {
            name: 'Log Out',
            linkTo: '/user/logout',
            public: false
        }
    ])

    const dispatch = useDispatch();

    const cartLink = (item,i) => {
        const user = props.user.userData;

        return (
            <div className="cart_link" key={i}>
                <span>{user.cart ? user.cart.length : 0}</span>
                <Link to={item.linkTo} key={i}>
                    {item.name}
                </Link>
            </div>
        )
    }

    const logOutHandler = () => {
        dispatch(logoutUser())
        .then(response=>{
            if(response.payload.success){
                props.history.push('/');
            }
        });
    }

    const defaultLink = (item,i) => {
        return (
        item.name === 'Log Out' ?
            <div className="log_out_link"
                key={i}
                onClick={()=>logOutHandler()}
            >
                {item.name}
            </div>
        :
        
            <Link to={item.linkTo} key={i}>
                {item.name}
            </Link>
        )
    }

    const showLinks = (type) => {
        let list = [];

        if(props.user.userData){
            type.forEach((item)=>{
                if(!props.user.userData.isAuth){
                    if(item.public === true){
                        list.push(item);
                    }
                } else{
                    if(item.name !== 'Log In'){
                        list.push(item);
                    }
                }
            });
        }

        return list.map((item,i)=>{
            if(item.name !== 'My Cart'){
                return defaultLink(item,i)
            } else{
                return cartLink(item,i)
            }
            
        })
    }

    return (
        <header className="bck_b_light">
            <div className="container">
                <div className="left">
                    <div className="logo">
                        BIKEY
                    </div>
                </div>

                <div className="right">
                    <div className="top">
                        {showLinks(user)} 
                    </div>
                    <div className="bottom">
                        {
                            props?.user?.userData?.isResearcher ?
                                showLinks(pageResearcher)
                                :
                                showLinks(page)
                        }
                        
                    </div>
                </div >
            </div>
        </header>
    )
}

function mapStateToProps(state){
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(withRouter(Header));
