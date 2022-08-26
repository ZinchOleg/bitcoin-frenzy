import React from 'react'

export default function InfoBloc({ info: {title, text} }) {
  return (
    <div className=' flex flex-col gap-y-5 w-full'>
      <div className='flex justify-center items-center'>
        <h2 className='text-2xl font-medium'>{title}</h2>
      </div>
      <div className='w-full py-4 px-8 flex flex-col gap-y-2 bg-white drop-shadow-md'>
        <h2 className='text-lg font-medium'>{title}</h2>
        <p className='text-[#757474]'>{text}</p>
        <button type='button' className='px-3 py-2 w-36 text-center text-sm font-bold self-end text-[#E3831D] border border-[#E3831D] cursor-pointer'>
          Open Ticket
        </button>
      </div>
    </div>
  )
}
