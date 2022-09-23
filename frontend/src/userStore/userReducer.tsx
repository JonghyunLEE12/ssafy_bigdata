import { createSlice } from "@reduxjs/toolkit";

type AztiState = {
    personal : string,
    mood : string,
    place : string,
    is_korean : string
}

const initialState : AztiState = {
    personal : '',
    mood : '',
    place : '',
    is_korean : ''
}

const userSlice = createSlice({
    name : 'userSlice',
    initialState,
    reducers: {}
})

export default userSlice;