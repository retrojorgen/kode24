import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import gruppebilde from '../images/gruppebilde.jpg';

const AboutPageWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  pointer-events: none;
  align-items: stretch;
  color: #252320;
  &.active {
    .mid-col {
      .mid-col-content {
        transform: translateX(0);
        opacity: 1;
        transition: all 0.25s ease-in-out;
      }
    }
    .right-col {
      .inner-image {
        transition: all 0.25s ease-in-out 0.25s;
        transform: translateX(0);
        opacity: 1;
      }
    }
  }
  .left-col {
    background-color: transparent;
    overflow: hidden;
    pointer-events: none;
    @media (min-device-width: 1100px) { 
        flex: 0 0 500px;
    }
    @media (min-device-width: 1281px) { 
        flex: 0 0 700px;
    }
  }
  .mid-col {
    background-color: transparent;
    overflow: hidden;
    position: relative;
    .mid-col-content {
      background-color: #ff0071;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      max-height: 100%;
      overflow: auto;
      padding: 40px;
      transition: all 0.25s ease-in-out 0.25s;
      opacity: 0;
      transform: translateX(-100%);
      h1 {
        font-weight: bold;
        font-size: 1.4em;
      }
      p {
        font-size: 0.8em;
      }
      h2 {
        font-size: 1.2em;
        border-bottom: 1px solid #252320;
      }
    }
    @media (min-device-width: 1100px) { 
        flex: 0 0 400px;
        
    }
  }
  .right-col {
    background-color: transparent;
    overflow: hidden;
    position: relative;
    .inner-image {
      transition: all 0.25s ease-in-out;
      transform: translateX(-100%);
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-image: url(${gruppebilde});
      background-size: cover;
      opacity: 0;
      background-position: center center;
      
    }
    @media (min-device-width: 1100px) { 
        flex: 1 1 100%;
        
    }
  }
`;


export default class AboutPage extends Component {
  render () {
    return (
      <AboutPageWrapper className={`${this.props.toggleInfo ? 'active': ''}`}>
        <div className="left-col"></div>
        <div className="mid-col">
          <div className="mid-col-content">
            <h1>Hva er kode24?</h1>
            <p>Kode24 er en ny norsk nettside/magasin som vil fokusere på å dekke norsk teknologibransje fra et utviklerperspektiv.</p>
            <p>Her vil du finne ut alt om hvilke rammeverk, teknologier og teknikker blir brukt til å bygge norske tjenester og applikasjoner. Redaksjonen vil bestå av utviklere og teknologer.</p>
            <h1>Når kommer siden?</h1>
            <p>Snart! Hvis du melder deg på nyhetsbrevet blir du en av de første som får høre om lanseringen.</p>
            <h1>Hvem er i redaksjonen?</h1>
            <h2>Ole Petter Baugerød Stokke</h2>
            <p>Ole Petter har lang fartstid som journalist i it-bransjen, med bakgrunn i Computerworld, og forbrukernettstedet DinSide</p>
            <h2>Jørgen Jacobsen</h2>
            <p>Jørgen er utvikler med lang fartstid, blant annet i Fronter, Nettavisen, Scibsted og Aller Media</p>
          </div>
        </div>
        <div className="right-col">
          <div className="inner-image"></div>
        </div>
      </AboutPageWrapper>
    )
  }
}