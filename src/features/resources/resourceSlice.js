import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  resources: [
    {
      id: 1,
      type: "video",
      title: "Mindfulness Meditation for Beginners",
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1666299537516-bef50f6bf5ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWluZGZ1bGxuZXNzJTIwbWVkaXRhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      link: "https://www.youtube.com/watch?v=ZToicYcHIOU",
    },
    {
      id: 2,
      type: "article",
      title: "Healthy Sleep Habits: Tips for Better Rest",
      thumbnail:
        "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGVhbHRoeSUyMHNsZWVwJTIwaGFiaXRzfGVufDB8fDB8fHww",
      link: "https://www.sleepfoundation.org/sleep-hygiene/healthy-sleep-tips",
    },
    {
      id: 3,
      type: "video",
      title: "Yoga for Stress Relief",
      thumbnail:
        "https://media.istockphoto.com/id/1303002202/photo/my-presence-is-my-power.webp?b=1&s=170667a&w=0&k=20&c=xIjDs0LayICA4npXCHXF-aNVI1PWPDyhISCPxERgUyA=",
      link: "https://www.healthline.com/health/fitness/yoga-for-stress",
    },
    {
        id: 4,
        type: "article",
        title: "Nutrition Tips for Mental Health",
        link: "https://www.health.harvard.edu/blog/nutritional-psychiatry-your-brain-on-food-201511168626",
      }
  ],
};
export const resourceSlice = createSlice({
  name: "resource",
  initialState,
  reducers: {
    addResource: (state, action) => {
      const { type, title, link } = action.payload;
      const newResource = {
        id: nanoid(),
        type: type,
        title: title,
        link: link,
      };
      state.resources.push(newResource);
    },
    deleteResource: (state, action) => {
      state.resources = state.resources.filter(
        (resource) => resource.id !== action.payload
      );
    },
  },
});

export const { addResource, deleteResource } = resourceSlice.actions;

export default resourceSlice.reducer;
