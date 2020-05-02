import React from 'react';
import './App.css';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import {useState , useEffect} from 'react'
import CharacterList from './components/CharacterList';



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
    const MainText = styled.h1`
    font-family: 'Reenie Beanie', cursive;
    color:  white;
    font-weight: bold;
    font-size: 60px;
    text-shadow: 2px 2px black;
    padding: 5px;
    margin: 0;
    `;

  return (
    <div className="App">
      <MainText className="Header">Characters</MainText>
      <CharacterList />

    </div>
  );
}

export default App;
