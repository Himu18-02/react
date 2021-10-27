import React, { Component } from 'react'

export default class PostCard extends Component {
    render() {
        return (
          
                <div class="card   posts" >
                    <div class="card-body  postSub ">
                        <div className="first">
                        <h3 class="card-title" >{this.props.title}</h3>
                        </div>
                        <hr/>
                        <div className="second">
                        <p class="card-text" >{this.props.comment}</p>
                        </div>
                    </div>
                </div>
           
        )
    }
}
