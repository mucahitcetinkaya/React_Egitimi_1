import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import B2D5 from './Ders/B2D5';
//import B2D6 from './Ders/B2D6';
import B3D7 from './Ders/B3D7';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // <B2D5 />
  //<B2D6 />
  <B3D7 />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/*
index.html den geldik
javascript olarak ilk cagrılan dosya da index.js
burda da id si root olanı getir demiş 
root un içine <App/> i cagır demiş 
notlara gidelim
*/ 