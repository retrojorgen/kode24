import React, { Component } from 'react';
import styled from 'styled-components';
import { scalehideleft} from '../components/Animations';

const TriangleAnimation = styled.div`
    position: absolute;
    top: 40px;
    left: 40px;
    width: 400px;
    height: 400px;
    opacity: 0;
    animation: ${scalehideleft} ${props => props.speed ? props.speed : '2s'} linear infinite ${props => props.offset ? props.offset : '0s'};
    
    .triangle {
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: rgba(120, 42, 156, 1);
        box-shadow: 0 0 10px 10px rgba(145, 97, 168, 0.06);
    }

    .top {
        top: 0;
        left: 0;
    }
    .left {
        left: -100px;
        top: 173px;
        width: 400px;
        transform: rotate(60deg) skew(-45deg);
    }
    .right {
        right: -100px;
        top: 173px;
        width: 400px;
        transform: rotate(-60deg) skew(45deg);
    }
`;

class Triangle extends Component {
    render () {
        return (
            <TriangleAnimation speed={this.props.speed} offset={this.props.offset}>
                <span className="top triangle" />
                <span className="left triangle" />
                <span className="right triangle" />
            </TriangleAnimation>
        )
    }
}

export { Triangle };