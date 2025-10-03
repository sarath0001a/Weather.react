import axios from "axios"
import { useState } from "react"

export default function Weather() {

      const [entervalue , setentervalue] = useState()
      const [Weather,setWeather] = useState() 
      const [Temperature,setTemperature] =useState()
      const [Description,setDescription] =useState()
  
       function handeleINput(event)
       {
        setentervalue(event.target.value)
       }
    const handleclick = () =>
    {
        const weather = axios(`https://api.openweathermap.org/data/2.5/weather?q=${entervalue}&appid=5bbea58cbab4edf61376840d6e885cf7`)
         weather.then(function(item)
        {
           console.log(item.data) 
           setWeather(item.data.weather[0].main)
           setDescription(item.data.weather[0].description)
           setTemperature(item.data.main.temp)
        })
    }

    return (
        <div className="bg-black p-20">
            <div className="bg-green-500 p-10 border-black rounded-md gap-2">
                
                <div className="mb-2">
                    <h1 className="text-4xl font-semibold">Weather Report</h1>
                    <p>I can give you a weather report about your city !</p>
                 </div>   

                <div>
                    <input onChange={handeleINput} value={entervalue} className="w-48 border border-black rounded-md  focus: outline-none" placeholder="Enter your City Name" style={{padding:"4px"}} ></input> <br/>
                    <button onClick={handleclick} className="bg-black text-white border rounded-md p-2 mt-2" >Get Report</button>
                </div>

                <div className="font-bold mt-1 ">
                   <p>Weather: {Weather}</p>
                   <p>Temperature:{Temperature}</p>
                   <p>Description:{Description}</p>
                </div>

            </div>
        </div>
)}