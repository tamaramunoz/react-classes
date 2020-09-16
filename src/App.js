import React, { Component } from 'react';
import './index.css'

import tasks from './sample/task.json';

class App extends Component {

  state = {
    taskData: tasks
  }

  render() {
    return (
      <div>
        {
          this.state.taskData.map(item =>
            <div key={item.id}>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
          )
        }
      </div>)
  }

}

export default App;
