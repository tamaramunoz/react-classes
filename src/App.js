import React, { Component } from 'react';
import './index.css'

import tasks from './sample/task.json';

// Components
import Tasks from './components/Tasks';
import Form from './components/Form';

class App extends Component {

  state = {
    taskData: tasks
  }

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.taskData.length
    }
    this.setState({
      taskData: [...this.state.taskData, newTask]
    })
  }

  deleteTask = (id) => {
    const deleting = this.state.taskData.filter(item => item.id !== id)
    this.setState({taskData: deleting})
  }

  checkDone = () => {

  }

  render() {
    return (
      <div>
        <Form addTask={this.addTask} />
        <Tasks taskData={this.state.taskData} deleteTask={this.deleteTask} />
      </div>)
  }

}

export default App;
