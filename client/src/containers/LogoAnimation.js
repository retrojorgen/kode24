import React, { Component } from 'react';
import triangle from '../images/triangle.png';
import styled from 'styled-components';

const Canvas = styled.canvas`
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

  containerRef = React.createRef();
  
  animations = [

  ];


  addImage (image, rotation, increase, position) {
    let newImage = new Image();
    newImage.src = image;
    this.animations.push({
      image: newImage,
      rotation: rotation,
      increase: increase,
      position: position
    });
  }

  drawPolygon (ctx, image, x, y, w, h, a) {
    ctx.translate(-x - y / 2, -y - h / 2);
    ctx.rotate(a);
    ctx.drawImage(image, 0, 0);
    ctx.rotate(-a);
    ctx.translate(x + w / 2, y + h / 2);
    console.log('yo');
  }
  
  drawPolygons () {
    let context = this.state.context;
    let animations = this.animations;
    context.clearRect(0,0,100,100);
    //context.save();
    this.drawPolygon(context, animations[0].image, animations[0].position[0], animations[0].position[1], 140, 140, animations[0].rotation);
    
    //context.restore();
    animations[0].rotation = animations[0].rotation + animations[0].increase;
    animations[0].rotation += animations[0].increase;
    if(animations[0].rotation > 2) animations[0].rotation = 0;
    //console.log('animating', animations);
    window.requestAnimationFrame(this.drawPolygons.bind(this));
  }

  componentDidMount () {
    //this.polygonPurple.src = `${triangle}`;
    this.addImage(`${triangle}`, 0.001, 0.001, [60,500]);
    this.addImage(`${triangle}`, 0.001, 0.002, [60,500]);
    console.log(this.containerRef);
    this.setState(
      {
        context: document.getElementById('logo-animation').getContext('2d'),
      });
    
    window.requestAnimationFrame(this.drawPolygons.bind(this));
  }
  
  render () {
    console.log(this.props);
    return (
      <Canvas id="logo-animation" width={this.props.width} height={this.props.height}>
      </Canvas>
    )
  }
}