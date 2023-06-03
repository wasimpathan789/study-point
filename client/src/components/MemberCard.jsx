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
import { useState } from "react";


const MemberCard = () => {
  const [open, setOpen] = useState(false)

  const contacHandler = () => {
    setOpen(!open);

  }
  return (
    <Card className=" w-80 border-2 h-auto border-yellow-400 rounded-md pb-4">
            <CardHeader floated={false} className=" h-[5.5rem] relative mt-0 rounded-t-md bg-yellow-200">
              <h1 className="text-md text-white text-center text-2xl font-bold mt-4">Study Point</h1>
              <div className="absolute flex justify-center items-center mt-4 w-full">
              <img  className="w-16 h-16 rounded-full  " src={image} alt="" />


              </div>
            </CardHeader>
          
            <CardBody className="text-center px-8">
              <Typography variant="h4" color="blue-gray" className=" mt-12">
                Natalie Paisley
              </Typography>
              <Typography  color="blue" className=" font-thin mb-8" textGradient>
                email
              </Typography>
         
              <Typography color="blue" className="font-medium flex justify-between items-center" textGradient>
                <h5>Date Of Birth :</h5>  <span>12/04/1992</span> 
              </Typography>
              <Typography color="blue" className="font-medium flex justify-between items-center" textGradient>
                <h5>Qualification :</h5>  <span>Graduation</span> 
              </Typography>
              <Typography color="blue" className="font-medium flex justify-between items-center" textGradient>
                <h5>Gender :</h5>  <span>Female</span> 
              </Typography>
              <Typography color="blue" className="font-medium flex justify-between items-center" textGradient>
                <h5>Joining :</h5>  <span>1</span> 
              </Typography>
            </CardBody>
            <CardFooter className="flex flex-col justify-center  pt-2">
              
            
            
              <div className="w-full flex justify-center items-center">
                <button className="bg-green-300 mt-4 py-2 px-8 rounded-3xl  " onClick={contacHandler}>Contact Details</button>
              </div>
              <div className={open ? "block mt-2" : " hidden"}>
                <h2 className="flex gap-2 justify-center items-center list-none"> <AiTwotonePhone/>  <li> 99999999</li></h2>
                <h2 className="flex gap-2 justify-center items-center list-none "> <ImLocation/> <li> Pathan Mohalla</li></h2>

                
              </div>
            </CardFooter>
          </Card>
  )
}

export default MemberCard

