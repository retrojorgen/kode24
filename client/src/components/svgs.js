import React  from 'react';
import styled, { keyframes } from 'styled-components';


const WhiteToPink = keyframes`
  0% {
    stroke: #FFFFFF;
  }
  50% {
    stroke: #ff0071;
  }
  70% {
    stroke: #FFFFFF;
  }
  100% {
    stroke: #FFFFFF;
  }
`;

const PinkToWhite = keyframes`
  0% {
    
    stroke: #ff0071;
  }
  50% {
    stroke: #FFFFFF;
  }
  70% {
    stroke: #ff0071;
  }
  100% {
    stroke: #ff0071;
  }
`;


const ColorLogoStyle = styled.svg`
  max-width: 100%;
	.st0{fill:none;stroke:#FFFFFF;stroke-width:18; animation: ${WhiteToPink} 100s 4s linear infinite}
	.st1{fill:none;stroke:url(#b);stroke-width:18;}
	.st2{fill:none;stroke:#ff0071;stroke-width:19; animation: ${PinkToWhite} 100s linear infinite}
	.st3{fill:none;stroke:url(#a);stroke-width:19;}
	.st4{fill:#FFFFFF;}
	.st5{fill:#ff0071;}
`;



const WhiteOutlineShortLogoStyle = styled.svg`
  max-width: 100%;
  .st0 {
      fill:none;
      stroke:#FFFFFF;
      stroke-width:2;
  }
`;

const ColorLogo = () =>
<ColorLogoStyle enable-background="new 0 0 594 166" version="1.1" viewBox="0 0 594 166"  xmlns="http://www.w3.org/2000/svg" width="300" height="100">
<style type="text/css">

</style>
<path className="st0" d="m115.4 17.4v97l-93.5-51.2 93.5-45.8z"/>
<linearGradient id="b" x1="115.4" x2="115.4" y1="94.47" y2="94.47" gradientUnits="userSpaceOnUse">
	<stop stopColor="#3CB6D2" offset="0"/>
	<stop stopColor="#F20E72" offset=".5325"/>
	<stop stopColor="#3CB6D2" offset="1"/>
	<stop stopColor="#FE330A" offset="1"/>
</linearGradient>
<path className="st1" d="m115.4 94.5"/>
<path className="st2" d="M182,94.5l-93.5,51.3v-97L182,94.5z"/>
<linearGradient id="a" x1="88.4" x2="88.4" y1="121.87" y2="121.87" gradientUnits="userSpaceOnUse">
	<stop stopColor="#F20E72" offset="0"/>
	<stop stopColor="#3CB6D2" offset=".5325"/>
	<stop stopColor="#F20E72" offset="1"/>
