import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import B2D5 from './Ders/B2D5';
//import B2D6 from './Ders/B2D6';
//import B3D7 from './Ders/B3D7';
//import B3D8 from './Ders/B3D8';
//import B3D9 from './Ders/B3D9';
//import B3D10 from './Ders/B3D10';
//import B3D11 from './Ders/B3D11';
//import B4D12 from './Ders/B4D12';
//import B4D13 from './Ders/B4D13';
//import B4D14 from './Ders/B4D14';
//import B4D15 from './Ders/B4D15';
//import B4D16 from './Ders/B4D16';
//import B4D17 from './Ders/B4D17';
//import B5D18 from './Ders/B5D18';
//import B5D19 from './Ders/B5D19';
//import B5D20 from './Ders/B5D20';
//import B6D22 from './Ders/B6D22';
//import { Provider } from 'react-redux';
//import { store } from './components/B6D22/store/store';

import B6D23 from './Ders/B6D23';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
  //<App />
  //</React.StrictMode>
  //<B2D5 />
  //<B2D6 />
  //<B3D7 />
  //<B3D8 />
  //<B3D9 />
  //<B3D10 />
  //<B3D11 />
  //<B4D12 />
  //<B4D13 />
  //<B4D14 />
  //<B4D15 />
  //<B4D16 />
  //<B4D17 />
  //<B5D18 />
  //<B5D19 />
  //<B5D20 />

  //<Provider store = {store} >
  //  <B6D22 />
  //</Provider>

  <B6D23 />


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

/*

B6D22 redux toolkit notları store.js den geldik

hangi anasayfada calısıyorsan eger genelde App.js olur egitim diye ben onu değiştirdim
calıstıgın yeri <Provider></Provider> ile cevrelemen gerek onu da import ediyor redux uzerınden
biz burda bir componenti cevrelediğimiz de projedeki app.js uzerınden anlatmam gerekirse
app.js de yazdıgın componentleri de redux a tanıtmıs oluyorsun
tekrar tekrar yazmana gerek kalmıyor

burdan da su anda kullandıgımız anasayfamıza gidelim B6D22.js

react-redux un yuklenip yuklenmediğine dikkat et

*/