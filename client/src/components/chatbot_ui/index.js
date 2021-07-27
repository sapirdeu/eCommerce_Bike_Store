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
    //document.getElementById("inputField").focus();
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
    // console.log(this.state);
  }

  // pushChat(event) {
  //   event.preventDefault();

  //   var inputFieldText = document.getElementById('inputField');

  //   if (inputFieldText && inputFieldText.value && inputFieldText.value.trim().length > 0) {

  //     // disable input to show we're sending it
  //     var inputField = inputFieldText.value.trim();
  //     inputFieldText.value = '...';
  //     inputFieldText.locked = true;

  //     // send it to the Lex runtime
  //     var params = {
  //       botAlias: '$LATEST',
  //       botName: this.props.botName,
  //       inputText: inputField,
  //       userId: this.state.lexUserId,
  //       sessionAttributes: this.state.sessionAttributes
  //     };
  //     this.showRequest(inputField);
  //     var a = function(err, data) {
  //       if (err) {
  //         console.log(err, err.stack);
  //         this.showError('Error:  ' + err.message + ' (see console for details)')
  //       }
  //       if (data) {
  //         // capture the sessionAttributes for the next cycle
  //         this.setState({sessionAttributes: data.sessionAttributes})
  //         //sessionAttributes = data.sessionAttributes;
  //         // show response and/or error/dialog status
  //         this.showResponse(data);
  //       }
  //       // re-enable input
  //       inputFieldText.value = '';
  //       inputFieldText.locked = false;
  //     };

  //     this.lexruntime.postText(params, a.bind(this));
  //   }
  //   // we always cancel form submission
  //   return false;
  // }

  // showRequest(daText) {
  //   var conversationDiv = document.getElementById('conversation');
  //   var requestPara = document.createElement("P");
  //   requestPara.className = 'userRequest';
  //   requestPara.appendChild(document.createTextNode(daText));
  //   conversationDiv.appendChild(requestPara);
  //   conversationDiv.scrollTop = conversationDiv.scrollHeight;
  // }

  // showError(daText) {

  //   var conversationDiv = document.getElementById('conversation');
  //   var errorPara = document.createElement("P");
  //   errorPara.className = 'lexError';
  //   errorPara.appendChild(document.createTextNode(daText));
  //   conversationDiv.appendChild(errorPara);
  //   conversationDiv.scrollTop = conversationDiv.scrollHeight;
  // }

  // showResponse(lexResponse) {

  //   var conversationDiv = document.getElementById('conversation');
  //   var responsePara = document.createElement("P");
  //   responsePara.className = 'lexResponse';
  //   if (lexResponse.message) {
  //     responsePara.appendChild(document.createTextNode(lexResponse.message));
  //     responsePara.appendChild(document.createElement('br'));
  //   }
  //   if (lexResponse.dialogState === 'ReadyForFulfillment') {
  //     responsePara.appendChild(document.createTextNode(
  //       'Ready for fulfillment'));
  //     // TODO:  show slot values
  //   } else {
  //     responsePara.appendChild(document.createTextNode(
  //       ''));
  //   }
  //   conversationDiv.appendChild(responsePara);
  //   conversationDiv.scrollTop = conversationDiv.scrollHeight;
  // }

  handleChange(event) {
    event.preventDefault();
    this.setState({data: event.target.value});
  }

  // selectBot(){
  //   var y = Math.random();
  //   if (y < 0.5){
  //     // Extrovert chatbot
  //     this.setState({botUrl: "https://de8yvjyv30ptl.cloudfront.net/"});
  //   }
  //   else{
  //     this.setState({botUrl: "https://d1f90h9cun43t8.cloudfront.net"});
  //   }
     
  // }

  render() {

    // const inputStyle = {
    //   padding: '4px',
    //   fontSize: 24,
    //   width: '388px',
    //   height: '40px',
    //   borderRadius: '1px',
    //   border: '10px'
    // }

    // const conversationStyle = {
    //   width: '400px',
    //   height: this.props.height,
    //   border: 'px solid #ccc',
    //   backgroundColor: this.props.backgroundColor,
    //   padding: '4px',
    //   overflow: 'scroll',
    //   borderBottom: 'thin ridge #bfbfbf'
    // }

    const headerRectStyle = {
      backgroundColor: 'rgb(244, 67, 54)', 
      width: '412px', 
      height: '30px',
      textAlign: 'center',
      // paddingTop: 5,
      // paddingBottom: -12,
      color: '#FFFFFF',
      fontSize: '20px',
      border: '1px solid #c7c5c5'
    }

    const chatcontainerStyle = {
      backgroundColor: '#FFFFFF',
      width: 411
    }

    // const chatFormStyle = {
    //   margin: '1px', 
    //   padding: '2px'
    // }

    


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

