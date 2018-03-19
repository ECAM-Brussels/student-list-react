import React, { Component } from 'react';
import './StudentDetail.css';

class StudentDetail extends Component {
  render() {
    console.log(this.props.student)
    if(this.props.student === undefined) 
      return <div className="student"></div>
    return (
      <div className="student-detail">
        <p className="label">Nom:</p>
        <p className="name">{this.props.student.name}</p>
        <p className="label">Matricule:</p>
        <p className="matricule">{this.props.student.matricule}</p>
        <p className="label">Année:</p>
        <p className="division">{this.props.student.division}</p>
      </div>
    );
  }
}

export default StudentDetail;