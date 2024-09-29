import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authentication/authSlice"
import journalEntryReducer from "../features/journalEntry/journalEntrySlice";
import resourceReducer from "../features/resources/resourceSlice";

export const store = configureStore({
    reducer:{
        auth:authReducer,
        resources:resourceReducer,
        entries:journalEntryReducer
    }
})
