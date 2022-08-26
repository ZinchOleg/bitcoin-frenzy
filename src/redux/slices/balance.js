import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { soundPlay } from '../../helpers/soundPlay'

import BuySound from '../../sounds/buy.mp3'
import SellSound from '../../sounds/sell.mp3'
import falseSound from '../../sounds/false.mp3'
import { getDataFromLocalStorage, setDataToLocalStorage } from '../../helpers/localStorage'

export const balanceReducer = createSlice({
  name: 'balance',
  initialState: {
    usd: getDataFromLocalStorage('balance')?.usd || 200,
    bitcoin: getDataFromLocalStorage('balance')?.bitcoin || 7
  },
  reducers: {
    deposit: state => {
      state.usd += 100
      setDataToLocalStorage('balance', { usd: state.usd, bitcoin: state.bitcoin})
      soundPlay(BuySound, 0.3)
    },
    withdraw: state => {
      if ((state.usd - 100) < 0) {
        toast.warn(`You do not have enough money in your account to withdraw 100$`, { icon: false })
        soundPlay(falseSound)
        return
      }   
      state.usd -= 100
      setDataToLocalStorage('balance', { usd: state.usd, bitcoin: state.bitcoin})
      soundPlay(SellSound, 0.3)
    },
    depositByAmount: (state, {payload}) => {
      state.usd += payload
      setDataToLocalStorage('balance', { usd: state.usd, bitcoin: state.bitcoin})
      soundPlay(BuySound, 0.3)
      toast.warn(`You deposited ${payload}$`, { icon: false })
    },
    withdrawByAmount: (state, {payload}) => {
      if ((state.usd - payload) < 0) {
        toast.warn(`You do not have enough money in your account to withdraw ${payload}$`, { icon: false })
        soundPlay(falseSound)
        return
      }  
      state.usd -= payload
      setDataToLocalStorage('balance', { usd: state.usd, bitcoin: state.bitcoin})
      soundPlay(SellSound, 0.3)
      toast.warn(`You withdrawed ${payload}$`, { icon: false })
    },
    buyBitcoin: (state, {payload}) => {
      if ((state.usd - payload) < 0) {
        toast.warn("You don't have enough money to buy 1 bitcoin. Please, top up your account!", { icon: false })
        soundPlay(falseSound)
        return
      }
      state.usd -= payload
      state.bitcoin += 1
      setDataToLocalStorage('balance', { usd: state.usd, bitcoin: state.bitcoin})
      soundPlay(BuySound, 0.3)
      toast.warn(`You bought bitcoin for ${payload}$`, { icon: false })
    },
    sellBitcoin: (state, {payload}) => {
      if ((state.bitcoin - 1) < 0) {
        toast.warn("You no longer have bitcoins to sell", { icon: false })
        soundPlay(falseSound)
        return
      } 
      state.usd += payload
      state.bitcoin -= 1
      setDataToLocalStorage('balance', { usd: state.usd, bitcoin: state.bitcoin})
      soundPlay(SellSound, 0.3)
      toast.warn(`You sold bitcoin for ${payload}$`, { icon: false })
    },
  }
})

export const userUsdSelector = (state) => state.balance.usd
export const userBitcoinSelector = (state) => state.balance.bitcoin

export const { deposit, withdraw, depositByAmount, withdrawByAmount, buyBitcoin, sellBitcoin } = balanceReducer.actions

export default balanceReducer.reducer