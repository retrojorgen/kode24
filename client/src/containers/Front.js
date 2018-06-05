import React, { Component, Fragment } from 'react';
import styled, { keyframes } from 'styled-components';
import {DownArrow} from '../components/Buttons';
import codeVideo from '../video/code.mov';
import AboutPage from './AboutPage';
import ColorLogo from '../components/svgs';
import LogoAnimation from './LogoAnimation';

const VideoFrame = styled.video`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    filter: blur(10px);
    z-index: 1;
`;

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


const NewsLetter = styled.form`
    padding: 30px;
    border-radius: 10px;
    max-width: 500px;
    .form-wrapper {
        position: relative;
        z-index: 11;
    }
    .input-row {
        margin-bottom: 10px;
    }
    h1 {
        font-size: 3em;
        color: white;
        text-transform: lowercase;
        text-align: center;
        margin: 0;
    }
    p {
        color: white;
        font-size: 1.2em;
        text-align: center;
        line-height: 1.6em;
    }

    label {
        color: #ff0071;
        display: flex; 
        align-items: center;
        input {
            background-color: transparent;
            border: 0;
            border-bottom: 1px solid rgba(255,255,255,0.8);
            padding: 14px;
            font-size: 1em;
            color: #ff0071;
            flex: 1 1 100%;
            outline: none;
            &::placeholder {
                color: rgba(#ff0071,0.8);
            }

        }
        span {
            white-space: nowrap;
            margin-right: 10px;
        }
    }
    button {
        position: relative;
        padding: 14px 30px;
        background-color: #ff0071;
        border: 0;
        text-align: center;
        color: black;
        text-transform: uppercase;
        font-size: 0.8em;
        display: block;
        width: 100%;
        font-size: 1em;
        color: white;
        margin-top: 20px;
        border-radius: 0;
        outline: none;
        cursor: pointer;
        &:hover {
            background-color: #ff4899;
        }
        &:active {
            background-color: #d60863;
        }
    }
    .more-info {
        display: none;
        
        @media (min-width: 1040px) { 
            display: inline-block;
            background-color: transparent;
            border: 1px solid rgba(255,255,255,0.3);
            &:hover {
                background-color: rgba(255,255,255,0.1);
            }
            &:active {
                background-color: rgba(0,0,0,0.1);
            }
        }
    }
    .more-info-mobile {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
            margin-bottom: 0;
        }
        @media (min-width: 1040px) { 
            display: none;
        } 
    }
    .thank-you {
        border-top: 1px solid rgba(255,255,255,0.1);
        border-bottom: 1px solid rgba(255,255,255,0.1);
        padding-top: 10px;
        padding-bottom: 10px;
        color: #ff0071;
    }
    .disclaimer {
        font-size: 0.8em;
        margin-top: 20px;
        color: #969696;
    }
    .code-text {
        color: #ff0071;
    }
    .code-highlight-text {
        color: #27ddf2;
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
                        <LogoAnimation width={this.state.containerWidth} height={this.state.containerHeight} />
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
                                        Takk {this.state.name}! Vi gir deg beskjed på {this.state.email} så snart vi har mer informasjon
                                    </p>
                                )
                            }
                            <button className="more-info" onClick={(event) => this.handleMoreInfoClick(event)}>
                                Mer info
                            </button>
                            <p className="disclaimer">Informasjonen blir <u>kun</u> brukt i sammenheng med utsending av nyhetsbrev.</p>    
                            <div className="more-info-mobile">
                                <p>Les mer om kode24</p>
                                <div className="down-arrow-container">
                                    <DownArrow />
                                </div>
                            </div>
                        </div>
                    </NewsLetter>
                    
                    
                </NewsLetterWrapper>
                <InfoWrapper>
                    <VideoFrame autoPlay loop>
                        <source src={codeVideo} />
                    </VideoFrame>
                </InfoWrapper>
                <AboutPage toggleInfo={this.state.toggleInfo} />
            </PageWrapper>
        )
    }
}

export default Front;