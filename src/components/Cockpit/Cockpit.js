import React from 'react';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {
    console.log("persons length", props);
    const style = {
      backgroundColor : 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid grey',
      padding: '8px',
      cursor: 'pointer'

    };
    const classes = [];
    if(props.persons.length <= 2 ){
      classes.push('red');
    }
    if(props.persons.length <= 1){
      classes.push('bold');
    }
    return (
      <Aux>
        <div className="App">
        <h1>Hello React App</h1>
        <p className={classes.join(' ')}>learning React is so much fun</p>
        <button style={style} onClick={props.clicked}>Toggle Person</button>
        </div>
      </Aux>  
    );
}
export default cockpit;