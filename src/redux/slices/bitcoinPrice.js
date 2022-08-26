import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { soundPlay } from '../../helpers/soundPlay'

import falseSound from '../../sounds/false.mp3'
import BuySound from '../../sounds/buy.mp3'
import SellSound from '../../sounds/sell.mp3'
import { getDataFromLocalStorage, setDataToLocalStorage } from '../../helpers/localStorage'

export const bitcoinPriceReducer = createSlice({
  name: 'bitcoinPrice',
  initialState: {
    price: getDataFromLocalStorage('bitcoinPrice') || 1000,
  },
  reducers: {
    increase: state => {
      toast.warn(`Bitcoin price increased to ${state.price + 1000}$`, { icon: false })
      state.price += 1000
      setDataToLocalStorage('bitcoinPrice', state.price)
      soundPlay(BuySound, 0.3)
    },
    decrease: state => {
      if ((state.price - 1000) < 0) {
        toast.warn("The price of bitcoin cannot be lower than 0$", { icon: false })
        soundPlay(falseSound)
        return
      }
      toast.warn(`Bitcoin price decreased to ${state.price - 1000}$`, { icon: false })
      state.price -= 1000
      setDataToLocalStorage('bitcoinPrice', state.price)
      soundPlay(SellSound, 0.3)
    }
  }
})

export const bitcoinPriceSelector = (state) => state.bitcoinPrice.price

export const { increase, decrease } = bitcoinPriceReducer.actions

export default bitcoinPriceReducer.reducer