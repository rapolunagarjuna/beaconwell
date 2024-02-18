import React from 'react';
import TherapistCard from './TherapistNearme'; // Assuming TherapistCard is in the same directory
import './TherapistContainer.css'
import img from './Therapist.jpeg'
import { AiOutlineSearch } from 'react-icons/ai';
import { FiFilter } from 'react-icons/fi';


const therapists = [
    {
      name: "Dr. Smith",
      reviews: 15,
      hourlyRate: 80,
      specialties: ["Anxiety", "Depression", "Stress Management"],
      image: img
    },
    {
      name: "Dr. Johnson",
      reviews: 10,
      hourlyRate: 70,
      specialties: ["Relationship Counseling", "Family Therapy"],
      image: img
    },
    {
      name: "Dr. Patel",
      reviews: 20,
      hourlyRate: 90,
      specialties: ["Addiction Counseling", "Trauma Therapy"],
      image: img
    },
    {
      name: "Dr. Garcia",
      reviews: 12,
      hourlyRate: 75,
      specialties: ["Cognitive Behavioral Therapy", "Anger Management"],
      image:img
    }
  ];
const TherapistCardContainer = () => {

    const [search, setSearch] = React.useState("");
    
      return (
        <div className='w-full h-fit flex flex-col justify-center items-center'>

        <div className='w-4/6 h-fit flex flex-row justify-between my-10'>
          <div className='w-4/6 flex flex-row p-4 body border border-black rounded-full justify-between'>
            <input
              value={search}
              type="text"
              className='body w-4/6 no-outline focus:outline-none'
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
            ></input>
            <AiOutlineSearch size={23} />
            
          </div>

          <FiFilter className='my-auto hover:text-slate-500 hover:cursor-pointer' size={23} />


        </div>

        <div className='w-4/6 h-fit mx-auto my-auto grid grid-cols-2 gap-10'>

          {therapists.map((therapist, index) => (
            <TherapistCard key={index} therapist={therapist} />
          ))}
        </div>

          
        </div>
      );
    
};

export default TherapistCardContainer;
