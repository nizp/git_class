import React from "react";
import ReactDOM from "react-dom";
class Ul extends React.Component{
  render(){
    let arr = [1,2,3,4,5];
    arr = arr.map((i)=>{
      return <li key={i}>{i}</li>
    })
    return (
      <ul>
        {arr}
      </ul>
    )
  }
}
ReactDOM.render(
  <Ul />,
  document.getElementById('box')
)