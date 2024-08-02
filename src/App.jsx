import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomDropdown from "./CustomDropDown";
import Header from "./Header";

function App() {
  const [amount, setAmount] = useState(1);
  const [toSelectedCurrency, setToSelectedCurrency] = useState("INR");
  const [fromSelectedCurrency, setFromSelectedCurrency] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    const getExchangeRate = async () => {
      if (fromSelectedCurrency && toSelectedCurrency) {
        try {
          let url = `https://api.exchangerate-api.com/v4/latest/${fromSelectedCurrency}`;
          const response = await axios.get(url);
          setExchangeRate(response.data.rates[toSelectedCurrency]);
        } catch (error) {
          console.error("Error fetching exchange rate:", error);
        }
      }
    };
    getExchangeRate();
  }, [fromSelectedCurrency, toSelectedCurrency]);

  useEffect(() => {
    if (exchangeRate !== null) {
      setConvertedAmount((amount * exchangeRate).toFixed(2));
    }
  }, [amount, exchangeRate]);

  const handleAmountChange = (e) => {
    const value = parseFloat(e.target.value);
    setAmount(isNaN(value) ? 0 : value);
  };

  const handleToCurrencyChange = (value) => {
    setToSelectedCurrency(value);
  };

  const handleFromCurrencyChange = (value) => {
    setFromSelectedCurrency(value);
  };

  return (
    <>
      <Header />
      <div className="w-full bg-gradient-to-r from-purple-400 to-red-500 rounded-2xl p-5 mb-10 mt-4 md:mt-8 lg:mt-10">
      <div className=" mx-auto">
        <h2 className="font-extrabold uppercase text-3xl text-center p-2 text-white mb-2">
          Currency Converter
        </h2>
      </div>
      <div className="mt-3 bg-white w-full lg:w-[500px] mx-auto p-5 sm:p-10 rounded-2xl shadow-lg">
        <label htmlFor="amt" className="mb-2 block text-xl sm:text-2xl font-bold text-gray-700">
            Amount:
        </label>
        <div className="mt-2 p-4">
          <input
            type="number"
            id="amt"
            value={amount}
            onChange={handleAmountChange}
            className="w-full sm:w-3/4 flex items-center p-2 border border-gray-400 outline-none focus:border-teal-400"
          />
        </div>
      </div>

      <div className="flex flex-wrap pb-8 lg:pb-14 justify-center">
        <div className="w-full lg:w-1/2  py-5 lg:p-5">
          <div className="bg-white p-5 sm:p-10 rounded-2xl shadow-lg">
            <label
              htmlFor="fromSelectedCurrency"
              className="mb-2 block text-xl sm:text-2xl font-bold text-gray-700">
              From Currency:
            </label>
            <div className="p-4">
              <CustomDropdown
                id="fromSelectedCurrency"
                selectedValue={fromSelectedCurrency}
                onChange={handleFromCurrencyChange}
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2  py-5 lg:p-5">
          <div className="bg-white p-5 sm:p-10 rounded-2xl shadow-lg">
            <label
              htmlFor="toCurrency"
              className="mb-2 block text-xl sm:text-2xl font-bold text-gray-700">
              To Currency:
            </label>
            <div className="p-4">
              <CustomDropdown
                selectedValue={toSelectedCurrency}
                onChange={handleToCurrencyChange}
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 xl:w-1/3 py-5 lg:p-5">
          <div className="bg-white p-5 sm:p-10 rounded-2xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-700">
              Converted Amount
            </h3>
            <div className="p-2 mt-4">
              <p className="m-2 text-center text-lg sm:text-xl font-semibold border border-teal-400 p-4">

                <span className="lg:font-bold lg:text-2xl font-semibold text-xl p-1">{convertedAmount}</span>{" "}
                <span className="lg:font-semibold lg:text-xl font-medium  p-2">{toSelectedCurrency}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      

      
    </>
    

    
  );
}

export default App;
