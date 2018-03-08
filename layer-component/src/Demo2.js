import React, { Component } from 'react';
import Layer from './Layer'

class Demo2 extends Component {
  constructor(){
    super();
    this.state = {
       show: false,
       title: '弹层2',
       width: 300,
       zIndex: 999
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
            >弹层2</button>
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

export default Demo2;
