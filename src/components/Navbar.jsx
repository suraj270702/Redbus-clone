import React from 'react'
import logo from '../assets/rdc-redbus-logo.svg'
import rb from '../assets/rb_vertical.svg'
import rv from '../assets/ryde_vertical.svg'
import rail from '../assets/rail_vertical.svg'
import headphone from '../assets/headphone-symbol_27130.png'
import user from '../assets/user.png'


const Navbar = () => {
  return (
    <section >
        <div className="container w-full max-w-[1400px] px-8 py-4">
            <div className="flex justify-between items-center ">
                <div className=" flex items-center gap-[150px]">
                    <div>
                        <img src={logo} alt='' />
                    </div>
                    <div className='flex gap-[60px] '>
                        <div className='flex flex-col items-center px-2 py-2 rounded-lg hover:bg-[#dbdada] cursor-pointer'>
                        <img src={rb} />
                        <span className='text-[#848383] mt-2'>Bus Tickets</span>
                        </div>
                        <div className='flex flex-col items-center px-2 py-2 rounded-lg hover:bg-[#dbdada] cursor-pointer'>
                        <img src={rv} />
                        <span className='text-[#848383] mt-2'>Cab Rental</span>
                        </div>
                        <div className='flex flex-col items-center px-2 py-2 rounded-lg hover:bg-[#dbdada] cursor-pointer'>
                        <img src={rail} />
                        <span className='text-[#848383] mt-2'>Rail Tickets</span>
                        </div>
                        
                    </div>
                </div>
                <div className='flex items-center gap-[20px]'>
                    <div className='flex items-center gap-[10px] px-2 py-2 rounded-lg hover:bg-[#dbdada] cursor-pointer'>
                    <div className='bg-none'>
                    <img className='w-[30px] w-full bg-none' src={headphone} alt='' />
                    </div>
                    <span className='text-[#848383]'>Help</span>
                    </div>
                    <div className='flex items-center gap-[10px] px-2 py-2 rounded-lg hover:bg-[#dbdada] cursor-pointer'>
                    <div className='bg-none'>
                    <img className='w-[30px] w-full bg-none' src={user} alt='' />
                    </div>
                    <span className='text-[#848383]'>Account</span>
                    </div>
                </div>

            </div>


        </div>

    </section>
  )
}

export default Navbar