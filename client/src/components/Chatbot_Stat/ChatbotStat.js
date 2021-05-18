import React, { useState } from 'react'
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
import {useDispatch} from 'react-redux'

function ChatbotStat() {
    const [surveyOverviewButton, setSurveyOverviewButton] = useState(true)
    const [surveyOverviewData, setSurveyOverviewData] = useState('')

    const [clipingOutliersButton, setClipingOutliersButton] = useState(true)
    const [clipingOutliersData, setClipingOutliersData] = useState('')

    const [historgramButton, setHistorgramButton] = useState(true)
    const [historgramData, setHistorgramData] = useState('')

    const [respondersMapButton, setRespondersMapButton] = useState(true)
    const [respondersMapData, setRespondersMapData] = useState('')

    const [personalityScoreMiniButton, setPersonalityScoreMiniButton] = useState(true)
    const [personalityScoreMiniData, setPersonalityScoreMiniData] = useState('')

    const [groupAssignmentButton, setGroupAssignmentButton] = useState(true)
    const [groupAssignmentData, setGroupAssignmentData] = useState('')

    const [analyzingResponseButton, setAnalyzingResponseButton] = useState(true)
    const [analyzingResponseData, setAnalyzingResponseData] = useState('')

    let columns = [
        {
          heading: 'Item',
          property: 'item'
        },
        {
          heading: 'Factor',
          property: 'factor'
        },
        {
          heading: 'Text',
          property: 'text'
        }
    ]
      
    //Data is the array of objects to be placed into the table
    let data = [
        {
            item: '1',
            factor: 'E',
            text: 'Am the life of the party.',
        },
        {
            item: '2',
            factor: 'A',
            text: 'Sympathize with others’ feelings',
        },
        {
            item: '3',
            factor: 'C',
            text: 'Get chores done right away.',
        },
        {
            item: '4',
            factor: 'N',
            text: 'Have frequent mood swings.',
        },
        {
            item: '5',
            factor: 'I',
            text: 'Have a vivid imagination.',
        },
        {
            item: '6',
            factor: 'E',
            text: 'Don’t talk a lot. (R)',
        },
        {
            item: '7',
            factor: 'A',
            text: 'Am not interested in other people’s problems. (R)',
        },
        {
            item: '8',
            factor: 'C',
            text: 'Often forget to put things back in their proper place. (R)',
        },
        {
            item: '9',
            factor: 'N',
            text: 'Am relaxed most of the time. (R)',
        },
        {
            item: '10',
            factor: 'I',
            text: 'Am not interested in abstract ideas. (R)',
        },
        {
            item: '11',
            factor: 'E',
            text: 'Talk to a lot of different people at parties.',
        },
        {
            item: '12',
            factor: 'A',
            text: 'Sympathize with others’ feelings',
        },
        {
            item: '13',
            factor: 'C',
            text: 'Like order.',
        },
        {
            item: '14',
            factor: 'N',
            text: 'Get upset easily.',
        },
        {
            item: '15',
            factor: 'I',
            text: 'Have difficulty understanding abstract ideas. (R)',
        },
        {
            item: '16',
            factor: 'E',
            text: 'Keep in the background. (R)',
        },
        {
            item: '17',
            factor: 'A',
            text: 'Am not really interested in others. (R)',
        },
        {
            item: '18',
            factor: 'C',
            text: 'Make a mess of things. (R)',
        },
        {
            item: '19',
            factor: 'N',
            text: 'Seldom feel blue. (R)',
        },
        {
            item: '20',
            factor: 'I',
            text: 'Do not have a good imagination. (R)',
        }
    ]

    const [personalityScoreCalcButton, setPersonalityScoreCalcButton] = useState(true)
    const [personalityScoreCalcData, setPersonalityScoreCalcData] = useState('')

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

    // Clipping Outliers
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

    // Historgram of the duration of test taking (after clipping)
    function watchHistorgramHandler(){
        setHistorgramButton(historgramButton ? false : true);

        dispatch(getHistorgram()).then(response=>{
            setHistorgramData(response.payload)
        })
    }
    function unwatchHistorgramHandler(){
        setHistorgramButton(historgramButton ? false : true);
        setHistorgramData('');
    }

    // Map of responders
    function watchRespondersMapHandler(){
        setRespondersMapButton(respondersMapButton ? false : true);

        dispatch(getRespondersMap()).then(response=>{
            setRespondersMapData(response.payload)
        })
    }
    function unwatchRespondersMapHandler(){
        setRespondersMapButton(respondersMapButton ? false : true);
        setRespondersMapData('');
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

    // Personality Score calculation
    function watchPersonalityScoreCalcHandler(){
        setPersonalityScoreCalcButton(personalityScoreCalcButton ? false : true);

        dispatch(getPersonalityScoreCalc()).then(response=>{
            setPersonalityScoreCalcData(response.payload)
        })
    }
    function unwatchPersonalityScoreCalcHandler(){
        setPersonalityScoreCalcButton(personalityScoreCalcButton ? false : true);
        setPersonalityScoreCalcData('');
    }

    // Random Groups - Group Assignment
    function watchGroupAssignmentHandler(){
        setGroupAssignmentButton(groupAssignmentButton ? false : true);

        dispatch(getGroupAssignment()).then(response=>{
            setGroupAssignmentData(response.payload)
        })
    }
    function unwatchGroupAssignmentHandler(){
        setGroupAssignmentButton(groupAssignmentButton ? false : true);
        setGroupAssignmentData('');
    }

    // Analyzing the survey response to the different aspects of the experiment
    function watchAnalyzingResponseHandler(){
        setAnalyzingResponseButton(analyzingResponseButton ? false : true);

        dispatch(getAnalyzingResponse()).then(response=>{
            setAnalyzingResponseData(response.payload)
        })
    }
    function unwatchAnalyzingResponseHandler(){
        setAnalyzingResponseButton(analyzingResponseButton ? false : true);
        setAnalyzingResponseData('');
    }


    return (
        <UserLayout>
            <h1>Survey Analysis</h1>
            <h3 style={{fontWeight:"normal", fontSize:"15px"}}>We often want to survey people on their views or reactions to possible events (design or promotion, for example). There are many survey tools that are good in designing the survey, presenting it on various forms, such as web or mobile, distributing it and collecting the responses. However, when it comes to analyzing the responses, you are left with fewer options, and most of them are out-dated (SPSS, for example).</h3>
            <h3 style={{fontWeight:"normal", fontSize:"15px"}}>In this notebook, we will explore how to analyze survey's responses, including statistical tests for reliability and research hypothesis.</h3>
            <h3 style={{fontWeight:"normal", fontSize:"15px"}}>We will start with loading the CSV files that we exported from the survey system (Qualtrics, in this example).</h3>

            <br/>

            {/* BUTTONS */}
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
                    historgramButton ?
                        <button onClick={()=> watchHistorgramHandler()}>
                            Historgram of the duration of test taking (after clipping)
                        </button>
                    : 
                        <button style={{background:"#e8cf2a"}} onClick={()=> unwatchHistorgramHandler()}>
                            Historgram of the duration of test taking (after clipping)
                        </button>
                }
            </div>

            <div>
                {
                    respondersMapButton ?
                        <button onClick={()=> watchRespondersMapHandler()}>
                            Map of responders
                        </button>
                    : 
                        <button style={{background:"#e8cf2a"}} onClick={()=> unwatchRespondersMapHandler()}>
                            Map of responders
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

            <div>
                {
                    personalityScoreCalcButton ?
                        <button onClick={()=> watchPersonalityScoreCalcHandler()}>
                            Personality Score Calculation
                        </button>
                    : 
                        <button style={{background:"#e8cf2a"}} onClick={()=> unwatchPersonalityScoreCalcHandler()}>
                            Personality Score Calculation
                        </button>
                }
            </div>

            <div>
                {
                    groupAssignmentButton ?
                        <button onClick={()=> watchGroupAssignmentHandler()}>
                            Random Groups - Group Assignment
                        </button>
                    : 
                        <button style={{background:"#e8cf2a"}} onClick={()=> unwatchGroupAssignmentHandler()}>
                            Random Groups - Group Assignment
                        </button>
                }
            </div>

            <div>
                {
                    analyzingResponseButton ?
                        <button onClick={()=> watchAnalyzingResponseHandler()}>
                            Analyzing the survey response to the different aspects of the experiment
                        </button>
                    : 
                        <button style={{background:"#e8cf2a"}} onClick={()=> unwatchAnalyzingResponseHandler()}>
                            Analyzing the survey response to the different aspects of the experiment
                        </button>
                }
            </div>

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
                            {renderHTML(respondersMapData)}
                        </>
                    :
                        <h3>TODO: Map of responders</h3>
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
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>{columns.map(col => <th key={`header-${col.heading}`}>{col.heading}</th>)}</tr>
                                    </thead>
                                    <tbody>
                                        {data.map(item => 
                                            <tr key={`${item.item}-row`}>
                                                {columns.map(col => <td key={`${item.item}-${col.property}`}>{item[col.property]}</td>)}
                                            </tr>
                                        )}
                                    </tbody>
                                </Table>
                                <br/>
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
                            <p>The survey system is randomaly assigning each participat to one of the group by showing either the Introvert or the Extrovert dialog.</p>
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

