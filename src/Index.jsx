import { useState } from "react"

export default function index() {
  const [hoveredItem, setHoveredItem] = useState('');

  function A({href, label}) {
    return (
      <a
        href={href}
        onMouseEnter={()=>{setHoveredItem(label)}}
        onMouseLeave={()=>{setHoveredItem('')}}
      >
        {label} {(hoveredItem == label) ? <>&#xf045;</> : ''}
      </a>
    )
  }

  return  (
    <div className="App">
      <div className="title_wrap">
        <div>
          <hr />
          <p>web designer, frontend dev, backend dev</p>
          <hr />
        </div>
        <div className='title'>
          <h1>LAVI</h1>
        </div>
        <div>
          <p>2016.02.24 ~</p>
          <p>©</p>
        </div>
      </div>
  
      <div className='links'>
        <A label="Github" href="https://github.com/lavi27"/>
        <A label="About" href="https://lavi27.notion.site/33913aa09cd24ccc8c9d68c779a975f6"/>
        <A label="Twitter" href="https://twitter.com/lavi_27_"/>
        <A label="Toss" href="https://toss.me/lavi27"/>
        <A label="Email" href="mailto:lavi17945@gmail.com"/>
      </div>
    </div>
  )
}