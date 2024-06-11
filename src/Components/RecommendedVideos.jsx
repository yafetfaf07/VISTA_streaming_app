import React from 'react'
import pics from "../assets/images/backgroundImage.webp"
import "../assets/CSS_files/video-details.css"

const RecommendedVideos = () => {
  return (
    <div style={{display:"flex", alignItems:"center"}}>

     <div className='recommended-videos-thummbnail-wrapper'>
        <img src={pics} alt='' />
        <div className='recommended-videos-time-wrapper'>
            <span>25:00 </span>
        </div>
     </div>

     <div className='recommended-videos-details'>
        <div>
            <div style={{display:"flex", flexDirection:"column"}}>
            <span className='recommended-video-title'>Halo 2 is a bust!!</span>

            </div>
        </div>
        <div>
        <p className='recommended-channel-name'> Buno Reacts </p>
        </div>
        <div>
            <span className='recommended-channel-name'>5K Views</span>
            <p className='recommended-channel-name'>3 days ago</p>

        </div>
     </div>
    </div>
  )
}

export default RecommendedVideos