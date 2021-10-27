import React, { Component } from 'react'
import PostCard from './PostCard';


export default class Post extends Component {
    constructor() {
        super();
        this.state = {
            post: []

        }
    }
    async componentDidMount() {
        this.props.setProgress(0)
        let url = `https://jsonplaceholder.typicode.com/posts`
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({
            post: parsedData
        })
        this.props.setProgress(100)
    }
    render() {
        return (
            
            <div className="row master">
                {this.state.post.map((data) => {
                   return <PostCard title={data.title} comment={data.body} />
                })

                }
            </div>
            
        )

    }
}

