import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import thunkMiddleware from 'redux-thunk'
import { mySavesBooksReducer } from './SavesBooksStore/reducer';

export const globalReducer = combineReducers({
	mySavesBooks: mySavesBooksReducer,
})

export const globalStore = configureStore({
	reducer: globalReducer,
	// middleware: (getDefaultMiddleware) =>
	// 	getDefaultMiddleware().concat(thunkMiddleware)
})

export type AppGlobalState = ReturnType<typeof globalStore.getState>
export type AppGlobalDispatch = typeof globalStore.dispatch