import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import myAxios from "../../../utils/axios";
import axios from "axios";


const initialState = {
    posts: [],
    loading: false
}

export const createPosts = createAsyncThunk(
    'post/createPosts',
    async () => {
        try {
            const config = { headers: {'Authorization': 'Token ' + window.localStorage.getItem('token') }}
            const { data } = await myAxios.get('/post_list/', config)
            return data
        } catch (e) {
            console.log(e)
        }
    }
)

export const getAllPosts = createAsyncThunk(
    'post/getAllPosts',
    async () => {
        try {
            const config = { headers: {'Authorization': 'Token ' + window.localStorage.getItem('token') }}
            const { data } = await myAxios.get('/post_list/?format=json', config)
            return data
        } catch (e) {
            console.log(e)
        }
    }
)

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
    extraReducers: {

        // Create post
        [createPosts.pending]: (state) => {
            state.loading = true
        },
        [createPosts.fulfilled]: (state, action) => {
            state.loading = false
            state.posts.push(action.payload)
        },
        [createPosts.rejected]: (state) => {
            state.loading = false
        },

        // Get all posts
        [getAllPosts.pending]: (state) => {
            state.loading = true
        },
        [getAllPosts.fulfilled]: (state, action) => {
            state.loading = false
            state.posts = action.payload
        },
        [getAllPosts.rejected]: (state) => {
            state.loading = false
        }
    }
})

export default postSlice.reducer