import React from "react";
import Chatbot from "react-chatbot-kit";

import config from "./chatbot/config";
import ActionProvider from "./chatbot/ActionProvider";
import MessageParser from "./chatbot/MessageParser";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {visible:false};
    this.togglechat=this.togglechat.bind(this)

  }
  togglechat(){
    this.setState({visible:!this.state.visible})
  }
  render(){return (
    <div className="App">
      <div style={{ maxWidth: "300px",height:"100vh" }}>
        <div className="wrapper">
        <button className="openbot" style={{transform: "translate(14vw,90vh)" }} onClick={this.togglechat}  > Open Bot </button></div>
        {this.state.visible?<Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />:<div/>}
      </div>
    </div>
  );}
}

export default App;
