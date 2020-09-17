import React, { Component } from 'react';


class SingleTask extends Component {
    render() {

        const { item } = this.props; //calling the props directly instead put this.props.item.title

        return (
            <div>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
                <input type="checkbox" />
                <button style={btnDelete}>
                    x
                </button>
            </div>
        );
    }
}

const btnDelete = {
    frontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer',
}

export default SingleTask;