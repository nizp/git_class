import React from "react";
import ReactDOM from "react-dom";

class Ul extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    /*
      如果要使用语法糖：
      1.在数据为对象的时候，前面不用加属性名（{...data}），
      2.如果数据为数组，那么使用语法糖之后会变成对象(this.props = {})
      3.如果不是语法糖，那么一定要属性名(data={data})
      4.如果有多个数据，那么直接空格后面再写即可
     */
    // console.log(this.props.data,this.props.arr);
    // let arr = [1,2,3,4,5,8];
    // let arr2 = [];
    // for(var i=0;i<arr.length;i++){
    //   arr2.push( <li key={i}>{arr[i]}</li>);
    // }
    let list = null;
    list = this.props.data.map((el)=>{
      let lis = {
        d:el
      }
      return <Li {...lis} key={el}/>
    })
    return (
      <ul>
        {
          list
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
  let obj = {
    arr:[1,2,3,4,5,8]
  };
  let arr = [1,2,3,4,5]
ReactDOM.render(
  <Ul data={arr} {...obj}/>,
  document.getElementById('box')
)