import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

function UserLayout(props) {
    const links = [
        {
            name: 'My account',
            linkTo: '/user/dashboard'
        },
        {
            name: 'User information',
            linkTo: '/user/user_profile'
        },
        {
            name: 'My cart',
            linkTo: '/user/cart'
        }
    ]

    const admin = [
        {
            name: 'Site info',
            linkTo: '/admin/site_info'
        },
        {
            name: 'Add product',
            linkTo: '/admin/add_product'
        },
        {
            name: 'Manage categories',
            linkTo: '/admin/manage_categories'
        }
    ]

    const researcher = [
        {
            name: 'Chatbot Statistics',
            linkTo: '/researcher/chatbot_stat'
        }
        
    ]

    const generateLinks = (links) => (
        links.map((item,i)=>(
            <Link to={item.linkTo} key={i}>
                {item.name}
            </Link>
        ))
    )

    return (
        <div className="container">
            <div className="user_container">
                <div className="user_left_nav">
                    <h2>My account</h2>
                    <div className="links">{generateLinks(links)}</div>
                    {
                        props.user.userData.isAdmin ?
                            <div>
                                <h2>Admin</h2>
                                <div className="links">{generateLinks(admin)}</div>
                            </div>
                        : null
                    }
                    {
                        props.user.userData.isResearcher ?
                            <div>
                                <h2>Researcher</h2>
                                <div className="links">{generateLinks(researcher)}</div>
                            </div>
                        : null
                    }
                </div>

                <div className="user_right">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(withRouter(UserLayout));
