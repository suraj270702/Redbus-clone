import React, { useState } from 'react'

const FAQ = () => {
    
      const questions = [
        {
            question : 'Can I track the location of my booked bus online?',
            answer : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, architecto blanditiis! Dignissimos, cumque voluptate iste doloremque iusto quidem perferendis earum delectus, ipsa cum sequi voluptas pariatur a, id voluptatum dolorem!',
            active : false
        },
        {
            question : 'Can I track the location of my booked bus online?',
            answer : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, architecto blanditiis! Dignissimos, cumque voluptate iste doloremque iusto quidem perferendis earum delectus, ipsa cum sequi voluptas pariatur a, id voluptatum dolorem!',
            active : false
        },
        {
            question : 'Can I track the location of my booked bus online?',
            answer : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, architecto blanditiis! Dignissimos, cumque voluptate iste doloremque iusto quidem perferendis earum delectus, ipsa cum sequi voluptas pariatur a, id voluptatum dolorem!',
            active : false
        },
        {
            question : 'Can I track the location of my booked bus online?',
            answer : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, architecto blanditiis! Dignissimos, cumque voluptate iste doloremque iusto quidem perferendis earum delectus, ipsa cum sequi voluptas pariatur a, id voluptatum dolorem!',
            active : false
        }
      ]
      const [active,setActive] = useState(questions)
    const toggleBlock = (index) => {
        const copy = [...active]
        copy[index].active = !copy[index].active
        setActive(copy)
      };
  return (
    <>
    <div className='container mt-32'>
        <div className="wrapper ml-10">
            <span className=' text-3xl font-semibold '>Frequently Asked Questions</span>
            <div className='mt-10 mb-4 flex gap-10'>
                <span className='text-lg text-gray-400 cursor-pointer hover:underline hover:underline-red underline-offset-2 hover:decoration-red-600 hover:decoration-4'>General</span>
                <span className='text-lg text-gray-400 cursor-pointer'>Ticket-related</span>
                <span className='text-lg text-gray-400 cursor-pointer'>Payment</span>
                <span className='text-lg text-gray-400 cursor-pointer'>Cancellation & Refund</span>
                <span className='text-lg text-gray-400 cursor-pointer'>insurance</span>

            </div>
            {
                active.map((item,i)=>(
                    <div onClick={()=>toggleBlock(i)}  className=' w-full min-h-16 border border-solid border-gray-200 rounded-md mt-14 px-4 py-4 cursor-pointer max-h-64'>
                <div className='flex justify-between pt-2'>
                    <span className='text-lg'>{item.question}?</span>
                    <div className='px-6 py-2 border border-solid border-gray-200 rounded-md cursor-pointer -mt-2'>
                    {
                        item.active ? <span className='text-lg'>-</span> : <span className='text-lg'>&#43;</span>
                    }
                    </div>

                </div>
                {
                    item.active && (
                        <span>{item.answer}</span>
                    )
                }
                
            </div>
                ))
            }
            
        </div>
        
        
    </div>
    </>
  )
}

export default FAQ