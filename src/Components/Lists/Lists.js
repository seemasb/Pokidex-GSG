import React from 'react';
import './List.css';

export default function Lists() {
  return (
    <div className="Lists_cont">
      <select name="cars" id="cars" className="drop">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  );
}
