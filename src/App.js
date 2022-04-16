import React, { useState } from "react";
import ColorBlock from "./ColorBlock";
import ColorForm from './ColorForm';
function App() {
	let [colors, setColors] = useState([
		"violet",
		"blue",
		"lightblue",
		"green",
		"greenyellow",
		"yellow",
		"orange",
		"red",
	]);
const addColor = (newColor) => {
  setColors([...colors, newColor])
}
	let colorMap = colors.map((color, i) => {
		return <ColorBlock key={i} color={color} />;
	});
	return (<div>
    <div className="App">{colorMap}</div>
    <ColorForm addColor={addColor} />
  </div>)
}

export default App;
