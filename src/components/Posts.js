import React, { Component } from 'react';

class Posts extends Component {

    state = {
        posts: []
    }

    componentDidMount = async() => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const dataPosts = await res.json()
        this.setState({posts: dataPosts})
    }


    render() {
        return (
            <div>
                <h1>Posts</h1>
                {
                    this.state.posts.map(post => {
                        return <div key={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                    })
                }
            </div>
        );
    }
}

export default Posts;