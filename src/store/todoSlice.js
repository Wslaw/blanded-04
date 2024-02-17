import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos:[],
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers:{},
})

export default todosSlice.reducer;
