import { configureStore } from "@reduxjs/toolkit";
import journalEntryReducer from "../features/journalEntry/journalEntrySlice";
import resourceReducer from "../features/resources/resourceSlice";

export const store = configureStore({
    reducer:{
        resources:resourceReducer,
        entries:journalEntryReducer
    }
})
