import React from 'react';
import './Card.css';
import PokiLabel from '../PokiLabel/PokiLabel';

export default function Card(props) {
  const { name, attack, defence, img } = props;
  return (
    <div className="Card_cont">
      <div className="column">
        <span className="pokiname">{name}</span>

        <div className="d1">
          <div className="d11">{attack}</div>
          <div className="d12">{defence}</div>
        </div>
        <div className="d2">
          <span>Attack</span>
          <span>Defense</span>
        </div>
        <div className="d3">
          <PokiLabel attribute="Grass" color={1} className="l1" />
          <PokiLabel attribute="Poison" color={0} className="l2" />
        </div>
      </div>
      <img alt="profile" className="profile" src={img}></img>
    </div>
  );
}
