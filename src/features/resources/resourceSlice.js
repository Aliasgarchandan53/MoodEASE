import { createSlice, nanoid } from "@reduxjs/toolkit";
import resourceDB from "../../appwrite/resourceDatabase"

const initialState = {
  resources: [],
};
export const resourceSlice = createSlice({
  name: "resource",
  initialState,
  reducers: {
    setResources:(state,action)=>{
      state.resources=action.payload;
    },
    addResource: (state, action) => {
      const { type, title,thumbnail, link,userid } = action.payload;
      const newResource = {
        id: nanoid(),
        type: type,
        title: title,
        thumbnail:thumbnail,
        link: link,
        userid
      };
      state.resources.push(newResource);
      resourceDB.createResource({type, title,thumbnail, link,userid})
    },
    deleteResource: (state, action) => {
      state.resources = state.resources.filter(
        (resource) => resource.id !== action.payload
      );
      resourceDB.deleteResource(action.payload)
    },
  },
});

export const initializeResources = (userId) => async dispatch =>{
  try {
    const response = await resourceDB.getResources(userId);
    const savedResources = response?.documents?.map(doc => ({
        id: doc.$id,
        type: doc.type,
        title: doc.title,
        thumbnail: doc.thumbnail,
        link: doc.link,
        userid : userId ||"123456"
    })) || [];
    dispatch(setResources(savedResources));
  } catch (error) {
    console.error("Error fetching resources from Appwrite:", error);
    dispatch(setEntries([
      {
        id: 1,
        type: "video",
        title: "Mindfulness Meditation for Beginners",
        thumbnail:
          "https://plus.unsplash.com/premium_photo-1666299537516-bef50f6bf5ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWluZGZ1bGxuZXNzJTIwbWVkaXRhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
        link: "https://www.youtube.com/watch?v=ZToicYcHIOU",
        userid:"1234",
      },
    ]));
  }
}

export const { addResource, deleteResource } = resourceSlice.actions;

export default resourceSlice.reducer;
