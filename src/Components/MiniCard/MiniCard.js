import React from 'react';
import './MiniCard.css';
import Rectangle from '../imgs/Rectangle.png';
import CardBoxProps from '../imgs/CardBoxProps.png';
import group from '../imgs/Group.png';

export default function MiniCard(props) {
  const { mini_span } = props;
  return (
    <div className="MiniCard_cont">
      <img className="back_img" src={Rectangle}></img>
      <img src={CardBoxProps} className="white-box"></img>
      <img src={group} className="group"></img>
      <span className="mini_span">{mini_span}</span>
    </div>
  );
}
