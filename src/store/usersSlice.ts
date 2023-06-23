import { createSlice } from "@reduxjs/toolkit";

export interface IUser {
    id: number;
    name: string;
    date?: string;
}

const usersSlice = createSlice({
    name: 'trips',
    initialState: {
        users: [],
    },
    reducers: {
        addUser(state, action) {
            // @ts-ignore
            state.users.push({
                id: Math.random(),
                name: action.payload,
            });
        },
        removeUser(state, action){
            state.users = state.users.filter((user: {id: string}) => user.id !== action.payload.id)
        },
        addDate(state, action){
            // @ts-ignore
            const currentUser: IUser = state.users.find((user: {id: string}) => user.id === action.payload.id);
            currentUser.date = action.payload.date;
        },
    }
})

export const {
    addUser,
    removeUser,
    addDate} = usersSlice.actions

export default usersSlice.reducer;
