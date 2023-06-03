// import './allMembers.css'

import { useEffect, useState } from "react";
import MemberCard from "./MemberCard";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import image from '../assets/aa.jpg'
import { AiTwotonePhone } from "react-icons/Ai";
import { ImLocation } from "react-icons/Im";

const AllMembers = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false)

  const contacHandler = () => {
    setOpen(!open);

  }

  const getData = async () => {

    const response = await fetch("http://localhost:8000/")

    const result = await response.json()

    if(!response.ok){
      console.log(result.error)
      setError(result.error)
    }
    if(response.ok){
      setData(result);

    }
    console.log(result)



  }

  useEffect(()=>{
    getData();
  },[])
  return (
    <div>
      <h1>All members of Study Point, Basmat</h1>
      <div className="grid grid-cols-4 p-8 gap-12 ">
        {
          data.map((ele)=>(
            <Card key={ele._id} className="  border-2 h-auto border-yellow-400 rounded-md pb-4">
            <CardHeader floated={false} className=" h-[5.5rem] relative mt-0 rounded-t-md bg-yellow-200">
              <h1 className="text-md text-white text-center text-2xl font-bold mt-4">Study Point</h1>
              <div className="absolute flex justify-center items-center mt-4 w-full">
              <img  className="w-16 h-16 rounded-full  " src={image} alt="" />


              </div>
            </CardHeader>
          
            <CardBody className="text-center px-8">
              <Typography variant="h4" color="blue-gray" className=" mt-12">
                {ele.name}
              </Typography>
              <Typography  color="blue" className=" font-thin mb-8" textGradient>
                {ele.email}
              </Typography>
         
              <Typography color="blue" className="font-medium flex justify-between items-center" textGradient>
                <h5>Date Of Birth :</h5>  <span>{ele.dob.slice(0,10)}</span> 
              </Typography>
              <Typography color="blue" className="font-medium flex justify-between items-center" textGradient>
                <h5>Qualification :</h5>  <span>{ele.qualification}</span> 
              </Typography>
              <Typography color="blue" className="font-medium flex justify-between items-center" textGradient>
                <h5>Gender :</h5>  <span>{ele.gender}</span> 
              </Typography>
              <Typography color="blue" className="font-medium flex justify-between items-center" textGradient>
                <h5>Joining :</h5>  <span>{ele.joining.slice(0,10)}</span> 
              </Typography>
            </CardBody>
            <CardFooter className="flex flex-col justify-center  pt-2">
              
            
            
              <div className="w-full flex justify-center items-center">
                <button className="bg-green-300 mt-4 py-2 px-8 rounded-3xl  " onClick={contacHandler}>Contact Details</button>
              </div>
              <div className={open ? "block mt-2" : " hidden"}>
                <h2 className="flex gap-2 justify-center items-center list-none"> <AiTwotonePhone/>  <li> {ele.phoneNumber}</li></h2>
                <h2 className="flex gap-2 justify-center items-center list-none "> <ImLocation/> <li> {ele.address}</li></h2>

                
              </div>
            </CardFooter>
          </Card>


          ))
        }
   

       

      </div>
    </div>
  );
};

export default AllMembers;
