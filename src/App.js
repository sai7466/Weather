
import { useEffect, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Forecast from './Forecast';
import TemperatureAndDetails from './TemperatureAndDetails';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
// import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButton from './components/TopButton';
// import getWeatherData from './services/WeatherService';
import getFormattedWeatherData from './services/WeatherService';

function App() {

  const [query , setQuery ] = useState({ q:'berlin'})
  const [units , setUnits ] = useState('metric')
  const [weather , setWeather ] = useState(null)

  useEffect(()=>{

    const fetchWeather = async ()=>{

      const message = query.q? query.q : 'current location.'
      // toast.info('fetching weather for ' + message)

      await getFormattedWeatherData({...query,units}).then( data =>{
        
        // toast.success(`Successfully fetched weather for ${data.name}, ${data.country}`)

        setWeather(data)
      })
      
    }
  
    fetchWeather();
  },[query,units]) 

  const formatBackground = () =>{
    if (!weather) return 'from-cyan-700 to-blue-700'
    const threshold = units === 'metric'? 30:70
    if (weather.temp <= threshold) return ' from-cyan-700 to-blue-700'

    return 'from-yellow-700 to-orange-700'
}

  return (
    // <div className="App">
      <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br
      from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 ${formatBackground()}`} >
        <TopButton setQuery={ setQuery} />
        <Inputs setQuery={ setQuery} units={ units} setUnits={ setUnits} />

        { weather && (
          <div>
            <TimeAndLocation weather={weather} />
            <TemperatureAndDetails weather={weather} />
            <Forecast title='hourly forecast' items={weather.hourly}/>
            <Forecast title='daily forecast' items={weather.daily}/>

          </div>
        )}

        {/* <ToastContainer autoClose={5000} theme='colored' newestOnTop={true} /> */}

        
      </div>
    // </div>
  );
}

export default App;
