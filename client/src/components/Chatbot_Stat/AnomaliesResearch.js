import React, {useEffect, useState} from 'react'
import {withRouter} from 'react-router-dom'
import {useDispatch,connect} from 'react-redux'
//import { getProductsToShop,getBrands, getMaterials} from '../../redux/actions/products_actions'
import PageTop from '../utils/PageTop';
import CollapseCheckbox from '../utils/CollapseCheckbox';
//import CollapseRadio from '../utils/CollapseRadio';
import {mlResearch} from '../utils/Form/FixedCategories';
//import LoadMoreCards from './LoadMoreCards';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faBars from '@fortawesome/fontawesome-free-solid/faBars'
import faTh from '@fortawesome/fontawesome-free-solid/faTh'

import renderHTML from 'react-render-html'
import { Table } from 'reactstrap';
import UserLayout from '../../hoc/UserLayout'
import {
    getSurveyOverview, 
} from '../../redux/actions/chatbot_actions'
import DragAndDropCSV from './DragAndDropCSV'

function AnomaliesResearche(props) {
    const [surveyOverviewData, setSurveyOverviewData] = useState('')
    const [filters, setFilters] = useState({
        mlResearch:[],
    })

    const dispatch = useDispatch();

    // Survey Overview
    function watchSurveyOverviewHandler(){
        dispatch(getSurveyOverview()).then(response=>{
            setSurveyOverviewData(response.payload)
        })
    }
    function unwatchSurveyOverviewHandler(){
        setSurveyOverviewData('');
    }


    const handleFilters = (filters1, category) => {
        if (category === 'mlResearch'){
            // console.log(filters1)
            for (var index in filters1){
                switch (filters1[index]){
                    case 1: watchSurveyOverviewHandler(); break;
                    case 2: break;
                    case 3: break;
                    case 4: break;
                }
            }
        }
        // console.log(unwatch)
        // for (var i=1 ; i<unwatch.length; i++){
        //     if (unwatch[i] == 1){
        //         switch (i){
        //             case 1: unwatchSurveyOverviewHandler(); break;
        //             case 2: unwatchClipingOutliersHandler(); break;
        //             case 3: unwatchHistorgramHandler(); break;
        //             case 4: unwatchRespondersMapHandler(); break;
        //             case 5: unwatchPersonalityScoreMiniHandler(); break;
        //             case 6: unwatchPersonalityScoreCalcHandler(); break;
        //             case 7: unwatchGroupAssignmentHandler(); break;
        //             case 8: unwatchAnalyzingResponseHandler(); break;
        //             case 9: unwatchTestingReliabilityHandler(); break;
        //             case 10: unwatchCronbachAlphaHandler(); break;
        //             case 11: unwatchVisualDifferencesHandler(); break;
        //             case 12: unwatchScatterHandler(); break;
        //             case 13: unwatchAnalysisQuestionHandler(); break;
        //         }
        //     }
        // }

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
                            title="Machine Learning Bikes Research"
                            list={mlResearch}
                            handleFilters={(filters)=>handleFilters(filters, 'mlResearch')}
                        />
                    </div>

                    <div className="right" style={{paddingLeft:"25px"}}>
                        <div>
                            <h1>Anomalies Research</h1>
                            <h3 style={{fontWeight:"normal", fontSize:"15px"}}>We often want to survey people on their views or reactions to possible events (design or promotion, for example). There are many survey tools that are good in designing the survey, presenting it on various forms, such as web or mobile, distributing it and collecting the responses. However, when it comes to analyzing the responses, you are left with fewer options, and most of them are out-dated (SPSS, for example).</h3>
                            <h3 style={{fontWeight:"normal", fontSize:"15px"}}>In this notebook, we will explore how to analyze survey's responses, including statistical tests for reliability and research hypothesis.</h3>
                            <h3 style={{fontWeight:"normal", fontSize:"15px"}}>We will start with loading the CSV files that we exported from the survey system (Qualtrics, in this example).</h3>
                            <br/>
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

export default connect(mapStateToProps)(withRouter(AnomaliesResearche));
