import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SingleTask extends Component {

    StyleCompleted() {
        return {
            fontSize: '20px',
            color: this.props.item.done ? 'gray' : 'black',
            textDecoration: this.props.item.done ? 'line-through' : 'none'
        }
    }

    render() {

        const { item } = this.props; //calling the props directly instead put this.props.item.title

        return (
            <div style={this.StyleCompleted()}>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
                <input type="checkbox" onChange={this.props.checkDone.bind(this, item.id)} />
                <button style={btnDelete} onClick={this.props.deleteTask.bind(this, item.id)} >
                    x
                </button>
            </div>
        );
    }
}

SingleTask.propTypes = {
    item: PropTypes.object.isRequired
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