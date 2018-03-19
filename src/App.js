import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import List from './List'
import StudentDetail from './StudentDetail'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {students: {}}
  }

  componentDidMount() {
    fetch("http://calendar.ecam.be/list/e")
      .then(response => response.json())
      .then(json => this.setState({students: this.transformJSON(json)}))
  }

  transformJSON(json) {
    return json.reduce((dico, elem) => {
      dico[elem.matetu] = {name: elem.npetu, division: elem.annetu, matricule: elem.matetu}
      return dico
    }, {})
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Student List</h1>
        </header>
        <main>
          <Route path="/student/:matricule" render={(props) => <StudentDetail student={this.state.students[props.match.params.matricule]} />} />
          <Route exact path="/" render={() => <List students={this.state.students} />} />
        </main>
      </div>
    );
  }
}

export default App;
