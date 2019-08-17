import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import './App.css';

// credit: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Gerando_um_n%C3%BAmero_inteiro_aleat%C3%B3rio_entre_dois_valores_inclusive
let number = function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
/**
 * Styled Components
 * Palette #F7DE00#FCB426#E4E6E6#5A5A5A#393939
 *
 * @todo add breakpoint
 * @todo create remote repo
 * @todo host to github pages
 */
const Main = styled.main`
  flex-direction: column;
  align-items: center;
  display: flex;
  margin: auto;
  height: auto;
  color: #393939;

  .planetBox {
    margin: 1em auto;
    max-width: 300px;
    background-color: #e4e6e6;
    border-radius: 15px;
    padding: 20px;
  }

  .planetName {
    color: #fcb426;
    margin: 0;
    padding: 0;
  }

  .randomButton {
    background-color: #fcb426;
    padding: 10px;
    border-radius: 15px;
    color: #e4e6e6;
    font-size: 1.7em;
    font-weight: bold;
  }
`;

// React Component
function App() {
  const [planet, setPlanet] = useState({});

  const randomizePlanet = () => {
    fetch(`https://swapi.co/api/planets/${number(1, 61)}/`)
      .then(res => res.json())
      .then(function(result) {
        return JSON.stringify(result);
      })
      .then(function(res) {
        console.log(res);
        return JSON.parse(res);
      })
      .then(res => {
        console.log(res);
        setPlanet(res);
      });
  };

  useEffect(randomizePlanet, []);
  return (
    <Main className="App" style={{ backgroundColor: '#000' }}>
      <div className="planetBox">
        <h1 className="planetName">
          {planet.name ? planet.name.toUpperCase() : planet.name}
        </h1>
        <ol
          style={{
            listStyle: 'none',
            paddingLeft: '15px',
            paddingRight: '15px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start'
          }}
        >
          <li>
            <strong>POPULATION: </strong>
            {planet.population}
          </li>
          <li>
            <strong>CLIMATE: </strong>
            {planet.climate}
          </li>
          <li>
            <strong>TERRAIN: </strong>
            {planet.terrain}
          </li>
        </ol>
        <div>
          Featured in {planet.films ? planet.films.length : null}
          {planet.films
            ? planet.films.length == 1
              ? ' film.'
              : ' films.'
            : null}
        </div>
      </div>
      <button onClick={randomizePlanet} className="randomButton">
        NEXT
      </button>
    </Main>
  );
}

export default App;
