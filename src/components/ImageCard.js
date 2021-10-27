import React, { Component } from 'react'
import Image from './Image'



    
export default class ImageCard extends Component {
    constructor() {
        super();
        this.state = {
            val:" ",
            imag:" ",
            empty:false
        }
    }

    lol = (e)=>{

        let val = e.target.value
       
        this.setState({
           val: val
        })
    }
    search = ()=>{
        this.props.setProgress(0)
        let img =`https://source.unsplash.com/featured/?${this.state.val}`
        this.setState({
            imag:img,
            empty:true

        })
        this.props.setProgress(100)
    }
    remove = ()=>{
        
        this.setState({
            imag:" ",
            empty:false
        })
      
    }
    componentDidMount(){
        this.props.setProgress(0)
        this.props.setProgress(100)
        this.forceUpdate()

    }
    
    render() {
       
        return (
            <>
            
                <div className="wrap">
                    <div className="search">
                        <input type="text" className="searchTerm" placeholder="Search for an image you want"  onChange={this.lol}/>
                        <button type="submit" className="searchButton" onClick={this.search}>
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
                {this.state.empty &&
                <div className= "d-flex justify-content-center my-2">
                    <img className="card-img-top lol " src={this.state.imag} alt=""/>
                </div>
                
                }
                {
                    this.state.empty && <div className="text-center searchImg">
                    <button className="btn btn-outline-dark text-center" style = {{backgroundColor:"black",color:"white" ,width:"40px"}} onClick={this.remove} ><i className="fas fa-trash-alt"></i></button>
                    </div>
                }
                
                <h1 className="text-center">Some Random images</h1>
                <div className="row ima">
                    
                    <Image images={`https://source.unsplash.com/random/0`} />
                    <Image images={`https://source.unsplash.com/random/1`} />
                    <Image images={`https://source.unsplash.com/random/2`} />
                    <Image images={`https://source.unsplash.com/random/3`} />
                    <Image images={`https://source.unsplash.com/random/4`} />
                    <Image images={`https://source.unsplash.com/random/5`} />
                    <Image images={`https://source.unsplash.com/random/6`} />
                    <Image images={`https://source.unsplash.com/random/7`} />
                    <Image images={`https://source.unsplash.com/random/8`} />
                        
                </div>
            </>
        )
    }
}
