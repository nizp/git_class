import React,{Component}from 'react';
export default class Footer extends Component{
  render(){
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{this.props.num}</strong>
          <span>条未选中</span>
        </span>
      </footer>
    )
  }
}
