import React, { Component } from 'react'

export default class AlbumCard extends Component {
    render() {
        return (
           
                 <div class="card   posts col-md-4" >
                    <div class="card-body  postSub ">
                        <div className="first">
                        <img src={this.props.imag} style={{width:"200px"}} alt="" />
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
