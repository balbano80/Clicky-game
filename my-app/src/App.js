import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
// import CharacterCard from "./components/CharacterCard";
import Footer from "./components/Footer";
import Body from "./components/Body";
import characters from "./images.json";
import './App.css';

class App extends Component {
  state = {
    characters
  }

  render() {
    return (
      <Wrapper>
        <Navbar></Navbar>
        <Header></Header>
        <Body></Body>
        {/* {this.state.characters.map(character =>(
          <CharacterCard
            id = {character.id}          
            key = {character.id}
            name= {character.name}
            image={character.image}
          />
        ))} */}
        <Footer></Footer>
      </Wrapper>
    );
  }
}

export default App;
