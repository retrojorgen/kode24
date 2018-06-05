import React, { Component } from 'react';
import triangle from '../images/triangle.png';
import triangleWhite from '../images/triangle-white.png';
import styled from 'styled-components';
import * as pixi from 'pixi.js';

const PixiContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;
export default class LogoAnimation extends Component {
  state = {
    runAnimation: true,
    hideAnimation: true,
    context: undefined
  }

  app = undefined;
  counter = 0;
  containerRef = React.createRef();
  
  animations = [

  ];


  addImage () {
    
    console.log('yay', sprite);
    let direction = Math.round(Math.random() * (1 - 0) + 0);
    let rotation = (Math.random() * (1 - 0) + 0) * 0.10;
    let opacity = (Math.random() * (1 - 0) + 0);
    let sprite = pixi.Sprite.fromImage(
      direction > 0 ? `${triangle}` : `${triangleWhite}`
    );
    sprite.anchor.set(0.5);
    sprite.x = Math.random() * (this.props.width - 0) + 0;
    sprite.y = this.props.height;
    sprite.width = 20;
    sprite.height = 20;
    sprite.alpha = opacity;
    this.animations.push({
      sprite: sprite,
      direction: direction > 0 ? 'right' : 'left',
      speed: 1.6,
      rotation: rotation
    });
    this.app.stage.addChild(sprite);
  }

  componentDidMount () {
    //this.polygonPurple.src = `${triangle}`;
    
  }

  componentDidUpdate () {

    if(this.props.width > 0 && this.props.height > 0) {
      this.app = new pixi.Application(this.props.width, this.props.height, {transparent: true});
      this.containerRef.appendChild(this.app.view);
      this.addImage();

      this.app.ticker.add((delta) => {
        for (let x = 0; x<this.animations.length; x++) {
          this.animations[x].sprite.rotation += this.animations[x].rotation * delta;
          this.animations[x].sprite.y -= 1 * delta;
          this.animations[x].sprite.alpha -= 0.001;
          
          if(this.animations[x].direction === 'left')
            this.animations[x].sprite.x -= this.animations[x].speed * delta;
          else
            this.animations[x].sprite.x += this.animations[x].speed * delta;
          
          if(this.animations[x].sprite.x + (this.animations[x].sprite.width/2) >= this.props.width && this.animations[x].direction === 'right') {
            this.animations[x].direction = 'left';
            this.animations[x].rotation *= -1;
          }

          if(this.animations[x].sprite.x - (this.animations[x].sprite.width/2) <= 0 && this.animations[x].direction === 'left') {
            this.animations[x].direction = 'right';
            this.animations[x].rotation *= -1;
          }
          
          if(this.animations[x].speed < 0) {
            this.animations[x].speed = 0;
          } else {
            this.animations[x].speed -= 0.002;
          }
        }
        this.counter++;
        if(this.counter > 100) {
          this.addImage();
          this.counter = 0;
        }
      });
    }
  }
  
  render () {
    return (
      <PixiContainer width={this.props.width} height={this.props.height} innerRef={(comp => this.containerRef = comp)}>
      </PixiContainer>
    )
  }
}