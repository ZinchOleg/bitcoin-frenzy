import React from 'react'
import { Link } from 'react-router-dom'

export default function InfoCard({data, icon , title, buttonText, path}) {
  return (
    <div className='bg-white w-full h-full p-5 flex flex-col gap-y-6 pb-20 text-[#111516] drop-shadow-lg relative '>
      <h3 className='font-medium text-xl'>{ title }</h3>
      <ul className='flex flex-col gap-y-5'>
        {
          data.map(item => {
            return <li key={item.id} className='flex items-center gap-x-2'>
              { icon }
              <div className='flex-col gap-y-1'>
                <p className='font-medium'>{item.name}</p>
                <p className='text-[#757474] text-sm'>Ordered {item.ordered}</p>
              </div>
            </li>
          })
        }
      </ul>
      <div className='flex justify-end gap-x-4 absolute bottom-5 right-5'>
        <Link to={path} className='px-3 py-2 text-sm font-medium text-[#E3831D] border border-[#E3831D]'>
          View All
        </Link>
        <button type='button' className='px-3 py-2 text-sm font-medium bg-[#198D99] text-[#FEFEFE]'>
          {buttonText}
        </button>
      </div>
    </div>
  )
}
