import React from 'react'
import rv from '../assets/ryde_vertical.svg'
import rail from '../assets/rail_vertical.svg'
import ryde_car from '../assets/ryde_car.svg'
import ryde_car_hourly from '../assets/ryde_car_hourly.svg'
import ryde_airport from '../assets/ryde_airport_transport.svg'
const Featured = () => {
  return (
    <div className='container px-8 py-8 mt-20 ml-16'>

        <div className='flex gap-[70px] '>
            <div className='left w-[600px]'>
              <h1 className='text-[40px] '>NOW, <h1 className='text-[40px] font-bold'>GET MORE THAN JUST BUS</h1> TICKETS WITH REDBUS!</h1>
              <div className='mt-4 ml-0 flex  justify-between'>
                <div className='flex items-center gap-4 px-4 py-4 hover:bg-gray-200 rounded-md cursor-pointer'>
                    <img className='w-[50px]' src={rv} alt='' />
                    <span className='text-[20px] font-[400] text-gray-400'>Cab/Bus Rental</span>

                </div>
                <div className='mt-4 text-gray-400'>
                    |
                </div>
                <div className='flex items-center gap-4 px-4 py-4 hover:bg-gray-200 rounded-md cursor-pointer'>
                    <img className='w-[50px]' src={rail} alt='' />
                    <span className='text-[20px] font-[400] text-gray-400'>Rail Tickets</span>

                </div>

              </div>
              <h3 className='text-[18px] mt-4 text-gray-400 font-[400]'>Rent Cabs, Tempo Travellers & Buses with best drivers</h3>
              <div className='mt-6 flex items-center gap-6'>
                <img src={ryde_car} alt='' />
                <h1 className='text-[20px] font-bold '>Outstation</h1>
              </div>
              <div className='mt-6 flex items-center gap-6'>
                <img src={ryde_car_hourly} alt='' />
                <h1 className='text-[20px] font-bold '>Hourly Rentals</h1>
              </div>
              <div className='mt-8 flex items-center gap-6'>
                <img src={ryde_airport} alt='' />
                <h1 className='text-[20px] font-bold '>Airport Transfers</h1>
              </div>
              <button className='px-6 py-4 text-[16px] font-bold text-white bg-red-600 rounded-md mt-6'>Book Cab/Bus Rental</button>
            </div>
            <div className='right-custom w-[600px] relative '>
                 <div className='absolute -left-[90px] top-[100px] rounded-md'>
                 <img  src='https://s3.rdbuz.com/web/images/homeV2/AboutUs/rydePop.svg' alt='' />
                 </div>
            </div>

        </div>

    </div>
  )
}

export default Featured