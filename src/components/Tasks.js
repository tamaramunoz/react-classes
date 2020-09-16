import React, { Component } from 'react';

class Tasks extends Component {

    render() {
        return (
            this.props.taskData.map(item =>
                <div key={item.id}>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                    <input type="checkbox"/>
                    <button>
                        x
                    </button>
                </div>
            )
        );
    }
}

export default Tasks;
