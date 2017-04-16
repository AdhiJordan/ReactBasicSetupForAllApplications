var React = require('react');

var Todo = React.createClass ({
		render: function () {
			var {id,text, completed} = this.props;
			return (
				<div onClick={() => {
					this.props.onToggle(id);
				}}>
					<input id="checkbox1" type="checkbox"
					checked={completed} />
					<label for="checkbox1">Show  Completed</label>
					{text}
				</div>
				);
		}
});

module.exports = Todo;