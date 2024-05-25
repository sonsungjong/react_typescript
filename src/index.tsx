/* 
const 초기값 : {count:number} = {count:0}

function reducer(state=초기값, action:{type:string})
{
  if(action.type === '증가'){
    return {...state, count:state.count + 1}
  }else if(action.type === '감소'){
    return {...state, count:state.count -1}
  }else{
    return 초기값
  }
}

const store = createStore(reducer)
export type RootState = ReturnType<typeof store.getState>
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';

// npm install redux react-redux @reduxjs/toolkit
const 초기값 : {count:number, user:string} = {count:0, user:'리듀서이름'};

// createSlice에는 name, initialState, reducers 가 필요
const counterSlice = createSlice({
  name:'counter',
  initialState:초기값,
  reducers:{
    증가(state){
      state.count += 1
    },
    감소(state){
      state.count -= 1
    },
    더하기(state, action : PayloadAction<number>){
      state.count += action.payload
    }
  }
})

let store = configureStore({
  reducer:{
    리듀서1:counterSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export let {증가, 감소, 더하기} = counterSlice.actions

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
