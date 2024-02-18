import React from 'react';

const TherapistCard = ({ therapist }) => {
  return (
    <div className="w-full h-fit border-black border rounded-xl p-5 hover:scale-105 hover:cursor-pointer">
      <div className="w-full h-fit">
        <img src={therapist.image} alt={therapist.name} className="therapist-image" />
      </div>
      <div className="w-full h-fit">
        <div className='subheading  font-bold'>{therapist.name}</div>
        <p>{therapist.reviews} reviews</p>
        <p>${therapist.hourlyRate}/hr</p>
        <div className="flex flex-row">
          {therapist.specialties.map((specialty, index) => (
            <span key={index} className="specialty-tag" style ={{backgroundColor: '#f0f0f0 ' ,
            color: '#333', 'borderRadius': '16px' , /* Rounded corners */
            padding:' 6px 12px',  /* Padding */
            margin: '4px' , /* Margin */
            fontSize: '0.9rem '}}>{specialty}</span>
          ))}
        </div>
        <div className="flex flex-row w-full h-fit pt-5">
          <button className="bg-black rounded-xl ">View</button>
          <button className="bg-black ml-5 rounded-xl">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default TherapistCard;
