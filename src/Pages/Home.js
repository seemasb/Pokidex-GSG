import React from 'react';
import './Home.css';
import HomeQuotes from '../Components/HomeQuotes/HomeQuotes';
import SeePokimons from '../Components/SeePokimons/SeePokimons';
import Pekatcho from '../Components/Pekatcho/Pekatcho';
import Footer from '../Components/Footer/Footer';

export default function Home() {
  return (
    <div className="home_cont">
      <div className="general_div">
        <div>
          <HomeQuotes />
          <SeePokimons />
        </div>
        <Pekatcho />
      </div>
      <Footer />
    </div>
  );
}
