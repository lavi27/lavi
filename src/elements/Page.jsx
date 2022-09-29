import { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom'
import TimeText from './TimeText';

export default function index() {
  const [showLinks, setShowLinks] = useState(false);
  const [hoveredItem, setHoveredItem] = useState('');
  const [viewMode, setViewMode] = useState({title: false, links: true});
  const [asd, setAsd] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setShowLinks(true);
    }, 100);

    if (location.pathname === '/links') {
      setViewMode({title: false, links: true, contacts: false});
    } else {
      setViewMode({title: true, links: true, contacts: true});
    }
  }, []);

  function A({ children, name, href }) {
    return (
      <a
        href={href}
        target='_blank'
        onMouseEnter={()=>{setHoveredItem(name)}}
        onMouseLeave={()=>{setHoveredItem('')}}
      >
        {(hoveredItem == name) ?
          <svg className="arrow" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z"/></svg>
        : ''}

        <span>
          {children}
        </span>
      </a>
    )
  }

  return (
    <>
      {viewMode.title ?
      <div className="title_wrap blink1">
        <div>
          <hr />
          <p>web developer, graphic designer, creative dreamer</p>
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
      : null}

      <div className={'contents' + (showLinks ? ' blink2 show' : '')}>
        {viewMode.links ?
        <div className='links'>
          <A name="Github" href="https://github.com/lavi27">
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            깃허브
          </A>
          <A name="Portfolio" href="https://lavi27.notion.site/33913aa09cd24ccc8c9d68c779a975f6">
            <svg className="icon" height="2500" width="2500" xmlns="http://www.w3.org/2000/svg" viewBox="12 0.18999999999999906 487.619 510.941"><path d="M96.085 91.118c15.81 12.845 21.741 11.865 51.43 9.884l279.888-16.806c5.936 0 1-5.922-.98-6.906L379.94 43.686c-8.907-6.915-20.773-14.834-43.516-12.853L65.408 50.6c-9.884.98-11.858 5.922-7.922 9.883zm16.804 65.228v294.491c0 15.827 7.909 21.748 25.71 20.769l307.597-17.799c17.81-.979 19.794-11.865 19.794-24.722V136.57c0-12.836-4.938-19.758-15.84-18.77l-321.442 18.77c-11.863.997-15.82 6.931-15.82 19.776zm303.659 15.797c1.972 8.903 0 17.798-8.92 18.799l-14.82 2.953v217.412c-12.868 6.916-24.734 10.87-34.622 10.87-15.831 0-19.796-4.945-31.654-19.76l-96.944-152.19v147.248l30.677 6.922s0 17.78-24.75 17.78l-68.23 3.958c-1.982-3.958 0-13.832 6.921-15.81l17.805-4.935V210.7l-24.721-1.981c-1.983-8.903 2.955-21.74 16.812-22.736l73.195-4.934 100.889 154.171V198.836l-25.723-2.952c-1.974-10.884 5.927-18.787 15.819-19.767zM42.653 23.919l281.9-20.76c34.618-2.969 43.525-.98 65.283 14.825l89.986 63.247c14.848 10.876 19.797 13.837 19.797 25.693v346.883c0 21.74-7.92 34.597-35.608 36.564L136.64 510.14c-20.785.991-30.677-1.971-41.562-15.815l-66.267-85.978C16.938 392.52 12 380.68 12 366.828V58.495c0-17.778 7.922-32.608 30.653-34.576z"/></svg>
            포트폴리오
          </A>
          <A name="Twitter" href="https://twitter.com/lavi_27_">
            
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            트위터
          </A>
          <A name="Email" href="mailto:lavi17945@gmail.com">
            
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M27,26H5a3,3,0,0,1-3-3V9A3,3,0,0,1,5,6H27a3,3,0,0,1,3,3V23A3,3,0,0,1,27,26ZM5,8A1,1,0,0,0,4,9V23a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V9a1,1,0,0,0-1-1Z"/><path d="M16,17a1,1,0,0,1-.55-.17l-12-8A1,1,0,0,1,4.55,7.17l12,8A1,1,0,0,1,16,17Z"/><path d="M16,17a1,1,0,0,1-.56-1.83l12-8a1,1,0,0,1,1.11,1.66l-12,8A1,1,0,0,1,16,17Z"/></svg>
            이메일
          </A>
        </div>
        : null}
        {viewMode.contacts ?
        <div className="contacts">
          <div
            className={asd ? 'copyed' : ''}
            onClick={() => {
              navigator.clipboard.writeText('라비 lavi#2253')
              setAsd(true);
            }}
            onAnimationEnd={() => {
              setAsd(false);
            }}
          >
            <svg viewBox="0 -28.5 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M217 17c-17-8-34-14-53-17l-7 14c-19-3-39-3-58 0L92 0C73 3 56 9 39 17 6 67-3 116 1 165c22 17 44 27 65 33l14-23-22-10 5-5c42 20 88 20 130 0l5 5-22 10 14 23c21-6 43-16 65-33 5-56-9-105-38-148ZM85 135c-12 0-23-12-23-26s11-26 23-26c13 0 24 12 23 26 1 14-10 26-23 26Zm86 0c-13 0-23-12-23-26s10-26 23-26c12 0 23 12 23 26s-11 26-23 26Z" /></svg>
            {/* 라비 lavi#2253 */}
            {asd ? 'copyed' : '라비 lavi#2253'}
          </div>
        </div>
        : null}
      </div>
    </>
  )
}