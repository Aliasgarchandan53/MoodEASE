import React, { useEffect,useState} from "react";
import { FaMusic, FaHeadphonesAlt, FaVideo, FaBookOpen } from "react-icons/fa";
import {
  SongCard,
  ResourceCard,
  JournalEntryCard,
  Button,
} from "../layouts/index";
import Entryform from "../models/Entryform";
import Resourceform from "../models/Resourceform"
import { useSelector, useDispatch } from 'react-redux'
import { deleteResource ,initializeResources } from "../features/resources/resourceSlice";
import { deleteEntry, initializeEntries } from "../features/journalEntry/journalEntrySlice";

const Dashboard = () => {
  const authStatus = useSelector((state)=>state.auth.status);
  const user  = useSelector((state)=>state.auth.userData);
  const [showEntryForm, setShowEntryForm] = useState(false);
  const [showResourceForm,setShowResourceForm] =useState(false);
  const [entries, setEntries] = useState([]);
  const [resources,setResources]=useState([])
  const dispatch=useDispatch()

  const openEntryForm = () => {
    setShowEntryForm(true);
  };
  const openResourceForm=()=>{
    setShowResourceForm(true)
  }
  const closeEntryForm = () => {
    setShowEntryForm(false);
  };
  const closeResourceForm =()=>{
    setShowResourceForm(false)
  }
  const jEntries = useSelector(state=>state.entries.entries)
  const uResources=useSelector(state=>state.resources.resources)

  useEffect(() => {
    dispatch(initializeEntries(user.$id))
    dispatch(initializeResources(user.$id))
    setEntries(jEntries)
    setResources(uResources)
  }, [jEntries,uResources,dispatch]);

  const recommendedSongs = [
    { id: 1, name: "Ocean Waves", icon: <FaMusic /> },
    { id: 2, name: "Rain Sounds", icon: <FaHeadphonesAlt /> },
    { id: 3, name: "Forest Ambience", icon: <FaMusic /> },
    { id: 4, name: "Gentle Piano", icon: <FaHeadphonesAlt /> },
    { id: 5, name: "White Noise", icon: <FaMusic /> },
  ];
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 bg-[#F0F8FF] text-[#21603d]">
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          {
            user?
            <h1 className="text-4xl font-semibold text-center lg:text-start">
            Hello {user.name} !!
          </h1>:''
          }
          <p className="mt-2 text-center lg:text-start">
            Here's your personal dashboard...
          </p>
        </div>
      </div>

      <div className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Last 3 Journal Entries</h2>
        <div className=" flex flex-col gap-4" id="entrybox">
          {
            (entries.length===0)?<p className="p-4 bg-white text-[#2E8B57] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg text-center">
            No entries found. Click the button below to add a new entry.
          </p>:''
          }
          {entries.map((entry) => (
            <JournalEntryCard
              key={entry.id}
              date={entry.date}
              title={entry.title}
              entry={entry.entry}
              entDelete={()=>dispatch(deleteEntry(entry.id))}
            />
          ))}
          <div className="flex flex-row">
          <p className="mt-2 text-center lg:text-start">
            Click to add entries --{">"}
          </p>
          <button
              className="bg-brightColor text-white px-4 py-2 mx-4 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out "   
            onClick={openEntryForm}>
              Add Entries
            </button>
          </div>
          {showEntryForm && <Entryform closeForm={closeEntryForm} userId={user.$id}/>}
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
          {
            resources.map((res)=>(
              <ResourceCard
              key={res.id}
              type={res.type}
              title={res.title}
              thumbnail={res.thumbnail}
              link={res.link}
              resDelete={()=>dispatch(deleteResource(res.id))}
              />
            ))
          }
        </div>
        <div className="flex flex-col my-4">
        {
            (resources.length===0)?<p className="p-4 bg-white text-[#2E8B57] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg text-center">
            No resources found. Click the button below to add a new resource.
          </p>:''
          }
          <div className="flex flex-row my-4">
          <p className="mt-2 text-center lg:text-start">
            Click to add resources --{">"}
          </p>
          <button
              className="bg-brightColor text-white px-4 py-2 mx-4 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out "   
            onClick={openResourceForm}>
              Add Resources
            </button>
          </div>
          {showResourceForm && <Resourceform closeForm={closeResourceForm} userId={user.$id}/>}
          </div>
      </div>
    </div>
  );
};

export default Dashboard;
