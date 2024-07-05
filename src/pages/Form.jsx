import React, { useState } from "react";
import TopBar from "../components/TopBar";
import { db } from "../firebase/fire";
import { doc, collection, addDoc } from "firebase/firestore";
import { Navigate } from "react-router-dom";

const Form = () => {
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [state, setState] = useState();
  const [email, setEmail] = useState();
  const [resume, setResume] = useState();
  const [institution, setInstitution] = useState();
  const [degree, setDegree] = useState();
  const [branch, setBranch] = useState();
  const [year, setYear] = useState();
  const [coverLetter, setCoverLetter] = useState();

  const dbref = collection(db, "applications");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(dbref, {
        name: name,
        number: number,
        state: state,
        email: email,
        resume: resume,
        institution: institution,
        degree: degree,
        branch: branch,
        year: year,
        coverLetter: coverLetter,
      });
      <Navigate to="/" />;
    } catch (e) {
      console.error("Error submitting application ", e);
    }
  };

  return (
    <div>
      <div className="flex flex-col overflow-auto">
        <TopBar />
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center">
            <h1 className=" text-12xl text-brown-100">
              Software Developer Internship opportunity
            </h1>
          </div>
          <div className="flex">
            <div className="flex flex-col justify-center w-1/2">
              <div className=" flex justify-center">
                <h1 className=" text-10xl text-brown-300">
                  Personal Information:-
                </h1>
              </div>
              <div className=" mx-20 my-5 flex flex-col">
                <label htmlFor="name" className=" text-7xl ">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="border-2 border-brown-100 text-7xl"
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className=" mx-20 my-5 flex flex-col">
                <label htmlFor="name" className=" text-7xl ">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="number"
                  required
                  placeholder="Enter your number"
                  className="border-2 border-brown-100 text-7xl"
                  value={number}
                  onChange={(e) => {
                    setNumber(e.target.value);
                  }}
                />
              </div>
              <div className=" mx-20 my-5 flex flex-col">
                <label htmlFor="name" className=" text-7xl ">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  placeholder="Enter your State"
                  required
                  className="border-2 border-brown-100 text-7xl rounded"
                  value={state}
                  onChange={(e) => {
                    setState(e.target.value);
                  }}
                />
              </div>
              <div className=" mx-20 my-5 flex flex-col">
                <label htmlFor="name" className=" text-7xl ">
                  Email
                </label>
                <input
                  type="email"
                  required
                  id="email"
                  placeholder="Enter your email"
                  className="border-2 border-brown-100 text-7xl"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className=" mx-20 my-5 flex flex-col">
                <label
                  className="block mb-2 text-7xl font-medium text-black"
                  htmlFor="file_input"
                >
                  Upload Resume
                </label>
                <input
                  className="block w-full text-3xl text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  required
                  aria-describedby="file_input_help"
                  id="resume"
                  type="file"
                  value={resume}
                  onChange={(e) => {
                    setResume(e.target.value);
                  }}
                />
                <p
                  className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                  id="file_input_help"
                >
                  PDF (MAX. 5Mb).
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center w-1/2">
              <div className=" flex justify-center">
                <h1 className=" text-10xl text-brown-300">Education:-</h1>
              </div>
              <div className=" mx-20 my-5 flex flex-col">
                <label htmlFor="name" className=" text-7xl ">
                  Institution Name
                </label>
                <input
                  type="text"
                  id="institution"
                  placeholder="Enter your Institution Name"
                  className="border-2 border-brown-100 text-7xl rounded-md"
                  required
                  value={institution}
                  onChange={(e) => {
                    setInstitution(e.target.value);
                  }}
                />
              </div>
              <div className=" mx-20 my-5 flex flex-col">
                <label htmlFor="name" className=" text-7xl ">
                  Degree
                </label>
                <input
                  type="text"
                  id="degree"
                  required
                  placeholder="Enter your Dergee"
                  className="border-2 border-brown-100 text-7xl rounded-md"
                  value={degree}
                  onChange={(e) => {
                    setDegree(e.target.value);
                  }}
                />
              </div>
              <div className=" mx-20 my-5 flex flex-col">
                <label htmlFor="name" className=" text-7xl ">
                  Branch/Stream
                </label>
                <input
                  type="text"
                  id="branch"
                  required
                  placeholder="Enter your Branch/Stream"
                  className="border-2 border-brown-100 text-7xl rounded-md"
                  value={branch}
                  onChange={(e) => {
                    setBranch(e.target.value);
                  }}
                />
              </div>
              <div className=" mx-20 my-5 flex flex-col">
                <label htmlFor="name" className=" text-7xl ">
                  Year of Passing
                </label>
                <input
                  type="text"
                  id="year"
                  placeholder="Enter your year of passing"
                  required
                  className="border-2 border-brown-100 text-7xl rounded-md"
                  value={year}
                  onChange={(e) => {
                    setYear(e.target.value);
                  }}
                />
              </div>
              <div className=" mx-20 my-5 flex flex-col">
                <label
                  className="block mb-2 text-7xl font-medium text-black"
                  htmlFor="file_input"
                >
                  Upload Cover Letter
                </label>
                <input
                  className="block w-full text-3xl text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  aria-describedby="file_input_help"
                  id="resume"
                  required
                  type="file"
                  value={coverLetter}
                  onChange={(e) => {
                    setCoverLetter(e.target.value);
                  }}
                />
                <p
                  className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                  id="file_input_help"
                >
                  PDF (MAX. 5Mb).
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center m-5">
            <button
              className="bg-brown-300 text-7xl rounded-md p-2 hover:bg-brown-400 hover:text-white hover:cursor-pointer"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
