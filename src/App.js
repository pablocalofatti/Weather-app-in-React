import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';
import Error from './components/Error';

function App() {
  const [search, saveSearch] = useState({
    city: '',
    country: ''
  });
  const [consult, saveConsult] = useState(false);
  const [result, saveResult] = useState({});
  const [error, saveError] = useState(false);
  const { city, country} = search;
  useEffect (()=>{
    const queryToApi = async ()=>{
      if(consult){
        const appId = 'bb427c02b04ce2510fe047f6175319b6';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
        const respond = await fetch(url);
        const result = await respond.json();
        saveResult(result);
        saveConsult(false);
        //if was an error  
        if(result.cod === "404"){
          saveError(true);
        }else{
          saveError(false);
        }
      }
    }
    queryToApi();
    // eslint-disable-next-line
  },[consult]);

  let component;
  if(error){
    component = <Error message="No result" />
  }else{
    component= <Weather 
                result={result}
              />
  }
  return (
    <Fragment>
      <Header
        title = 'Weather App'
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form 
                search={search}
                saveSearch={saveSearch} 
                saveConsult={saveConsult} 
              />
            </div>
            <div className="col m6 s12">
              {component}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
