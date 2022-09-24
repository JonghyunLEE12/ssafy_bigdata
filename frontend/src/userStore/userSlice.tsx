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
        userinfo: (state=initialState , action:PayloadAction<any>) => {
            return {...state , 
                personal : action.payload.personal,
                mood : action.payload.mood,
                place : action.payload.place,
                is_korean : action.payload.is_korean
             }
        }
    }
})

export const { userinfo } = userSlice.actions

export default userSlice.reducer