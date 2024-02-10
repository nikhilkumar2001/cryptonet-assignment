import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [userData, setUserData] = useState(""); 
  const [url] = useState("https://randomuser.me/api/?page=1&results=1&seed=abc");

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setUserData(res.data.results[0]);
        
      })
      .catch((err) => console.log(`Error: ${err}`));
    }, [url]); 
    console.log(userData)

  return (
<div className="h-screen flex justify-center items-center bg-gray-300 shadow-lg p-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8">
  {userData && ( 
    <div className="flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8 shadow-2xl">
      <img src={userData.picture.large} alt="User" className="w-40 h-40 rounded-lg mr-8" />
      <div className="flex flex-col mr-8">
        <div className="flex mb-4">
          <p className="text-xl text-white mr-2 hover:text-yellow-400 font-serif">{userData.name.first}</p>
          <p className="text-xl text-white hover:text-yellow-400 font-serif">{userData.name.last}</p>
        </div>
        <p className="text-xl text-white mb-4 hover:text-yellow-400 font-serif">{userData.gender}</p>
        <p className="text-xl text-white hover:text-yellow-400 font-serif">{userData.phone}</p>
      </div>
    
    </div>
  )}
</div>
  );
}

export default App;
