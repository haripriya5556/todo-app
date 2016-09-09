var React=require('react');
var ReactDOM=require('react-dom');
var TestUtils=require('react-addons-test-utils');
var expect=require('expect');
var $=require('jQuery');

var AddTodo=require('Addtodo');
describe ('AddTodo',()=>{
  it('should exist',() =>{
    expect(AddTodo).toExist();
  });
});
