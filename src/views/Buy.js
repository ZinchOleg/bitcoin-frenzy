import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as Cross } from '../images/Cross.svg'
import { buyBitcoin, userUsdSelector } from '../redux/slices/balance'
import { bitcoinPriceSelector } from '../redux/slices/bitcoinPrice'
import { buyBitcoinMessage } from '../redux/slices/history'


export default function Buy() {

  const dispatch = useDispatch()
  const price = useSelector(bitcoinPriceSelector)
  const usd = useSelector(userUsdSelector)

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className='px-10 flex flex-col items-center justify-center gap-y-10 h-full relative'>

      <p className='absolute top-12 text-[#ffdf2e] text-xl'>{price >= 10000? 'The prices are high, are you sure that you want to buy?' : 'Prices are low, buy more!'}</p>

      <div className='px-12 py-8 bg-[#121212CC] backdrop-blur drop-shadow-[0_0_15px_rgba(255, 249, 47,1)] '>
        <h1 className='grow text-5xl text-[#ffdf2e] text-center drop-shadow-[0_0_35px_rgba(255, 249, 47,1)]'>Bitcoin price is {price}$</h1>
      </div>
      
      <div className='flex items-center gap-x-5 text-2xl'>
        <button
          type='button'
          onClick={() => {
            if (price >= 10000) return setIsModalOpen(true)
            dispatch(buyBitcoin(price))
            dispatch(buyBitcoinMessage(price))
          }}
          className='px-12 py-8 bg-[#121212CC] backdrop-blur w-72 group hover:bg-[#f3b841] hover:text-[#121212] transition-all'
        >
          Buy <span className='text-[#ffdf2e] group-hover:text-[#121212] transition-all'> 1 </span> BITCOIN
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-[#121212cc] z-50 backdrop-blur transition-all ${isModalOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
        onClick={(e)=> {if (e.target === e.currentTarget) setIsModalOpen(false)}}
      >
        <div className='flex flex-col gap-y-12 justify-center items-center bg-[#FFFFFF40] w-[550px] h-96 text-[#121212] p-8 relative'>
          <p className='text-2xl text-center'>
            The prices are high, are you sure that you want to buy <span className='text-[#ffdf2e]'>1</span> bitcoin for <span className='text-[#ffdf2e] mx-2'>{price} $</span>?
          </p>
          <div className='flex items-center gap-x-8'>
            <button
              type='button'
              className='px-16 py-8 w-[150px]  bg-[#121212CC] backdrop-blur  group hover:bg-[#f3b841] hover:text-[#121212] transition-all'
              onClick={() => {
                dispatch(buyBitcoin(price))
                dispatch(buyBitcoinMessage({usd, price}))
                setIsModalOpen(false)
              }}
            >
              <span className='text-[#ffdf2e] group-hover:text-[#121212] transition-all'> Yes! </span>
            </button>
            <button
              type='button'
              className='px-16 py-8 w-[150px]  bg-[#121212CC] backdrop-blur  group hover:bg-[#f3b841] hover:text-[#121212] transition-all'
              onClick={() => setIsModalOpen(false)}
            >
              <span className='text-[#ffdf2e] group-hover:text-[#121212] transition-all'> No! </span>
            </button>

            <button
              type='button'
              className='absolute top-4 right-4 hover:text-[#f3b841] transition'
              onClick={() => setIsModalOpen(false)}
            >
              <Cross width={30} height={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}