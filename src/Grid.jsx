import { useState, useEffect, useRef } from "react"

export default function index() {
  const canvasRef = useRef(null);
  const requestAnimationRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });
  const posLastRef = useRef({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({x: 0, y: 0});
  const [mouseLastPos, setMouseLastPos] = useState({x: 0, y: 0});

  function render() {
    function drawGrid(interval, color) {
      const valX = (posLastRef.current.x % 40) - 40;
      const valY = (posLastRef.current.y % 40) - 40;
      
      for (let i=0; i<=canvas.width+40; i+=interval) {
        ctx.moveTo(0.5+i+valX, 0+valY);
        ctx.lineTo(0.5+i+valX, canvas.height);
      }
      for (let i=0; i<=canvas.height+40; i+=interval) {
        ctx.moveTo(0+valX, 0.5+i+valY);
        ctx.lineTo(canvas.width, 0.5+i+valY);
      }
  
      ctx.strokeStyle = color;
      ctx.stroke();
    }

    function transiton(last, now) {
      return ( ((now - last) * 0.1) + last )
    }

    posRef.current.y += 0.5;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    posLastRef.current.x = transiton(posLastRef.current.x, posRef.current.x);
    posLastRef.current.y = transiton(posLastRef.current.y, posRef.current.y);

    drawGrid(40, "#ffffff08");
    drawGrid(8, "#ffffff04");

    requestAnimationRef.current = requestAnimationFrame(render);
  }

  useEffect(() => { //init
    document.onmousemove = ((e) => {
      e.preventDefault();
      setMousePos({x: e.clientX, y: e.clientY});
    });

    requestAnimationRef.current = requestAnimationFrame(render);

    return() => cancelAnimationFrame(requestAnimationRef.current);
  }, []);

  useEffect(() => { //onMouseMove
    posRef.current.x += (mousePos.x - mouseLastPos.x)/3;
    posRef.current.y += (mousePos.y - mouseLastPos.y)/3;

    setMouseLastPos(mousePos);
  }, [mousePos]);
  
  return (
    <canvas ref={canvasRef} className="grid"></canvas>
  )
}