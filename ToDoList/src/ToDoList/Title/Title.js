import React, {Component} from 'react';
import './style.css';

export default class Title extends Component {
	render() {
		return (
			<div> 
				<div className="title title-count">To Do List</div>
				<div className="count title-count">Total count {this.props.count}</div>
			</div>
		); 
	}
}
