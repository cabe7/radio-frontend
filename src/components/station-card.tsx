import React from 'react';
import { Station } from '../types/common';
import StationCardExpansion from './station-card-expansion';

type StationCardProps = {
  station: Station;
  currentStation: number | null;
  updateSelected: React.Dispatch<React.SetStateAction<null | number>>;
};

const StationCard: React.FC<StationCardProps> = props => {
  // hooks and 'set' func must be inside their comps (obviously)
  let expand = () => {
    return props.currentStation === props.station.id;
  };

  const toggleSelected = () => {
    if (props.currentStation === props.station.id) {
      props.updateSelected(null);
    } else {
      props.updateSelected(props.station.id);
    }
  };

  return (
    <div className="station" onClick={toggleSelected}>
      {expand() ? <StationCardExpansion url={props.station.image} /> : null}
      <div className="compact">
        <div className="station-name">{props.station.name}</div>
        <div className="station-freq">{props.station.frequency}</div>
      </div>
    </div>
  );
};

export default StationCard;
