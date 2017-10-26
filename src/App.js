import React, { Component } from 'react';
import Section from './layout/Section';

class App extends Component {
  render() {
    const { mainStyle } = Styles;
    return (
      <div style={mainStyle}>
        <Section name="To-Do" classTag="to-do" />
        <Section name="In-Development" classTag="in-dev" />
        <Section name="Re-Open" classTag="re-open" />
        <Section name="Dev-Sign" classTag="dev-sign" />
      </div>
    );
  }
}

const Styles = {
  mainStyle: {
    "display": "flex",
    "flexDirection": "row",
    "height": "100%"
  }
}

export default App;
