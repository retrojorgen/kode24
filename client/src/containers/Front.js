import React, { Component, Fragment } from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../components/Buttons';
import codeVideo from '../video/code.mov';
import Topbar from './Topbar.js';
import ColorLogo, { WhiteOutlineShortLogo } from '../components/svgs';

const editorColor = "#33ddf3";

const VideoFrame = styled.video`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    filter: blur(10px);
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
        &:hover {
            background-color: #ff4899;
        }
        &:active {
            background-color: #d60863;
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

const ThankYou = styled.p`
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
    @media (min-device-width: 1100px) { 
        padding: 40px;
        width: 500px;
        flex: 0 0 500px;
        background-color: transparent;
    }
    @media (min-device-width: 1281px) { 
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
    @media (min-device-width: 1100px) { 
        flex: 1 1 100%;
        position: relative;    
    }
`;

const PageWrapper = styled.div`
    position: relative;
    @media (min-device-width: 1100px) { 
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

const LogoHeader = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    padding: 20px 20px 20px 20px;
    opacity: 0.6;
    @media (min-device-width: 1100px) {
        padding: 0 40px 0 40px;
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
    }

        // Fetch passwords after first mount
    componentDidMount() {
        this.testApi();
    }

    testApi = () => {
        // Get the passwords and store them in state
        fetch('/api/test')
        .then(res => res.json())
        .then(res => {
            console.log('resultat', res);
        });
    }

    handleEmailForm = (event) => {
        event.preventDefault();
        console.log('sending stuff', this.state.email);
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
            console.log('success:', response);
        });
    }

    handleEmailInput = (value) => {
        this.setState({email: value});
        console.log(this.state);
    }

    handleNameInput = (value) => {
        this.setState({name: value});
        console.log(this.state);
    }



    render () {
        console.log('v1');
        return (
            <PageWrapper>
                <NewsLetterWrapper>
                    <NewsLetter onSubmit={this.handleEmailForm}>
                        <NewsLetterHeader>
                            <ColorLogo />
                        </NewsLetterHeader>
                        <p>Snart lanserer vi Norges første nettavis for <span className="code-text">utviklere</span>. Vil du vite mer?</p>

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
                        <p className="disclaimer">Informasjonen blir <u>kun</u> brukt i sammenheng med utsending av nyhetsbrev.</p>    
                    </NewsLetter>
                    
                    
                </NewsLetterWrapper>
                <InfoWrapper>
                    <VideoFrame autoPlay loop>
                        <source src={codeVideo} />
                    </VideoFrame>
                </InfoWrapper>
            </PageWrapper>
        )
    }
}

export default Front;