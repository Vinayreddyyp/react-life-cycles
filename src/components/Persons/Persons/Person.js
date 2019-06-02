import React, { Component } from 'react';
import './Person.css';
import WithClass from '../../../hoc/withClass';


class Person extends Component {
    constructor(props) {
        super(props);
        console.log("personJs", props);
    }
    render() {
        return (
        <WithClass>
            <p onClick = { this.props.click } > Am a { this.props.name } and am { this.props.age } years old! </p>
            <p> { this.props.children } </p>
            <input type = "text"
            onChange = { this.props.changed }
            value = { this.props.name }/>
        </WithClass >

        )
    }
};

export default Person;
