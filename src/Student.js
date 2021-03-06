import React, { Component } from 'react';
import './Student.css';
import { Link } from 'react-router-dom'

class Student extends Component {
  render() {
    return (
      <Link to={`/student/${this.props.matricule}`}>
      <div className="student">
        <div className="name">{this.props.name} <span className="division">{this.props.division}</span></div>
        <div className="matricule">{this.props.matricule}</div>
      </div>
      </Link>
    );
  }
}

export default Student;
