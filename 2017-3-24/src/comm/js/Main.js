import React,{Component}from 'react';
export default class Main extends Component{
  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.deleFn = this.deleFn.bind(this);
  }
  
  //在子组件中调用父组件的切换check方法
  toggle(){
    this.props.toggleCheck(this.props.todo);
  }
  //在子组件中调用父组件的删除方法
  deleFn(){
    this.props.deletFn(this.props.todo);
  }
  
  render(){
    let sClass = null;
    //if(this.props.check)sClass+='editing';
    
    // this.props.check?"completed":""
    return (
      <li className={sClass}>
          <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={this.props.check}
                onChange={this.toggle}
              />
                
              <label>{this.props.cont}</label>
              
              <button className="destroy" onClick={this.deleFn}></button>
          </div>
      </li>
    )
  }
}
