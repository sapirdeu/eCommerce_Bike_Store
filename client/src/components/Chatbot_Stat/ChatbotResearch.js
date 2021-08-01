import React, {useState} from 'react'
import {withRouter} from 'react-router-dom'
import {useDispatch,connect} from 'react-redux'
import PageTop from '../utils/PageTop';
import CollapseCheckbox from '../utils/CollapseCheckbox';
import {chatbotStatistics} from '../utils/Form/FixedCategories';
import renderHTML from 'react-render-html'
import { Table } from 'reactstrap';
import {
    getSurveyOverview, 
    getClipingOutliers, 
    getHistorgram,
    getRespondersMap,
    getPersonalityScoreMini,
    getPersonalityScoreCalc,
    getGroupAssignment,
    getAnalyzingResponse,
    getTestingReliability,
    getCronbachAlpha,
    getVisualDifferences,
    getScatter,
    getAnalysisQuestion
} from '../../redux/actions/chatbot_actions'
import DragAndDropCSV from './DragAndDropCSV'

function ChatbotResearch(props) {
    // buttons and data displayed
    const [surveyOverviewData, setSurveyOverviewData] = useState('')
    const [clipingOutliersData, setClipingOutliersData] = useState('')
    const [historgramData, setHistorgramData] = useState('')
    const [respondersMapData, setRespondersMapData] = useState('')
    const [personalityScoreMiniData, setPersonalityScoreMiniData] = useState('')
    const [personalityScoreCalcData, setPersonalityScoreCalcData] = useState('')
    const [groupAssignmentData, setGroupAssignmentData] = useState('')
    const [analyzingResponseData, setAnalyzingResponseData] = useState('')
    
    const [testingReliabilityData, setTestingReliabilityData] = useState('')
    const [cronbachAlphaData, setCronbachAlphaData] = useState('')
    const [visualDifferencesData, setVisualDifferencesData] = useState('')
    const [scatterData, setScatterData] = useState('')
    const [analysisQuestionData, setAnalysisQuestionData] = useState('')

    
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
    function unwatchSurveyOverviewHandler(){
        setSurveyOverviewData('');
    }

    // Clipping Outliers
    function watchClipingOutliersHandler(){
        dispatch(getClipingOutliers()).then(response=>{
            setClipingOutliersData(response.payload)
        })
    }
    function unwatchClipingOutliersHandler(){
        setClipingOutliersData('');
    }

    // Historgram of the duration of test taking (after clipping)
    function watchHistorgramHandler(){
        dispatch(getHistorgram()).then(response=>{
            setHistorgramData(response.payload)
        })
    }
    function unwatchHistorgramHandler(){
        setHistorgramData('');
    }

    // Map of responders
    function watchRespondersMapHandler(){
        dispatch(getRespondersMap()).then(response=>{
            setRespondersMapData(response.payload)
        })
    }
    function unwatchRespondersMapHandler(){
        setRespondersMapData('');
    }

    // Personality Score Mini-IPIP test questions
    function watchPersonalityScoreMiniHandler(){
        dispatch(getPersonalityScoreMini()).then(response=>{
            setPersonalityScoreMiniData(response.payload)
        })
    }
    function unwatchPersonalityScoreMiniHandler(){
        setPersonalityScoreMiniData('');
    }

    // Personality Score calculation
    function watchPersonalityScoreCalcHandler(){
        dispatch(getPersonalityScoreCalc()).then(response=>{
            setPersonalityScoreCalcData(response.payload)
        })
    }
    function unwatchPersonalityScoreCalcHandler(){
        setPersonalityScoreCalcData('');
    }

    // Random Groups - Group Assignment
    function watchGroupAssignmentHandler(){
        dispatch(getGroupAssignment()).then(response=>{
            setGroupAssignmentData(response.payload)
        })
    }
    function unwatchGroupAssignmentHandler(){
        setGroupAssignmentData('');
    }

    // Analyzing the survey response to the different aspects of the experiment
    function watchAnalyzingResponseHandler(){
        dispatch(getAnalyzingResponse()).then(response=>{
            setAnalyzingResponseData(response.payload)
        })
    }
    function unwatchAnalyzingResponseHandler(){
        setAnalyzingResponseData('');
    }

    function watchTestingReliabilityHandler(){
        dispatch(getTestingReliability()).then(response=>{
            setTestingReliabilityData(response.payload)
        })
    }
    function unwatchTestingReliabilityHandler(){
        setTestingReliabilityData('');
    }


    function watchCronbachAlphaHandler(){
        dispatch(getCronbachAlpha()).then(response=>{
            setCronbachAlphaData(response.payload)
        })
    }
    function unwatchCronbachAlphaHandler(){
        setCronbachAlphaData('');
    }

    function watchVisualDifferencesHandler(){
        dispatch(getVisualDifferences()).then(response=>{
            setVisualDifferencesData(response.payload)
        })
    }
    function unwatchVisualDifferencesHandler(){
        setVisualDifferencesData('');
    }


    function watchScatterHandler(){
        dispatch(getScatter()).then(response=>{
            setScatterData(response.payload)
        })
    }
    function unwatchScatterHandler(){
        setScatterData('');
    }


    function watchAnalysisQuestionHandler(){
        dispatch(getAnalysisQuestion()).then(response=>{
            setAnalysisQuestionData(response.payload)
        })
    }
    function unwatchAnalysisQuestionHandler(){
        setAnalysisQuestionData('');
    }



    const handleFilters = (filters1, category) => {
        var unwatch = [1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        if (category === 'chatbotStatistics'){
            for (var index in filters1){
                switch (filters1[index]){
                    case 1: watchSurveyOverviewHandler(); unwatch[1] = 0; break;
                    case 2: watchClipingOutliersHandler(); unwatch[2] = 0; break;
                    case 3: watchHistorgramHandler(); unwatch[3] = 0; break;
                    case 4: watchRespondersMapHandler(); unwatch[4] = 0; break;
                    case 5: watchPersonalityScoreMiniHandler(); unwatch[5] = 0; break;
                    case 6: watchPersonalityScoreCalcHandler(); unwatch[6] = 0; break;
                    case 7: watchGroupAssignmentHandler(); unwatch[7] = 0; break;
                    case 8: watchAnalyzingResponseHandler(); unwatch[8] = 0; break;
                    case 9: watchTestingReliabilityHandler(); unwatch[9] = 0; break;
                    case 10: watchCronbachAlphaHandler(); unwatch[10] = 0; break;
                    case 11: watchVisualDifferencesHandler(); unwatch[11] = 0; break;
                    case 12: watchScatterHandler(); unwatch[12] = 0; break;
                    case 13: watchAnalysisQuestionHandler(); unwatch[13] = 0; break;
                    default: break;
                }
            }
        }

        for (var i=1 ; i<unwatch.length; i++){
            if (unwatch[i] == 1){
                switch (i){
                    case 1: unwatchSurveyOverviewHandler(); break;
                    case 2: unwatchClipingOutliersHandler(); break;
                    case 3: unwatchHistorgramHandler(); break;
                    case 4: unwatchRespondersMapHandler(); break;
                    case 5: unwatchPersonalityScoreMiniHandler(); break;
                    case 6: unwatchPersonalityScoreCalcHandler(); break;
                    case 7: unwatchGroupAssignmentHandler(); break;
                    case 8: unwatchAnalyzingResponseHandler(); break;
                    case 9: unwatchTestingReliabilityHandler(); break;
                    case 10: unwatchCronbachAlphaHandler(); break;
                    case 11: unwatchVisualDifferencesHandler(); break;
                    case 12: unwatchScatterHandler(); break;
                    case 13: unwatchAnalysisQuestionHandler(); break;
                    default: break;
                }
            }
        }

        setFilters(filters1);
    }

    

    return (
        <div>
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

                    <div className="right" style={{paddingLeft:"25px"}}>
                        <div>
                            <h1 className="padding20">Survey Analysis</h1>
                            <h3 style={{fontWeight:"normal", fontSize:"15px"}}>We often want to survey people on their views or reactions to possible events (design or promotion, for example). There are many survey tools that are good in designing the survey, presenting it on various forms, such as web or mobile, distributing it and collecting the responses. However, when it comes to analyzing the responses, you are left with fewer options, and most of them are out-dated (SPSS, for example).</h3>
                            <h3 style={{fontWeight:"normal", fontSize:"15px"}}>We will explore how to analyze survey's responses, including statistical tests for reliability and research hypothesis.</h3>
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

                            <div>
                                {
                                    clipingOutliersData !== '' ?
                                        <>
                                            <br/>
                                            <h3>Clipping Outliers</h3>
                                            <p>We want to remove outliers to avoid issues from people answering too quick or too slow. Let's calculate the 0.05 and 0.95 percentiles of the data, and then we can clip the data to be above 100 and below 900</p>
                                            <br/>
                                            <pre className="clipping_container">{clipingOutliersData}</pre>
                                            <br></br><br></br>
                                        </>
                                    :
                                        null
                                }
                            </div>

                            <div>
                                {
                                    historgramData !== '' ?
                                        <>
                                            <br/>
                                            <h3>Historgram of the duration of test taking (after clipping)</h3>
                                            {renderHTML(historgramData)}
                                            <br></br><br></br>
                                        </>
                                    :
                                    null
                                }
                            </div>

                            <div>
                                {
                                    respondersMapData !== '' ?
                                        <>
                                            <br/>
                                            <h3>Map of responders</h3>
                                            <p>A general map of the location of the people taking the test</p>
                                            <pre className="big_container">{renderHTML(respondersMapData)}</pre>
                                          
                                        </>
                                    :
                                        null
                                }
                            </div>

                            <div>
                                {
                                    personalityScoreMiniData !== '' ?
                                        <>
                                            <br/>
                                            <h3>Personality Score - Mini-IPIP test questions</h3>
                                            <p>The part of the survey was a personality score that we need to analyze to build the score of each responder. First, let's get the questions that are written in the first line (index=0) of the table. We want the 20 questions from E1 to index I20R. The letter (E, A ...) represents the personality attribute tested, and the R signifies that we need to reverse the score.</p>
                                            <br/>
                                            <p>Based on: "The Mini-IPIP Scales: Tiny-Yet-Effective Measures of the Big Five Factors of Personality"</p>
                                            <br/>
                                            <p>Appendix 20-Item Mini-IPIP</p>
                                            <br/>

                                            <div className="clipping_container">
                                                <pre>{personalityScoreMiniData}</pre>
                                            </div>
                                            <br></br><br></br>
                                        </>
                                    :
                                        null
                                }
                            </div>

                            <div>
                                {
                                    personalityScoreCalcData !== '' ?
                                        <>
                                            <br/>
                                            <h3>Personality Score Calculation</h3>
                                            <p>We will calculate the score of each of the personality attributes based on the score of the various questions for each</p>
                                            {renderHTML(personalityScoreCalcData)}
                                            <br></br><br></br>
                                        </>
                                    :
                                    null
                                }
                            </div>

                            <div>
                                {
                                    groupAssignmentData !== '' ?
                                        <>
                                            <br/>
                                            <h3>Random Groups - Group Assignment</h3>
                                            <p>The survey system is randomly assigning each participant to one of the group by showing either the Introvert or the Extrovert dialog.</p>
                                            <p>The following cell is calculating the group assignment, based on which answer each participant gave.</p>
                                            <p>We expect see almost equal sizes for the groups:</p>
                                            <pre>{renderHTML(groupAssignmentData)}</pre>
                                            <br></br><br></br>
                                        </>
                                    :
                                    null
                                }
                            </div>

                            <div>
                                {
                                    analyzingResponseData !== '' ?
                                        <>
                                            <br/>
                                            <h3>Analyzing the survey response to the different aspects of the experiment</h3>
                                            <p>We will take all the questions between the first and last survey attribute questions.</p>
                                            <br/>
                                            <pre className="clipping_container">{analyzingResponseData}</pre>
                                            <br></br>
                                            <p>We will extract the numeric value of the asnwers (removing the textual "Strongly Disagree", etc.)</p>
                                            <br></br><br></br>
                                        </>
                                    :
                                        null
                                }
                            </div>

                            <div>
                                {
                                    testingReliabilityData !== '' ?
                                        <>
                                            <br/>
                                            <h3>Testing Reliability with Alpha</h3>
                                            <p>We will calculate the Cronbach-Alpha score for each set of related questions.</p>
                                            <br/>
                                            <pre>{testingReliabilityData}</pre>
                                        </>
                                    :
                                        null
                                }
                            </div>

                            <div>
                                {
                                    cronbachAlphaData !== '' ?
                                        <>
                                            <br/>
                                            <h3>Cronbach-Alpha Summary</h3>
                                            <p>All the question groups got a score above 0.7 (except for Trust Info with 0.69), which is the threahold for reliability.</p>
                                            {renderHTML(cronbachAlphaData)}
                                            <br></br>
                                        </>
                                    :
                                    null
                                }
                            </div>

                            <div>
                                {
                                    visualDifferencesData !== '' ?
                                        <>
                                            <br/>
                                            <h3>Visual Differences between the groups for the questions</h3>
                                            <p>Visualizing the Differences between the groups as box plots.</p>
                                            <pre className="big_container">{renderHTML(visualDifferencesData)}</pre>
                                            <br></br>
                                        </>
                                    :
                                    null
                                }
                            </div>

                            <div>
                                {
                                    scatterData !== '' ?
                                        <>
                                            <br/>
                                            <h3>Scatter with the personality attributes</h3>
                                            <pre className="big_container">{renderHTML(scatterData)}</pre>
                                            <br></br>
                                        </>
                                    :
                                    null
                                }
                            </div>

                            <div>
                                {
                                    analysisQuestionData !== '' ?
                                        <>
                                            <br/>
                                            <h3>Analysis of each question</h3>
                                            <pre className="big_container">{renderHTML(analysisQuestionData)}</pre>
                                            <br></br>
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

export default connect(mapStateToProps)(withRouter(ChatbotResearch));
