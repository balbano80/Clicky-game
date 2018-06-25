import React, { Component } from 'react';
import CharacterCard from "../CharacterCard";
// import Footer from "../Footer";
import "./Body.css";
import characters from "../../images.json";

// const Body = () => (
class Body extends Component {
    state ={
        characters
    }
    render(){
      return(
        <div class="main-body ">
            <div class="game-card">   
                {this.state.characters.map(character =>(
                    <CharacterCard
                        id = {character.id}          
                        key = {character.id}
                        name= {character.name}
                        image={character.image}
                    />
                    ))}
            </div>
        </div>
      )
    }
};

export default Body;