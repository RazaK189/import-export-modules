import React from "react";
import ReactDOM from "react-dom";
import pi, { doublePi, tripplePi } from "./math";
//can also use Import * as pi from "./math.js"

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{tripplePi()}</li>
  </ul>,
  document.getElementById("root")
);

//using wild cards it will be pi.defualt, pi.doublePi
//single export defults is more beneifcial wildacrds tend to be discouraged.
