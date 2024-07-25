const InputBox = ({
  label,
  amount,
  setAmount,
  defaultCurrency,
  setCurrency,
  currencyOptions,
  disabled = false,
}) => {
  return (
    <div className="w-full h-[120px] flex justify-between items-center font-sans bg-white border rounded-xl px-5">
      <div className="h-[80px] flex flex-col justify-between">
        <div className="text-2xl text-gray-400">
          <label htmlFor={label} className="cursor-pointer">
            {label}
          </label>
        </div>
        <div>
          <input
            type="number"
            name={label}
            id={label}
            className="text-black outline-none text-2xl cursor-pointer bg-white"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            disabled={disabled}
          />
        </div>
      </div>

      <div className="h-[80px] flex flex-col justify-between items-end">
        <div className="text-2xl text-gray-400">Currency Type</div>
        <div>
          <select
            name="currencyType"
            id="currencyType"
            className="outline-none cursor-pointer border rounded-xl text-xl w-[110px] h-[40px] pl-[3px] mt-[12px] bg-gray-100 hide__scrollbar"
            value={defaultCurrency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            {Object.keys(currencyOptions).map((currency) => {
              return (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
