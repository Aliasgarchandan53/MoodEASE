import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    entries:[{
        id: 1,
        date: "April 10, 2024",
        entry:
          "I'm feeling a little overwhelmed with work lately. Need to find some ways to destress...",
      }]
}
export const journalEntrySlice = createSlice({
    name: 'journalEntry',
    initialState,
    reducers: {
        addEntry: (state, action) => {
            const { date, entry } = action.payload; // Extract date and entry from payload
            const newEntry = {
                id: nanoid(),
                date: date,
                entry: entry
            };
            state.entries.push(newEntry);
        },
        deleteEntry: (state, action) => {
            state.entries = state.entries.filter(entry => entry.id !== action.payload);
        }
    }
});

export const {addEntry,deleteEntry} = journalEntrySlice.actions

export default journalEntrySlice.reducer