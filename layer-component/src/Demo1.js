import React, { Component } from 'react';
import Layer from './Layer'

class Demo1 extends Component {
  constructor(){
    super();
    this.state = {
       show: false,
       title: 'Piz input your name',
       width: 220,
       zIndex: 1000
    }
  }
  showLayer(){
      this.setState({
        show: true
      })
      console.log('open')
  }
  hideLayer(){
    this.setState({
      show: false
    })
    console.log('close')
    
  }
  render() {
    return (
      <div className="App">
        <div className="click-show-layer-box">
          <button 
              onClick={(e) => this.showLayer()}
            >弹层1</button>
        </div>
        <Layer 
            show={this.state.show}
            hideLayer={(e) => this.hideLayer()}
            title={this.state.title}
            width={this.state.width}
            zIndex={this.state.zIndex}
          />
      </div>
    );
  }
}

export default Demo1;
