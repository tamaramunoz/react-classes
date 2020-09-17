import React, { Component } from 'react';

class Form extends Component {

    state = {
        title: '',
        description: ''
    }

    handleSubmit = (e) => {
        console.log(this.state)
        e.preventDefault();
    }

    handleChange = (e) => {
        console.log(e.target.name, e.target.value)
        this.setState({ 
            [e.target.name]: e.target.value 
        })
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="title"
                        placeholder="Write a task" 
                        onChange={this.handleChange} 
                        value={this.state.title} 
                    />
                    <br/>
                    <textarea 
                        cols="30" 
                        rows="10"
                        name="description"
                        placeholder="Write a description" 
                        onChange={this.handleChange} 
                        value={this.state.description}
                    ></textarea>
                    <br/>
                    <button type="submit">Save task</button>
                </form>
            </div>
        );
    }
}

export default Form;