</linearGradient>
<path className="st3" d="m88.4 121.9"/>
<path className="st0" d="m115.4 114.4l-93.2-51"/>
	<path className="st4" d="M217.4,48.4h15.9V89h5.4l19.3-21h9.2l-21.7,23.2l17.8,19.2h6.4v6.6h-10.1l-21-22.1h-5.4V117h-7.5V55h-8.3V48.4   z"/>
	<path className="st4" d="m279.4 92.5c0-7.9 2.1-14.2 6.2-18.8s10-6.9 17.6-6.9c4.1 0 7.7 0.7 10.6 2 3 1.3 5.4 3.2 7.4 5.4 2 2.3 3.4 5 4.4 8.1 0.9 3.1 1.4 6.5 1.4 10.1 0 3.9-0.5 7.5-1.6 10.6-1 3.2-2.6 5.9-4.6 8.1s-4.5 3.9-7.5 5.1-6.4 1.8-10.1 1.8c-4.1 0-7.6-0.7-10.6-2s-5.5-3.2-7.4-5.4-3.4-5-4.4-8.1c-0.9-3-1.4-6.4-1.4-10zm8.1 0c0 2.3 0.3 4.6 0.8 6.9 0.6 2.3 1.5 4.3 2.7 6.2s2.8 3.3 4.8 4.4 4.4 1.7 7.3 1.7c5.2 0 9.1-1.6 11.8-4.9 2.6-3.2 4-8 4-14.3 0-2.4-0.3-4.7-0.8-6.9-0.6-2.3-1.5-4.3-2.7-6.1-1.3-1.8-2.9-3.3-4.9-4.4s-4.4-1.7-7.3-1.7c-5.2 0-9.1 1.6-11.7 4.8-2.7 3.2-4 8-4 14.3z"/>
	<path className="st4" d="m366.7 48.4h16v51.8c0 0.6 0 1.3 0.1 2.2s0.1 1.8 0.2 2.8 0.2 1.9 0.3 2.9c0.1 0.9 0.3 1.8 0.4 2.5h6.6v6.4h-13.1l-1-7.5h-0.4c-1.4 2.5-3.6 4.6-6.4 6.2-2.8 1.7-6.1 2.5-9.8 2.5-7.4 0-12.8-2.1-16.3-6.2s-5.2-10.6-5.2-19.4c0-4.1 0.6-7.8 1.8-10.9 1.2-3.2 2.8-5.8 5-7.9s4.8-3.7 7.9-4.9c3.1-1.1 6.5-1.7 10.3-1.7 1.4 0 2.6 0 3.7 0.1s2.1 0.2 3 0.3 1.8 0.3 2.6 0.5 1.7 0.5 2.7 0.7v-13.8h-8.2v-6.6zm-5.8 63.2c4 0 7.1-1 9.4-3.1s3.8-5.1 4.7-9.3v-22.7c-1.4-1-3-1.7-4.8-2.2s-4.2-0.7-7.1-0.7c-5.2 0-9.3 1.5-12.3 4.6-3 3-4.5 7.8-4.5 14.4 0 2.7 0.2 5.2 0.7 7.5s1.3 4.3 2.4 6 2.7 3 4.5 4c1.9 1 4.2 1.5 7 1.5z"/>
	<path className="st4" d="m443.2 110.8c-1.2 1-2.6 2-4.2 2.9s-3.3 1.7-5.2 2.4-3.9 1.2-5.9 1.5c-2.1 0.4-4.1 0.5-6.2 0.5-3.9 0-7.4-0.6-10.4-1.8s-5.5-2.9-7.5-5.2-3.6-4.9-4.6-8.1c-1-3.1-1.6-6.7-1.6-10.6 0-4.1 0.6-7.8 1.7-11s2.8-5.9 4.9-8c2.2-2.2 4.8-3.8 7.8-4.9 3.1-1.1 6.5-1.7 10.3-1.7 2.7 0 5.5 0.4 8.1 1.1 2.7 0.7 5 2.1 7.1 4.1s3.6 4.7 4.8 8.2c1.1 3.5 1.5 8 1.2 13.6h-37.8c0 5.9 1.6 10.3 4.7 13.2 3.2 2.9 7.4 4.4 12.7 4.4 1.8 0 3.5-0.2 5.2-0.6s3.4-0.9 4.9-1.5c1.6-0.6 2.9-1.2 4.2-2 1.2-0.7 2.1-1.4 2.8-2l3 5.5zm-20.6-37.5c-2.1 0-4.2 0.2-6.1 0.7s-3.6 1.2-5.1 2.3-2.7 2.5-3.6 4.2-1.5 3.9-1.8 6.4h30.4c-0.3-4.3-1.7-7.7-4.2-10-2.4-2.4-5.6-3.6-9.6-3.6z"/>
	<path className="st5" d="m499.3 65.8c0 6-2.9 12.7-8.6 20.1s-13.7 15.4-23.9 24.1h34.6v7.1h-43.6v-7.1c1.2-1.2 2.9-2.7 5.1-4.6s4.5-4 7-6.3 5-4.8 7.6-7.5 4.9-5.4 7-8.2 3.8-5.6 5.1-8.4 2-5.5 2-8.1c0-3.9-1-7-3.1-9.3s-5.1-3.4-9.3-3.4c-3.5 0-6.5 0.4-8.9 1.2s-4.6 1.9-6.6 3.4l-3.3-5.4c2.9-2.1 6.1-3.6 9.4-4.6s6.9-1.5 10.9-1.5c6.2 0 10.8 1.7 14 5 3 3.3 4.6 7.8 4.6 13.5z"/>
	<path className="st5" d="m568.3 95.7h-13.2v21.3h-7.7v-21.3h-31.7v-5.7l32.8-41.6h6.6v40.8h13.2v6.5zm-21-35l-22.6 28.5h22.6v-28.5z"/>

</ColorLogoStyle>


const WhiteOutlineShortLogo = () =>
  <WhiteOutlineShortLogoStyle id="logo" enable-background="new 0 0 444 157.5" version="1.1" viewBox="0 0 444 157.5" xmlns="http://www.w3.org/2000/svg" width="160" height="80">
    <polyline className="st0" points="113.6 55.3 113.6 12.4 13.1 61.2 102.3 110.7"/>
    <line className="st0" x1="113.6" x2="113.6" y1="104.3" y2="71.8"/>
    <polyline className="st0" points="99.5 48.5 99.5 35.4 45.5 61.7 99.5 91.7 99.5 65.2"/>
    <polyline className="st0" points="84.8 41.8 176.7 86.5 76.2 142.2 76.2 95.7"/>
    <line className="st0" x1="76.2" x2="76.2" y1="78" y2="46.7"/>
    <polyline className="st0" points="90.2 85.8 90.2 60.7 144.3 87 90.2 116.9 90.2 104.3"/>
    <path className="st0" d="m204.1 34.1h29.7 29l-16.2 32.2 20.5 40.7h-63.1v-72.9z"/>
    <path className="st0" d="m305.2 20.9h11.9l-32.3 100.8h-11.9l32.3-100.8z"/>
    <path className="st0" d="M415.3,33.1v33.5h12.4v19.6h-12.4v19.1h-16.5V86.2h-26.7l0.5-53.3"/>
    <path className="st0" d="m308.6 106h51.1v-20.3h-15.9c2.2-1.1 4.3-2.5 6.3-4.4s3.8-4 5.4-6.3c1.5-2.4 2.8-4.9 3.7-7.5 0.9-2.7 1.4-5.3 1.4-7.9 0-3.7-0.7-7.2-2.1-10.4s-3.3-6.1-5.7-8.5-5.2-4.3-8.5-5.7c-3.2-1.4-8.6-2.2-12.3-2.2"/>
  </WhiteOutlineShortLogoStyle>

export default ColorLogo;
export { WhiteOutlineShortLogo };