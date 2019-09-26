import React, { ReactElement } from 'react';
import StationCard from './station-card';
import { Station } from '../types/common';

type StationListProps = {
  stations: Station[];
  selectedStation: number | null;
  updateSelected: React.Dispatch<React.SetStateAction<null | number>>;
}

const StationList: React.FC<StationListProps> = (props) => {
  let stationsList: ReactElement[] = [];

  for (let i = 0; i < props.stations.length; i++) {
    stationsList.push(
      <StationCard
        key={i}
        station={ props.stations[i] }
        currentStation={props.selectedStation}
        updateSelected={props.updateSelected}
      />
    );
  }

  return (
    <div className="station-list">
      {stationsList}
    </div>
  );
};

export default StationList;
