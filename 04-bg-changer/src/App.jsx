import { useState } from "react";

function App() {
  const colorArray = ["red", "blue", "green", "yellow", "orange", "gray"];
  const [color, setColor] = useState("red");

  // const changeColor = (color) => {
  //   setColor(color);
  // };

  return (
    <div
      className={`w-full h-screen flex flex-wrap justify-center items-center text-xl bg-${color}-500 duration-500`}
    >
      <div className="absolute bottom-10 flex flex-wrap justify-center items-center rounded-full py-3 px-10 border bg-white shadow-md">
        <div className="flex gap-5">
          {colorArray.map((color, index) => {
            return (
              <button
                key={index}
                className={`rounded-full border-2 shadow-md px-5 py-2 bg-${color}-500`}
                onClick={() => setColor(color)}
              >
                {color}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
