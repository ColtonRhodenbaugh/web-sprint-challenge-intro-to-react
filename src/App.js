import React, { useState, useEffect } from 'react';
import'./App.css';
import axios from 'axios'
import Character from './components/Character';

const App = (props) => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [listOfCharacters, setListOfCharacters] = useState([])

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(res => {
      console.log(res.data)
      setListOfCharacters(res.data)
    }).catch(err => {
      console.error(err)
    })
  })
  return (
    <div className="App">
      <h1 className="Header">StarWars Characters</h1>
      <Character data={listOfCharacters}/>
    </div>
  );
}

export default App;
