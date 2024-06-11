import React, {useContext}from 'react'
import UserContext from '../context/UserContext';
import thumbnail from "../assets/images/backgroundImage.webp";
import "../assets/CSS_files/video-card.css"
import { Navigate, useNavigate } from 'react-router-dom';
const VideoCard = (props) => {
  const {settitle} = useContext(UserContext)
  const {setthumbnail} = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div className='video-card'  onClick={() => {
      let datatoPass = {
        title:settitle("Halo Season 2 Trailer"),
        thumbnailPic:setthumbnail("This is my thumbnail")
      }
      navigate('/videodetail', {state: datatoPass})
      
      
    }}>
     
      <div className='wrapper'>
      <img className='thumbnail' src={thumbnail} alt='' />
        <div className='time'>
          <span>32:45</span>
        </div>
      </div>
      <h4 className='video-title'>Halo Season 2 TRAILER!!</h4>
      <div className='profile'>
        <div className='profile-pic'>
        <img className='channel-pic' src={thumbnail} />
        </div>
        <div className='video-details'>
          <span className='profile-name'>Movie Clips</span>
          <span className='posted-at'>4 hours ago. <span className='views'>7k views</span></span>
        </div>
      </div>
    </div>
  )
}



export default VideoCard

