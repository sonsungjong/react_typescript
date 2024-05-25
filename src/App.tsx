import './App.css';
import React from 'react';
import Profile from './components/Profile/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState, 증가, 감소, 더하기 } from './index';

let name:string;
let age: number;
let isStudent : boolean;
let hobbies : string[];
let role : (number | string)[];

type Person = {
  name:string,
  age?:number
}
let person : Person = {
  name:'Peter',
}

const App : React.FC = () => {

  let 박스 : JSX.Element = <div>박스</div>
  const 꺼내옴 = useSelector((state:RootState)=>state);
  const dispatch : Dispatch = useDispatch();
  
  return (
    <div className="App">
      npx create-react-app 프로젝트명 --template typescript
      <br />
      npm start만 해도 변경
      <Profile name="홍길동" age="20"></Profile>

      <p>{꺼내옴.리듀서1.user}</p>
      <p>{꺼내옴.리듀서1.count}</p>
      <button onClick={()=>{dispatch(증가())}}>버튼</button>
    </div>
  );
}

export default App;

// npm install redux react-redux @reduxjs/toolkit
