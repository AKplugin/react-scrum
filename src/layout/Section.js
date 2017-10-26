import React, { Component } from 'react';

class Section extends Component {

  state={
    "issues": [{"id":0,"issue":"Issue 0","status":"in-dev","state":"medium","description":"This is the issue 0"},{"id":1,"issue":"Issue 1","status":"dev-sign","state":"critical","description":"This is the issue 1"},{"id":2,"issue":"Issue 2","status":"to-do","state":"medium","description":"This is the issue 2"},{"id":3,"issue":"Issue 3","status":"to-do","state":"low","description":"This is the issue 3"},{"id":4,"issue":"Issue 4","status":"to-do","state":"medium","description":"This is the issue 4"},{"id":5,"issue":"Issue 5","status":"in-dev","state":"medium","description":"This is the issue 5"},{"id":6,"issue":"Issue 6","status":"to-do","state":"medium","description":"This is the issue 6"},{"id":7,"issue":"Issue 7","status":"dev-sign","state":"low","description":"This is the issue 7"},{"id":8,"issue":"Issue 8","status":"to-do","state":"medium","description":"This is the issue 8"},{"id":9,"issue":"Issue 9","status":"re-open","state":"medium","description":"This is the issue 9"}],
    "to-do":[],
    "in-dev":[],
    "re-open":[],
    "dev-sign":[]
  }

  render() {
    const { SectionStyle, headerStyle, parentContainer, IssueTag, pStyle } = Styles;

    this.state.issues.map((data) => {
      this.state[data.status].push(data)
    });



    return (
      <div style={SectionStyle}>
        <div style={headerStyle}>{this.props.name}</div>
        <div style={parentContainer} className={this.props.classTag}>
          {
            this.state[this.props.classTag].map((data) => {
                return <div style={IssueTag} className={[this.props.classTag, 'Tag'].join('-')}>
                  <span>{data.issue}</span>
                  <p style={pStyle}>{data.description}</p>
                </div>
            })
          }
        </div>
      </div>
    );
  }
}

const Styles = {
  SectionStyle: {
    "flex": 2,
    "width": "15%",
    "margin": "50px",
    "borderRadius": "5px",
    "backgroundColor": "#f3f5f6"
  },
  parentContainer:{
    "display": "flex",
    "flexDirection": "column"
  },
  IssueTag: {
    "width": null,
    "flex": 1,
    "height": "auto",
    "margin": "10px 4%",
    "borderRadius": "5px",
    "backgroundColor": "#fff"
  },
  headerStyle: {
    "height": "30px",
    "textAlign": "center"
  },
  pStyle: {
    "font-size": "12px"
  }
}

export default Section;
