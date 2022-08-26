import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit'
import balanceReducer from './slices/balance'
import bitcoinPriceReducer  from './slices/bitcoinPrice'
import historyReducer from './slices/history'

export const listenerMiddleware = createListenerMiddleware()

export default configureStore({
  reducer: {
    balance: balanceReducer,
    bitcoinPrice: bitcoinPriceReducer,
    history: historyReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware),
})

