import React, { Component } from 'react'


 class Details extends Component {
    render() {
        return (
            <>
            <div className="container">
               <h1>Name:{this.props.cat.name  }</h1>
               <br/>
               <h1>Owner:{this.props.cat.owner  }</h1>
                <img className="img" src={this.props.cat.image }/>
               <h1>Description:{this.props.cat.description  }</h1>
            </div>   
            </>
        )
    }
}

export default Details; 