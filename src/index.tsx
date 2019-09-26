// import React, { Component, useState } from 'react';
import React, { ReactElement, useState } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import placeholder from './station-placeholder.png';

const Root = document.getElementById('root');

const Header: React.FC = () => {
  return <div className="header">
    <div className="header-icon">
      <i className="fas fa-minus-circle"></i>
    </div>
    <div className="header-title">
      STATIONS
    </div>
    <div className="header-icon">
      <i className="fas fa-plus-circle"></i>
    </div>
  </div>;
};

const Footer: React.FC = () => {
  return <div className="footer">
      <div className="status">NOW PLAYING</div>
      <div className="details">Coll Radio FM</div>
  </div>;
};

const StationExpansion: React.FC = () => {
  return <div className="expansion">
    <div className="">
      <i className="fas fa-minus-circle"></i>
    </div>
    <img src={ placeholder } alt=""></img>
    <div className="">
      <i className="fas fa-plus-circle"></i>
    </div>
  </div>;
};

type StationProps = {
  id: number;
  currentStation: number | null;
  updateSelected: React.Dispatch<React.SetStateAction<null | number>>;
};

const Station: React.FC<StationProps> = props => {
  // hooks and 'set' func must be inside their comps (obviously)
  let expand = () => {
    return props.currentStation === props.id;
  };

  const toggleSelected = () => {
    if (props.currentStation === props.id) {
      props.updateSelected(null);
    } else {
      props.updateSelected(props.id);
    }
  };

  return (
    <div className="station" onClick={toggleSelected}>
      {expand() ? <StationExpansion /> : null}
      <div className="compact">
        <div className="station-name">
          Sweet Radio FM
        </div>
        <div className="station-freq">
          100.1
        </div>
      </div>
    </div>
  );
};

const StationList: React.FC = () => {
  let [selectedStation, setSelectedStation] = useState();
  let stations: ReactElement[] = [];

  // build list dyanmically
  for (let i = 0; i < 5; i++) {
    stations.push(
      <Station
        key={i}
        id={i}
        currentStation={selectedStation}
        updateSelected={setSelectedStation}
      />
    );
  }

  return (
    <div className="station-list">
      {stations}
    </div>
  );
};

const App: React.FC = () => (
  <div className="page-container">
    <Header />
    <StationList />
    <Footer />
  </div>
);

ReactDOM.render(<App />, Root);

// If you want your app to work offline and load faster, you can change
// unregister() to registner() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
