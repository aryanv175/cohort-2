import { useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [exchangeData, setExchangeData] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});
  
  useEffect(()=> {
      setExchangeData({ income: 100 
      });
  }, [])

  useEffect(()=> {
    setExchange2Data({ income: 100 
    });
  }, [])

  useEffect(()=> {
    setTimeout(() => {
      setBankData({
        returns: 100
      });
    }, 5000);
  }, [])

  const cryptoReturns = useMemo(() => {
    return exchangeData.income + exchange2Data.income;
  }, [exchangeData, exchange2Data])


  const incomeTax = (bankData.returns + cryptoReturns) * 0.3;

  return (
    <div>
        hi there, your income tax returns are {incomeTax}
    </div>
  )
}

export default App
