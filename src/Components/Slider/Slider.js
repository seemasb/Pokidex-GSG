import React from 'react';
import './Slider.css';
import MiniCrad from '../MiniCard/MiniCard';

export default function Slider() {
  return (
    <div className="Slider_cont">
      <button className="leftbtn"></button>
      <div className="mini_cont">
        <MiniCrad mini_span="Mewjjm" />
        <MiniCrad mini_span="Moltres" />
        <MiniCrad mini_span="Articuno" />
        <MiniCrad mini_span="Zapdos" />
        <MiniCrad mini_span="Diance" />
        <MiniCrad mini_span="Xerneas" />
      </div>
      <button className="rightbtn"></button>
    </div>
  );
}
