import React, { useState, useMemo } from 'react';
import { Station } from '../types/common';
import StationList from './station-list';
import Header from './header';
import Footer from './footer';
import ErrorMessage from './error-message';

const TEST_ERR = false; // true = simulate api fetch error
const URL = `https://teclead.de/recruiting/${TEST_ERR ? '' : 'radios'}`;

const App: React.FC = () => {
  const [stations, setStations] = useState<any[]>([]);
  const [selectedStation, setSelectedStation] = useState();
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  useMemo(async () => {
    try {
      const body = await fetch(URL);
      const stations = (await body.json()).radios;
      stations.forEach(
        (station: Station, idx: number) => (station.id = idx + 1)
      );
      setStations(stations);
    } catch {
      setErrorMessage('Unable to find list of stations.');
    }
  }, []);

  const selectedStationName = () => {
    return selectedStation ? stations[selectedStation - 1].name : null;
  };

  if (errorMessage) {
    return (
      <div className="app-container">
        <Header />
        <ErrorMessage message={errorMessage} />
        <Footer stationName={selectedStationName()} />
      </div>
    );
  } else {
    return (
      <div className="app-container">
        <Header />
        <StationList
          stations={stations}
          selectedStation={selectedStation}
          updateSelected={setSelectedStation}
        />
        <Footer stationName={selectedStationName()} />
      </div>
    );
  }
};

export default App;
