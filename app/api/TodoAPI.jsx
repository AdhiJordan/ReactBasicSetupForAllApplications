var $ = require('jquery');
module.exports = {
	setTodos: function (todos) {
		if($.isArray(todos)) {
			localStorage.setItem('todos', JSON.stringify(todos));
			return todos;
		}
	},
	getTodos: function () {
		var stringTodos = localStorage.getItem('todos');
		var todos = [];

		try {
			todos = JSON.parse(stringTodos);
		} catch (e) {

		}

		return $.isArray(todos) ? todos : [];
},
		filterSearch: function (todos, show, textValue) {
			var filterUpdate = todos;

			//filter by show
			filterUpdate = filterUpdate.filter((todo) => {
				return !todo.completed || show;
			});

			return filterUpdate;
		}
		// if($.isArray(todos)) {
		// 	return todos

		// }
		// else {
		// 	return [];
		// }
	}
