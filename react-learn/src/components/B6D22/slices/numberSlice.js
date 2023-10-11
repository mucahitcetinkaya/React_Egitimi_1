import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 5,
    point : 10
}

export const numberSlice = createSlice({
    name: 'number',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        changePointByInput: (state, action) => {
            state.point = action.payload;
        }
    },
})


export const { increment, changePointByInput } = numberSlice.actions;

export default numberSlice.reducer




/*

bu kodları redux-toolkit uzerınden aldık

bunlar ne demek ona bakalım

numberSlice state de bir obje value tutuyor ona ulasacagız

B6D22 den geldim value u degistirebilmek için function yazacagız reducers a 
increment i ekledik onuda gittik export ettik 

changePointByInput acıklaması

2. parametre geliyor action
içine geçtiğiniz deger de action.payload oluyor
yani içine mücahit geçtiniz
action.payload.mucahit demek lazım

yeni metotları asagıda export etmeyi unutmayalım

reducers içinde sadece degerleri setlenecek fonksiyonlar yazılır karmasık seyler yazılmaz



*/