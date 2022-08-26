import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Logo from '../images/logo.png'

import { ReactComponent as Home } from '../images/Home.svg'
import { ReactComponent as Devices } from '../images/Devices.svg'
import { ReactComponent as Contracts } from '../images/Contracts.svg'
import { ReactComponent as Orders } from '../images/Orders.svg'
import { ReactComponent as Support } from '../images/Support.svg'
import { ReactComponent as Logout } from '../images/Logout.svg'

const navLinks = [
  {
    path: '/home',
    title: 'Home',
    icon: Home
  },
  {
    path: '/devices',
    title: 'Devices',
    icon: Devices
  },
  {
    path: '/contracts',
    title: 'Contracts',
    icon: Contracts
  },
  {
    path: '/orders',
    title: 'Orders',
    icon: Orders
  },
  {
    path: '/support',
    title: 'Support',
    icon: Support
  }
]

export default function SideBar() {
  return (
    <div className='flex w-full absolute top-0 left-0'>
      <div className='flex flex-col justify-between p-6 w-[420px] bg-white min-h-screen'>
        <div className='flex flex-col gap-y-8'>
          <img src={Logo} width={200} alt='logo' />
          <div className='flex flex-col gap-3'>
            {
              navLinks.map(link => {
                return <NavLink to={link.path} key={link.path} className={({ isActive }) =>
                  isActive ? 'flex items-center p-3 gap-4 bg-[#198D99] text-white ' : 'flex items-center p-3 gap-4 text-[#757474] hover:bg-[#2DC0CE] hover:text-white'
                }>
                  <link.icon width={40}/>
                  <p className='text-lg'> { link.title } </p>
                </NavLink>
              })
            }
          </div>
        </div>
        <Link to='/signin' className='flex items-center p-3 gap-4 text-[#757474] hover:bg-[#2DC0CE] hover:text-white'>
          <Logout width={40} />
          <p className='text-lg'> Log out </p>
        </Link>
      </div>
      <Outlet/>
    </div>
  )
}
