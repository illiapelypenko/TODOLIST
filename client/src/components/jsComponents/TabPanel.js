import React, { Component } from 'react';
import '../cssComponents/TabPanel.css';

class TabPanel extends Component {
  render() {
    return (
      <div className="TabPanel">
        {this.props.tabs.map(tab => <div className='tab' key={this.props.tabs.indexOf(tab)}>{tab}</div>)}
        <button className='tab'>+</button>
      </div>
    );
  }
}

export default TabPanel;