import React, { Component } from 'react';
import styled from 'styled-components';
import Button, { FlatButton } from '../components/Buttons';

const TopbarStyle = styled.div`
    width: 100%;
    background-color: #0000aa;
    border-bottom: 4px solid black;
    min-height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const RevealButtonWrap = styled.div`
    display: inline-block;
    border-left: 4px solid black;
`;

const Logo = styled.a`
    font-weight: bold;
    font-size: 1.6em;
    color: white;
    text-shadow: 4px 4px 0 black;
    text-decoration: none;
    text-transform: uppercase;
`;

const InfoButtonIcon = styled.span`
    display: inline-block;
    width: 28px;
    height: 12px;
    background-color: white;
    border: 4px solid black;
    position: relative;
    &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: calc(100% + 8px);
        height: calc(100% + 8px);
        background-color: rgba(0,0,0,0.4);
        transform: translateX(0);
        transform: translateY(0);
    }
    &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        background-color: white;
    }
`;

const InfoButtonWrap = styled.div`
    border-right: 4px solid black;
`;
const ArrowDown = styled.span`
    width: 0; 
    height: 0; 
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;  
    border-top: 10px solid black;
    display: inline-block;
`;

export default class Topbar extends Component {
    static propTypes = {

    };
    
    render () {
        return (
            <TopbarStyle>
                <InfoButtonWrap>
                    <FlatButton onClick={() => {}} onMouseOver={() => {}}>
                        <InfoButtonIcon />
                    </FlatButton>
                </InfoButtonWrap>
                <Logo href="/">Kode24</Logo>
                <RevealButtonWrap>
                    <Button onClick={() => {}} onMouseOver={() => {}}>
                        <ArrowDown />
                    </Button>
                </RevealButtonWrap>    
            </TopbarStyle>
        )
    }
}