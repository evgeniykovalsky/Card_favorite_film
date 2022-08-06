import React from 'react';
import { Film } from './components/Film';
import {film} from './data/film';

 import './App.css';

function App() {
  return (<>
  {film.map(film=><Film films={film} key={film.id}/>)}
  {/* <Film films={film[0]}/>
  <Film films={film[1]}/>
  <Film films={film[2]}/> */}
  </>
  );
}

export default App;
