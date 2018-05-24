import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
export { Button, FlatButton };