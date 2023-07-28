import React from 'react'
import { iconUrlFromCode } from './services/WeatherService'

function Forecast({title ,items}) {
    console.log(3)
    console.log(items)
  return (
    <div>
        <div className='flex items-center justify-center my-6'>
            <p className='text-white font-medium uppercase'>{title}</p>
        </div>

        <hr className='my-2' />
        

        <div className=' flex flex-row items-center justify-between text-white' >

            {items.map( item =>(
                    <div className='flex flex-col items-center justify-center' >
                        <p className='font-light text-sm' >{item.title}</p>
                        <img src={iconUrlFromCode(item.icon)} alt='image' className='w-12 my-1'/> 
                        <p className=' font-medium '>{`${item.temp.toFixed()}`}°</p>
                    </div>
                    // console.log(item.title,iconUrlFromCode(item.icon))
                ))}
            {/* {   for (let i = 0; i < items.length; i++) {
                    <div className='flex flex-col items-center justify-center' >
                        <p className='font-light text-sm' >{items[i].title}</p>
                        <img src={iconUrlFromCode(items[i].icon)} alt='image' className='w-12 my-1'/> 
                        <p className=' font-medium '>{`${items[i].temp.toFixed()}`}°</p>
                    </div>
                    // const element = array[item];
                    
                }
            } */}

                {/* <div className='flex flex-col items-center justify-center' >
                    <p className='font-light text-sm' > 04:34 PM</p>
                    <img src='https://openweathermap.org/img/wn/01d@2x.png' alt='image' className='w-12 my-1'/>
                    <p className=' font-medium '>22°</p>
                </div>  

                <div className='flex flex-col items-center justify-center' >
                    <p className='font-light text-sm' > 04:34 PM</p>
                    <img src='https://openweathermap.org/img/wn/01d@2x.png' alt='image' className='w-12 my-1'/>
                    <p className=' font-medium '>22°</p>
                </div>

                <div className='flex flex-col items-center justify-center' >
                    <p className='font-light text-sm' > 04:34 PM</p>
                    <img src='https://openweathermap.org/img/wn/01d@2x.png' alt='image' className='w-12 my-1'/>
                    <p className=' font-medium '>22°</p>
                </div>

                <div className='flex flex-col items-center justify-center' >
                    <p className='font-light text-sm' > 04:34 PM</p>
                    <img src='https://openweathermap.org/img/wn/01d@2x.png' alt='image' className='w-12 my-1'/>
                    <p className=' font-medium '>22°</p>
                </div> */}

        </div>
    </div>
  )
}

export default Forecast