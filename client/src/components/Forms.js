import React from 'react';
import styled, { keyframes } from 'styled-components';
import { spin } from '../components/Animations';
const NewsLetter = styled.form`
    padding: 30px;
    border-radius: 10px;
    max-width: 500px;
    position: relative;
    .form-wrapper {
        position: relative;
        z-index: 11;
    }
    .input-row {
        margin-bottom: 10px;
    }
    h1 {
        font-size: 2.4em;
        color: white;
        text-transform: lowercase;
        text-align: center;
        margin: 0;
        margin-bottom: 10px;
    }
    h2 {
        font-size: 1.2em;
        color: white;
        text-transform: lowercase;
        text-align: center;
        margin: 0;
        margin-bottom: 30px;
    }
    u {
      text-decoration: none;
      border-bottom: 2px solid #c100e3;
    }
    p {
        color: white;
        font-size: 0.9em;
        text-align: center;
        line-height: 1.6em;
        font-weight: normal;
    }

    label {
        color: #c100e3;
        display: flex; 
        align-items: center;
        input {
            background-color: transparent;
            border: 0;
            border-bottom: 1px solid rgba(255,255,255,0.8);
            padding: 14px;
            font-size: 1em;
            color: #d657ec;
            letter-spacing: 1px;
            flex: 1 1 100%;
            outline: none;
            &::placeholder {
                color: rgba(#c100e3,0.8);
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
        background-color: #c100e3;
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
        transition: all 0.1s ease-in-out 0.1s;
        border: 4px solid transparent;
        margin: 0 auto;
        margin-top: 40px;
        overflow: hidden;
        span {
          display: inline-block;
          transition: all 0.1s ease-in-out;
        }
        &.loading {
          width: 46px;
          height: 46px;
          background-color: transparent;
          border-left: 4px solid #c100e3;
          border-right: 4px solid #c100e3;
          border-top: 4px solid #c100e3;
          padding: 0;
          border-radius: 50%;
          animation: ${spin} 2s linear infinite 0.2s;
          &:hover {
            background-color: transparent;
          }
          span {
            transform: translateY(40px);
            opacity: 0;
          }
        }
        &:hover {
            background-color: #d931f7;
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
        color: white;
        a {
            color: inherit;
        }
    }
    .disclaimer {
        font-size: 0.8em;
        margin-top: 20px;
        color: #969696;
    }
    .code-text {
        color: #c100e3;
    }
    .code-highlight-text {
        color: #27ddf2;
    }
    
`;

export { NewsLetter };