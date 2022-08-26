import React from 'react'
import { Outlet } from 'react-router-dom'
import { ChevronRightIcon } from '@heroicons/react/outline'
import { useDispatch, useSelector } from 'react-redux'
import { cleareHistoryMessages, historyMessagesSelector, isOpenHistorySelector, toggler } from '../redux/slices/history'

export default function History() {

  const dispatch = useDispatch()
  const isOpen = useSelector(isOpenHistorySelector)
  const historyMessages = useSelector(historyMessagesSelector)

  return (
    <div className='w-full h-full flex overflow-hidden '>
      <div className=' flex flex-col gap-y-5 w-full'>
        <Outlet/>      
      </div>
      <div className={`flex flex-col justify-between items-center bg-white bg-opacity-25 backdrop-blur-sm pl-14 pr-4 py-6 duration-1000 ${isOpen ? 'translate-x-[0%] w-[40%]' : 'translate-x-[100%] w-0'} transition-all relative`} style={{height: 'calc(100vh - 80px)'}}>
        {
          historyMessages.length === 0 
            ? <p className={`text-center text-2xl mr-10 transition-all duration-1000 ${isOpen ? 'translate-x-[0%] ' : 'translate-x-[100%] w-[200px]'}`}>History is empty</p>
            : <ul className={` ${isOpen ? 'overflow-y-auto overflow-x-hidden' : 'overflow-hidden overflow-x-hidden'} w-full flex flex-col gap-y-4 h-[90%]`}>
              {
                historyMessages.map((message, i) => {
                  return <li className={`flex flex-col  gap-y-1 bg-[#121212CC] backdrop-blur px-4 py-6 shrink-0 w-full transition-all duration-1000  ${isOpen ? 'translate-x-[0%] ' : 'translate-x-[100%] w-[500px]'}`} key={i}>
                    <div className='flex gap-x-2'>
                      <p>{message.date}</p>
                      <p className='text-[#ffdf2e]'>{message.time}</p>
                    </div>
                    <p>{message.message}</p>
                  </li>
                })
              }
            </ul>
        }
        {
          historyMessages.length > 0 &&
          <button
            type='button'
            onClick={() => {
              dispatch(cleareHistoryMessages())
            }}
            className={`px-8 py-4 bg-[#121212CC] text-[#ffdf2e] backdrop-blur w-52 group hover:bg-[#f3b841] hover:duration-150 hover:text-[#121212] transition-all duration-1000 ${isOpen ? 'translate-x-[0%] ' : 'translate-x-[100%]'}`}
          >
            Cleare History
          </button>
        }
        <button
          type='button'
          className={`absolute left-0 top-[50%] -translate-y-[50%] origin-left  duration-1000  ${isOpen ? 'scale-100' : '-scale-100 bg-white bg-opacity-25 rounded-full'}  transition-all`}
          onClick={() => dispatch(toggler())}
        >
          <ChevronRightIcon width={60} className='text-[#f3b841]'/>
        </button>
      </div>
    </div>
  )
}
