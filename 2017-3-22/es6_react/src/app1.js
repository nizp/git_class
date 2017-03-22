import React from "react";
import ReactDOM from "react-dom";
class H extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <h1>你好世界！!</h1>
        <p>es6，我来啦！</p>
      </div>
    )
  }
}
ReactDOM.render(
  <H />,
  document.getElementById('box')
)