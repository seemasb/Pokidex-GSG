import React from 'react';
import './pokidex.css';
import Search from '../Components/Search/Search';
import Card from '../Components/Card/Card';
import img from '../Components/imgs/pokitest.jpg';
import Lists from '../Components/Lists/Lists';
import Sliderbtns from '../Components/SliderBtns/SliderBtns';
import Footer from '../Components/Footer/Footer';

export default function Pokidex() {
  return (
    <div className="pokidex_cont">
      <span className="poki">
        800 <span className="pokidex_span">Pokemins</span> for you to choose
        your favorite
      </span>
      <Search />
      <div className="list-cont">
        <Lists />
        <Lists />
        <Lists />
      </div>
      <div className="cardscont">
        <Card name="Pyroar" attack={419} defence={49} img={img} />
        <Card name="Pyroar" attack={419} defence={49} img={img} />
        <Card name="Pyroar" attack={419} defence={49} img={img} />
        <Card name="Pyroar" attack={419} defence={49} img={img} />
        <Card name="Pyroar" attack={419} defence={49} img={img} />
        <Card name="Pyroar" attack={419} defence={49} img={img} />
        <Card name="Pyroar" attack={419} defence={49} img={img} />
        <Card name="Pyroar" attack={419} defence={49} img={img} />
        <Card name="Pyroar" attack={419} defence={49} img={img} />
      </div>
      <div className="btns">
        <Sliderbtns />
      </div>
      <div className="pokiFoo">
        <Footer />
      </div>
    </div>
  );
}
