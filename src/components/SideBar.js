import React, { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Howl, Howler } from 'howler'

import BITCOIN from '../images/BITCOIN.gif'

import { CreditCardIcon } from '@heroicons/react/outline'
import { ShoppingCartIcon as buyIcon } from '@heroicons/react/outline'
import { ShoppingCartIcon as sellIcon} from '@heroicons/react/solid'
import { PresentationChartLineIcon } from '@heroicons/react/outline'
import { VolumeUpIcon } from '@heroicons/react/outline'
import { VolumeOffIcon } from '@heroicons/react/outline'

import BitcoinSound from '../sounds/bitcoin.mp3'
import BuySound from '../sounds/buy.mp3'
import SellSound from '../sounds/sell.mp3'
import WallenSound from '../sounds/wallet.mp3'

const navLinks = [
  {
    path: '/wallet',
    title: 'MY WALLET',
    icon: CreditCardIcon,
    sound: WallenSound,
  },
  {
    path: '/buy',
    title: 'BUY BITCOIN',
    icon: buyIcon,
    sound: BuySound,
  },
  {
    path: '/sell',
    title: 'SELL BITCOIN',
    icon: sellIcon,
    sound: SellSound,
  },
  {
    path: '/bitcoin',
    title: 'BITCOIN PRICE',
    icon: PresentationChartLineIcon,
    sound: BitcoinSound,
  },
]

const soundPlay = (src, vol = 1) => {
  const sound = new Howl({ src, volume: vol})
  sound.play()
}

export default function SideBar() {
  const [soundOn, setSoundOn] = useState(true)
  Howler.volume(soundOn ? 1 : 0)
  return (
    <div className='flex w-full absolute top-0 left-0'>
      <div className='flex flex-col justify-between p-6 w-[350px] bg-[#202020cc] backdrop-blur min-h-screen relative'>
        <div className='flex flex-col gap-y-8'>
          <div className='flex items-center gap-x-4'>
            <img src={BITCOIN} width={50} alt='logo' />
            <p className='text-2xl'>BITCOIN FRENZY</p>
          </div>
          
          <div className='flex flex-col gap-3'>
            {
              navLinks.map(link => {
                return <NavLink to={link.path} key={link.path} onClick={()=>soundPlay(link.sound, (link.path === '/buy' || link.path === '/sell' ? 0.5 : 1 ))} className={({ isActive }) =>
                  isActive ? 'flex items-center p-3 gap-4 bg-[#f3b841] text-[#121212] transition-all' : 'flex items-center p-3 gap-4 text-[#757474] hover:bg-[#f3b84180] transition-all hover:text-white'
                }>
                  <link.icon width={40}/>
                  <p className='text-lg'> { link.title } </p>
                </NavLink>
              })
            }
          </div>
        </div>
        <button type='button' className='absolute bottom-8 left-8' onClick={() => setSoundOn(!soundOn)} >
          { soundOn ? <VolumeUpIcon width={40} className='text-[#f3b841]'/> : <VolumeOffIcon width={40}/>}
        </button>
      </div>
      <Outlet/>
    </div>
  )
}

//  drop-shadow-[0_0_10px_rgba(243,184,65,1)]
