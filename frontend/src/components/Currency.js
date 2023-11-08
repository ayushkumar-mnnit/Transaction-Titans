import React, { useState } from 'react';

const Currency = () => {
  const [fromCurrency, setFromCurrency] = useState('INR');
  const [toCurrency, setToCurrency] = useState('INR');
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState('');

  async function convertCurrency() {
    const url = `https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${fromCurrency}&want=${toCurrency}&amount=${amount}`;

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY',
        'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setResult(data.new_amount);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      
      <h1 className="heading">
        Currency Converter
        <img className="tag" src="https://cdn-icons-png.flaticon.com/128/925/925748.png" alt="notfound" />
      </h1>
      <div className="converter">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)} id="fromCurrency">
      
            <option value="INR">Indian rupee</option>
            <option value="USD">U.S. dollar</option>
            <option value="EUR">Euro</option>
            <option value="JPY">Japanese yen</option>
            <option value="AUD">Australian dollar</option>
            <option value="CAD">Canadian dollar</option>
            <option value="HKD">Hong Kong dollar</option>
            <option value="SGD">Singapore dollar</option>
            <option value="SEK">Swedish krona</option>
            <option value="KRW">South Korean won</option>
            <option value="NOK">Norwegian krone</option>
            <option value="NZD">New Zealand dollar</option>
            <option value="MXN">Mexican peso</option>
            <option value="TWD">New Taiwan dollar</option>
            <option value="ZAR">South African rand</option>
            <option value="BRL">Brazilian real</option>
            <option value="DKK">Danish krone</option>
            <option value="IDR">Indonesian rupiah</option>
            <option value="AED">UAE dirham</option>
            <option value="RUB">Russian ruble</option>
        
        </select>
    
        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} id="toCurrency">
       
            <option value="INR">Indian rupee</option>
            <option value="USD">U.S. dollar</option>
            <option value="EUR">Euro</option>
            <option value="JPY">Japanese yen</option>
            <option value="AUD">Australian dollar</option>
            <option value="CAD">Canadian dollar</option>
            <option value="HKD">Hong Kong dollar</option>
            <option value="SGD">Singapore dollar</option>
            <option value="SEK">Swedish krona</option>
            <option value="KRW">South Korean won</option>
            <option value="NOK">Norwegian krone</option>
            <option value="NZD">New Zealand dollar</option>
            <option value="MXN">Mexican peso</option>
            <option value="TWD">New Taiwan dollar</option>
            <option value="ZAR">South African rand</option>
            <option value="BRL">Brazilian real</option>
            <option value="DKK">Danish krone</option>
            <option value="IDR">Indonesian rupiah</option>
            <option value="AED">UAE dirham</option>
            <option value="RUB">Russian ruble</option>
           
            
        </select> 
    
        <button id="convert" onClick={convertCurrency}>
          Convert
        </button>
        <h1 className="result">
          <span id="result">Result: {result}</span>
        </h1>
      </div>
    </>
  );
};

export default Currency;
