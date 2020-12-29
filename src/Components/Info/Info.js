import React from 'react';
import './Info.css';
import Indicator from '../Indicator/Indicator';

export default function Info(props) {
  const { theName } = props;
  return (
    <div className="Info_cont">
      <span className="Info_cont_span">{theName}</span>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim.{' '}
      </p>
      <div className="indi_cont">
        <Indicator title="Healthy Points" points="1000,000" />
        <Indicator title="Experience" points="1000,000" />
        <Indicator title="Attack" points="1000,000" />
        <Indicator title="Defense" points="1000,000" />
        <Indicator title="Special Attack" points="1000,000" />
        <Indicator title="Special Defense" points="1000,000" />
      </div>
    </div>
  );
}
