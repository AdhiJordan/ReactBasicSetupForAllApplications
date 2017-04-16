var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
	getInitialState: function() {
		return {
			show: false,
			textValue: '',
			todos: [
				{
					id: uuid(),
					text: 'first note',
					completed: false
				},
				{
					id: uuid(),
					text: 'second note',
					completed: true
				},
			]
		};
	},
	handleAdd: function(text) {
		this.setState({
			todos: [
					...this.state.todos,
					{
						id: uuid(),
						text: text,
						completed: false
					}
			]
		});
	},
	handleSearch: function(show, textValue) {
		this.setState({
			show: show,
			textValue: textValue.toLowerCase()
		});
	},
	handleToggle: function(id) {
		var updatedTodos = this.state.todos.map((todo) => {
			if(todo.id === id) {
				todo.completed = !todo.completed;
			}
			return todo;
			
			});
		this.setState({todos: updatedTodos});
	},
	render: function () {
		var {todos} = this.state;
		return (
			<div>
			<TodoSearch onSearch = {this.handleSearch}/>
				<TodoList todos = {todos} onToggle={this.handleToggle}/>
				<AddTodo onAddTodo = {this.handleAdd} />
			</div>

			);
	}

});

module.exports = TodoApp;