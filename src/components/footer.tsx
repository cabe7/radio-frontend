import React from 'react';

type FooterProps = {
  stationName: string | null;
};

const Footer: React.FC<FooterProps> = props => {
  return (
    <div className="footer">
      {props.stationName ? (
        <div className="status">CURRENTLY PLAYING</div>
      ) : null}
      <div className="details">{props.stationName}</div>
    </div>
  );
};

export default Footer;
