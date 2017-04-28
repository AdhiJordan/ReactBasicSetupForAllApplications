var React = require('react');

var moment = require('moment');
var Todo = React.createClass ({
		render: function () {
			var {id,text, completed, createdAt, completedAt} = this.props;
			var renderDate = () => {
				var message = 'created';
				var timestamp = createdAt;
				if(completed) {
					message = 'completed';
					timestamp = completedAt;
				}
				return message + moment.unix(timestamp).format('MMMM Do YYYY @ h:mm a');
			}
			return (
				<div onClick={() => {
					this.props.onToggle(id);
				}}>
					<input id="checkbox1" type="checkbox"
					checked={completed} />
					<label for="checkbox1">Show  Completed</label>
					<p>{text}</p>
					<p>{renderDate()}</p>
				</div>
				);
		}
});

module.exports = Todo;