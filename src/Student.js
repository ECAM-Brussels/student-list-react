import React, { Component } from 'react';
import './Student.css';

class Student extends Component {
  render() {
    return (
      <div className="student">
        <div className="name">{this.props.name} <span className="division">{this.props.division}</span></div>
        <div className="matricule">{this.props.matricule}</div>
      </div>
    );
  }
}

export default Student;
