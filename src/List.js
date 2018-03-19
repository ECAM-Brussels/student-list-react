import React, { Component } from 'react';
import Student from './Student'


class List extends Component {
  render() {
    return (
        <div>
            {Object.keys(this.props.students).map(matricule => <Student name={this.props.students[matricule].name} matricule={matricule} division={this.props.students[matricule].division} key={matricule}/>)}
        </div>   
    );
  }
}

export default List;
