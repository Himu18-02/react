import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Home extends Component {

    constructor() {
        super();
        this.state = {
            img: [],
            loading: false,


        }
    }

    async componentDidMount() {
        this.props.setProgress(0)
        let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=OlDeRX8wkh3pgkDEuhERsW1eK5CCagdqfwWdVSSg`
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()

        console.log(parsedData.photos[8].img_src)
        this.setState({
            img: parsedData.photos[2].img_src,
            loading: false
        })
        this.props.setProgress(100)

    }

    render() {
        return (
            <div className="main row" style={{ backgroundImage: `url(${this.state.img})` }} >
                <div className="col-lg-4 col-sm-13 my-4 ">
                    <div className="card text-center nasa mx-4" >
                        <div className="img">
                        <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png" className="card-img-top" alt="..."/>
                        </div>
                        <div className ="card-body">
                            <div className="card my-2">
                        <h5 className ="card-title">NASA</h5>
                        <p className ="card-text">The background of this website is fetched from NASA API.</p>
                        </div>
                        <a href="https://api.nasa.gov/"  className=" btn btn-primary " >Source</a>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-between cont col-lg-6 col-sm-14 row">
                    <div className="btn col-md-4 col-sm-12 my-2">
                       <Link to="/images">Images</Link>
                    </div>
                    <div className="btn col-md-4 col-sm-12 my-2">
                        <Link to="/Post">Posts</Link>
                    </div>
                    <div className="btn col-md-12  col-sm-12 my-2">
                        <Link to="Album">Albums</Link>
                    </div>


                </div>
            </div>
        )
    }
}

