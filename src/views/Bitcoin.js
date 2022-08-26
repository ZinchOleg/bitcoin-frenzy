import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { bitcoinPriceSelector, decrease, increase } from '../redux/slices/bitcoinPrice'
import { decreaseBitcoinPriceMessage, increaseBitcoinPriceMessage } from '../redux/slices/history'

export default function Bitcoin() {

  const dispatch = useDispatch()
  const price = useSelector(bitcoinPriceSelector)

  return (
    <div className='px-10 flex flex-col items-center justify-center gap-y-10 h-full'>

      <div className='px-12 py-8 bg-[#121212CC] backdrop-blur drop-shadow-[0_0_15px_rgba(255, 249, 47,1)] '>
        <h1 className='grow text-5xl text-[#ffdf2e] drop-shadow-[0_0_35px_rgba(255, 249, 47,1)]'>Bitcoin price is {price}$</h1>
      </div>
      
      <div className='flex items-center gap-x-5 text-2xl'>
        <button
          type='button'
          onClick={() => {
            dispatch(increase())
            dispatch(increaseBitcoinPriceMessage())
          }}
          className='px-12 py-8 bg-[#121212CC] backdrop-blur w-72 group hover:bg-[#f3b841] hover:text-[#121212] transition-all'
        >
          <span className='text-[#ffdf2e] group-hover:text-[#121212] transition-all'>Increase</span> the price of Bitcoin by <span className='text-[#ffdf2e] group-hover:text-[#121212] transition-all'> 1000 </span> USD
        </button>
        <button
          type='button'
          onClick={() => {
            dispatch(decrease())
            dispatch(decreaseBitcoinPriceMessage(price))
          }}
          className='px-12 py-8 bg-[#121212CC] backdrop-blur w-72 group hover:bg-[#f3b841] hover:text-[#121212] transition-all'
        >
          <span className='text-[#ffdf2e] group-hover:text-[#121212] transition-all'>Decrease</span> the price of Bitcoin by <span className='text-[#ffdf2e] group-hover:text-[#121212] transition-all'> 1000 </span> USD
        </button>
      </div>

    </div>
  )
}