import React from 'react';
import styled from 'styled-components';

import './App.css';

let planet = '';

// credit: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Gerando_um_n%C3%BAmero_inteiro_aleat%C3%B3rio_entre_dois_valores_inclusive
let number = function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

fetch(`https://swapi.co/api/planets/${number(1, 61)}/`)
  .then(res => res.json())
  .then(result => localStorage.setItem('planet', JSON.stringify(result)))
  .then(console.log(localStorage.getItem('planet')));

const Title = styled.h1`
  color: yellow;
`;

function App() {
  return (
    <div className="App">
      <main>
        <Title>Star Wars Planets</Title>
        <section>
          <ol>
            <li>POPULATION:{planet.population}</li>
            <li>CLIMATE: {planet.climate}</li>
            <li>TERRAIN: {planet.desert}</li>
          </ol>
          <div>Featured in {planet.nFilms} films</div>
        </section>
      </main>
    </div>
  );
}

export default App;
