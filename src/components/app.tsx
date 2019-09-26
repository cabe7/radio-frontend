import React, { useState, useMemo } from 'react';
import { Station } from '../types/common';
import StationList from './station-list';
import Header from './header';
import Footer from './footer';

const App: React.FC = () => {
  const [stations, setStations] = useState<any[]>([]);
  let [selectedStation, setSelectedStation] = useState();

  useMemo(async () => {
    const body = await fetch('https://teclead.de/recruiting/radios');
    const stations = (await body.json()).radios;
    stations.forEach( (station: Station, idx: number) => station.id = idx + 1);
    setStations(stations);
  }, []);

  const selectedStationName = () => {
    return selectedStation ? stations[selectedStation - 1].name: null;
  };

  return (
    <div className="app-container">
      <Header />
      <StationList
        stations={stations}
        selectedStation={selectedStation}
        updateSelected={setSelectedStation}
       />
      <Footer stationName={selectedStationName()}/>
    </div>
   );
};

export default App;


