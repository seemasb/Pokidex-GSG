import React from 'react';
import './legendaries.css';
import Element from '../Components/Element/Element';
import png from '../Components/imgs/pngwing.png';
import Footer from '../Components/Footer/Footer';

export default function Legendaries() {
  return (
    <div className="legendaries_cont">
      <Element Pokiname="Legendaries" theName="MewTwo" imgsrc={png} />
      <Element Pokiname="Stronger" theName="Dragonair" imgsrc={png} />
      <Element Pokiname="Weaker" theName="Flareon" imgsrc={png} />
      <Footer />
    </div>
  );
}
