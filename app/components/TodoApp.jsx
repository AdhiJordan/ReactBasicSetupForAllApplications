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
					text: 'first note'
				},
				{
					id: uuid(),
					text: 'second note'
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
						text: text
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