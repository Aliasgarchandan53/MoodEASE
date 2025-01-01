import { createSlice,nanoid } from "@reduxjs/toolkit";
import dbService from "../../appwrite/database";
async function initializeState() {
    const savedEntries = await dbService.getEntries();
    return savedEntries ? { entries: savedEntries } : {
        entries: [{
            id: 1,
            date: "2024-04-02",
            title: "My first entry",
            entry:
                "I'm feeling a little overwhelmed with work lately. Need to find some ways to destress...",
        }],
    };
}

// Set initial state
const initialState = await initializeState();

export const journalEntrySlice = createSlice({
    name: 'journalEntry',
    initialState,
    reducers: {
        addEntry: (state, action) => {
            const { date, title, entry } = action.payload; // Extract date and entry from payload
            const newEntry = {
                id: nanoid(),
                date: date,
                title: title,
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