import React, { Component } from 'react';

class SingleTask extends Component {
    render() {

        const { item } = this.props; //calling the props directly instead put this.props.item.title


        return (
            <div>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
                <input type="checkbox" />
                <button>
                    x
                </button>
            </div>
        );
    }
}

export default SingleTask;