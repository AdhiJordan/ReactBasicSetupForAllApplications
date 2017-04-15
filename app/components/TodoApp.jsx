var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
	getInitialState: function() {
		return {
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
	render: function () {
		var {todos} = this.state;
		return (
			<div>
				<TodoList todos = {todos} />
				<AddTodo onAddTodo = {this.handleAdd} />
			</div>

			);
	}

});

module.exports = TodoApp;