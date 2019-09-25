// import React, { Component, useState } from 'react';
import React, { Component, ReactElement, useState } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
//import App from './App';
import * as serviceWorker from './serviceWorker';

const Root = document.getElementById('root');

const Header: React.FC = () => {
  return (
    <div className='header'>Header</div>
  )
}

const Footer: React.FC = () => {
  return (
    <div className="footer">Footer</div>
  )
}

const StationExpansion: React.FC = () => {
  return (
    <div className='expansion'>Expanded</div>
  )
}

const Station: React.FC = () => {
  // hooks and 'set' func must be inside their comps (obviously)
  let [stationSelected, setStationSelected] = useState(false);

  const toggleStationSelected = () => {
    setStationSelected(!stationSelected);
   }

  // jsx can appear inside js code wrapped in { }. Further js
  //   inside this requires addional braces, i.e. outer {} reset
  //   inside jsx
  return (
    <div className='station' onClick={ toggleStationSelected }>
      { stationSelected ? <StationExpansion /> : null }
      <p className='station-name'>Cool Radio</p>
      <p className='station-freq'>100.1</p>
    </div>
  )
}

let stations: ReactElement[] = [];

// build list dyanmically
for(let i = 0; i < 5; i++) {
  stations.push(<Station />);
}

const StationList: React.FC = () => {
  return (
    <div className='station-list'>List
    { stations }

    </div>
  )
}



const App: React.FC = () => (
    <>
      <Header />
      <StationList />
      <Footer />
    </>
  )

ReactDOM.render(<App />, Root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
