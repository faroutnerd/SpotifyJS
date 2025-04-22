import React, { useEffect, useRef } from 'react'
import DisplayHome from './DisplayHome'
import { Routes, Route, useLocation } from 'react-router-dom'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'

const Display = () => {

  const displayRef = useRef();  // using for album background color
  const location = useLocation(); // to get the current location
  const isAlbum = location.pathname.includes("album"); // check if the current location is album
  const albumId = isAlbum ? location.pathname.slice(-1) : ""; // get the album id from the current location
  const bgColor = albumsData[Number(albumId)].bgColor; // get the album color from the album id
  
  useEffect(()=>{
    if(isAlbum){
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`
    } else {
      displayRef.current.style.background = `#121212)`
    }
  });

  return (
    <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  )
}

export default Display
