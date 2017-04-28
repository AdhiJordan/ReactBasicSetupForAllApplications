var React = require('react');

var TodoSearch = React.createClass ({
	handleSearch: function (e) 
	{
		var show = this.refs.showChecked.checked;
		var textValue = this.refs.searchText.value;
		this.props.onSearch(show, textValue);
	},
	render: function () {
		return (
			<div className="container_header">
				
					
							<label>Search Todo Here
								<input type="text" 
								ref = "searchText"
								placeholder="Search your todo here"
								onChange={this.handleSearch} />
							</label>

							<div>
								<input id="checkbox1" type="checkbox"
								ref = "showChecked"
								onChange={this.handleSearch} />
								<label for="checkbox1">Show some Todo Completed</label>
							</div>
					

			
				

			</div>


			);
	}
});

module.exports = TodoSearch;