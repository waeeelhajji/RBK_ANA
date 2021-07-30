import React, { Component } from 'react';
import axios from 'axios';



 class Lend extends Component {
    constructor(props){
        super(props)
            this.state={
                name:"",
                owner:"",
                image:"",
                description:""
            }
            this.handleChange= this.handleChange.bind(this)
    }


handleChange(e){
    this.setState({[e.target.name]:e.target.value})
}
add(){
axios.post('/cats', this.state).then(({data})=>{
   this.props.addCat(data)
}).catch((err)=>{
    console.log(err);
})
}

    render() {
        return (
            <>
              <h1>List a cat to lend</h1>
              <div className="box">
               <h1>Name:</h1> 
               <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>           
               <h1>Owner: </h1>
                <input type="text" name="owner" value={this.state.owner} onChange={this.handleChange}/>
               <h1>Img Url:  </h1>
                <input type="text" name="image" value={this.state.image} onChange={this.handleChange}/>
               <h1>Description: </h1>
                <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
            </div> 
            <button onClick={this.add.bind(this)}>Add cat</button>

            </>
        )
    }
}

export default Lend;