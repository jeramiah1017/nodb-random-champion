import React, { Component } from 'react';
import '../App.css'


class Champion extends Component {
    constructor() {
        super();
        this.state = {
            newname: "",
            editToggle: false
         
        }

    }
    toggleEdit = () => {
        this.setState({
            editToggle: !this.state.editToggle
        })
        if (this.state.editToggle && this.state.newname) {
            this.props.updateNameFn(this.props.championItem.id, {name: this.state.newname})
        }
    }
    handleChange = (e) => {
        this.setState({
            newname: e.target.value
        })
    }


    

    



    render() {
        return (
            <div className= 'champion'>
                <h3>{this.props.championItem.name}</h3>
                {this.state.editToggle ? (
                    <input
                    placeholder= {this.props.championItem.name}
                    onChange={e => this.handleChange(e)} />
                 ) : null}
                 <button onClick ={() => this.toggleEdit()}>NameChange</button>
                  <button onClick={() => this.props.removeChamp(this.props.championItem.id)}>Hes not the best</button> 


            </div>
        );
    }
}


export default Champion;