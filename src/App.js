import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import './index.css'

import tasks from './sample/task.json';

// Components
import Tasks from './components/Tasks';
import Form from './components/Form';
import Posts from './components/Posts';

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
    this.setState({ taskData: deleting })
  }

  checkDone = (id) => {
    const updating = this.state.taskData.map(item => {
      if (item.id === id) {
        item.done = !item.done
      }
      return item
    })
    this.setState({ taskData: updating })
  }

  render() {
    return (
      <Router>
        <Link to='/'>Home</Link>
        <Link to='/posts'>Posts</Link>
        
        <Route exact path='/'>
          <div>
            <Form addTask={this.addTask} />

            <Tasks
              taskData={this.state.taskData}
              deleteTask={this.deleteTask}
              checkDone={this.checkDone}
            />
          </div>
        </Route>
        <Route path='/posts' component={Posts} />
      </Router>
    )
  }

}

export default App;
