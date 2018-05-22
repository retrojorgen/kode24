import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../components/Buttons';

import Topbar from './Topbar.js';

class Front extends Component {
    render () {
        return (
            <div>
                <Topbar />
                <h1>Some news</h1>
                <p>some other stuff</p>
                
            </div>
        )
    }
}

export default Front;