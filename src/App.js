import React, { Component } from 'react';
import './index.css'

import tasks from './sample/task.json';
import Tasks from './components/Tasks'

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
