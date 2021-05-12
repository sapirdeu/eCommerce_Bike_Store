import React, { useState } from 'react'
import UserLayout from '../../hoc/UserLayout'
import {getSurveyOverview} from '../../redux/actions/chatbot_actions'
import {withRouter} from 'react-router-dom'
import {useDispatch,connect} from 'react-redux'

function ChatbotStat() {
    const [surveyOverview, setSurveyOverview] = useState(true)
    const [data, setData] = useState('')

    const dispatch = useDispatch();

    function surveyOverviewHandler(){
        console.log("hello")
        setSurveyOverview(surveyOverview ? false : true);

        dispatch(getSurveyOverview()).then(response=>{
            console.log(response)
            setData(response.payload)
            
        })
    }



    return (
        <UserLayout>
            <h1>Survey Analysis</h1>
            <h3 style={{fontWeight:"normal", fontSize:"15px"}}>We often want to survey people on their views or reactions to possible events (design or promotion, for example). There are many survey tools that are good in designing the survey, presenting it on various forms, such as web or mobile, distributing it and collecting the responses. However, when it comes to analyzing the responses, you are left with fewer options, and most of them are out-dated (SPSS, for example).</h3>
            <h3 style={{fontWeight:"normal", fontSize:"15px"}}>In this notebook, we will explore how to analyze survey's responses, including statistical tests for reliability and research hypothesis.</h3>
            <h3 style={{fontWeight:"normal", fontSize:"15px"}}>We will start with loading the CSV files that we exported from the survey system (Qualtrics, in this example).</h3>
            {/* <UpdatePersonalInfo/> */}
            <div>
                {
                    surveyOverview ?
                        <button onClick={()=> surveyOverviewHandler()}>
                            Survey Overview
                        </button>
                    : 
                        <button style={{background:"#e8cf2a"}} onClick={()=> surveyOverviewHandler()}>
                            Survey Overview
                        </button>
                }
                
            </div>

            <div>
                {
                    data != '' ?
                    <h3>{data}</h3>
                        :
                        <h3></h3>
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

