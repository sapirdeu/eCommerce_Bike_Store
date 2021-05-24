import React, {useEffect, useState} from 'react'
import {withRouter} from 'react-router-dom'
import {useDispatch,connect} from 'react-redux'
//import { getProductsToShop,getBrands, getMaterials} from '../../redux/actions/products_actions'
import PageTop from '../utils/PageTop';
import CollapseCheckbox from '../utils/CollapseCheckbox';
//import CollapseRadio from '../utils/CollapseRadio';
import {chatbotStatistics} from '../utils/Form/FixedCategories';
//import LoadMoreCards from './LoadMoreCards';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faBars from '@fortawesome/fontawesome-free-solid/faBars'
import faTh from '@fortawesome/fontawesome-free-solid/faTh'

import renderHTML from 'react-render-html'
import { Table } from 'reactstrap';
import UserLayout from '../../hoc/UserLayout'
import {
    getSurveyOverview, 
    getClipingOutliers, 
    getHistorgram,
    getRespondersMap,
    getPersonalityScoreMini,
    getPersonalityScoreCalc,
    getGroupAssignment,
    getAnalyzingResponse
} from '../../redux/actions/chatbot_actions'
import DragAndDropCSV from './DragAndDropCSV'

function Researches(props) {
    // buttons and data displayed
    //const [surveyOverviewButton, setSurveyOverviewButton] = useState(true)
    const [surveyOverviewData, setSurveyOverviewData] = useState('')
    // const products = props.products;
    // const [grid,setGrid] = useState('');
    // const [limit] = useState(6);
    // const [skip, setSkip] = useState(0);
    const [filters, setFilters] = useState({
        chatbotStatistics:[],
    })

    const dispatch = useDispatch();

    // Survey Overview
    function watchSurveyOverviewHandler(){
        dispatch(getSurveyOverview()).then(response=>{
            setSurveyOverviewData(response.payload)
        })
    }
    // function unwatchSurveyOverviewHandler(){
    //     setSurveyOverviewData('');
    // }

    // useEffect(() => {
    //     // dispatch(getBrands())
    //     // dispatch(getMaterials())
    //     // dispatch(getProductsToShop(skip, limit, filters))
    // }, [dispatch]);

    
    // const showFilteredResults = (newFilters) => {
    //     console.log(newFilters)
    //     for (var v in newFilters){
    //         console.log(v)
    //         if (v+1==1)
    //             watchSurveyOverviewHandler();
    //     }
    //     // if (newFilters == 1)
    //     //     watchSurveyOverviewHandler();
    // }   

    const handleFilters = (filters1, category) => {
        console.log(filters1)
        for (var index in filters1){
            //console.log(index)
            if (filters1[index]==1)
                watchSurveyOverviewHandler();
        }
        setFilters(filters1);
        //const newFilters = filters;
        //newFilters[category] = filters1;
        //showFilteredResults(newFilters);
        //setFilters(newFilters);
    }

    

    return (
        <div>
            <PageTop title="Browse Products"/>
            <div className="container">
                <div className="shop_wrapper">
                    <div className="left">
                        <CollapseCheckbox
                            initState={true}
                            title="Chatbot Statistics"
                            list={chatbotStatistics}
                            handleFilters={(filters)=>handleFilters(filters, 'chatbotStatistics')}
                        />
                        
                    </div>

                    <div className="right">
                    <div>
                        <h1>Survey Analysis</h1>
                        <h3 style={{fontWeight:"normal", fontSize:"15px"}}>We often want to survey people on their views or reactions to possible events (design or promotion, for example). There are many survey tools that are good in designing the survey, presenting it on various forms, such as web or mobile, distributing it and collecting the responses. However, when it comes to analyzing the responses, you are left with fewer options, and most of them are out-dated (SPSS, for example).</h3>
                        <h3 style={{fontWeight:"normal", fontSize:"15px"}}>In this notebook, we will explore how to analyze survey's responses, including statistical tests for reliability and research hypothesis.</h3>
                        <h3 style={{fontWeight:"normal", fontSize:"15px"}}>We will start with loading the CSV files that we exported from the survey system (Qualtrics, in this example).</h3>
                        <br/>
                        <DragAndDropCSV/>
                        <br/>
                        <br/>
                            {/* RESULTS */}
                            <div>
                                {
                                    surveyOverviewData !== '' ?
                                        <>
                                            <br/>
                                            <h3>Survey Overview</h3>
                                            <p>We can explore the number of questions and answers</p>
                                            <br/>
                                            <pre className="clipping_container">{surveyOverviewData}</pre>
                                            <br></br><br></br>
                                        </>
                                    :
                                        null
                                }
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return{
        chatbot: state.chatbot
    }
}

export default connect(mapStateToProps)(withRouter(Researches));
