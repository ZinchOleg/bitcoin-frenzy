import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { userBitcoinSelector, userUsdSelector } from '../redux/slices/balance'
import { bitcoinPriceSelector } from '../redux/slices/bitcoinPrice'

export default function Header() {
  const bitcoinPrice = useSelector(bitcoinPriceSelector)
  const usd = useSelector(userUsdSelector)
  const bitcoin = useSelector(userBitcoinSelector)

  return (
    <div className='flex flex-col w-full min-h-screen '>
      <header className='flex justify-between items-center gap-6 h-20 w-full p-10 bg-[#202020cc] backdrop-blur '>
        <p className='text-xl text-center grow'>1 BITCOIN = {bitcoinPrice} USD</p>
        <div className='flex justify-end items-center gap-6 shrink-0'>
          <div className='flex flex-col gap-y-2'>
            <p className='text-sm'><span className='text-[#ffdf2e]'>{usd}</span> USD</p>
            <p className='text-sm'><span className='text-[#ffdf2e]'>{bitcoin}</span> BITCOINS</p>
          </div>
          
          <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
            <img
              className="h-12 w-12 rounded-full"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
        </div>
      </header>
      <Outlet/>
   </div>
  )
}
