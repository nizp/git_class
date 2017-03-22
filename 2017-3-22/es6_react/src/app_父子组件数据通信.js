import React from "react";
import ReactDOM from "react-dom";
class Ul extends React.Component{
  render(){
    /*
      父组件子组件要传递数据给子组件：
        随意取个名字 = {i}
      
      当子组件接收到了父组件的数据时，通过this.props来接收
      
     */
    let arr = [1,2,3,4,5,8];
    // arr = arr.map((i)=>{
    //   return <Li key={i} d={i}/>
    // })
    return (
      <ul>
        {
          arr.map((i)=>{
            return <Li key={i} d={i}/>
          })
        }
      </ul>
    )
  }
}
class Li extends React.Component{
  render(){
    return (
      <li>{this.props.d}</li>
    )
  }
}

ReactDOM.render(
  <Ul />,
  document.getElementById('box')
)