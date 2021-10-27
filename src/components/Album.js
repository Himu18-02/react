import React, { Component } from 'react'
import AlbumCard from './AlbumCard';

export default class Album extends Component {
    constructor() {
        super();
        this.state = {
            album: []

        }
    }

async componentDidMount(){
    this.props.setProgress(0)
    let url = `https://jsonplaceholder.typicode.com/photos`
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({
        album: parsedData
    })
    this.props.setProgress(100)

}

    render() {
        return (
            <div>
                <div className="row master">
                {this.state.album.map((data) => {
                   return <AlbumCard imag={data.url} comment={data.title} key={data.id}/>
                })

                }
            </div>
            </div>
        )
    }
}
