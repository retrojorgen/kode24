import React, { Component } from 'react';
import styled from 'styled-components';
import gruppebilde from '../images/gruppebilde.jpg';
import gruppebildeNarrow from '../images/gruppebilde-narrow.jpg';
import allerLogo from '../images/aller-logo.png';
import startupLabLogo from '../images/startup-lab-logo.png';


const AboutPageWrapper = styled.div`
  position: relative;
  display: flex;
  
  color: #252320;
  z-index: 9;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1040px) {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    align-items: stretch;
    flex-direction: row;
  }
  &.active {
    .content-mid-col {
      .mid-col-content {
        transform: rotateY(0deg) translateX(0);
        opacity: 1;
        transition: all 0.25s ease-in-out;
        
      }
    }
    .content-right-col {
      .inner-image {
        transition: all 0.25s ease-in-out 0.2s;
        transform: rotateY(0) translateX(0);
        opacity: 1;
      }
    }
  }
  .left-col {
    background-color: transparent;
    overflow: hidden;
    display: none;
    @media (min-width: 1040px) {
        display: block;
        flex: 0 0 500px;
    }
    @media (min-width: 1281px) { 
        flex: 0 0 700px;
    }
  }
  .right-col {
    
    @media (min-width: 800px) { 
        overflow: auto;
        flex: 1 1 100%;
        display: flex;
        flex-direction: column;
    }
    @media (min-width: 1040px) {
      overflow: hidden;
      flex-direction: row;
      align-items: stretch;
    }
  }
  .content-mid-col {
    background-color: transparent;
    position: relative;
    perspective: 1000px;
    background-color: #ff0071;
    
    @media (min-width: 1040px) {
      background-color: transparent;
    }
    .mid-col-content {
      z-index: 10;
      
      
      .logos {
        margin-top: 20px;
        text-align: center;
        img {
          max-height:80px;
          padding: 20px;
        }
      }
      a {
        cursor: pointer;
        color: inherit;
      }
      max-width: 400px;
      margin: 0 auto;
      padding: 40px;
      display: block;
      flex-direction: column;
      justify-content: center;
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

      @media (min-width: 1040px) { 
        max-width: none;
        background-color: #ff0071;
        display: flex;
        overflow: auto;
        transition: all 0.25s ease-in-out 0.2s;
        opacity: 0;
        transform: rotateY(90deg) translateX(-100%);
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        max-height: 100%;
      }
    }
    flex: 1 1 100%;
    @media (min-width: 1040px) { 
        overflow: hidden;
        flex: 0 0 300px;   
        .mid-col-content {
          padding: 20px;
          h1 {
            font-size: 1.2em;
          }
          h2 {
            font-size: 1em;
          }
        }
    }
    @media (min-width: 1140px) { 
        flex: 0 0 400px;   
    }
  }
  .content-right-col {
    background-color: transparent;
    position: relative;
    perspective: 1000px;
    
    .inner-image {
      z-index: 10;
      position: relative;
      
      padding: 20px;
      background-color: #ff0071;

      background-position: center center;
      img {
        max-width: 100%;
      }
    }
    @media (min-width: 1040px) { 
        overflow: hidden;
        flex: 1 1 100%;

        .inner-image {
          position: absolute;
          transition: all 0.25s ease-in-out;
          transform: rotateY(90deg) translateX(-100%);
          opacity: 0;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          display: block;
          background-image: url(${gruppebildeNarrow});
          img {
            display: none;
          }
          
        }
    }
    @media (min-width: 1300px) {
      .inner-image {
        background-image: url(${gruppebilde});
      } 
    }
  }
`;


export default class AboutPage extends Component {
  render () {
    return (
      <AboutPageWrapper className={`${this.props.toggleInfo ? 'active': ''}`}>
        <div className="left-col"></div>
        <div className="right-col">
        
          <div className="content-mid-col">
            
            <div className="mid-col-content">
              <div>
                <h1>Hva er Kode24?</h1>
                <p>Kode24 skal bli Norges første nettavis for utviklere.</p>
                <p>Der hvor andre dekker kontrakter og direktører, skal Kode24 dekke koden og koderne.</p>
                <p>For hvilke rammeverk bruker egentlig norske utviklere? Hva fungerer? 
                Hva fungerer ikke? Hvordan blir norske tjenester og apper laget? Og hva bør du lære deg akkurat nå?</p>
                <p>Kode24 skal dekke norsk kode for norske kodere; alltid fra utviklernes perspektiv.</p>
                <h1>Når kommer Kode24?</h1>
                <p>Vi jobber med saken! Hvis du melder deg på nyhetsbrevet blir du en av de første som får høre om lanseringen.</p>
                <h1>Hvem er Kode24?</h1>
                <h2>Ole Petter Baugerød Stokke</h2>
                <p>Ole Petter har vært journalist siden 2005, i blant annet Computerworld og Dinside/Dagbladet, og har kodet på soverommet siden 90-tallet. </p>
                <h2>Jørgen Jacobsen</h2>
                <p>Jørgen har vært utvikler siden 2009, i blant annet Fronter, Nettavisen, Schibsted og Dagbladet. Dessuten vant han sin vekt i Pringles på The Gathering 2000.</p>
              </div>
              <div>
                Har du innspill eller spørsmål? Send oss en e-post på <a href="mailto:hei@kode24.no">hei@kode24.no</a>, eller <a href="https://goo.gl/forms/Z9vY8qSexJN9hJuo2">ta vår raske spørreundersøkelse!</a>
              </div>
              <div className="logos">
                <a href="http://www.aller.no"><img src={allerLogo} /></a>
                <a href="http://www.startuplab.no"><img src={startupLabLogo} /></a>
              </div>
            </div>
          </div>
          <div className="content-right-col">
            
            <div className="inner-image">
              <img src={gruppebilde} alt="bilde av Ole Petter og Jørgen" />  
            </div>
          </div>
        
        </div>
        
      </AboutPageWrapper>
    )
  }
}