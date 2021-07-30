import React, { Component } from 'react'
import Details from './Details.jsx'

 class Borrow extends Component {
    render() {
        return (
            <>
               
               {
                   this.props.cats.map((cat,index)=>(
                       <Details cat={cat} key={index}/>
                   ))
               }
            </>
        )
    }
}

export default Borrow;