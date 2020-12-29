import React from 'react';
import './Search.css';

export default function Search() {
  return (
    <div className="Search_cont">
      <input
        type="text"
        placeholder="Encuentra pokemon..."
        className="search_box"
      ></input>
    </div>
  );
}
