import React, { useEffect, useState } from "react";
import axios from 'axios'


import ImgComponent from "./imgComponent";


const getPhotos=async(setFunc,setIsLoading,setIsError)=>{
  try{
    setIsLoading(true)
    const res=await axios.get(
      'https://api.unsplash.com/photos?query=london&client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043',
      )
    setFunc(res.data)
    setIsLoading(false)  
  }catch(e){

  }

}



function App() {
  const [photos,setPhotos]=useState([{a:1}])
  const [isLoading,setIsLoading]=useState(true)
  const [isError,setIsError]=useState(false)

  useEffect(()=>{
    getPhotos(setPhotos,setIsLoading,setIsError)
    console.log(photos)
  },[])
  
  return (
    <div className="App">
      
      {isLoading?
        <></>
      :
        <div  style={{margin:'0px auto',width:'302px'}}> 
          {photos.map(p=>
            <ImgComponent p={p}/>

          )}
        </div>
      }
    </div>
  );
}

export default App;
