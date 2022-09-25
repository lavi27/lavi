import { useState, useEffect } from "react"
import TimeText from './TimeText';

export default function index() {
  const [showLinks, setShowLinks] = useState(false);
  const [hoveredItem, setHoveredItem] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setShowLinks(true);
    }, 100);
  }, []);

  function A({name, href}) {
    return (
      <a
        href={href}
        target='_blank'
        onMouseEnter={()=>{setHoveredItem(name)}}
        onMouseLeave={()=>{setHoveredItem('')}}
      >
        {(hoveredItem == name) ?
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z"/></svg>
        : ''}

        <span>
          {name}
        </span>
      </a>
    )
  }

  return (
    <>
      <div className="title_wrap blink1">
        <div>
          <hr />
          <p>web designer, frontend dev, backend dev</p>
          <hr />
        </div>
        <div className='title'>
          <img src="/logo.png" />
        </div>
        <div>
          <TimeText />
          <span className="pattern"></span>
          <p>©</p>
        </div>
      </div>
  
      <div className={'links' + (showLinks ? ' blink2 show' : '')}>
        <A name="Github" href="https://github.com/lavi27" />
        <A name="About" href="https://lavi27.notion.site/33913aa09cd24ccc8c9d68c779a975f6" />
        <A name="Twitter" href="https://twitter.com/lavi_27_" />
        <A name="Toss" href="https://toss.me/lavi27" />
        <A name="Email" href="mailto:lavi17945@gmail.com" />
      </div>
    </>
  )
}