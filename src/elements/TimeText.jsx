import { useState, useEffect } from "react"
import moment from "moment";

export default function index() {
  const [time, setTime] = useState(moment().format("YYYY.MM.DD-HH:mm:ss"));

  useEffect(() => {
    setInterval(() => {
      setTime(moment().format("YYYY.MM.DD-HH:mm:ss"));
    }, 1000);
  }, []);

  return (
    <p>2016.02.24 ~ {time}</p>
  )
}