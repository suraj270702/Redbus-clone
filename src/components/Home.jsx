import React from 'react'
import bus from '../assets/bus.png'
import right from '../assets/right-arrow.png'
import calendar from '../assets/calendar.png'
import tile from '../assets/tile-80X80.png'
import copy from '../assets/copy.png'
const Home = () => {
  return (
    <div className='home w-[100%]  h-[500px] px-6 py-6 relative'>
        <h1 className='text-[40px] text-[#494949] leading-6 font-bold mt-4 text-center'>India's No. 1 Online Bus Ticket Booking Site</h1>
        <div className='flex items-center justify-center'>
           
            <div className='w-[1100px] h-[120px] bg-[#fff] rounded-[50px] mt-6 flex '>

                <div className='min-w-[300px] border border-solid border-r-2 flex items-center ml-8 border-l-0 relative'>
                   <div>
                    <img className='custom w-[40px] bg-none' src={bus} alt=' ' />
                   </div>
                   <div className='ml-4 -mt-6 flex flex-col'>
                    <h1 className='text-[20px] text-gray-400 leading-4 font-[400]'>From</h1>
                    <input type='text' className='mt-4 focus:outline-none text-[20px] text-black font-bold' />
                   </div>
                  <div className=' top-[40px] -right-5 absolute'>
                  <div className='px-2 py-2 border border-solid border-black rounded-[50%] flex items-center justify-center '>
                    <img className='w-[20px]' src={right} alt='' />
                   </div>
                  </div>
                </div>
                <div className='min-w-[250px] border border-solid border-r-2 border-l-0 flex items-center pl-8'>
                <div>
                    <img className='custom w-[40px] bg-none' src={bus} alt=' ' />
                   </div>
                   <div className='ml-4 -mt-6 flex flex-col'>
                    <h1 className='text-[20px] text-gray-400 leading-4 font-[400]'>To</h1>
                    <input type='text' className='mt-4 focus:outline-none text-[20px] text-black font-bold' />
                   </div>
                </div>
                <div className='min-w-[200px] border border-solid border-r-2 border-l-0 flex items-center pl-8'>

                  <div className='flex items-center gap-4'>
                   <img className='w-[20px] cursor-pointer' src={calendar} alt='' />
                   <span className='text-[20px] text-gray-400 leading-4 font-[400]'>Date</span>
                  </div>

                </div>
                <div className='min-w-[150px] border border-solid border-r-0 pl-6  rounded-l-0  flex items-center justify-center'>
                  <h1 className='text-[20px] text-black leading-4 font-bold'>Search Buses</h1>
                </div>


            </div>

        </div>
        <div className=' absolute flex items-center justify-center top-[350px] left-[200px]'>
          <div className='w-[1000px] h-[300px] bg-[white] rounded-[30px] px-8 py-4 shadow-md'>
            <h1 className='text-[30px] leading-4 font-[400] text-gray-600 mt-4 mb-4 text-left'>Trending Offers</h1>
            <div className='flex gap-4'>
            <div className='max-w-[300px] h-[210px] rounded-[20px] bg-blue-400 px-4 py-4 flex gap-4'>
             <img src={tile} className='w-[80px] h-[80px] mt-8 '/>
             <div className='flex flex-col ml-3 '>
              <span className='text-[14px] w-fit text-black-400 font-[400] bg-gray-200 px-2 py-1 rounded-[30px]'>Bus</span>
              <span className='text-[18px] font-bold text-white mt-3 '>Save upto Rs 250 on bus tickets</span>
              <span className='text-[14px] font-[400] text-gray-300 mt-2'>valid till 31st oct</span>
              <div className='mt-2 flex items-center gap-4'>
                <span className='text-[14px] text-gray-300 px-3 py-2 border border-dashed '>First</span>
                <img src={copy} className='w-[15px] ' alt=' ' />
              </div>
             </div>
           </div>
           <div className='max-w-[300px] h-[210px] rounded-[20px] bg-blue-400 px-4 py-4 flex gap-4'>
             <img src={tile} className='w-[80px] h-[80px] mt-8 '/>
             <div className='flex flex-col ml-3 '>
              <span className='text-[14px] w-fit text-black-400 font-[400] bg-gray-200 px-2 py-1 rounded-[30px]'>Bus</span>
              <span className='text-[18px] font-bold text-white mt-3 '>Save upto Rs 250 on bus tickets</span>
              <span className='text-[14px] font-[400] text-gray-300 mt-2'>valid till 31st oct</span>
              <div className='mt-2 flex items-center gap-4'>
                <span className='text-[14px] text-gray-300 px-3 py-2 border border-dashed '>First</span>
                <img src={copy} className='w-[15px] ' alt=' ' />
              </div>
             </div>
           </div>
           <div className='max-w-[300px] h-[210px] rounded-[20px] bg-blue-400 px-4 py-4 flex gap-4'>
             <img src={tile} className='w-[80px] h-[80px] mt-8 '/>
             <div className='flex flex-col ml-3 '>
              <span className='text-[14px] w-fit text-black-400 font-[400] bg-gray-200 px-2 py-1 rounded-[30px]'>Bus</span>
              <span className='text-[18px] font-bold text-white mt-3 '>Save upto Rs 250 on bus tickets</span>
              <span className='text-[14px] font-[400] text-gray-300 mt-2'>valid till 31st oct</span>
              <div className='mt-2 flex items-center gap-4'>
                <span className='text-[14px] text-gray-300 px-3 py-2 border border-dashed '>First</span>
                <img src={copy} className='w-[15px] ' alt=' ' />
              </div>
             </div>
           </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Home