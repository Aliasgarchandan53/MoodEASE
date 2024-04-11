import React, { useEffect, useState } from "react";
export default function Contact({closeForm}) {
  const initialValues = {
    userFirstName: "",
    userLastName: "",
    userEmail: "",
    userPassword: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  //regular expressions :
  const emailReg = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  const nameReg = /^[A-Z][\w]*$/;
  const pwdReg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[^\s]{8,}$/;

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      setFormValues(initialValues);
    }
  }, [formErrors]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    let errors = {};
    if (!values.userFirstName) errors.userFirstName = "First name is empty.";
    else if (!nameReg.test(values.userFirstName))
      errors.userFirstName = "First name should start with capital letter.";
    if (!values.userLastName) errors.userLastName = "Last name is empty.";
    else if (!nameReg.test(values.userLastName))
      errors.userLastName = "Last name should start with capital letter.";
    if (!values.userEmail) errors.userEmail = "Email is empty.";
    else if (!emailReg.test(values.userEmail))
      errors.userEmail = "Email format is invalid.";
    if (!values.userPassword) errors.userPassword = "Password is empty.";
    else if (!pwdReg.test(values.userPassword))
      errors.userPassword = "Password format is invalid.";
    return errors;
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="popup-form absolute mt-12 text-black">
        <form
          className="w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl"
          onSubmit={handleSubmit}
        >
          <h1 className="text-4xl font-semibold text-center text-backgroundColor">
            Login / SignUp
          </h1>
          <div className="flex flex-col">
            <p className="text-sm text-center text-backgroundColor mb-2">
              {Object.keys(formErrors).length === 0 && isSubmit
                ? "Your account has successfully been logged in ."
                : ""}
            </p>
            <input
              type="text"
              name="userFirstName"
              id="userFirstName"
              placeholder="First Name"
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              value={formValues.userFirstName}
              onChange={handleChange}
            />
            <p className="mt-2 text-red-600 text-sm text-center">
              {formErrors.userFirstName}
            </p>
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              name="userLastName"
              id="userLastName"
              placeholder="Last Name"
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              value={formValues.userLastName}
              onChange={handleChange}
            />
            <p className="mt-2 text-red-600 text-sm text-center">
              {formErrors.userLastName}
            </p>
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              name="userEmail"
              id="userEmail"
              placeholder="Your Email"
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              value={formValues.userEmail}
              onChange={handleChange}
            />
            <p className="mt-2 text-red-600 text-sm text-center">
              {formErrors.userEmail}
            </p>
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              name="userPassword"
              id="userPassword"
              placeholder="Password"
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              value={formValues.userPassword}
              onChange={handleChange}
            />
            <p className="mt-2 text-red-600 text-sm text-center">
              {formErrors.userPassword}
            </p>
          </div>

          <div className="flex flex-row  justify-center gap-2 ">
            <div>
              <button
                type="submit"
                className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out "
              >
                Login
              </button>
            </div>
            <div>
              <button
                type="submit"
                className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out "
              >
                SignUp
              </button>
            </div>
            <button
            type="button"
              className="bg-backgroundColor text-white px-10 rounded-md active:bg-red-500"
              onClick={closeForm}
              id="close"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
