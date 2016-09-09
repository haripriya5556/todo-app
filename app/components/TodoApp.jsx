var React=require('react');
var TodoList=require('TodoList');
var TodoApp=React.createClass({
  getInitialState:function(){
    return {
      todos:[
        {
        id:1,
        text:'hi'
      }, {
        id:2,
        text:'hello'
      }, {
        id:3,
        text:'hey'
      }
      ]
    };
  },
  render:function (){
    var {todos}=this.state;
    return (
      <div>
  <TodoList todos={todos}/>
      </div>
    )
  }
});
module.exports=TodoApp;
