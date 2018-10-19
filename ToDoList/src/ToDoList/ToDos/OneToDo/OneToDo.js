import React, {Component} from 'react';
import img from './img/edit_40.png';

export default class OneToDo extends Component {
	constructor(props) {
		super(props);
		this.state = { toDoLabel: false, editState: false, text: this.props.toDoText.text, update: null};
    	this.labelStatusChange = this.labelStatusChange.bind(this);
    	this.editIconShow = this.editIconShow.bind(this);
    	this.editIconHide = this.editIconHide.bind(this);
    	this.changeEditState = this.changeEditState.bind(this);
    	this.toDoUpdate = this.toDoUpdate.bind(this);
    	this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
    	this.setState({text: e.target.value});
    	if (this.state.text) {
    		this.updateBtn.removeAttribute('disabled');
    	}
    }
    toDoUpdate(e) {
    	if (this.state.text){
	    		this.setState({
	    		editState: false
       		});
    	} else {
    		e.target.disabled = 'disabled';
    	}
    }
    changeEditState() {
    	this.setState({
    		editState: true,
    		toDoLabel: false
    	})
    }
    labelStatusChange() {
	    this.setState({
	      toDoLabel : !this.state.toDoLabel,
	    });
	}
	editIconShow() {
	    this.setState({
	      toDoEdit: true,
	    });
	    this.editImg.style.display = 'inline-block';
	}
	editIconHide() {
	    this.setState({
	      toDoEdit: false,
	    });
	    this.editImg.style.display = 'none';
	}
	render() {
			return (
				<div>
				{
					!this.state.editState &&
						<div className="todo-parent" onMouseOver={this.editIconShow} onMouseOut={this.editIconHide}>
				            <div className="all-todos todo">
				                <div className="todo-text">
				                  {this.state.text} 
				                    <img 
				                    	className="edit-img"
				                    	alt="edit Icon"
				                      	src={img} 
				                      	onClick={this.changeEditState}
				                      	ref = {(img) => this.editImg = img}
				                     /> 
				                    </div>
				                    {
				                        !this.state.toDoLabel && 
				         
				                        <div className="done-new new">
				                          <button  onClick = {this.labelStatusChange}> New </button>
				                        </div>
				                    }
				                    {
				                        this.state.toDoLabel && 
				         
				                        <div className="done-new done">
				                          <button  onClick = {this.labelStatusChange}> Done </button>
				                        </div>
				                    }
				               
				            </div>
			            </div>
		        }
		        {
		        	this.state.editState &&
				        <div className="todo-parent">
						    <div className="all-todos update">
						    	<form onSubmit={this.onSubmit}>
						    		<input 
						    			placeholder="To Do text goes here" 
						    			className="text-input" 
						    			value={this.state.text} 
						    			onChange={this.handleChange}
						    		/>
						    			<button className="all-buttons create-button" 
						    				ref = {(btn) => this.updateBtn = btn}
						    				onClick={this.toDoUpdate}	
						    			>
						    				Update
						    			</button>
						    	</form>
						    </div>
						</div>  		
				}
				</div>
			);
	}	
}