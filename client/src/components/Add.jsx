import React, { useState } from "react";

const Add = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [qualification, setQualification] = useState("");
  const [address, setAddress] = useState("");
  const [joining, setJoining] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");



  const formHandler = async (e) => {
    e.preventDefault();

    const userAdded = { name, email, dob, qualification, address, joining, phoneNumber, gender };
    console.log(name,email,gender,phoneNumber);

    const response = await fetch("http://localhost:8000/api", {
      method: "POST",
      body: JSON.stringify(userAdded),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    setName("");
    setAddress("");
    setDob("");
    setJoining("");
    setEmail("");
    setQualification("");
    setPhoneNumber("");
    setGender("");


  };

  return (
    <div className="flex h-screen w-full justify-center items-center">
      <form
        action=""
        onSubmit={formHandler}
        className="flex justify-center items-center flex-col w-fit px-8 py-4  h-auto border-2 border-red-300"
      >
        <h1 className="mb-4 font-bold text-xl ">User Details</h1>
        <div className=" w-auto h-auto flex flex-col justify-center items-center">
          <div className="  flex sm:flex-col md:flex-row justify-start  w-full ">
            <label htmlFor="" className=" w-48 h-8">
              Name :{" "}
            </label>
            <input
              className=" bg-yellow-100 outline-none border-r-2 px-4  h-8  border-2 border-yellow-400 mb-4 w-full  "
              type="text"
              placeholder="User Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className=" flex sm:flex-col md:flex-row justify-start  w-full  ">
            <label htmlFor="" className=" w-48 h-8">
              Email :{" "}
            </label>
            <input
              className=" bg-yellow-100 outline-none border-r-2 px-4  h-8  border-2 border-yellow-400 mb-4 w-full  "
              type="text"
              placeholder="User Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className=" min-[180px]:flex-col min-[581px]: flex justify-start  w-full ">
            <label htmlFor="" className="w-48 h-8">
              Phone Number :{" "}
            </label>
            <input
              className=" bg-yellow-100 outline-none border-r-2 px-4  h-8  border-2 border-yellow-400 mb-4 w-full  "
              type="text"
              placeholder="User Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className=" min-[180px]:flex-col min-[581px]: flex justify-start  w-full ">
            <label htmlFor="" className="w-48 h-8 mb-4">
              Gender :{" "}
            </label>
            <select value={gender} onChange={(e)=>setGender(e.target.value)} className="bg-yellow-100 w-full h-8 px-4  border-2 border-yellow-400" id="gender" name="carlist" form="carform">
              <option >Select</option>
              <option >Male</option>

              <option >Female</option>
              <option >Other</option>
            </select>
          </div>

          <div className=" min-[180px]:flex-col min-[581px]: flex justify-start  w-full ">
            <label htmlFor="" className="w-48 h-8">
              Qualification :{" "}
            </label>
            <select value={qualification} onChange={(e)=>setQualification(e.target.value)} className="bg-yellow-100 w-full h-8 px-4  border-2 border-yellow-400" id="gender" name="carlist" form="carform">
              {/* <option disabled >Select</option> */}
              <option >Select</option>
              <option >SSC</option>
              <option >HSC</option>
              <option >Diploma</option>
              <option >Graduation</option>
              <option >P.G</option>
              <option >Phd</option>

            </select>
          </div>

          <div className=" min-[180px]:flex-col min-[581px]: flex justify-start  w-full ">
            <label htmlFor="" className="w-48 h-8">
              D.O.B :{" "}
            </label>
            <input
              className=" bg-yellow-100 outline-none border-r-2 px-4  h-8  border-2 border-yellow-400 mb-4 w-full  "
              type="Date"
              placeholder="User D.O.B"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>

          <div className=" min-[180px]:flex-col min-[581px]: flex justify-start  w-full ">
            <label htmlFor="" className="w-48  h-8">
              Joining Date :{" "}
            </label>
            <input
              className=" bg-yellow-100 outline-none border-r-2 px-4  h-8  border-2 border-yellow-400 mb-4 w-full  "
              type="Date"
              placeholder="Joining Date"
              value={joining}
              onChange={(e) => setJoining(e.target.value)}
            />
          </div>

          <div className=" min-[180px]:flex-col min-[581px]:flex justify-start  w-full ">
            <label htmlFor="" className="w-48 h-8">
              Address :{" "}
            </label>
            <input
              className=" bg-yellow-100 outline-none border-r-2 px-4  h-8  border-2 border-yellow-400 mb-4 w-full  "
              type="text"
              placeholder="User Adress"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <button
            className="bg-blue-400 text-white text-lg rounded-2xl py-2 px-8 w-full"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
