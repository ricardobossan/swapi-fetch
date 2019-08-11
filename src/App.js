import React from 'react';
import swapi from 'swapi-node';
import styled from 'styled-components';
import axios from 'axios';

import './App.css';

// I DON'T KNOW WHY THIS WORKED: https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe#answer-43881141
/* const proxyurl = 'http://cors-anywhere.herokuapp.com/';
const url = 'https://swapi.co/api/planets/1/'; // site that doesn’t send Access-Control-*
fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
  .then(response => response.text())
  .then(contents => console.log(contents))
  .catch(() =>
    console.log('Can’t access ' + url + ' response. Blocked by browser?')
  ); */

/* axios
  .get('https://swapi.co/api', {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  })
  .then(res => console.log(res.status));
 */

//https://davidwalsh.name/fetch
/* fetch('https://swapi.co/api', {
  method: 'get',
  mode: 'cors',
  redirect: 'follow',
  headers: new Headers({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'get',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Max-Age': '86400'
  })
}).then(result => console.log(result));
 */
/* 
let request = new Request('https://swapi.co/api', {
  method: 'GET',
  mode: 'cors',
  redirect: 'follow',
  headers: new Headers({
    'Access-Control-Allow-Origin': 'http:localhost:3000/'
  })
});

fetch(request).then(response => console.log(response));
 */

// XMLHttpRequest
/* const invocation = new XMLHttpRequest();
const url = 'https://swapi.co/api';

function callOtherDomain() {
  if (invocation) {
    invocation.open('GET', url, true);
    invocation.onreadystatechange = handler;
    invocation.send();
  }
}
*/

fetch(`https://swapi.co/api/planets/1/`)
  .then(res => res.json())
  .then(response => console.log(response));
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
