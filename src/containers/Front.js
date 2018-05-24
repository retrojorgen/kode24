import React, { Component } from 'react';
import styled from 'styled-components';
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
    filter: blur(6px) brightness(150%);
`;


const NewsLetter = styled.form`
    background-color: black;
    padding: 30px;
    max-width: 400px;
    border-radius: 10px;

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
    }
    .code-text {
        color: #ff0071;
    }
    .code-highlight-text {
        color: #27ddf2;
    }
    
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
    render () {
        return (
            <div>
                <VideoFrame autoPlay loop>
                    <source src={codeVideo} />
                </VideoFrame>
                <NewsLetterWrapper>
                    <NewsLetter>
                        <h1><span className="code-highlight-text">kode</span><span className="code-text">24</span>.no</h1>
                        <p>Snart lanseres norges eneste nettavis for <span className="code-text">utviklere</span>. Vil du bli varslet?</p>
                        <div className="input-row">
                            <label>
                                <input type="email" placeholder="Din e-post" />
                            </label>
                        </div>
                        <button type="submit">ok!</button>
                    </NewsLetter>
                </NewsLetterWrapper>
            </div>
        )
    }
}

export default Front;