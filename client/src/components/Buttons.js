import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const defaultButton = styled.button`
    padding: 10px 10px;
    background-color: #c3c7cb;
    font-size: 1em;
    outline: none;
`;

const ButtonStyle = styled(defaultButton)`
    border: 4px outset white;
    &:active {
        border: inset;
    }
`;

const FlatButtonStyle = styled(defaultButton)`
    border: 4px solid #c3c7cb;
    &:active {
        background-color: #94979a;
    }
`;

class Button extends Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired,
        onMouseOver: PropTypes.func,
    }
    
    render() {
        return (
                <ButtonStyle onClick={() => this.props.onClick()} onMouseOver={() => this.props.onMouseOver()}>
                        {this.props.children}
                </ButtonStyle>
        )
    }
};

const Jump = keyframes`
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(6px);
    }
    100% {
        transform: translateY(0px);
    }
`;

const DownArrowContainer = styled.span`
    width: 40px;
    height: 40px;
    display: flex;
    position: relative;
    align-items: center;
    transform: translateY(0px);
    animation: ${Jump} 0.7s linear infinite;
    &:before, &:after {
        content: "";
        height: 4px;
        width: 50%;
        background-color: white;
    }
    &:before {
        transform: translateX(4px) rotate(45deg);
    }
    &:after {
        transform: translateX(-4px) rotate(-45deg);
    }
`;


const DownArrow = () => (
    <DownArrowContainer />
)

class FlatButton extends Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired,
        onMouseOver: PropTypes.func,
    }
    
    render() {
        return (
                <FlatButtonStyle onClick={() => this.props.onClick()} onMouseOver={() => this.props.onMouseOver()}>
                        {this.props.children}
                </FlatButtonStyle>
        )
    }
};

export default Button;
export { Button, FlatButton, DownArrow };