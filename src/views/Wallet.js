import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {deposit, withdraw, userUsdSelector, userBitcoinSelector, depositByAmount, withdrawByAmount} from '../redux/slices/balance'
import { depositByAmountMessage, depositMessage, withdrawByAmountMessage, withdrawMessage } from '../redux/slices/history'
import { ReactComponent as Cross } from '../images/Cross.svg'

export default function Wallet() {

  const dispatch = useDispatch()
  const input = useRef()  
  const usd = useSelector(userUsdSelector)
  const bitcoin = useSelector(userBitcoinSelector)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [amount, setAmount] = useState('')  
  
  return (
    <div className='px-10 flex flex-col items-center justify-center gap-y-10 h-full relative'>

      <div className='px-12 py-8 bg-[#121212CC] backdrop-blur drop-shadow-[0_0_15px_rgba(255, 249, 47,1)]'>
        <h1 className='grow text-5xl text-[#ffdf2e] drop-shadow-[0_0_35px_rgba(255, 249, 47,1)]'>Your Wallet</h1>
      </div>

      <div className='flex flex-col justify-center items-center gap-y-5 px-12 py-8 bg-[#121212CC] backdrop-blur drop-shadow-[0_0_15px_rgba(255, 249, 47,1)]'>
        <h2 className='text-4xl text-[#ffdf2e] drop-shadow-[0_0_35px_rgba(255, 249, 47,1)]'>You now have:</h2>
        <div className='flex gap-x-8 justify-center items-center w-full text-2xl'>
          <p><span className='text-[#ffdf2e]'>{bitcoin}</span> BITCOIN</p>
          <p>/</p>
          <p><span className='text-[#ffdf2e]'>{usd}</span> USD</p>
        </div>
      </div>
      
      <div className='flex items-center gap-x-5 text-2xl'>
        <button
          type='button'
          onClick={() => {
            dispatch(deposit({ usd }))
            dispatch(depositMessage(usd))
          }}
          className='px-12 py-8 bg-[#121212CC] backdrop-blur w-80 group hover:bg-[#f3b841] hover:text-[#121212] transition-all'
        >
          Deposit <span className='text-[#ffdf2e] group-hover:text-[#121212] transition-all'> 100 </span> USD
        </button>
        <button
          type='button'
          onClick={() => {
            dispatch(withdraw())
            dispatch(withdrawMessage(usd))
          }}
          className='px-12 py-8 bg-[#121212CC] backdrop-blur w-80 group hover:bg-[#f3b841] hover:text-[#121212] transition-all'
        >
          Whithdrow <span className='text-[#ffdf2e] group-hover:text-[#121212] transition-all'> 100 </span> USD
        </button>
      </div>

      <button
        type='button'
        onClick={() => {
          setIsModalOpen(true)
          setTimeout(()=>{ input.current.focus() },500)
        }}
        className='px-12 py-8 bg-[#121212CC] text-xl backdrop-blur w-80 group hover:bg-[#f3b841] hover:text-[#121212] transition-all'
      >
        Deposit or withdraw an <span className='text-[#ffdf2e] group-hover:text-[#121212] transition-all'> arbitrary </span> amount
      </button>

      
      <div
        className={`fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-[#121212cc] z-50 backdrop-blur transition-all ${isModalOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setIsModalOpen(false)
            setAmount('')
          }
        }}
      >
        <div className='flex flex-col gap-y-12 justify-center items-center bg-[#FFFFFF40] w-[600px] h-96 text-[#121212] p-16 relative'>
          <p className='text-2xl text-center'>
            Please enter an amount
          </p>
          <input
            type='text'
            className='w-full p-3 focus:outline-0'
            autoFocus
            ref={input}
            placeholder='0'
            value={amount}
            onChange={(e)=>setAmount(Number(e.target.value))}
          />
          <div className='flex justify-center items-center gap-x-8 w-full'>
            <button
              type='button'
              disabled={isNaN(amount)}
              className='px-8 py-8 w-full bg-[#121212CC] disabled:opacity-75 text-[#757474] backdrop-blur  group enabled:hover:bg-[#f3b841] enabled:hover:text-[#121212] transition-all'
              onClick={() => {
                dispatch(depositByAmount(amount || 0))
                dispatch(depositByAmountMessage(amount || 0))
                setIsModalOpen(false)
                setAmount('')
              }}
            >
              Deposit <span className='text-[#ffdf2e] enabled:group-hover:text-[#121212] transition-all'> { amount || 0} </span> USD
            </button>
            <button
              type='button'
              disabled={isNaN(amount)}
              className='px-8 py-8 w-full bg-[#121212CC] disabled:opacity-75 text-[#757474] backdrop-blur  group enabled:hover:bg-[#f3b841] enabled:hover:text-[#121212] transition-all'
              onClick={() => {
                dispatch(withdrawByAmount(amount || 0))
                dispatch(withdrawByAmountMessage({usd, amount: amount || 0}))
                setIsModalOpen(false)
                setAmount('')
              }}
            >
              Whithdrow <span className='text-[#ffdf2e] enabled:group-hover:text-[#121212] transition-all'> { amount || 0} </span> USD
            </button>

            <button
              type='button'
              className='absolute top-4 right-4 hover:text-[#f3b841] transition'
              onClick={() => {
                setIsModalOpen(false)
                setAmount('')
              }}
            >
              <Cross width={30} height={30} />
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}
