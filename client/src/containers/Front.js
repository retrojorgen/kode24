import React, { Component, Fragment } from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../components/Buttons';
import codeVideo from '../video/code.mov';
import Topbar from './Topbar.js';

const editorColor = "#33ddf3";

const VideoFrame = styled.video`
    position: fixed;
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
    background-color: #00000094;
    padding: 30px;
    max-width: 400px;
    border-radius: 10px;
    box-shadow: 0 7px 21px rgba(0,0,0,0.4);
    .input-row {
        margin-bottom: 10px;
    }
    h1 {
        font-family: monospace;
        font-size: 3em;
        color: white;
        text-transform: lowercase;
        text-align: center;
        margin: 0;
    }
    p {
        font-family: monospace;
        color: white;
        font-size: 1.4em;
        text-align: center;

    }

    label {
        color: #ff0071;
        display: flex; 
        align-items: center;
        input {
            background-color: #EEE;
            border: 1px solid rgba(255,255,255,0.1);
            padding: 14px;
            font-size: 1em;
            color: black;
            flex: 1 1 100%;
            border-radius: 4px;

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
        border-radius: 4px;
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
        color: #27ddf2;
    }
    .disclaimer {
        font-size: 0.7em;
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
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
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
            <div>
                <VideoFrame autoPlay loop>
                    <source src={codeVideo} />
                </VideoFrame>
                <NewsLetterWrapper>
                    <NewsLetter onSubmit={this.handleEmailForm}>
                        <h1><span className="code-highlight-text">kode</span><span className="code-text">24</span>.no</h1>
                        <p>Snart lanseres norges eneste nettavis for <span className="code-text">utviklere</span>. Vil du bli varslet?</p>

                        {    !this.state.done && (
                                <Fragment>
                                    <div className="input-row">
                                        <label>
                                            <input type="text" value={this.state.name} onChange={(event) => this.handleNameInput(event.target.value)} placeholder="Ditt navn" />
                                        </label>
                                    </div>
                                    <div className="input-row">
                                        <label>
                                            <input type="email" value={this.state.email} onChange={(event) => this.handleEmailInput(event.target.value)} placeholder="Din e-post" />
                                        </label>
                                    </div>
                                    <button type="submit">ok!
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
                                    Takk {this.state.name}! Vi gir deg beskjed på {this.state.email} så fort vi har mer informasjon
                                </p>
                            )
                        }
                        <p className="disclaimer">Obs, e-postadressen og navnet ditt blir <u>kun</u> brukt i sammenheng med utsending av nyhetsbrev.</p>    
                    </NewsLetter>
                    
                    
                </NewsLetterWrapper>
            </div>
        )
    }
}

export default Front;