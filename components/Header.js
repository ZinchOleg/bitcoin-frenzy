import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { ReactComponent as SettingIcon } from '../images/Settings.svg'
import { ReactComponent as NotificationIcon } from '../images/Notification.svg'

export default function Header() {

  const loc = useLocation()
  const [email, _] = useState(loc.state?.email)
  return (
    <div className='flex flex-col w-full min-h-screen '>
      <header className='flex justify-between items-center gap-6 h-20 w-full p-10'>
        {email ? <p className='text-sm text-[#757474] font-bold'>Welcome back, <span className='text-[#198D99]'>{email}!</span></p> : <p></p>}
        <div className='flex items-center gap-6'>
          <button type='button'>
            <NotificationIcon/>
          </button>
          <button type='button'>
            <SettingIcon className='text-[#111516]'/>
          </button>
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
