import {React, useState } from 'react';
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
      className='w-full h-screen bg-cover bg-center flex justify-center items-center'
      style={{backgroundImage: `url('https://images.pexels.com/photos/13057867/pexels-photo-13057867.jpeg')`}}
    > 

      <div className='w-full '>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-6 backdrop-blur-sm bg-white/30'>
          <form 
          className='flex flex-col gap-4'
            onSubmit={(e)=>{
            e.preventDefault();
            convert();
          }}>
            <div className='w-full mb-1'>
              <InputBox
              label="from"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency)=>setFrom(currency)}
              onAmountChange={(amount)=>setAmount(amount)}
              selectedCurrency={from}
              />
            </div>

            <div  className='relative w-full h-0.5'>
              <button 
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600  text-white px-2 py-0.5'
              onClick={swap}>Swap</button>
            </div>

            <div className='w-full mb-1'>
              <InputBox
              label="to"
              currencyOptions={options}
              amount={convertedAmount}
              onCurrencyChange={(currency)=>setTo(currency)}
              selectedCurrency={to}
              amountDisabled
              />
            </div >

            <div className='w-full'>
              <button className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg' type='submit' >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  </>
  );
}



export default App;