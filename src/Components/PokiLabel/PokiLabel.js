import React from 'react';
import './PokiLabel.css';

export default function PokiLabel(props) {
  const { attribute, color } = props;
  return (
    <div className="PokiLabel_cont">
      <div className={` ${color ? 'attribute_green' : 'attribute_blue'}`}>
        {attribute}
      </div>
    </div>
  );
}

// className={`banner ${active ? "active" : ""}`}
