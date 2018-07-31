import React, { Component, Fragment } from 'react';
import styled, { keyframes } from 'styled-components';
import {DownArrow} from '../components/Buttons';
import AboutPage from './AboutPage';
import ColorLogo from '../components/svgs';
import codeBackground from '../images/kode-bakgrunn.jpg';
import { NewsLetter } from '../components/Forms';


const loading = keyframes`
    0% {
        transform: scale(0);
        opacity: 1;
    }
    60% {
        transform: scale(1);
        opacity: 0.4;
    }
    100% {
    transform: scale(0);
    opacity: 1;
    }
`;

const Loading = styled.div`
    width: 15px;
    height: 15px;
    display: inline-block;
    position: relative;
    float: right;
    &:before,
    &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: white;
    }
    &:before {
        animation: ${loading} 2s ease-in-out infinite;
    }
    &:after {
        animation: ${loading} 2s ease-in-out 1s infinite;
    }
`;

const NewsLetterWrapper = styled.div`
    flex: 0 0 100%;
    padding: 0;
    background-color: rgba(0,0,0,0,0.6);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 10;
    justify-content: center;
    @media (min-width: 1040px) { 
        padding: 40px;
        width: 500px;
        flex: 0 0 500px;
        background-color: transparent;
    }
    @media (min-width: 1281px) { 
        padding: 40px;
        width: 700px;
        flex: 0 0 700px;
        background-color: transparent;
    }
`;

const InfoWrapper = styled.div` 
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    background-image: url(${codeBackground});
    background-size: cover;
    background-repeat: no-repeat;
    @media (min-width: 1040px) { 
        flex: 1 1 100%;
        position: relative;    
    }
`;

const PageWrapper = styled.div`
    position: relative;
    @media (min-width: 1040px) { 
        flex: 1 1 100%;
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        align-items: stretch;
        position: absolute;
        left: 0;
        top: 0;    
    }
`;

const NewsLetterHeader = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
`;

class Front extends Component {

    state = {
        apiworking: "",
        email: "",
        name: "",
        loading: false,
        done: false,
        toggleInfo: false,
        containerWidth: 0,
        containerHeight: 0
    }

    containerRef = React.createRef();

        // Fetch passwords after first mount
    componentDidMount() {
        let { width, height} = this.containerRef.getBoundingClientRect();
        width = Math.round(width);
        height = Math.round(height);
        this.setState({
            containerWidth: width,
            containerHeight: height
        });
    }


    handleEmailForm = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        fetch('/api/email', {
            method: 'post',
            body: JSON.stringify({
                email: this.state.email,
                name: this.state.name
            }),
            headers:{
                'Content-Type': 'application/json'
            }

        })
        .then(res => res.json())
        .then(response => {
            this.setState({
                loading: false,
                done: true
            });
        });
    }

    handleEmailInput = (value) => {
        this.setState({email: value});
  
    }

    handleNameInput = (value) => {
        this.setState({name: value});
    
    }

    handleMoreInfoClick = (event) => {
        event.preventDefault();
        this.setState({
            toggleInfo: !this.state.toggleInfo
        });
    }


    render () {
        return (
            <PageWrapper>
                
                <NewsLetterWrapper innerRef={comp => this.containerRef = comp}>
                    <NewsLetter onSubmit={this.handleEmailForm} >
                        <div className="form-wrapper">
                            <NewsLetterHeader>
                                <ColorLogo />
                            </NewsLetterHeader>
                            <p>Snart lanserer vi Norges første nettavis for <span className="code-text">utviklere</span>. Vil du holde deg oppdatert?</p>

                            {    !this.state.done && (
                                    <Fragment>
                                        <div className="input-row">
                                            <label>
                                                <input type="text" required value={this.state.name} onChange={(event) => this.handleNameInput(event.target.value)} placeholder="navn" />
                                            </label>
                                        </div>
                                        <div className="input-row">
                                            <label>
                                                <input type="email" required value={this.state.email} onChange={(event) => this.handleEmailInput(event.target.value)} placeholder="e-post" />
                                            </label>
                                        </div>
                                        <button type="submit">Hold meg oppdatert
                                            {
                                                this.state.loading && (
                                                    <Loading />
                                                )
                                            }
                                        </button>
                                    </Fragment>
                                )
                            }

                            {
                                this.state.done && (
                                    <p className="thank-you">
                                        Takk {this.state.name}! Vi gir deg beskjed på {this.state.email} så snart vi har mer informasjon. <br/>
                                        <br/>
                                Har du to minutter til å gjøre Kode24 bedre? <a href="https://goo.gl/forms/Z9vY8qSexJN9hJuo2">Ta gjerne vår kjappe spørreundersøkelse!</a>
                                    </p>
                                )
                            }
                            <button className="more-info" onClick={(event) => this.handleMoreInfoClick(event)}>
                                Om oss
                            </button>
                            <p className="disclaimer">Informasjonen blir <u>kun</u> brukt i sammenheng med utsending av nyhetsbrev.</p>    
                            <div className="more-info-mobile">
                                <p>Om oss</p>
                                <div className="down-arrow-container">
                                    <DownArrow />
                                </div>
                            </div>
                        </div>
                    </NewsLetter>
                    
                    
                </NewsLetterWrapper>
                <InfoWrapper>
                </InfoWrapper>
                <AboutPage toggleInfo={this.state.toggleInfo} />
            </PageWrapper>
        )
    }
}

export default Front;