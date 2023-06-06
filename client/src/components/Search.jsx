import React, { useEffect, useState } from 'react'
import axios from "axios";

const Search = () => {
    const [data, setData] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    
    useEffect(()=>{
        getData();
    },[])

    const getData =  async() => {
        axios.get("http://localhost:8000/").then((res) => {
      setData(res.data);
    });

    }
  return (
    <div className='mt-8 flex justify-center items-center'>
            <input className='ml-8 rounded-sm py-2 px-4 border-2 border-red-400 ' type="text" placeholder='search here' value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} />

    <div>
    {data.filter((el)=>{
            if(el===''){
                return el;
            } else {
                return el.name.toLowerCase().includes(searchInput) || el.email.toLowerCase().includes(searchInput) || el.phoneNumber.includes(searchInput);
            }
          }).map((d, index) => (
          <tbody  key={index}> 
            <tr>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>{d.phone}</td>
            </tr>
          </tbody>
           ))}

    </div>
    </div>
  )
}

export default Search
