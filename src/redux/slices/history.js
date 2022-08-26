import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { soundPlay } from '../../helpers/soundPlay'

import historySound from '../../sounds/history.mp3'
import clearHistorySound from '../../sounds/clearHistory.mp3'
import { createHistoryMessage } from '../../helpers/createHistoryMessage'
import { getDataFromLocalStorage, setDataToLocalStorage } from '../../helpers/localStorage'

export const historyReducer = createSlice({
  name: 'history',
  initialState: {
    isOpen: true,
    messages: getDataFromLocalStorage('historyMessages') || []
  },
  reducers: {
    toggler: state => {
      state.isOpen = !state.isOpen
      soundPlay(historySound, 0.4)
    },
    addHistoryMessage: (state, { payload }) => {
      state.messages.unshift(payload)
      setDataToLocalStorage('historyMessages', state.messages)
    },
    cleareHistoryMessages: state => {
      soundPlay(clearHistorySound, 0.6)
      state.messages = []
      localStorage.removeItem('historyMessages')
    }
  },
  // extraReducers: (builder) => {
  //   builder.addCase('balance/deposit', (state, {payload}) => {
  //     console.log(state.messages);
  //     state.messages.unshift(createHistoryMessage(`You deposited $100 Account balance ${payload.usd} `))
  //   })
  // },
})

export const depositMessage = createAsyncThunk(
  'balance/deposit',
  async (_, thunkAPI) => {
    const balance = thunkAPI.getState().balance.usd
    thunkAPI.dispatch(addHistoryMessage(createHistoryMessage(`You deposited $100 Account balance ${balance}`)))
  }
)

export const withdrawMessage = createAsyncThunk(
  'balance/withdraw',
  async (usd, thunkAPI) => {
    const balance = thunkAPI.getState().balance.usd
    if (usd - 100 < 0) return
    thunkAPI.dispatch(addHistoryMessage(createHistoryMessage(`You withdraw $100 Account balance ${balance}`)))
  }
)

export const depositByAmountMessage = createAsyncThunk(
  'balance/depositByAmount',
  async (usd, thunkAPI) => {
    const balance = thunkAPI.getState().balance.usd
    thunkAPI.dispatch(addHistoryMessage(createHistoryMessage(`You deposited $${usd} Account balance ${balance}`)))
  }
)

export const withdrawByAmountMessage = createAsyncThunk(
  'balance/withdrawByAmount',
  async ({usd, amount}, thunkAPI) => {
    const balance = thunkAPI.getState().balance.usd
    if (usd - amount < 0) return
    thunkAPI.dispatch(addHistoryMessage(createHistoryMessage(`You withdraw $${amount} Account balance ${balance}`)))
  }
)

export const buyBitcoinMessage = createAsyncThunk(
  'balance/buyBitcoin',
  async ({usd, price}, thunkAPI) => {
    const bitcoin = thunkAPI.getState().balance.bitcoin
    if (usd - price < 0) return
    thunkAPI.dispatch(addHistoryMessage(createHistoryMessage(`You bought 1 bitcoin for $${price} You now have ${bitcoin} bitcoins!`)))
  }
)

export const sellBitcoinMessage = createAsyncThunk(
  'balance/sellBitcoin',
  async (price, thunkAPI) => {
    const bitcoin = thunkAPI.getState().balance.bitcoin
    if (bitcoin - 1 < 0) return
    thunkAPI.dispatch(addHistoryMessage(createHistoryMessage(`You sold 1 bitcoin for $${price} You now have ${bitcoin} bitcoins!`)))
  }
)

export const increaseBitcoinPriceMessage = createAsyncThunk(
  'bitcoinPrice/increase',
  async (_, thunkAPI) => {
    const price = thunkAPI.getState().bitcoinPrice.price
    thunkAPI.dispatch(addHistoryMessage(createHistoryMessage(`The price of bitcoin increased by $1,000 and now stands at $${price}`)))
  }
)

export const decreaseBitcoinPriceMessage = createAsyncThunk(
  'bitcoinPrice/decrease',
  async (price, thunkAPI) => {
    const bitcoinPrice = thunkAPI.getState().bitcoinPrice.price
    if (price - 1000 < 0) return
    thunkAPI.dispatch(addHistoryMessage(createHistoryMessage(`The price of bitcoin decrease by $1,000 and now stands at $${bitcoinPrice}`)))
  }
)

export const isOpenHistorySelector = (state) => state.history.isOpen
export const historyMessagesSelector = (state) => state.history.messages

export const { toggler, addHistoryMessage, cleareHistoryMessages } = historyReducer.actions

export default historyReducer.reducer