var React = require('react');

var Todo = require('Todo');
var TodoList = React.createClass ({
		render: function () {
			var {todos} = this.props;
			var renderFunction = () => {
				return todos.map((todosample) => {
					return (<Todo key = {todosample.id} {...todosample} />);
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