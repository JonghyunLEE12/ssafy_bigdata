import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"


export interface AztiState {
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

export const userSlice = createSlice({
    name : 'userSlice',
    initialState,
    reducers: {
        userinfo: (state , action:PayloadAction) => {
            console.log(state)
            console.log(action)
        }
    }
})

export const { userinfo } = userSlice.actions

export default userSlice.reducer