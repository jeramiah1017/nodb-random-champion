import React, { Component } from 'react';
import axios from 'axios'
import Champion from './Champion';


class FavList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favoriteList: []
            
        }
        

    }


    componentDidMount() {
        axios 
        .get("/api/favs")
        .then(res => {
            console.log(res)
            this.setState({
                favoriteList: res.data
            })
        })

    }
    updateName = (id, name) => {
        axios
        .put(`/api/favs/${id}`, name)
        .then(res => {
            this.setState({
                favoriteList: res.data
            })
        })
    }
    removeChampion = (id) => {
        axios.delete(`/api/favs/${id}`)
        .then(res => {
            console.log(res.data)
            this.setState({
                favoriteList: res.data
            })
        })

    }

    

    render() {
        return (
            <div className="Favist">
         {this.state.favoriteList.map(favorite => (
             <Champion
             championItem={favorite} key={favorite.id}
             updateNameFn ={this.updateName}
             removeChamp={this.removeChampion} 
             />
             
         ) 
            )
                }
            </div>
        );
    }
}




export default FavList;