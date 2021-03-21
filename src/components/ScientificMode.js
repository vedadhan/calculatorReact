import React, { Component } from "react";
import HideButton from './HideButton';
import ShowButton from './ShowButton';


class ScientificMode extends Component {
  state = {
    isActive: false
  };

  handleShow = () => {
    this.setState({isActive: true});
  };

  handleHide = () => {
    this.setState({isActive: false});
  };

  render() {
      return (
        <div>
          {this.state.isActive && <h1>Hello react</h1>}
           {this.state.isActive ?(
              <HideButton onClick={this.handleHide}/>
           ) : (
             <ShowButton onClick={this.handleShow}/>
           )}
        </div>
      )
  }
}

export default ScientificMode;