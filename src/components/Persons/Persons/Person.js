import React, { Component } from 'react';
import './Person.css';


class Person extends Component {
	constructor(props) {
    super(props);
    console.log("personJs", props);
  }
	render() {
		return (
			<div className="Person">
			<p onClick={this.props.click}>Am a {this.props.name} and am {this.props.age} years old!</p>
			<p>{this.props.children}</p>
			<input type="text"   onChange={this.props.changed} value={this.props.name}/>
			</div>
		
			)
	}
};

export default Person;