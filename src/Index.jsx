import { useState } from "react"
import moment from "moment";
import { useEffect } from "react";

export default function index() {
  const [hoveredItem, setHoveredItem] = useState('');
  const [time, setTime] = useState(moment().format("YYYY.MM.DD-HH:mm:ss"));

  function A({name, href}) {
    return (
      <a
        href={href}
        target='_blank'
        onMouseEnter={()=>{setHoveredItem(name)}}
        onMouseLeave={()=>{setHoveredItem('')}}
      >
        <span>
          {name}
        </span>
        {(hoveredItem == name) ? <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z"/></svg> : ''}
      </a>
    )
  }

  useEffect(() => {
    setInterval(() => {
      setTime(moment().format("YYYY.MM.DD-HH:mm:ss"));
    }, 1000);
  }, []);

  return (
    <div className="App">
      <div className="grid"></div>
      <div className="vignetting"></div>
      <div className="title_wrap blink1">
        <div>
          <hr />
          <p>web designer, frontend dev, backend dev</p>
          <hr />
        </div>
        <div className='title'>
          <img src="../public/logo.png" />
        </div>
        <div>
          <p>2016.02.24 ~ {time}</p>
          <span className="pattern"></span>
          <p>©</p>
        </div>
      </div>
  
      <div className='links blink2'>
        <A name="Github" href="https://github.com/lavi27" />
        <A name="About" href="https://lavi27.notion.site/33913aa09cd24ccc8c9d68c779a975f6" />
        <A name="Twitter" href="https://twitter.com/lavi_27_" />
        <A name="Toss" href="https://toss.me/lavi27" />
        <A name="Email" href="mailto:lavi17945@gmail.com" />
      </div>
    </div>
  )
}