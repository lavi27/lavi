import { useState, useEffect } from "react"
import Page from './Page';

export default function index() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    function loadImage() {
      return new Promise((resolve, reject) => {

        const loadImg = new Image()
        loadImg.src = "/logo.png"

        loadImg.onload = () => resolve()
        loadImg.onerror = err => reject(err)
      })
    }
    
    if (location.pathname !== '/bg') {
      loadImage()
        .then(() => {
          setTimeout(() => {
            setLoaded(true)
          }, 200);
        })
        .catch(err => console.log("Failed to load images", err))
    }
  }, [])

  return (
    <>
      {(loaded) ? <Page /> : ''}
    </>
  )
}