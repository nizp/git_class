import React from "react";
import ReactDOM from "react-dom";
class Ul extends React.Component{
  render(){
    /*
      这是一个数据,如果某个标签要插入数据在这个标签内部写个
      {数据}
      数据的标签，必须要加上一个key值
    */
    let arr = [1,2,3,4,5,6];
    return (
      <ul>
        {
          arr.map((i)=>{
            return <li key={i}>{i}</li>
          })
        }
      </ul>
    )
  }
}
ReactDOM.render(
  <Ul />,
  document.getElementById('box')
)