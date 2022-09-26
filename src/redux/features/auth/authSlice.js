import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../../utils/axios";

const initialState = {
    user: null,
    token: null,
    isLoading: false
}

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async ({username, email, password}) => {
        try {
            const { data } = await axios.post('/registration/', {
                username,
                email,
                password
            })

            if(data.token)
                window.localStorage.setItem('token', data.token)
            return data
        } catch (e) {
            console.log(e)
        }
    }
)

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({username, password}) => {
        try {
            const { data } = await axios.post('/authentication/', {
                username,
                password
            })

            if(data.token)
                window.localStorage.setItem('token', data.token)
            return data
        } catch (e) {
            console.log(e)
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        // User registration
        [registerUser.pending]: (state) => {
            state.isLoading = true
        },
        [registerUser.pending]: (state, action) => {
            state.isLoading = false
            state.user = action.payload.user
            state.token = action.payload.token
        },
        [registerUser.pending]: (state) => {
            state.isLoading = false
        },

        // Login user
        [loginUser.pending]: (state) => {
            state.isLoading = true
        },
        [loginUser.pending]: (state, action) => {
            state.isLoading = false
            state.user = action.payload.user
            state.token = action.payload.token
        },
        [loginUser.pending]: (state) => {
            state.isLoading = false
        }
    }
})

export default authSlice.reducer