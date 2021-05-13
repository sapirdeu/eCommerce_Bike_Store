import React, { useState } from 'react'
import UserLayout from '../../hoc/UserLayout'
import {getSurveyOverview, getClipingOutliers, getPersonalityScoreMini} from '../../redux/actions/chatbot_actions'
import {withRouter} from 'react-router-dom'
import {useDispatch,connect} from 'react-redux'

function ChatbotStat() {
    const [surveyOverviewButton, setSurveyOverviewButton] = useState(true)
    const [surveyOverviewData, setSurveyOverviewData] = useState('')

    const [clipingOutliersButton, setClipingOutliersButton] = useState(true)
    const [clipingOutliersData, setClipingOutliersData] = useState('')

    const [personalityScoreMiniButton, setPersonalityScoreMiniButton] = useState(true)
    const [personalityScoreMiniData, setPersonalityScoreMiniData] = useState('')


    const dispatch = useDispatch();

    // Survey Overview
    function watchSurveyOverviewHandler(){
        setSurveyOverviewButton(surveyOverviewButton ? false : true);

        dispatch(getSurveyOverview()).then(response=>{
            setSurveyOverviewData(response.payload)
        })
    }
    function unwatchSurveyOverviewHandler(){
        setSurveyOverviewButton(surveyOverviewButton ? false : true);
        setSurveyOverviewData('');
    }

    // Cliping Outliers
    function watchClipingOutliersHandler(){
        setClipingOutliersButton(clipingOutliersButton ? false : true);

        dispatch(getClipingOutliers()).then(response=>{
            setClipingOutliersData(response.payload)
        })
    }
    function unwatchClipingOutliersHandler(){
        setClipingOutliersButton(clipingOutliersButton ? false : true);
        setClipingOutliersData('');
    }

    // Personality Score Mini-IPIP test questions
    function watchPersonalityScoreMiniHandler(){
        setPersonalityScoreMiniButton(personalityScoreMiniButton ? false : true);

        dispatch(getPersonalityScoreMini()).then(response=>{
            setPersonalityScoreMiniData(response.payload)
        })
    }
    function unwatchPersonalityScoreMiniHandler(){
        setPersonalityScoreMiniButton(personalityScoreMiniButton ? false : true);
        setPersonalityScoreMiniData('');
    }


    return (
        <UserLayout>
            <h1>Survey Analysis</h1>
            <h3 style={{fontWeight:"normal", fontSize:"15px"}}>We often want to survey people on their views or reactions to possible events (design or promotion, for example). There are many survey tools that are good in designing the survey, presenting it on various forms, such as web or mobile, distributing it and collecting the responses. However, when it comes to analyzing the responses, you are left with fewer options, and most of them are out-dated (SPSS, for example).</h3>
            <h3 style={{fontWeight:"normal", fontSize:"15px"}}>In this notebook, we will explore how to analyze survey's responses, including statistical tests for reliability and research hypothesis.</h3>
            <h3 style={{fontWeight:"normal", fontSize:"15px"}}>We will start with loading the CSV files that we exported from the survey system (Qualtrics, in this example).</h3>

            <br></br>

            <div>
                {
                    surveyOverviewButton ?
                        <button onClick={()=> watchSurveyOverviewHandler()}>
                            Survey Overview
                        </button>
                    : 
                        <button style={{background:"#e8cf2a"}} onClick={()=> unwatchSurveyOverviewHandler()}>
                            Survey Overview
                        </button>
                }
            </div>
            
            <div>
                {
                    clipingOutliersButton ?
                        <button onClick={()=> watchClipingOutliersHandler()}>
                            Clipping Outliers
                        </button>
                    : 
                        <button style={{background:"#e8cf2a"}} onClick={()=> unwatchClipingOutliersHandler()}>
                            Clipping Outliers
                        </button>
                }
            </div>

            <div>
                {
                    personalityScoreMiniButton ?
                        <button onClick={()=> watchPersonalityScoreMiniHandler()}>
                            Personality Score - Mini-IPIP test questions
                        </button>
                    : 
                        <button style={{background:"#e8cf2a"}} onClick={()=> unwatchPersonalityScoreMiniHandler()}>
                            Personality Score - Mini-IPIP test questions
                        </button>
                }
            </div>

            {
                surveyOverviewData != '' ?
                    <>
                        <br></br>
                        <h3>Survey Overview</h3>
                        <p>We can explore the number of questions and answers</p>
                        <br></br>
                        <pre className="clipping_container">{surveyOverviewData}</pre>
                    </>
                :
                    null
            }

            {
                clipingOutliersData != '' ?
                    <>
                        <br></br>
                        <h3>Clipping Outliers</h3>
                        <p>We want to remove outliers to avoid issues from people answering too quick or too slow. Let's calculate the 0.05 and 0.95 percentiles of the data, and then we can clip the data to be above 100 and below 900</p>
                        <br></br>
                        <pre className="clipping_container">{clipingOutliersData}</pre>
                    </>
                :
                    null
            }

            {
                personalityScoreMiniData != '' ?
                    <>
                        <br></br>
                        <h3>Personality Score - Mini-IPIP test questions</h3>
                        <p>The part of the survey was a personality score that we need to analyze to build the score of each responder. First, let's get the questions that are written in the first line (index=0) of the table. We want the 20 questions from E1 to index I20R. The letter (E, A ...) represents the personality attribute tested, and the R signifies that we need to reverse the score.</p>
                        <br></br>
                        <p>Based on: "The Mini-IPIP Scales: Tiny-Yet-Effective Measures of the Big Five Factors of Personality"</p>
                        <br></br>
                        <p>Appendix 20-Item Mini-IPIP</p>
                        <br></br>

                        TABLE
                        <br></br>
                        <pre>{personalityScoreMiniData}</pre>
                    </>
                :
                    null
            }

            
            
        </UserLayout>

    )
}

export default ChatbotStat

// function mapStateToProps(state){
//     return{
//         chatbot: state.chatbot
//     }
// }

// export default connect(mapStateToProps)(withRouter(ChatbotStat));

