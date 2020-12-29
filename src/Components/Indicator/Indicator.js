import React from 'react';
import './Indicator.css';
import indi from '../imgs/CardCharge.png';

export default function Indicator(props) {
  const { title, points } = props;
  return (
    <div className="Indicator_cont">
      <div className="indi-ele">
        <span>{title}</span>
        <span>{points}</span>
        <img src={indi}></img>
      </div>
    </div>
  );
}
