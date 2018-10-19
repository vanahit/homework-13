import React, {Component} from 'react';
import ToDos from './ToDos/ToDos';
import Title from './Title/Title';
import './style.css';

export default class ToDoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			toDos: [],
			uniqueKey : 0,
		};
		this.addToDo = this.addToDo.bind(this);
	}
	addToDo(e) {
		
		if (this.toDoText.value !== "") {
			let newToDo = {
				text: this.toDoText.value,
				key: this.state.uniqueKey,
			};
			this.setState((prevState) => {
				return {
					toDos : prevState.toDos.concat(newToDo),
					uniqueKey : !this.state.toDos.length ?  1 : this.state.uniqueKey + 1,
				}

			});
		}
		this.toDoText.value = "";
		e.preventDefault();
	}
	render() {
    return (
	    	<div>
		    	<Title count={this.state.uniqueKey}/>
			    	<main>
			    		<div className="todo-parent">
			    			<div className="all-todos todo-input">
			    				<form onSubmit={this.addToDo}>
			    					<input 
			    						ref = {(a) => this.toDoText = a}
			    						placeholder="To Do text goes here" 
			    						className="text-input" />
			    					<button className="all-buttons create-button">
			    						Create
			    					</button>
			    				</form>
			    			</div>
			    		</div> 
			    		<div>
			    		<ToDos 
			    			details={this.state.toDos}
			    		/>
			    		</div>
			    	</main>
		    </div>
        )
	}
}