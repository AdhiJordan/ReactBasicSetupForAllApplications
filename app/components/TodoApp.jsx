var React = require('react');

var TodoList = require('TodoList');
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
	render: function () {
		var {todos} = this.state;
		return (
			<div>
				<TodoList todos = {todos} />
			</div>

			);
	}

});

module.exports = TodoApp;