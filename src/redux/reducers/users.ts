import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MyState {
    email: string,
    phone: any,
    username: string,
    status: string,
    organisationName: string,
}

const initialState: MyState = {
    email: '',
    phone: '',
    username: '',
    status: '',
    organisationName: ''
};

const usersfetchSlice = createSlice({
    name: "usersfetchSlice",
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setPhone: (state, action: PayloadAction<string>) => {
            state.phone = action.payload;
        },
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setStatus: (state, action: PayloadAction<string>) => {
            state.status = action.payload;
        },
        setOrganisationName: (state, action: PayloadAction<string>) => {
            state.status = action.payload;
        },


        setCompleteUser: (state, action) => {
            state.organisationName = action.payload;
            state.email = action.payload;
            state.phone = action.payload;
            state.status = action.payload;
            state.username = action.payload;

        }
    },
});

export const {
    setOrganisationName,
    setEmail,
    setPhone,
    setStatus,
    setUsername
} = usersfetchSlice.actions;

export default usersfetchSlice.reducer;

