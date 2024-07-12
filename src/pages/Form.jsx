import React, { useState } from "react";
import TopBar from "../components/TopBar";
import { resdb, db } from "../firebase/fire";
import { doc, collection, addDoc } from "firebase/firestore";
import { Navigate, useNavigate } from "react-router-dom";
import { useCallback } from "react";

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
  // const [data, setData] = useState([]);

  const navigate = useNavigate();

  const dbref = collection(db, "applications");

  // const handleUpload = (e) => {
  //   console.log(e.target.files[0]);
  //   const res = ref(resdb, `Imgs/${v4()}`);
  //   uploadBytes(res, e.target.files[0]).then((data) => {
  //     console.log(data, "res");
  //     getDownloadURL(data.ref).then((val) => {
  //       setResume(val);
  //     });
  //   });
  // };

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

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);
  const onOpportunitiesTextClick = useCallback(() => {
    navigate("/opportunities");
  }, [navigate]);

  return (
    <div>
      <div className="flex flex-col overflow-auto">
        <TopBar
          frameDivFlex="unset"
          frameDivAlignSelf="stretch"
          onHomeTextClick={onHomeTextClick}
          onOpportunitiesTextClick={onOpportunitiesTextClick}
          onAboutTextClick={onAboutTextClick}
        />
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
                <label htmlFor="name" className=" text-7xl ">
                  Upload Resume Link
                </label>
                <input
                  type="text"
                  required
                  id="resume"
                  placeholder="Resume Link"
                  className="border-2 border-brown-100 text-7xl"
                  value={resume}
                  onChange={(e) => {
                    setResume(e.target.value);
                  }}
                />
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
                <label htmlFor="name" className=" text-7xl ">
                  Upload Cover Letter Link
                </label>
                <input
                  type="text"
                  required
                  id="resume"
                  placeholder="Cover letter Link"
                  className="border-2 border-brown-100 text-7xl"
                  value={coverLetter}
                  onChange={(e) => {
                    setCoverLetter(e.target.value);
                  }}
                />
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
