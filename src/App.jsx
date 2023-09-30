import { useState } from "react";



const Color = ({color, setSelectedColor, selectColor}) => {

  
  return (
    <div onClick={()=> {setSelectedColor(color)}} className={color} >{setSelectedColor}</div>
  )
}

const App = () => {

  const [selectedColor, setSelectedColor] = useState("")
  const selectColor = (colorName) => {

    setSelectedColor(colorName);

  }
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="orange" setSelectedColor={setSelectedColor} selectColor={selectColor}  />
        <Color color="yellow" setSelectedColor={setSelectedColor} selectColor={selectColor}  />
        <Color color="green"  setSelectedColor={setSelectedColor} selectColor={selectColor}  />
      </div>
    </div>
  );
};

export default App;
