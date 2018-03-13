import React, { Component } from 'react'
import './App.css'
import Student from './Student'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {students: []}
  }

  componentDidMount() {
    fetch("http://calendar.ecam.be/list/e")
      .then(response => response.json())
      .then(json => this.setState({students: json}))
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Student List</h1>
        </header>
        <main>
          {this.state.students.map(student => <Student name={student.npetu} matricule={student.matetu} division={student.annetu}/>)}
        </main>
      </div>
    );
  }
}

export default App;
