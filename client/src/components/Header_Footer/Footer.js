import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCompass, faPhone, faClock, faEnvelope} from '@fortawesome/fontawesome-free-solid';
import LexChat from "../chatbot_ui/index";

function Footer({data}) {
    const botScript = (`
        <script src="https://de8yvjyv30ptl.cloudfront.net/lex-web-ui-loader.min.js"></script>
        <script>
        var loaderOpts = {
            baseUrl: 'https://de8yvjyv30ptl.cloudfront.net/',
            shouldLoadMinDeps: true
        };
        var loader = new ChatBotUiLoader.IframeLoader(loaderOpts);
        loader.load()
            .catch(function (error) { console.error(error); });
        </script>
    `)

    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [input])

    return (
        
        data.siteData ? 
            <footer className="bck_b_dark">
                <div className="container">
                    <div className="logo">
                        BIKEY
                    </div>

                    <div className="wrapper">
                        <div className="left">
                            <h3>Contant Information</h3>
                            <div className="business_nfo">
                                <div className="tag">
                                    <FontAwesomeIcon
                                        icon={faCompass}
                                        className="icon"
                                    />
                                    <div className="nfo">
                                        <div>Address</div>
                                        <div>{data.siteData[0].address}</div>
                                    </div>
                                </div>

                                <div className="tag">
                                    <FontAwesomeIcon
                                        icon={faPhone}
                                        className="icon"
                                    />
                                    <div className="nfo">
                                        <div>Phone</div>
                                        <div>{data.siteData[0].phone}</div>
                                    </div>
                                </div>

                                <div className="tag">
                                    <FontAwesomeIcon
                                        icon={faClock}
                                        className="icon"
                                    />
                                    <div className="nfo">
                                        <div>Working Hours</div>
                                        <div>{data.siteData[0].hours}</div>
                                    </div>
                                </div>

                                <div className="tag">
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        className="icon"
                                    />
                                    <div className="nfo">
                                        <div>Email</div>
                                        <div>{data.siteData[0].email}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <iframe title="bot" src={botScript}></iframe> */}
                        <link href="../chatbot_ui/lex-web-ui-loader.min.css"></link>
                        <script src="../chatbot_ui/lex-web-ui-loader.min.js"></script>
                        <LexChat 
                            style={{position: 'absolute'}}
                            backgroundColor="#FFFFFF"
                            headerText="Speak with an expert..." />
                        {/* <iframe title="bot" src="https://de8yvjyv30ptl.cloudfront.net/"></iframe> */}
                        {/* <div className="right">
                         <script src="https://de8yvjyv30ptl.cloudfront.net/lex-web-ui-loader.min.js"></script>
                           
                           
                            <script>
                                
                                var loaderOpts = {
                                    baseUrl: 'https://de8yvjyv30ptl.cloudfront.net/',
                                    shouldLoadMinDeps: true
                                };
                                var loader = new ChatBotUiLoader.IframeLoader(loaderOpts);
                                loader.load()
                                    .catch(function (error) { console.error(error); });
                            </script>
                       
                        
                        </div> */}
                    </div>
                </div>
            </footer>
        : null
    )
}

export default Footer

