import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import './App.css';

// credit: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Gerando_um_n%C3%BAmero_inteiro_aleat%C3%B3rio_entre_dois_valores_inclusive
let number = function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Styled Components
// Palette #F7DE00#FCB426#E4E6E6#5A5A5A#393939
const Container = styled.main`
  margin: auto auto;
  background-color: #e4e6e6;
  color: #393939;
  border: 3px solid #fcb426;
  padding: 15px;
  width: 300px;
  height: 200px;
`;

const PlanetName = styled.h1`
  color: #fcb426;
`;

// React Component
function App() {
  const [planet, setPlanet] = useState({});

  useEffect(() => {
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
  }, []);
  return (
    <div className="App" style={{ backgroundColor: '#000' }}>
      <Container>
        <section>
          <PlanetName>
            {planet.name ? planet.name.toUpperCase() : planet.name}
          </PlanetName>
          <ol style={{ listStyle: 'none' }}>
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
        </section>
      </Container>
    </div>
  );
}

export default App;
