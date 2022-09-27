import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../../utils/axios";

const initialState = {
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

            if(data.token) {
                window.localStorage.setItem('user', username)
                window.localStorage.setItem('token', data.token)
            }
            console.log(data)
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

            if(data.token) {
                window.localStorage.setItem('user', username)
                window.localStorage.setItem('token', data.token)
            }
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
        [registerUser.fulfilled]: (state, action) => {
            state.isLoading = false
            state.token = action.payload.token
        },
        [registerUser.rejected]: (state) => {
            state.isLoading = false
        },

        // Login user
        [loginUser.pending]: (state) => {
            state.isLoading = true
        },
        [loginUser.fulfilled]: (state, action) => {
            state.isLoading = false
            state.token = action.payload.token
            console.log(action.payload)
        },
        [loginUser.rejected]: (state) => {
            state.isLoading = false
        }
    }
})

export default authSlice.reducer