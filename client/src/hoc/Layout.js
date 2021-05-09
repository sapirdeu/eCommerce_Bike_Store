import React, {useEffect} from 'react'
import Footer from '../components/Header_Footer/Footer'
import Header from '../components/Header_Footer/Header'

import {withRouter} from 'react-router-dom'
import {useDispatch,connect} from 'react-redux'
import {getSiteData} from '../redux/actions/site_actions'

function Layout(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        // Get site data only if we don't have it yet
        if(Object.keys(props.site).length === 0){
            dispatch(getSiteData());
        }
    }, [dispatch]);

    return (
        <div>
            <Header/>
            <div className="page_container">
                {props.children}
            </div>
            <Footer data={props.site}/>
        </div>
    )
}

function mapStateToProps(state){
    return{
        site: state.site
    }
}

export default connect(mapStateToProps)(withRouter(Layout));