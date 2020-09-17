import React, { Component } from 'react';
import SigleTask from './SingleTask'

class Tasks extends Component {

    render() {
        return (
            this.props.taskData.map(item => <SigleTask item={item} key={item.id} /> //separate the component in a new file called SingleTask
            )
        );
    }
}

export default Tasks;
