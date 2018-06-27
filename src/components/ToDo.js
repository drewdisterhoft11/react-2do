import React, { Component } from 'react';

 class ToDo extends Component {
   render() {
    return (
      <li>
         <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
         <input type="button" onClick={ this.props.isCompleted } onChange={ this.props.toggledeleteToDo } />
         <span>{ this.props.description }</span>
       </li>

    );
  }
 }
  export default;
