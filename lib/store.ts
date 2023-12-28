import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import logger from "redux-logger";
import rootReducers from './rootReducers';

const isDev = process.env.NODE_ENV === 'development'
const persistConfig ={
    key:"webtech-pool",
    version:1,
    storage,
    whitelist:['darkmode','auth'],
}
const rootReducer = combineReducers(rootReducers)
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middlewareLogger:any = !!isDev ?logger: []; 


export const makeStore = configureStore({
    reducer: persistedReducer,
    middleware:(getDefultMiddleware) => 
    getDefultMiddleware({
        serializableCheck:{
            ignoredActions:[FLUSH,REHYDRATE,PAUSE, PERSIST,PURGE, REGISTER],
        },
    }).concat(middlewareLogger),
  })

export let persistor = persistStore(makeStore);
// Infer the type of makeStore
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof makeStore.getState>;
export type AppDispatch = typeof makeStore.dispatch;