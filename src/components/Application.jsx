import React from 'react'
import star from '../assets/star.png'

const Application = () => {
  return (
    <div className='container mt-10 px-8 py-8 ml-16'>
        
        <div className='application-custom px-8 py-12 h-[500px]'>
        <h1 className='text-[40px] leading-4 text-white font-[400]'>ENJOY THE APP!</h1>
            <div className='mt-10 flex gap-12 items-center justify-center -ml-[350px]'>
            <div className='app w-[400px]'>
                
                <div className='bg-white rounded-lg max-w-[350px] px-6 py-12'>
                    <div className='flex gap-4'>
                        <img src='https://s3.rdbuz.com/web/images/homeV2/appinstall/tick.svg' />
                        <span className='text-[20px] text-[#343333] font-[300] '>Quick access</span>
                    </div>
                    <div className='flex gap-4 mt-4'>
                        <img src='https://s3.rdbuz.com/web/images/homeV2/appinstall/tick.svg' />
                        <span className='text-[20px] text-[#343333] font-[300] '>Superior live tracking </span>
                    </div>
                    <div className='flex  gap-12 mt-4'>
                        <div className='mb-3 flex flex-col items-start'>
                            <div className='flex gap-2 justify-center items-center'>
                              <h1 className='text-[20px] font-bold'>4.5</h1>
                              <img src={star} className='w-[17px] h-[17px] object-contain -mt-1' alt='' />
                            </div>
                            <span className='text-[16px] text-gray-500 font-[300] mt-2'>50M+ downloads</span>
                            <span className='text-[16px]  font-[300] mt-2'>Play store</span>
                        </div>
                        <div className='mb-3 flex flex-col items-start'>
                            <div className='flex gap-2 justify-center items-center'>
                              <h1 className='text-[20px] font-bold'>4.6</h1>
                              <img src={star} className='w-[17px] h-[17px] object-contain -mt-1' alt='' />
                            </div>
                            <span className='text-[16px] text-gray-500 font-[300] mt-2'>50M+ downloads</span>
                            <span className='text-[16px]  font-[300] mt-2'>Apple store</span>
                        </div>
                    </div>

                </div>

            </div>
            <div className='max-w-[150px]'> 
              <h1 className='text-white text-[20px] leading-5 font-[400]'>Scan to download</h1>
              <img src='https://s1.rdbuz.com/web/images/homeV2/qrCode.svg' className='mt-2' alt='' />
            </div>
            <div className='max-w-[150px]'>
            <h1 className='text-white text-[20px] leading-5 font-[400]'>Download the App on</h1>
             <img src='https://s2.rdbuz.com/web/images/homeV2/appinstall/playStore.svg' alt='' className='mt-2'/>
             <img src='https://s3.rdbuz.com/web/images/homeV2/appinstall/appStore.svg' alt='' className='mt-2'/>
            </div>
            </div>
            
        </div>

    </div>
  )
}

export default Application