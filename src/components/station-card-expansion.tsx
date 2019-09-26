import React from 'react';

type StationCardExpansionProps = {
  url: string;
}

const StationCardExpansion: React.FC<StationCardExpansionProps> = (props) => {
  return <div className="expansion">
    <div className="">
      <i className="fas fa-minus-circle"></i>
    </div>
    <img src={ props.url } alt=""></img>
    <div className="">
      <i className="fas fa-plus-circle"></i>
    </div>
  </div>;
};

export default StationCardExpansion;
