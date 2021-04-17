import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { Draggable } from 'gsap/Draggable';
import './App.css';

gsap.registerPlugin(CSSPlugin);
gsap.registerPlugin(Draggable);
// gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, MorphSVGPlugin);


export default function App() {
  const container = React.createRef();
  const square1 = React.createRef();
  const square2 = React.createRef();

  

  useEffect(() => { 
    Draggable.create('.square1', {
      bounds: container,
      type: 'x, y'
    });

    Draggable.create('.square2', {
      bounds: container,
      type: 'x, y'
    })
    
  }, [])

  return <div>
  <main>
    <div ref={container} className="container">
      <div id="square1" ref={square1} className="square1">here i am</div>
      <div id="square2" ref={square2} className="square2">where am i?</div>
    </div>
  </main>
    <script src="/script/gsap.min.js"></script>
    <script src="./App.jsx"></script>
  </div>;
}
