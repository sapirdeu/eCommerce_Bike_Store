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
    const [prepareData, setPrepareData] = useState('')
    const [predictBeforeData, setPredictBeforeData] = useState('')
    const [anomaliesData, setAnomaliesData] = useState('')
    const [predictAfterData, setPredictAfterData] = useState('')


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

 
    // 3rd table
    let columns3 = [
        {
          heading: 'Num',
          property: 'Num'
        },
        {
            heading: 'Column',
            property: 'Column'
        },
        {
            heading: 'NonNull',
            property: 'NonNull'
        },
        {
            heading: 'Type',
            property: 'Type'
        }
    ]
      
    //Data3 is the array of objects to be placed into the table
    let data3 = [
        {
            Num: '0',
            Column: 'instant',
            NonNull: '731 non-null',
            Type: 'int64',
        },
        {
            Num: '1',
            Column: 'dteday',
            NonNull: '731 non-null',
            Type: 'object',
        },
        {
            Num: '2',
            Column: 'season',
            NonNull: '731 non-null',
            Type: 'int64',
        },
        {
            Num: '3',
            Column: 'yr',
            NonNull: '731 non-null',
            Type: 'int64',
        },
        {
            Num: '4',
            Column: 'mnth',
            NonNull: '731 non-null',
            Type: 'int64',
        },
        {
            Num: '5',
            Column: 'holiday',
            NonNull: '731 non-null',
            Type: 'int64',
        },
        {
            Num: '6',
            Column: 'weekday',
            NonNull: '731 non-null',
            Type: 'int64',
        },
        {
            Num: '7',
            Column: 'workingday',
            NonNull: '731 non-null',
            Type: 'int64',
        },
        {
            Num: '8',
            Column: 'weathersit',
            NonNull: '731 non-null',
            Type: 'float64',
        },
        {
            Num: '9',
            Column: 'temp',
            NonNull: '731 non-null',
            Type: 'float64',
        },
        {
            Num: '10',
            Column: 'atemp',
            NonNull: '731 non-null',
            Type: 'float64',
        },
        {
            Num: '11',
            Column: 'hum',
            NonNull: '731 non-null',
            Type: 'float64',
        },
        {
            Num: '12',
            Column: 'windspeed',
            NonNull: '731 non-null',
            Type: 'int64',
        },
        {
            Num: '13',
            Column: 'casual',
            NonNull: '731 non-null',
            Type: 'int64',
        },
        {
            Num: '14',
            Column: 'registered',
            NonNull: '731 non-null',
            Type: 'int64',
        },
        {
            Num: '15',
            Column: 'cnt',
            NonNull: '731 non-null',
            Type: 'int64',
        }
    ]

    // 4th table
    let columns4 = [
        {
            heading: 'Column',
            property: 'Column'
        },
        {
            heading: 'Type',
            property: 'Type'
        }
    ]
    
    //Data4 is the array of objects to be placed into the table
    let data4 = [
        {
            Column: 'instant',
            Type: 'int64',
        },
        {
            Column: 'dteday',
            Type: 'datetime64[ns]',
        },
        {
            Column: 'season',
            Type: 'category',
        },
        {
            Column: 'yr',
            Type: 'category',
        },
        {
            Column: 'mnth',
            Type: 'category',
        },
        {
            Column: 'holiday',
            Type: 'bool',
        },
        {
            Column: 'weekday',
            Type: 'category',
        },
        {
            Column: 'workingday',
            Type: 'bool',
        },
        {
            Column: 'weathersit',
            Type: 'category',
        },
        {
            Column: 'temp',
            Type: 'float64',
        },
        {
            Column: 'atemp',
            Type: 'float64',
        },
        {
            Column: 'hum',
            Type: 'float64',
        },
        {
            Column: 'windspeed',
            Type: 'float64',
        },
        {
            Column: 'casual',
            Type: 'int64',
        },
        {
            Column: 'registered',
            Type: 'int64',
        },
        {
            Column: 'cnt',
            Type: 'int64',
        }
    ]


    // 5th table
    let columns5 = [
        {
            heading: 'Date',
            property: 'Date'
        },
        {
            heading: 'Temp',
            property: 'Temp'
        },
        {
            heading: 'Hum',
            property: 'Hum'
        },
        {
            heading: 'Cnt',
            property: 'Cnt'
        },
        {
            heading: 'Result',
            property: 'Result'
        },
        {
            heading: 'Reason',
            property: 'Reason'
        }
    ]
    
    //Data4 is the array of objects to be placed into the table
    let data5 = [
        {
            Date: '08/01/2011',
            Temp: '0.165',
            Hum: '0.535833',
            Cnt: '959',
            Result: 'FP',
            Reason: '',
        },
        {
            Date: '09/01/2011',
            Temp: '0.138333',
            Hum: '0.434167',
            Cnt: '822',
            Result: 'FP',
            Reason: '',
        },
        {
            Date: '17/01/2011',
            Temp: '0.175833',
            Hum: '0.5375',
            Cnt: '1000',
            Result: 'TP',
            Reason: 'Martin Luther King Day- National holiday in USA.',
        },
        {
            Date: '18/01/2011',
            Temp: '0.216667',
            Hum: '0.861667',
            Cnt: '683',
            Result: 'TP',
            Reason: 'U.S. Conference of Mayors Winter Meeting President Obama.',
        },
        {
            Date: '22/01/2011',
            Temp: '0.0591304',
            Hum: '0.4',
            Cnt: '981',
            Result: 'TP',
            Reason: 'Very low temperature.',
        },
        {
            Date: '23/01/2011',
            Temp: '0.0965217',
            Hum: '0.436522',
            Cnt: '986',
            Result: 'TP',
            Reason: 'Very low temperature.',
        },
        {
            Date: '26/01/2011',
            Temp: '0.2175',
            Hum: '0.8625',
            Cnt: '506',
            Result: 'TP',
            Reason: 'The mean of that month is 1231 bikes per day.',
        },
        {
            Date: '05/02/2011',
            Temp: '0.233333',
            Hum: '0.929167',
            Cnt: '1005',
            Result: 'TP',
            Reason: 'The lowest day on February 2011, which is a low month in itself and much lower than the mean for that month.',
        },
        {
            Date: '07/09/2011',
            Temp: '0.599167',
            Hum: '0.917083',
            Cnt: '1996',
            Result: 'TP',
            Reason: 'Heatwave- very hot & humid.',
        },
        {
            Date: '08/09/2011',
            Temp: '0.633913',
            Hum: '0.939565',
            Cnt: '1842',
            Result: 'TP',
            Reason: 'Heatwave- very hot & humid.',
        },
        {
            Date: '23/09/2011',
            Temp: '0.609167',
            Hum: '0.9725',
            Cnt: '2395',
            Result: 'TP',
            Reason: 'Heatwave- very hot & humid.',
        },
        {
            Date: '27/09/2011',
            Temp: '0.636667',
            Hum: '0.885417',
            Cnt: '4120',
            Result: 'TP',
            Reason: 'Heatwave- very hot & humid.',
        },
        {
            Date: '12/10/2011',
            Temp: '0.543333',
            Hum: '0.90625',
            Cnt: '2416',
            Result: 'TP',
            Reason: 'A plot tied to the Iranian government to bomb the Israeli and the Saudi embassies in Washington on 11/10/2011.',
        },
        {
            Date: '19/10/2011',
            Temp: '0.541739',
            Hum: '0.895217',
            Cnt: '2424',
            Result: 'TP',
            Reason: 'One of the lowest days on October 2011, which is a low month in itself and much lower than the mean for that month.',
        },
        {
            Date: '29/10/2011',
            Temp: '0.254167',
            Hum: '0.8825',
            Cnt: '627',
            Result: 'TP',
            Reason: 'Record-breaking snowstorm in the northeastern United States leaves nearly 2 million residents without power for more than 36 hours.',
        },
        {
            Date: '16/11/2011',
            Temp: '0.456667',
            Hum: '0.93',
            Cnt: '1817',
            Result: 'TP',
            Reason: 'One of the lowest days on November 2011 also much lower than the mean.',
        },
        {
            Date: '21/11/2011',
            Temp: '0.4475',
            Hum: '0.91',
            Cnt: '2765',
            Result: 'FP',
            Reason: '',
        },
        {
            Date: '22/11/2011',
            Temp: '0.416667',
            Hum: '0.9625',
            Cnt: '1607',
            Result: 'TP',
            Reason: 'One of the lowest days on November 2011 also much lower than the mean.',
        },
        {
            Date: '06/12/2011',
            Temp: '0.4625',
            Hum: '0.949583',
            Cnt: '2594',
            Result: 'FP',
            Reason: '',
        },
        {
            Date: '07/12/2011',
            Temp: '0.41',
            Hum: '0.970417',
            Cnt: '705',
            Result: 'TP',
            Reason: 'Demonstration- Dozens of Occupy protesters arrested in Washington https://www.bbc.com/news/world-us-canada-16079356',
        },
        {
            Date: '12/02/2012',
            Temp: '0.1275',
            Hum: '0.464583',
            Cnt: '1529',
            Result: 'TP',
            Reason: 'The lowest day on February 2012, which is a low month in itself and much lower than the mean for that month.',
        },
        {
            Date: '07/04/2012',
            Temp: '0.4375',
            Hum: '0.254167',
            Cnt: '6857',
            Result: 'TP',
            Reason: 'Easter evening.',
        },
        {
            Date: '09/04/2012',
            Temp: '0.489167',
            Hum: '0.3175',
            Cnt: '5585',
            Result: 'TP',
            Reason: 'Easter break.',
        },
        {
            Date: '02/10/2012',
            Temp: '0.590833',
            Hum: '0.871667',
            Cnt: '4639',
            Result: 'TP',
            Reason: 'One of the lowest days on October 2012 and much lower than the mean.',
        },
        {
            Date: '03/10/2012',
            Temp: '0.6575',
            Hum: '0.79375',
            Cnt: '7572',
            Result: 'FP',
            Reason: '',
        },
        {
            Date: '29/10/2012',
            Temp: '0.44',
            Hum: '0.88',
            Cnt: '22',
            Result: 'TP',
            Reason: 'Hurricane Sandy makes landfall in New Jersey resulting in 110 deaths and $50 billion in damage and forces the New York stock exchange to close',
        },
        {
            Date: '26/12/2012',
            Temp: '0.243333',
            Hum: '0.823333',
            Cnt: '441',
            Result: 'TP',
            Reason: 'Christmas',
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

    // Data Preparation
    function watchPrepareDataHandler(){
        setPrepareData('ON')
    }
    function unWatchPrepareDataHandler(){
        setPrepareData('');
    }

    // Predict Before
    function watchPredictBeforeHandler(){
        setPredictBeforeData('ON')
    }
    function unWatchPredictBeforeHandler(){
        setPredictBeforeData('');
    }

    // Detect Anomalies
    function watchAnomaliesHandler(){
        setAnomaliesData('ON')
    }
    function unWatchAnomaliesHandler(){
        setAnomaliesData('');
    }

    // Predict After
    function watchPredictAfterHandler(){
        setPredictAfterData('ON')
    }
    function unWatchPredictAfterHandler(){
        setPredictAfterData('');
    }


    const handleFilters = (filters1, category) => {
        var unwatch = [1,1,1,1,1,1,1]
        if (category === 'mlResearch'){
            for (var index in filters1){
                switch (filters1[index]){
                    case 1: watchResearchOverviewHandler(); unwatch[1] = 0; break;
                    case 2: watchAnalysisDataHandler(); unwatch[2] = 0; break;
                    case 3: watchPrepareDataHandler(); unwatch[3] = 0; break;
                    case 4: watchPredictBeforeHandler(); unwatch[4]=0; break;
                    case 5: watchAnomaliesHandler(); unwatch[5]=0; break;
                    case 6: watchPredictAfterHandler(); unwatch[6]=0; break;
                }
            }

             for (var i=1 ; i<unwatch.length; i++){
                if (unwatch[i] == 1){
                    switch (i){
                        case 1: unWatchResearchOverviewHandler(); break;
                        case 2: unWatchAnalysisDataHandler(); break;
                        case 3: unWatchPrepareDataHandler(); break;
                        case 4: unWatchPredictBeforeHandler(); break;
                        case 5: unWatchAnomaliesHandler(); break;
                        case 6: unWatchPredictAfterHandler(); break;
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
                                            <img src="images/ml/7.PNG" width="850" height="400"></img><br/><br/>

                                            <br></br><br></br>
                                        </>
                                    :
                                        null
                                }
                            </div>

                            <div>
                                {
                                    prepareData !== '' ?
                                        <>
                                            <h2>Data Preparation</h2>
                                            <h3 style={{fontWeight:"normal", fontSize:"15px"}}>
                                            Information about the data- checking missing values and the datatypes of the features:<br/><br/>
                                            RangeIndex: 731 entries, 0 to 730<br/>
                                            Data columns (total 16 columns):<br/>
                                            </h3>
                                          
                                            <Table striped bordered hover size="sm" style={{fontWeight:"normal", fontSize:"13px" ,width:"500px"}}>
                                                <thead>
                                                    <tr>{columns3.map(col => <th key={`header-${col.heading}`}>{col.heading}</th>)}</tr>
                                                </thead>
                                                <tbody>
                                                    {data3.map(item => 
                                                        <tr key={`${item.item}-row`}>
                                                            {columns3.map(col => <td key={`${item.item}-${col.property}`}>{item[col.property]}</td>)}
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </Table>
                                            dtypes: float64(4), int64(11), object(1)<br/>
                                            memory usage: 91.5+ KB<br/><br/>
                                            
                                            Some data types need to be changed from numerical to categorical or bool otherwise the prediction model can interpret wrongly:<br/>
                                            <Table striped bordered hover size="sm" style={{fontWeight:"normal", fontSize:"13px" ,width:"300px"}}>
                                                <thead>
                                                    <tr>{columns4.map(col => <th key={`header-${col.heading}`}>{col.heading}</th>)}</tr>
                                                </thead>
                                                <tbody>
                                                    {data4.map(item => 
                                                        <tr key={`${item.item}-row`}>
                                                            {columns4.map(col => <td key={`${item.item}-${col.property}`}>{item[col.property]}</td>)}
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </Table><br/>

                                            <h3>Dataset- Heatmap</h3>
                                            check the correlation between the features:<br/>
                                            <img src="images/ml/8.PNG" width="550" height="400"></img><br/><br/>
                                            <u>Correlation Conclusions</u><br/>
                                            <ul>
                                                <li><b>Very strong</b> correlation between <b>temp</b> and <b>atemp</b>, we remove atemp from the attributes, in order to reduce the dimensionality.</li>
                                                <li><b>Strong</b> correlation between <b>temp</b> and <b>cnt</b>.</li>
                                                <li><b>Low</b> correlation between <b>holiday</b>, <b>workingday</b> to <b>cnt</b>.</li>
                                                <li>Cnt is the sum of register and casual, so they are also removed.</li>
                                            </ul><br/>
                                            Now our dataset is ready and we can execute our models!
                                            <br></br><br></br>
                                        </>
                                    :
                                        null
                                }
                            </div>
                            

                            <div>
                                {
                                    predictBeforeData !== '' ?
                                        <>
                                            <br/>
                                            <h2>Classifiers &amp; Regressors - With Anomalies (Full Dataset)</h2>
                                            <br/>
                                            <img src="images/ml/9.PNG" width="600" height="450"></img><br/>
                                            <b>Linear Regression loss:</b> 0.034457361213136625<br/><br/><br/>
                                            <img src="images/ml/10.PNG" width="600" height="450"></img><br/>
                                            <b>SVR loss:</b> 0.0876347746659868<br/><br/><br/>
                                            <img src="images/ml/11.PNG" width="600" height="450"></img><br/>
                                            <b>Random Forest loss:</b> 0.020199390796750122<br/><br/><br/>

                                            <b>Loss function MSE:</b> Mean Square Error- the sum of squared distances between our target variable and predicted values.
                                            We chose MSE as our loss function because it is outlier sensitive.<br/>
                                            <img src="images/ml/12.PNG"></img>
                                            <br></br><br></br>
                                        </>
                                    :
                                        null
                                }
                            </div>


                            
                            <div>
                                {
                                    anomaliesData !== '' ?
                                        <>
                                            <h2>Anomaly Detector</h2>
                                            <h3>Grubb’s Test</h3>
                                            <h3 style={{fontWeight:"normal", fontSize:"15px"}}>
                                            This is a test based on the assumption of normality. That is, one should first verify that the data can be reasonably approximated by a normal distribution before applying the Grubbs test, thus we normalized the data before applying the test. Grubb's test detects one outlier at a time. This outlier is expunged from the dataset and the test is iterated until no outliers are detected:
                                            </h3>

                                            <br/>
                                            <img src="images/ml/16.PNG"></img><br/><br/>
                                            Calculated G and the threshold:<br/>
                                            <img src="images/ml/17.PNG"></img><br/><br/>
                                            Each iteration we remove the outlier with the greatest Z-score:<br/>
                                            <ul>
                                                <li>After the 1st iteration:<br/><img src="images/ml/18.PNG"></img></li><br/>
                                                <li>After the 2nd iteration:<br/><img src="images/ml/19.PNG"></img></li><br/>
                                                <li>After the 3rd iteration:<br/><img src="images/ml/20.PNG"></img></li><br/>
                                                <li>After the 4th iteration:<br/><img src="images/ml/21.PNG"></img></li><br/>
                                                <li>After the 5th iteration:<br/><img src="images/ml/22.PNG"></img></li><br/>
                                                <li>After the 6th iteration:<br/><img src="images/ml/23.PNG"></img></li><br/>
                                            </ul>
                                            In total, 6 anomalies were detected- 0.82% (less than 1%) of the data.<br/>
                                            The remaining instances are smaller than the threshold.<br/><br/>

                                            <h3>PCA</h3>
                                            PCA is defined as an orthogonal linear transformation that transforms the data to a new coordinate system such that the greatest variance by some scalar projection of the data comes to lie on the first coordinate (called the first principal component), the second greatest variance on the second coordinate, and so on.<br/>
                                            The purpose of PCA is to reduce the data’s entropy.<br/>
                                            <ol>
                                                <li>First, normalize the data to Normal Distribution:<br/><img src="images/ml/24.PNG" width="900" height="120"></img></li><br/>
                                                <li>Second, calculate the number of components needed to explain the variance of 95%. Before PCA we had 11 attributes, and after PCA we are left with 2 new attributes that loyally represent the 11 original ones:<br/><img src="images/ml/25.PNG" width="200" height="120"></img></li><br/>
                                            </ol><br/>

                                            <h3>K-Means</h3>
                                            K-Means clustering is a method of vector quantization, originally from signal processing, that aims to partition n observations into k clusters in which each observation belongs to the cluster with the nearest mean (cluster centers or cluster centroid).<br/><br/>
                                            In order to choose the suitable number of clusters, we calculated K-Means with different number of centroids ranging from 1 to 9.
                                            <br/>As we can see from the elbow function below, the number of clusters that is suitable for the data is 3, hence K=3:<br/>
                                            <img src="images/ml/26.PNG"></img><br/>
                                            <ul>
                                                <li>X-Axis: number of clusters</li>
                                                <li>Y-Axis: K-Means score- the coherency between the clusters</li>
                                                <li>The plot looks like an arm with a clear elbow at k=3</li>
                                            </ul><br/>

                                            <b>How many instances belong to each cluster:</b><br/>
                                            <img src="images/ml/27.PNG" width="500" height="350"></img><br/><br/>
                                            
                                            <b>K-Means result:</b><br/>
                                            <img src="images/ml/28.PNG" width="600" height="420"></img><br/><br/>

                                            <b>K-Means anomalies detection:</b><br/>
                                            After trying different mathematical thresholds, the one that corresponded the best to the dataset is 3.035, thus an anomaly is an instance which its distance from the centroid it belongs to is greater than 3.035.
                                            <br/>In total, 36 anomalies were detected- 4.9% of the data.<br/>
                                            <img src="images/ml/29.PNG" width="600" height="420"></img><br/><br/>

                                            <h3>Isolation Forest</h3>
                                            An unsupervised learning algorithm for anomaly detection that works on the principle of isolating anomalies, instead of the most common techniques of profiling normal points.<br/>
                                            <ul>
                                                <li>Anomalies are less frequent than regular instances</li>
                                                <li>That is why by using isolation forest they should be identified faster, because they are closer to the root</li>
                                                <li>In total, 37 anomalies were detected- 5% of the data</li>
                                            </ul>
                                            <img src="images/ml/30.PNG" width="600" height="420"></img><br/><br/>
                                            
                                            <h3>Final Results</h3>
                                           <ul>
                                               <li><b>Grubb’s Test:</b> 6 anomalies, 0.8%</li>
                                               <li><b>K-Means:</b> 36 anomalies, 4.9%</li>
                                               <li><b>Isolation Forest:</b> 37 anomalies, 5%</li>
                                               <li>To avoid <b>FP</b>, we assumed that if 2 different techniques detected the same instances as anomalies, it is very
                                                    likely <b>TP</b>, thus we checked the intersection between them:
                                                    <ul>
                                                        <li>K-Means &cap; Isolation Forest</li>
                                                        <li>K-Means &cap; Grubb's Test</li>
                                                        <li>Isolation Forest &cap; Grubb's Test</li>
                                                    </ul>
                                                </li>
                                           </ul><br/>
                                           <img src="images/ml/31.PNG"width="300" height="350"></img><br/><br/>
                                           <b>27 anomalies detected, which comes up to 3.6% of the dataset.</b><br/><br/>
                                           After finding the anomalies, we analyzed what happened on those days in Washington D.C.
                                            <br/>Days we couldn’t find an explanation for are marked as FP:<br/>
                                            <br/>
                                            <Table striped bordered hover size="sm" style={{fontWeight:"normal", fontSize:"13px"}}>
                                                <thead>
                                                    <tr>{columns5.map(col => <th key={`header-${col.heading}`}>{col.heading}</th>)}</tr>
                                                </thead>
                                                <tbody>
                                                    {data5.map(item => 
                                                        <tr key={`${item.item}-row`}>
                                                            {columns5.map(col => <td key={`${item.item}-${col.property}`}>{item[col.property]}</td>)}
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </Table>                                          
                                            
                                            <br/><h3>Conclusion</h3>
                                            In total, 22 anomalies out of the 27 are TP, which comes up to 81.4% accuracy rate (Calculated by: TP / (TP+FP))<br/>
                                            <br/>Now we remove all the TP anomalies from the dataset, and we will execute the models &amp; regressors again.
                                            <br/>If improvement occurred – our anomaly detector succeeded on its mission!



                                            <br></br><br></br>
                                        </>
                                    :
                                        null
                                }
                            </div>

                            <div>
                                {
                                    predictAfterData !== '' ?
                                        <>
                                            <br/>
                                            <h2>Classifiers &amp; Regressors - Without Anomalies</h2>
                                            <br/>
                                            <img src="images/ml/13.PNG" width="600" height="450"></img><br/>
                                            <b>Linear Regression loss:</b> 0.030762413820932928<br/>
                                            <b>10.72% Improvement</b>
                                            {/* 0.034457361213136625 */}
                                            {/* (0.034457361213136625-0.030762413820932928)/0.034457361213136625 = 0.10723245373 */}
                                            <br/><br/>
                                            
                                            <img src="images/ml/14.PNG" width="600" height="450"></img><br/>
                                            <b>SVR loss:</b> 0.07434209488497755<br/>
                                            <b>15.17% Improvement</b>
                                            {/* 0.0876347746659868 */}
                                            {/* (0.0876347746659868-0.07434209488497755)/0.0876347746659868 = 0.15168270622 */}
                                            <br/><br/>

                                            <img src="images/ml/15.PNG" width="600" height="450"></img><br/>
                                            <b>Random Forest loss:</b> 0.019869942033651056<br/>
                                            <b>1.63% Improvement</b>
                                            {/* 0.020199390796750122 */}
                                            {/* (0.020199390796750122-0.019869942033651056)/0.020199390796750122 = 0.01630983658 */}
                                            <br/><br/>

                                            <h3>Conclusion</h3> Improvement of the percentages of the correct predictions <b>without</b> anomalies in the dataset- more accurate<br/>
                                            <br/>
                                            <h3>Implications</h3>
                                            What we know now or able to do now that was not possible before:<br/>
                                            <ul>
                                                <li>We can see clear <b>correlation</b> between the <b>weather</b> to the <b>rental behavior.</b></li>
                                                <li>We can see clear <b>correlation</b> between <b>events</b> in the city to the <b>rental behavior.</b></li>
                                                <li>We can learn how to accurately predict the amount of bikes that is going to be rented.</li>
                                            </ul>
                                            <br/>
                                            <h3>Discussion and Future Work</h3>
                                            <ul>
                                                <li>Think of different ways to extend or enlarge the dataset.</li>
                                                <li>Globalize our research on other datasets of another cities around the world.</li>
                                                <li>Analyze and categorize each and every event- for example, how influential a demonstration in the city is, or a festival etc. Understand the consequences per event.</li>
                                            </ul>
                                            Our results clearly show that when the anomalies are removed, the classification is more accurate and that means we detected the correct anomalies, high TP rate.
                                            Now, after anomalies are removed and analyzed not only we can predict the attribute cnt better, but also can prepare in advance to different scenarios to do with weather conditions and different events that occur in the city.

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
