import React from 'react';
import swapi from 'swapi-node';
import styled from 'styled-components';
import axios from 'axios';

import './App.css';

const proxyurl = 'https://cors-anywhere.herokuapp.com/';
const url = 'https://swapi.co/api'; // site that doesn’t send Access-Control-*
fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
  .then(response => response.text())
  .then(contents => console.log(contents))
  .catch(() =>
    console.log('Can’t access ' + url + ' response. Blocked by browser?')
  );
/* axios
  .get('https://swapi.co/api', {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  })
  .then(res => console.log(res.status));
 */
/* fetch('https://swapi.co/api', {
  method: 'GET',
  mode: 'cors',
  headers: { 'Access-Control-Allow-Origin': '*' }
}).then(result => console.log(result));
 */
const Title = styled.h1`
  color: yellow;
`;

function App() {
  return (
    <div className="App">
      <main>
        <Title>Star Wars Planets</Title>
        {/*       <section>
        <ol>
          <li>POPULATION:{planet.population}</li>
          <li>CLIMATE: {planet.climate}</li>
          <li>TERRAIN: {planet.desert}</li>
        </ol>
        <div>Featured in {planet.nFilms} films</div>
      </section>
 */}{' '}
      </main>
    </div>
  );
}

export default App;
