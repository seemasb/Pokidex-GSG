import React from 'react';
import './Element.css';
import Info from '../Info/Info';
import Slider from '../Slider/Slider';

export default function Element(props) {
  const { Pokiname, theName, imgsrc } = props;
  return (
    <div className="Element_cont">
      <span className="Pokiname">{Pokiname}</span>
      <div className="divider"></div>
      <div className="ele1">
        <img className="ele1Pic" src={imgsrc}></img>
        <Info theName={theName} />
      </div>
      <Slider />
    </div>
  );
}
