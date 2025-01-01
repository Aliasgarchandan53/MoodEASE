import React, { useContext, useEffect, useState } from "react";
import {useDispatch} from 'react-redux'
import { addEntry } from "../features/journalEntry/journalEntrySlice";
export default function Entryform({ closeForm }) {

    const initialstate={date:'',title:'',entry:''}
    const [userEntry,setUserEntry]=useState(initialstate)
    const [entry,setEntry]=useState('');
    const [date,setDate]=useState('');
    const [title, setTitle] = useState('');
    const dispatch=useDispatch()

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserEntry({ ...userEntry, [name]: value });
      };

    const addEntryHandler = (event) => {
        event.preventDefault();
        dispatch(addEntry(userEntry));
        setEntry(initialstate)
        closeForm();
      };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="popup-form absolute mt-12 text-black">
      <form
        className="w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl" onSubmit={addEntryHandler}
      >
        <h1 className="text-4xl font-semibold text-center text-backgroundColor">
          Add Entry
        </h1>
        <div className="flex flex-col">
        <input
            type="date"
            placeholder="Date..."
            className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
            id='date'
            name='date'
            value={userEntry.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col">
        <input
            type="text"
            placeholder="Title..."
            className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
            id='title'
            name='title'
            value={userEntry.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Entry.."
            className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
            id='entry'
            name='entry'
            value={userEntry.entry}
            onChange={handleChange}
            required
          />
          {/* <p className="mt-2 text-red-600 text-sm text-center">
            {formErrors.userFirstName}
          </p> */}
        </div>
        <div className="flex flex-row  justify-center gap-2 ">
          <button
              type="submit"
              className="bg-brightColor text-white px-8 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out "
            >
              Add
            </button>
          <button
            type="button"
            className="bg-backgroundColor text-white px-8 rounded-md active:bg-red-500"
            onClick={closeForm}
            id="close"
          >
            Close
          </button>
        </div>
        </form>
    </div>
  </div>
  )
}


// import { useNavigate } from "react-router-dom";
// import UserContext from "../contexts/UserContext";

// export default function Contact({ closeForm }) {
//   const initialValues = {
//     userFirstName: "",
//     userLastName: "",
//     userEmail: "",
//     userPassword: "",
//   };
//   const [formValues, setFormValues] = useState(initialValues);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);
//   const navigate = useNavigate();
//   const { setUser } = useContext(UserContext);

//   //regular expressions :
//   const emailReg = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
//   const nameReg = /^[A-Z][\w]*$/;
//   const pwdReg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[^\s]{8,}$/;

//   useEffect(() => {
//     console.log(formErrors);
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       console.log(formValues);
//       setFormValues(initialValues);
//       setUser({login:true,...formValues});
//       navigate("/dashboard");
//       closeForm();
//     }
//   }, [formErrors]);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormValues({ ...formValues, [name]: value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setFormErrors(validate(formValues));
//     setIsSubmit(true);
//   };

//   const validate = (values) => {
//     let errors = {};
//     if (!values.userFirstName) errors.userFirstName = "First name is empty.";
//     else if (!nameReg.test(values.userFirstName))
//       errors.userFirstName = "First name should start with capital letter.";
//     // if (!values.userLastName) errors.userLastName = "Last name is empty.";
//     // else if (!nameReg.test(values.userLastName))
//     //   errors.userLastName = "Last name should start with capital letter.";
//     if (!values.userEmail) errors.userEmail = "Email is empty.";
//     else if (!emailReg.test(values.userEmail))
//       errors.userEmail = "Email format is invalid.";
//     if (!values.userPassword) errors.userPassword = "Password is empty.";
//     else if (!pwdReg.test(values.userPassword))
//       errors.userPassword = "Password format is invalid.";
//     return errors;
//   };

//   return (

//   );
// }