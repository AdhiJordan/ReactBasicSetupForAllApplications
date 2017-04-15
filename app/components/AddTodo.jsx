var React = require('react');
 var AddTodo = React.createClass ({
 	handleSubmit: function (e) {
 		
 		var todoInput = this.refs.addTodosInput.value;

 		if(todoInput.length > 0) {
 			this.refs.addTodosInput.value = '';
			this.props.onAddTodo(todoInput);
 		}
 		else {
 			this.refs.todoInput.focus();
 		}
 		
 	},
 	render: function () {
 		return (
 			

 			<div className="card">
 				<form onSubmit={this.handleSubmit}>
 					<div className="card-divider">
 						
 							<div className="row">
 								<div className="medium-6 columns">
 									<label> Enter Todo
 										<input type="text" 
 										placeholder="enter todo here"
 										ref="addTodosInput" />
 									</label>
 								</div>
 							</div>
 						
 					</div>
 				
 					<div className="card-section">
 						<button type="submit" className="success button">
 							Save
 						</button>
 					</div>
 				</form>
 			</div>

 			);
 	}
 });

 module.exports = AddTodo;