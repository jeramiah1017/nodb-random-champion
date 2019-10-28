import React, {Component}  from "react"
import axios from "axios"
import Champions from "../champions.json"

export default class Random extends Component {
    constructor() {
        super ()
        this.state = {
            randomChamp:{}
        }
    }
componentDidMount() {
    const anyChamp = Math.floor(Math.random() * 15)
console.log(Champions)
this.setState({randomChamp: Champions[anyChamp]})

}

onAction() {
    this.componentDidMount()
}

favoriteChamps(name, id) {
    axios.post("/api/favs", {name, id})
    .then(res => {
       console.log(res)
    })
}



    
    render() {
        return  (
            <div>
            <h1>{this.state.randomChamp.name}</h1>
            <img src={this.state.randomChamp.img} ></img>
            <button onClick={() => this.onAction()}>Random</button>
            <button onClick={() => this.favoriteChamps(this.state.randomChamp.name, this.state.randomChamp.id)}>Favorite</button>
            </div>
        )
    }
}