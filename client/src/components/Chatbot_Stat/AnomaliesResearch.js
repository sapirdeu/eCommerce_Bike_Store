import React, {useEffect, useState} from 'react'
import {withRouter} from 'react-router-dom'
import {useDispatch,connect} from 'react-redux'
import PageTop from '../utils/PageTop';
import CollapseCheckbox from '../utils/CollapseCheckbox';
import {mlResearch} from '../utils/Form/FixedCategories';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faBars from '@fortawesome/fontawesome-free-solid/faBars'
import faTh from '@fortawesome/fontawesome-free-solid/faTh'

import renderHTML from 'react-render-html'
import { Table } from 'reactstrap';
import UserLayout from '../../hoc/UserLayout'
// import {
//     getSurveyOverview, 
// } from '../../redux/actions/chatbot_actions'
import DragAndDropCSV from './DragAndDropCSV'

function AnomaliesResearch(props) {
    const [researchOverviewData, setResearchOverviewData] = useState('')
    const [filters, setFilters] = useState({
        mlResearch:[],
    })

    const dispatch = useDispatch();

    // Research Overview
    function watchResearchOverviewHandler(){
        setResearchOverviewData('ON')
    }
    function unWatchResearchOverviewHandler(){
        setResearchOverviewData('');
    }


    const handleFilters = (filters1, category) => {
        var unwatch = [1,1,1,1,1,1]
        //console.log(unwatch)
        if (category === 'mlResearch'){
            // console.log(filters1)
            for (var index in filters1){
                switch (filters1[index]){
                    case 1: watchResearchOverviewHandler(); unwatch[1] = 0; break;
                    case 2: break;
                    case 3: break;
                    case 4: break;
                }
            }

             for (var i=1 ; i<unwatch.length; i++){
                if (unwatch[i] == 1){
                    switch (i){
                        case 1: unWatchResearchOverviewHandler(); break;
                    }
                }
            }
            setFilters(filters1);
        }
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
                            <h1>Bike Sharing Machine Learning Research</h1>
                            <br/>
                            <div>
                                {
                                    researchOverviewData !== '' ?
                                        <>
                                            <h2>Abstract</h2>
                                            <h3 style={{fontWeight:"normal", fontSize:"15px"}}>
                                            Bike sharing system is widely used around the world.
                                            Using this service has many environmental benefits to the pollution and traffic, as well as health and stamina improvement.
                                            By monitoring bike-sharing usage we can learn about many aspects- different events in the city, weather conditions and more.
                                            Monitoring unusual days can be difficult, as we need to realize what makes a day unusual.
                                            <br/><br/>
                                            It is challenging to solve that problem, because there are many variables that are not consistent.
                                            Therefore, we developed an anomaly detector using different techniques such as models of machine learning and statistical tools that can decide
                                            whether a day is an anomaly or not. It’s important to define between anomalies to regular days, because it contributes to the accessibility in the city,
                                            to people’s health, and reduce air pollution. After detecting the anomalies, we executed different regressors and classifiers, and it is proven that there is an improvement of the % of  correct predictions
                                            </h3>
                                            <br/>
                                            <h2>Introduction</h2>
                                            <h3 style={{fontWeight:"normal", fontSize:"15px"}}>
                                            Bike sharing systems are a new generation of traditional bike rentals, where the whole process of bike rental has become automatic. 
                                            There are about over 500 bike-sharing programs around the world which is composed of over 500 thousands bicycles.
                                            Today, there exists great interest in these systems due to their important role in traffic, environmental and health issues.
                                            Bike sharing systems can be used for sensing mobility in the city.<br/>
                                            Therefore, it is expected that most of important events in the city could be detected via monitoring this data.<br/><br/>
                                            If we understand the consuming culture of bike rental, we can prepare in advance so more residents and tourists will have the ability to rent bikes and by that air and noise pollution will be reduced. Furthermore, people will get healthier as riding bikes improve the stamina. 
                                            Also, we would be able to learn about the weather and various cultural events in the city and how they both collaborate with rental behavior.
                                            Lastly, increasing the profit of the company that provides the bikes, as a result of growth in consuming.
                                            </h3>
                                            <br/>
                                            <h2>The Problem</h2>
                                            <h3>Short Background</h3>
                                            <ul>
                                                <li>Bike sharing systems are a new generation of traditional bike rentals, where the whole process of bike rental has become automatic.</li>
                                                <li>There are about over 500 bike-sharing programs around the world which by 2012 was composed of over 500 thousands bicycles, nowadays there are over 20 million bicycles.</li>
                                                <li>Today, there exists great interest in these systems due to their important role in traffic, environmental and health issues.</li>
                                                <li>Bike sharing systems can be used for sensing mobility in the city. Therefore, it is expected that most of important events in the city could be detected via monitoring this data.</li>
                                            </ul>
                                            <br/>
                                            <h3>Description</h3>
                                            <ul>
                                                <li>Successfully predict the amount of bikes rented.</li>
                                                <li>Identify irregular days (very high rental rate, or very low rental rate).<br/>For example: High rates- cultural event in the city. Low rate- environmental change.</li>
                                                <li>Diagnose and understand what occurred on a day, what makes it an anomaly among the other days.</li>
                                            </ul>
                                            <br/>
                                            <h3>Interest</h3>
                                            <ul>
                                                <li>If we understand the correlations between the attributes, we can predict better how many bicycles are expected to be rented and thus prepare for it in advance- increasing the profit and growth in consuming</li>
                                            </ul><br/>
                                            <h3>Implications</h3>
                                            <ul>
                                                <li><b>Higher accessibility</b> reaching from one point to another in the city.</li>
                                                <li><b>Reducing</b> environmental (air, noise etc.) <b>pollution</b> caused by motorized vehicles.</li>
                                                <li><b>Reducing traffic</b> in rush hour.</li>
                                                <li>Increasing and <b>improving stamina.</b></li>
                                                <li><b>Economically</b>, higher profit to the company of the bikes, and the users do not invest their money in maintaining a car.</li>
                                            </ul>
                                            <br/>
                                            <h2>Key Challenges</h2>
                                            <ol>
                                                <li>The dataset contains a small number of instances.</li>
                                                <li>Many attributes can affect the rental behavior, it is challenging to find those that have a bigger impact than the others and have a bigger influence in detecting if a day is unusual (anomaly) or not.</li>
                                                <li>Bike rental is dynamic and it is difficult to find consistency- events that occur in the city may influence the consuming, but it’s not reflected in the data.</li>
                                            </ol>
                                            <br/>
                                            <h2>Our Approach</h2>
                                            <h3>Idea</h3>
                                            <ul>
                                                <li>Executing various classifiers &amp; regressors that predict the amount of bicycles that are rented per day (80% train, 20% test):</li>
                                                <ul>
                                                    <li>Linear Regression</li>
                                                    <li>SVR</li>
                                                    <li>Random Forest Regression</li>
                                                </ul>
                                                <li>Executing our anomaly detector using the following techniques:</li>
                                                <ul>
                                                    <li>Grubb’s test</li>
                                                    <li>PCA</li>
                                                    <li>K-Means</li>
                                                    <li>Isolation Forest</li>
                                                </ul>
                                                <li>After finding the instances that are anomalies, we remove them from the data.</li>
                                                <li>Executing the classifiers &amp; regressors again, showing that the predictions have improved and are more accurate now.</li>
                                            </ul>
                                            <br/>
                                            <h3>Handling the key challenges</h3>
                                            <ol>
                                                <li>Because our dataset is small and we wish to avoid a high FP rate, we made sure that an instance is tagged as an anomaly if and only if 2 different techniques detected it as an anomaly.</li>
                                                <li>First, we checked the correlation between the attributes to cnt using a heatmap and removed the irrelevant attributes (redundancy, very low impact on count etc.)<br/>Second, we executed PCA.</li>
                                                <li>After detecting the anomalies, we analyzed them one by one using search engines, to try and figure out what happened on that day globally, and specifically in Washington D.C.</li>
                                            </ol>
                                            <br/>
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

export default connect(mapStateToProps)(withRouter(AnomaliesResearch));
