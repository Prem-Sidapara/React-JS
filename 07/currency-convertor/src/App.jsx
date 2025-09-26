import {React, useState } from 'react';
import './App.css';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import {InputBox} from './components/index.js';

const App=()=> {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('INR');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = () => {
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
}

  return (
    <>
      <div
      style={{backgroundImage: `url('https://images.pexels.com/photos/13057867/pexels-photo-13057867.jpeg')`}}
      > 

        <div>
          <div >
            <form onSubmit={(e)=>{
              e.preventDefault();
              convert();
            }}>
              <div> 
                <InputBox
                  label="from"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency)=>setFrom(currency)}
                  onAmountChange={(amount)=>setAmount(amount)}
                  selectedCurrency={from}
                  />
              </div>
              <div >
                <button 
                
                onClick={swap}>Swap</button>
              </div>
            <div> 
                <InputBox
                  label="to"
                  currencyOptions={options}
                  amount={convertedAmount}
                  onCurrencyChange={(currency)=>setTo(currency)}
                  selectedCurrency={to}
                  amountDisabled
                  />
              </div>
              <button type='submit' >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
            </form>
          </div>
        </div>

      </div>
    </>
  );
}



export default App;