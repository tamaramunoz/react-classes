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

  render() {
    return (
      <div>
        <Tasks taskData={this.state.taskData} />
      </div>)
  }

}

export default App;
