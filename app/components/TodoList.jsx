var React = require('react');

var Todo = require('Todo');
var TodoList = React.createClass ({
		render: function () {
			var {todos} = this.props;
			var renderFunction = () => {
				return todos.map((todosample) => {
					return (<Todo key = {todosample.id} {...todosample} onToggle = {this.props.onToggle}/>);
				});
			}
			return (
				<div>
					{renderFunction()}
				</div>
				);
		}
});

module.exports = TodoList;