var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');


var TodoApp = React.createClass({
	getInitialState: function() {
		return {
			show: false,
			textValue: '',
			todos: [
				{
					id: 1,
					text: 'first note'
				},
				{
					id: 2,
					text: 'second note'
				},
			]
		};
	},
	handleAdd: function(text) {
		alert('defined todo is' +text);
	},
	handleSearch: function(show, textValue) {
		this.setState({
			show: show,
			textValue: textValue.toLowerCase()
		});
	},
	render: function () {
		var {todos} = this.state;
		return (
			<div>
			<TodoSearch onSearch = {this.handleSearch}/>
				<TodoList todos = {todos} />
				<AddTodo onAddTodo = {this.handleAdd} />
			</div>

			);
	}

});

module.exports = TodoApp;