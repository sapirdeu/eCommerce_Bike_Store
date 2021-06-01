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
    const [analysiseData, setAnalysisData] = useState('')

    const [filters, setFilters] = useState({
        mlResearch:[],
    })

    const dispatch = useDispatch();

    let columns = [
        {
          heading: 'instant',
          property: 'instant'
        },
        {
          heading: 'dteday',
          property: 'dteday'
        },
        {
          heading: 'season',
          property: 'season'
        },
        {
            heading: 'yr',
            property: 'yr'
        },
        {
            heading: 'mnth',
            property: 'mnth'
        },
        {
            heading: 'holiday',
            property: 'holiday'
        },
        {
            heading: 'weekday',
            property: 'weekday'
        },
        {
            heading: 'workingday',
            property: 'workingday'
        },
        {
            heading: 'weathersit',
            property: 'weathersit'
        },
        {
            heading: 'temp',
            property: 'temp'
        },
        {
            heading: 'atemp',
            property: 'atemp'
        },
        {
            heading: 'hum',
            property: 'hum'
        },
        {
            heading: 'windspeed',
            property: 'windspeed'
        },
        {
            heading: 'casual',
            property: 'casual'
        },
        {
            heading: 'registered',
            property: 'registered'
        },
        {
            heading: 'cnt',
            property: 'cnt'
        }
    ]
      
    //Data is the array of objects to be placed into the table
    let data = [
        {
            instant: '1',
            dteday: '1/1/2011',
            season: '1',
            yr: '0',
            mnth: '1',
            holiday: '0',
            weekday: '6',
            workingday: '0',
            weathersit: '2',
            temp: '0.344167',
            atemp: '0.363625',
            hum: '0.805833',
            windspeed: '0.160446',
            casual: '331',
            registered: '654',
            cnt: '985',
        },
        {
            instant: '2',
            dteday: '2/1/2011',
            season: '1',
            yr: '0',
            mnth: '1',
            holiday: '0',
            weekday: '0',
            workingday: '0',
            weathersit: '2',
            temp: '0.363478',
            atemp: '0.353739',
            hum: '0.696087',
            windspeed: '0.248539',
            casual: '131',
            registered: '670',
            cnt: '801',
        },
        {
            instant: '3',
            dteday: '3/1/2011',
            season: '1',
            yr: '0',
            mnth: '1',
            holiday: '0',
            weekday: '1',
            workingday: '1',
            weathersit: '1',
            temp: '0.196364',
            atemp: '0.189405',
            hum: '0.437273',
            windspeed: '0.248309',
            casual: '120',
            registered: '1229',
            cnt: '1349',
        },
        {
            instant: '4',
            dteday: '4/1/2011',
            season: '1',
            yr: '0',
            mnth: '1',
            holiday: '0',
            weekday: '2',
            workingday: '1',
            weathersit: '1',
            temp: '0.2',
            atemp: '0.212122',
            hum: '0.590435',
            windspeed: '0.160296',
            casual: '108',
            registered: '1454',
            cnt: '1562',
        },
        {
            instant: '5',
            dteday: '5/1/2011',
            season: '1',
            yr: '0',
            mnth: '1',
            holiday: '0',
            weekday: '3',
            workingday: '1',
            weathersit: '1',
            temp: '0.226957',
            atemp: '0.22927',
            hum: '0.436957',
            windspeed: '0.1869',
            casual: '82',
            registered: '1518',
            cnt: '1600',
        }
    ]


    // second table
    let columns2 = [
        {
          heading: 'category',
          property: 'category'
        },
        {
          heading: 'result',
          property: 'result'
        }
    ]
      
    //Data2 is the array of objects to be placed into the table
    let data2 = [
        {
            category: 'count',
            result: '731.000000',
        },
        {
            category: 'mean',
            result: '4504.348837',
        },
        {
            category: 'std',
            result: '1937.211452',
        },
        {
            category: 'min',
            result: '22.000000',
        },
        {
            category: '25%',
            result: '3152.000000',
        },
        {
            category: '50%',
            result: '4548.000000',
        },
        {
            category: '75%',
            result: '5956.000000',
        },
        {
            category: 'max',
            result: '8714.000000',
        }
    ]

    
    // Research Overview
    function watchResearchOverviewHandler(){
        setResearchOverviewData('ON')
    }
    function unWatchResearchOverviewHandler(){
        setResearchOverviewData('');
    }

    // Data Analysis
    function watchAnalysisDataHandler(){
        setAnalysisData('ON')
    }
    function unWatchAnalysisDataHandler(){
        setAnalysisData('');
    }


    const handleFilters = (filters1, category) => {
        var unwatch = [1,1,1,1,1,1]
        //console.log(unwatch)
        if (category === 'mlResearch'){
            // console.log(filters1)
            for (var index in filters1){
                switch (filters1[index]){
                    case 1: watchResearchOverviewHandler(); unwatch[1] = 0; break;
                    case 2: watchAnalysisDataHandler(); unwatch[2] = 0; break;
                    case 3: break;
                    case 4: break;
                    case 5: break;
                }
            }

             for (var i=1 ; i<unwatch.length; i++){
                if (unwatch[i] == 1){
                    switch (i){
                        case 1: unWatchResearchOverviewHandler(); break;
                        case 2: unWatchAnalysisDataHandler(); break;
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
                                            <br/>
                                        </>
                                    :
                                        null
                                }
                            </div>
                            <div>
                                {
                                    analysiseData !== '' ?
                                        <>
                                            <h2>Data Analysis</h2>
                                            <h3>Data Set</h3>
                                            <h3 style={{fontWeight:"normal", fontSize:"15px"}}>
                                            <ul>
                                                <li><b>Time series</b> of daily bike-sharing information over a period of 2 years, hence <b>731 instances</b>, one per day.</li>
                                                <li>Unsupervised.</li>
                                                <li>The data was aggregated on a daily basis with the corresponding weather and seasonal information that were extracted from <a href="http://www.freemeteo.com" target="_blank"><u>http://www.freemeteo.com</u></a> and <a href="http://dchr.dc.gov/page/holiday-schedule" target="_blank"><u>http://dchr.dc.gov/page/holiday-schedule</u></a></li>
                                                <li>The data set is related to the two-year historical log corresponding to years <b>2011 and 2012</b> from Capital Bikeshare system, <b>Washington D.C.</b>, USA which is publicly available in <a href="http://capitalbikeshare.com/system-data" target="_blank"><u>http://capitalbikeshare.com/system-data</u></a>.</li>
                                            </ul>
                                            </h3>
                                            <br/>
                                            <b>Attributes</b>
                                            <ul>
                                                <li><b>date</b></li>
                                                <li><b>season</b> (1: spring, 2: summer, 3: fall, 4: winter)</li>
                                                <li><b>year</b> (0: 2011, 1:2012)</li>
                                                <li><b>month</b> (1 to 12)</li>
                                                <li><b>holiday</b> (1-yes, 0-no)</li>
                                                <li><b>weekday</b> (0 to 6)</li>
                                                <li><b>workingday</b> (if day is neither weekend nor holiday is 1, otherwise is 0)</li>
                                                <li><b>weathersit</b> (1 to 3):</li>
                                                    <ol>
                                                        <li>Clear, Few clouds, Partly cloudy, Partly cloudy</li>
                                                        <li>Mist + Cloudy, Mist + Broken clouds, Mist + Few clouds, Mist</li>
                                                        <li>Light Snow, Light Rain + Thunderstorm + Scattered clouds, Light Rain + Scattered clouds</li>
                                                    </ol>
                                                <li><b>temp</b> (normalized temperature in Celsius. The values are divided to 41 (max))</li>
                                                <li><b>atemp</b> (normalized feeling temperature in Celsius. The values are divided to 50 (max))</li>
                                                <li><b>hum</b> (normalized humidity. The values are divided to 100 (max))</li>
                                                <li><b>windspeed</b> (normalized wind speed. The values are divided to 67 (max))</li>
                                                <li><b>casual</b> (count of casual users)</li>
                                                <li><b>registered</b> (count of registered users)</li>
                                                <li><b>cnt</b> (count of total rental bikes including both casual and registered)</li>                                             
                                            </ul><br/>
                                            <b>Example</b><br/>
                                            <Table striped bordered hover size="sm" style={{fontWeight:"normal", fontSize:"13px"}}>
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
                                            </Table><br/>
                                            <h3>Analyzing the data</h3>
                                            Getting some interesting info about cnt:
                                            <Table striped bordered hover size="sm" style={{fontWeight:"normal", fontSize:"13px", width:"180px"}}>
                                                <thead>
                                                    <tr>{columns2.map(col => <th key={`header-${col.heading}`}>{col.heading}</th>)}</tr>
                                                </thead>
                                                <tbody>
                                                    {data2.map(item => 
                                                        <tr key={`${item.item}-row`}>
                                                            {columns2.map(col => <td key={`${item.item}-${col.property}`}>{item[col.property]}</td>)}
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </Table><br/>
                                            The graph below shows how many bikes were rented per day:<br/>
                                            <img src="images/ml/1.PNG" width="800" height="320"></img><br/><br/>

                                            The graph below shows how many bikes were rented on average per month:<br/>
                                            <img src="images/ml/2.PNG" width="800" height="280"></img><br/><br/>

                                            <u>Q: Does <b>season</b> affect rental bikes usage? <b>Yes</b></u><br/>
                                            Ttest:<br/>
                                            As we can see below season has an impact on rental bikes usage.<br/>
                                            There are the least number of rides in winter and the greatest in summer.<br/>
                                            The T-Value of -20.4 and the P-Value of 2.134 tell us there is a significant difference between summer and winter rides.<br/>
                                            The differences in rides between Spring and Fall however are not significant with T-value of 1.48 and a large P-Value of 0.139.<br/><br/>

                                            Winter vs. Spring:<br/>
                                            Ttest_indResult(statistic=-14.65873026929708, pvalue=1.5284822271363832e-38)<br/><br/>

                                            Winter vs. Summer:<br/>
                                            Ttest_indResult(statistic=-20.40505135948835, pvalue=2.134072968524431e-62)<br/><br/>

                                            Winter vs. Fall:<br/>
                                            Ttest_indResult(statistic=-12.933694332032188, pvalue=1.2022067175230552e-31)<br/><br/>

                                            Spring vs. Fall:<br/>
                                            Ttest_indResult(statistic=1.480020595990678, pvalue=0.13974231789501412)<br/><br/>

                                            Spring vs. Summer:<br/>
                                            Ttest_indResult(statistic=-3.9765418611661243, pvalue=8.411509811510021e-05)<br/><br/>

                                            Summer vs. Fall:<br/>
                                            Ttest_indResult(statistic=5.541003097872063, pvalue=5.7789091515026665e-08)<br/><br/>

                                            <img src="images/ml/3.PNG" width="520" height="370"></img><br/><br/>
                                            <img src="images/ml/4.PNG" width="410" height="450"></img><br/><br/>
                                            <img src="images/ml/5.PNG" width="550" height="350"></img><br/><br/>
                                            <img src="images/ml/6.PNG" width="900" height="350"></img><br/><br/>

                                            <u>Q: Does <b>weather</b> affect rental bikes usage? <b>Yes</b></u><br/>
                                            As we can see below, types of weather have a large impact on rental bikes. There are significantly less rides during snow and thunderstorms than during periods of nicer weather. 
                                            We can also see that this trend holds up across all seasons.<br/>
                                            <img src="images/ml/7.PNG" width="900" height="400"></img><br/><br/>

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