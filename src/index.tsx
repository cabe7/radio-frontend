// import React, { Component, useState } from 'react';
import React, { ReactElement, useState } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
//import App from './App';
import * as serviceWorker from './serviceWorker';

const Root = document.getElementById('root');

const Header: React.FC = () => {
  return <div className="header">Header</div>;
};

const Footer: React.FC = () => {
  return <div className="footer">Footer</div>;
};

const StationExpansion: React.FC = () => {
  return <div className="expansion">Expanded</div>;
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

  const useToggleStationSelected = () => {
    if (props.currentStation === props.id) {
      props.updateSelected(null);
    } else {
      props.updateSelected(props.id);
    }
  };

  return (
    <div className="station" onClick={useToggleStationSelected}>
      {expand() ? <StationExpansion /> : null}
      <p className="station-name">Cool Radio</p>
      <p className="station-freq">100.1</p>
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
      List
      {stations}
    </div>
  );
};

const App: React.FC = () => (
  <>
    <Header />
    <StationList />
    <Footer />
  </>
);

ReactDOM.render(<App />, Root);

// If you want your app to work offline and load faster, you can change
// unregister() to registner() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
