import React, { Component } from 'react'

export default class Image extends Component {


    render() {
        
        return (
            
         
                <div className="col-md-4 col-sm-10 ">
                    <img className="card-img-top lol " src={this.props.images} alt=""/>
                </div>
                
           

        )
    }
}


