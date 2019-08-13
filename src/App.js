import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import './App.css';

// credit: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Gerando_um_n%C3%BAmero_inteiro_aleat%C3%B3rio_entre_dois_valores_inclusive
let number = function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Title = styled.h1`
  color: yellow;
`;

function App() {
  const [planet, setPlanet] = useState({});

  useEffect(() => {
    fetch(`https://swapi.co/api/planets/${number(1, 61)}/`)
      .then(res => res.json())
      .then(function(result) {
        return JSON.stringify(result);
      })
      .then(function(result) {
        console.log(result);
        return JSON.parse(result);
      })
      .then(rs => {
        console.log(rs);
        setPlanet(rs);
      });
  }, []);
  return (
    <div className="App">
      <main>
        <Title>Star Wars Planets</Title>
        <section>
          <h1>{planet.name}</h1>
          <ol>
            <li>POPULATION:{planet.population}</li>
            <li>CLIMATE: {planet.climate}</li>
            <li>TERRAIN: {planet.terrain}</li>
          </ol>
          <div>
            Featured in{' '}
            {typeof planet.films === 'object' ? planet.films.length : null}{' '}
            films
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
