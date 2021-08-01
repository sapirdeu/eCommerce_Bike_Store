import React, { Component} from 'react';
import PropTypes from 'prop-types';
import "./styles/chatbot.css";


class LexChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '', 
      lexUserId: 'chatbot-demo' + Date.now(), 
      sessionAttributes: {}, 
      visible: 'closed',
      botUrl: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    var y = Math.random();
    if (y < 0.5){
      // Extrovert chatbot
      this.setState({botUrl: "https://de8yvjyv30ptl.cloudfront.net/"});
    }
    else{
      // Introvert chatbot
      this.setState({botUrl: "https://d1f90h9cun43t8.cloudfront.net"});
    }
  }

  handleClick() {
    this.setState({ visible: this.state.visible == 'open'? 'closed' : 'open' });
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({data: event.target.value});
  }

  render() {
    const headerRectStyle = {
      backgroundColor: 'rgb(244, 67, 54)', 
      width: '412px', 
      height: '30px',
      textAlign: 'center',
      color: '#FFFFFF',
      fontSize: '20px',
      border: '1px solid #c7c5c5'
    }

    const chatcontainerStyle = {
      backgroundColor: '#FFFFFF',
      width: 411
    }

    


    return (
      <div id="chatwrapper">
        <div id="chat-header-rect" style={headerRectStyle} onClick={this.handleClick} >{this.props.headerText}
              {(this.state.visible === 'open') ? <span className='chevron top'></span> : <span className='chevron bottom'></span>}
        </div>
        <div id="chatcontainer" className={this.state.visible} style={chatcontainerStyle}>
            <iframe title="bot" src={this.state.botUrl} width="100%" height="500px"></iframe>
        </div>
      </div>
    )
  }
}

LexChat.propTypes = {
  botName: PropTypes.string,
  IdentityPoolId: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  height: PropTypes.number,
  headerText: PropTypes.string
}

export default LexChat;

