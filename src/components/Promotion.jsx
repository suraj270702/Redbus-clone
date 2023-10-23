import React from 'react'

import promotion from '../assets/8edd6788-4bd6-4b21-aeee-ad4ca715f052.jpg'

const Promotion = () => {
  return (
    <div className='mt-[200px] mr-6 flex items-center justify-center'>
        <img className='max-w-[900px] h-auto object-contain rounded-md ' src={promotion} alt='' />
    </div>
  )
}

export default Promotion