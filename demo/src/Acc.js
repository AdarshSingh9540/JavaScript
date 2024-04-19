import React, { useEffect, useState } from 'react';

const data = [
  "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/461956/pexels-photo-461956.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/714258/pexels-photo-714258.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/2347382/pexels-photo-2347382.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://www.pexels.com/photo/lake-and-mountain-under-white-sky-443446/"
];

function Acc() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex(prevIndex => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setActiveIndex(prevIndex => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };


  useEffect(() =>{
   const timer = setTimeout(()=>{
        goToNext();
    },5000)
   return () =>{
    clearTimeout(timer)
   }

  },[activeIndex])
  return (
    <div className='flex justify-center'>
      <button className='p-2 m-2' onClick={goToPrevious}>
        Previous
      </button>
      <img className='w-[700px] h-[500px] object-contain' src={data[activeIndex]} alt="" />
      <button className='p-2 m-2' onClick={goToNext}>
        Next
      </button>
    </div>
  );
}

export default Acc;
