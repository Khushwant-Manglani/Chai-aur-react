import { useState, useCallback } from "react";
import { InputBox } from "./components";
import { useCurrencyInfo } from "./hooks";

function App() {
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("usd");

  const [convertedAmount, setConvertedAmount] = useState(0);
  const [convertedCurrency, setConvertedCurrency] = useState("inr");

  let currencyInfo = useCurrencyInfo(currency);

  const swapCurrency = useCallback(() => {
    setCurrency(convertedCurrency);
    setConvertedCurrency(currency);
  }, [currency, convertedCurrency, amount, convertedAmount]);

  const convertTheCurrency = useCallback(() => {
    if (currencyInfo) {
      // console.log(amount * currencyInfo[convertedCurrency]);
      setConvertedAmount(amount * currencyInfo[convertedCurrency]);
    } else {
      console.log("currencyInfo is not valid");
    }
  }, [amount, currencyInfo, convertedCurrency]);

  return (
    <div className="h-screen flex justify-center items-center bg-[url('https://images.pexels.com/photos/27263839/pexels-photo-27263839/free-photo-of-an-aerial-view-of-a-bridge-over-water.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
      <div className="w-[700px] h-[450px] flex flex-col gap-y-8 bg-transparent bg-white bg-opacity-30 border-2 border-white rounded-xl p-8">
        <div className="relative flex flex-col gap-y-4">
          <InputBox
            label={"From"}
            amount={amount}
            setAmount={setAmount}
            defaultCurrency={currency}
            setCurrency={setCurrency}
            currencyOptions={currencyInfo}
          />
          <div className="absolute top-[110px] left-[270px] ">
            <button
              className="border-2 rounded-lg text-xl text-white bg-blue-700 py-2 px-4 hover:bg-blue-800"
              onClick={swapCurrency}
            >
              swap
            </button>
          </div>
          <InputBox
            label={"To"}
            amount={convertedAmount}
            setAmount={setConvertedAmount}
            defaultCurrency={convertedCurrency}
            setCurrency={setConvertedCurrency}
            currencyOptions={currencyInfo}
            disabled={true}
          />
        </div>
        <button
          className="w-[630px] h-[80px] border-2 rounded-lg text-xl text-white bg-blue-700 hover:bg-blue-800"
          onClick={convertTheCurrency}
        >
          Convert {currency.toLocaleUpperCase()} to{" "}
          {convertedCurrency.toLocaleUpperCase()}
        </button>
      </div>
    </div>
  );
}

export default App;
