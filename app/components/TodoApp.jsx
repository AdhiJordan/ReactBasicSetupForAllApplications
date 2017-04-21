var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');
var TodoAPI = require('TodoAPI');


var TodoApp = React.createClass({
	getInitialState: function() {
		return {
			show: false,
			textValue: '',
			todos: TodoAPI.getTodos()
		};
	},
	componentDidUpdate: function() {
		TodoAPI.setTodos(this.state.todos);
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
		var {todos, show, textValue} = this.state;
		var filteredTodos = TodoAPI.filterSearch(todos, show, textValue);

		return (
			<div>
			<TodoSearch onSearch = {this.handleSearch}/>
				<TodoList todos = {filteredTodos} onToggle={this.handleToggle}/>
				<AddTodo onAddTodo = {this.handleAdd} />
			</div>

			);
	}

});

module.exports = TodoApp;