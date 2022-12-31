import React from 'react';
import startup from '../../assets/images/startup.png'
import car from '../../assets/images/million-job.png'

const About = () => {
  return (
    <div class="py-16 bg-white">
      <div class="container mx-auto  text-gray-600 px-4 md:px-5 lg:px-6">
        <div class="space-y-6 md:space-y-0 md:flex md:gap-3 lg:items-center lg:gap-10">
          <div class="md:w-9/12 lg:w-5/12">
            <img src={car} className="w-full" alt="tree" loading="lazy" width="" height="" />
          </div>
          <div class="md:w-6/12 lg:w-6/12">
            <h2 class="text-2xl text-gray-900 font-bold md:text-2xl lg:text-4xl">Book Daily  Parking Slot</h2>
            <p class="mt-6 text-gray-600">We have allotted daily parking places for you all over Dhaka, Chiitagong & Sylhet. We maintain strict quality control before we secure a parking place for you Moreover, our field workers do weekly basis check up on the parking places. As a host you can earn 4000-5500 TK from renting one parking place </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;