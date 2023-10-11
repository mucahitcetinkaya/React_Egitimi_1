import { configureStore } from '@reduxjs/toolkit'
import numberSlice from '../slices/numberSlice'

export const store = configureStore({
    reducer: {
        number : numberSlice
    },
})

/*

burası bu kadar burdan sonra bizim slice lara ihtiyacımız var 

numberSlice dan geldik buraya ekledik
ismini number olarak verdik ismini herhangi bişey yazabilirim farketmiyor

burdan da index.js e gidelim

*/