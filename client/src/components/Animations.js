import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const scalehideleft = keyframes`
    0% {
        transform: rotateZ(360deg) translateZ(0) scale(1) translateX(4px);
        opacity: 0;
    }

    50% {
        transform: rotateZ(360deg) translateZ(0) translateY(15px) translateX(4px) scale(5) rotate(10deg);
        opacity: 1;
    }

    100% {    
        transform: rotateZ(360deg) translateZ(0) translateY(15px) translateX(4px) scale(10) rotate(10deg);
        opacity: 0;
    }
`;

const scalehideright = keyframes`
    0% {
        transform: rotateZ(360deg) translateZ(0) scale(0) rotate(90deg);
        opacity: 0;
    }

    50% {
        transform: rotateZ(360deg) translateZ(0) scale(0.5) rotate(90deg);
        opacity: 1;
    }

    80% {
        opacity: 1;
    }
    100% {    
        transform: rotateZ(360deg) translateZ(0) scale(1) rotate(90deg);
        opacity: 0;
    }
`;

export { scalehideleft, scalehideright, spin };