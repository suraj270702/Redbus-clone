import React from 'react'

const Rating = () => {
  return (
    <>
    
    <div className='container'>
        <div className='wrapper '>
            <div className='ml-[470px] mb-10'>
            <img src='https://s1.rdbuz.com/web/images/homeV2/primoSection/primoTopBanner.svg' alt='' />
            </div>

            <div className='flex gap-10 mb-10 ml-[200px]'>
                <div className=' w-[352px] h-[170px] bg-custom rounded-[20px] px-4 py-4 flex gap-6'>
                    <div className='left mt-5 w-1/3'>
                        <img src='https://s2.rdbuz.com/web/images/homeV2/primoSection/primoSubImg1.svg' className='w-full' alt='' />

                    </div>
                    <div className='right w-2/3'>
                       <h1 className='text-[25px] leading-7 text-white font-bold'>1 of 5 buses qualify</h1>
                       <p className='text-[14px] text-white font-[400] mt-4'>
                       Primo’s strict safety qualification ensures a safer travel for you
                       </p>
                    </div>
                </div>
                <div className=' w-[352px] h-[170px] bg-custom rounded-[20px] px-4 py-4 flex gap-6'>
                    <div className='left mt-5 w-1/3'>
                        <img src='https://s3.rdbuz.com/web/images/homeV2/primoSection/primoSubImg2.svg' className='w-full' alt='' />

                    </div>
                    <div className='right w-2/3'>
                       <h1 className='text-[25px] leading-7 text-white font-bold'>Preferred by 90%</h1>
                       <p className='text-[14px] text-white font-[400] mt-4'>
                       90% of travellers re-book Primo buses for its punctuality and comfort
                       </p>
                    </div>
                </div>
                <div className=' w-[352px] h-[170px] bg-custom rounded-[20px] px-4 py-4 flex gap-6'>
                    <div className='left mt-5 w-1/3'>
                        <img src='https://s2.rdbuz.com/web/images/homeV2/primoSection/primoSubImg3.svg' className='w-full' alt='' />

                    </div>
                    <div className='right w-2/3'>
                       <h1 className='text-[25px] leading-7 text-white font-bold'>9 Lac+ monthly travellers</h1>
                       <p className='text-[14px] text-white font-[400] mt-4'>
                       In 2022, 9 Lac+ people traveled with Primo every month
                       </p>
                    </div>
                </div>

            </div>


        </div>

    </div>

    </>
  )
}

export default Rating