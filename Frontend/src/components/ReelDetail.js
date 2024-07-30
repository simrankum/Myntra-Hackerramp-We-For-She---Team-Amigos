// ReelDetail.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ReelDetail.css';
import Navbar from './Navbar';

const reels = [
  { title: 'Reel 1', video: '/reel1.mp4' },
  { title: 'Reel 2', video: '/reel2.mp4' },
  { title: 'Reel 3', video: '/reel3.mp4' },
  { title: 'Reel 4', video: '/reel4.mp4' },
  // Add more reels as needed
];

const ReelDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const reelIndex = parseInt(id, 10);
  const reel = reels[reelIndex];

  const handleNext = () => {
    const nextIndex = (reelIndex + 1) % reels.length;
    navigate(`/reel/${nextIndex}`);
  };

  return (
    <>
    <Navbar/>
    <div className="reel-detail-page">
      {/* <h2>{reel.title}</h2> */}
      <video src={reel.video} controls autoPlay className="reel-video" />
      <button onClick={handleNext} className="next-button">Next</button>
    </div>
    </>
  );
};

export default ReelDetail;
