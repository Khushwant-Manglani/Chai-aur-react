import { useState, useCallback, useEffect, useMemo, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [symbolAllowed, setSymbolAllowed] = useState(false);
  const passwordRef = useRef(null);

  /*
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let newPassword = "",
      str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (symbolAllowed) str += ":;<=>?@[]^_`{|}~";

    for (let i = 0; i < length; ++i) {
      let charIdx = Math.floor(Math.random() * str.length);
      newPassword += str.charAt(charIdx);
    }

    console.log(newPassword);

    setPassword(newPassword);
  }, [length, numberAllowed, symbolAllowed, setPassword]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, symbolAllowed]);  
  */

  const password = useMemo(() => {
    let newPassword = "",
      str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (symbolAllowed) str += ":;<=>?@[]^_`{|}~";

    for (let i = 0; i < length; ++i) {
      let charIdx = Math.floor(Math.random() * str.length);
      newPassword += str.charAt(charIdx);
    }

    console.log(newPassword);

    return newPassword;
  }, [length, numberAllowed, symbolAllowed]);

  const copyTextToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="h-screen w-screen bg-[#000] px-[500px] py-10">
      <div className="flex flex-col gap-4 items-center w-full max-w-lg rounded-2xl px-8 py-4 text-orange-500 bg-gray-800 shadow-md font-sans">
        <div className="text-3xl text-center text-gray-300">
          Password Generator
        </div>
        <div className="flex">
          <div>
            <input
              type="text"
              placeholder="Password"
              className="outline-none text-lg px-3 w-[400px] py-2 border rounded-l-[10px]"
              value={password}
              readOnly
              ref={passwordRef}
            />
          </div>
          <div>
            <button
              className="bg-blue-700 text-lg text-white border border-blue-700 rounded-r-[10px] py-2 px-4 outline-none cursor-pointer hover:bg-blue-800"
              onClick={copyTextToClipboard}
            >
              copy
            </button>
          </div>
        </div>
        <div className="w-full mr-4 flex gap-3 items-center">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              name="length"
              id="length"
              min={6}
              max={100}
              onChange={(e) => setLength(e.target.value)}
              className="cursor-pointer"
            />
            <label htmlFor="length">Length ({length})</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name="number"
              id="number"
              onChange={() => setNumberAllowed((prevState) => !prevState)}
              className="cursor-pointer"
            />
            <label htmlFor="number">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name="symbol"
              id="symbol"
              onChange={() => setSymbolAllowed((prevState) => !prevState)}
              className="cursor-pointer"
            />
            <label htmlFor="number">Symbols</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
