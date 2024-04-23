import React, { useContext ,useState} from "react";
import { FaMusic, FaHeadphonesAlt, FaVideo, FaBookOpen } from "react-icons/fa";
import {
  SongCard,
  ResourceCard,
  JournalEntryCard,
  Button,
} from "../layouts/index";
import { useAuth0 } from "@auth0/auth0-react";
import Entryform from "../models/Entryform";
import { useSelector, useDispatch } from 'react-redux'

const Dashboard = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [showForm, setShowForm] = useState(false);
  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const newEntries = useSelector(state=>state.entries)

  const journalEntries = [
    {
      id: 1,
      date: "April 15, 2024",
      entry:
        "Today was a bit challenging, but I tried to stay positive and practice mindfulness...",
    },
    {
      id: 2,
      date: "April 12, 2024",
      entry:
        "I had a great day today! I went for a walk in the park and felt really refreshed...",
    },
    {
      id: 3,
      date: "April 10, 2024",
      entry:
        "I'm feeling a little overwhelmed with work lately. Need to find some ways to destress...",
    },
  ];

  const recommendedSongs = [
    { id: 1, name: "Ocean Waves", icon: <FaMusic /> },
    { id: 2, name: "Rain Sounds", icon: <FaHeadphonesAlt /> },
    { id: 3, name: "Forest Ambience", icon: <FaMusic /> },
    { id: 4, name: "Gentle Piano", icon: <FaHeadphonesAlt /> },
    { id: 5, name: "White Noise", icon: <FaMusic /> },
  ];

  const resources = [
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
      thumbnail:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bnV0cml0aW9ufGVufDB8fDB8fHww",
      link: "https://www.health.harvard.edu/blog/nutritional-psychiatry-your-brain-on-food-201511168626",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 bg-[#F0F8FF] text-[#21603d]">
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Hello {user.name} !!
          </h1>
          <p className="mt-2 text-center lg:text-start">
            Here's your personal dashboard...
          </p>
        </div>
      </div>

      <div className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Last 3 Journal Entries</h2>
        <div className="flex flex-col gap-4">
          {journalEntries.map((entry) => (
            <JournalEntryCard
              key={entry.id}
              date={entry.date}
              entry={entry.entry}
            />
          ))}
          {
            entries.map()//dunno when to call this
          }
          <div className="flex flex-row">
          <p className="mt-2 text-center lg:text-start">
            Click to add entries --{">"}
          </p>
          <button
              className="bg-brightColor text-white px-4 py-2 mx-4 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out "   
            onClick={openForm}>
              Add Entries
            </button>
          </div>
          {showForm && <Entryform closeForm={closeForm} />}
        </div>
      </div>

      <div className="my-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaHeadphonesAlt className="mr-2" /> Recommended Songs for Relaxation
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {recommendedSongs.map((song) => (
            <SongCard
              key={song.id}
              icon={song.icon}
              name={song.name}
              onPlay={() => console.log(`Playing ${song.name}`)}
            />
          ))}
        </div>
      </div>

      <div className="my-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaVideo className="mr-2" /> <FaBookOpen className="mr-2" /> Useful
          Resources
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {resources.map((resource) => (
            <ResourceCard
              key={resource.id}
              type={resource.type}
              title={resource.title}
              thumbnail={resource.thumbnail}
              link={resource.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
