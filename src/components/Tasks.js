import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SigleTask from './SingleTask';

class Tasks extends Component {

    render() {
        return (
            this.props.taskData.map(item => <SigleTask item={item} key={item.id} /> //separate the component in a new file called SingleTask
            )
        );
    }
}

Tasks.propTypes = {
    taskData: PropTypes.array.isRequired
}

export default Tasks;
