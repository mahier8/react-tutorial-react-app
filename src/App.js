import React, {Component} from 'react'
import Table from './Table'
import "./app.css"

class App extends Component {
  render() {
    const characters = [
      {
        name: "Angel",
        job: "professor",
      },
      {
        name: "Mahier",
        job: "life coach"
      },
      {
        name: "Alexis",
        job: "developer",
      },
      {
        name: "Marie",
        job: "coding teacher",
      },
    ]

    return (
      <div className="container">
        <Table characterData={characters} />
      </div>
    )
  }
}

export default App;
