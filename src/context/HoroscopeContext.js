import App from "../App";
import React, { useState } from "react";
import HoroscopeData from "../data/horoscopes";
export const HoroscopeContext = React.createContext();

export default function HoroscopeProvider(props) {
  const [getter, setSign] = useState("Aries");
  const signInfo = HoroscopeData[getter];

  return (
    <HoroscopeContext.Provider value={{ signInfo, setSign }}>
      {props.children}
    </HoroscopeContext.Provider>
  );
}
