import React from "react";
import img from "../assets/img/about.png";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">
          About Us
        </h1>
        <p className=" text-justify lg:text-start">
          At MoodEase, we believe in empowering individuals to take control of
          their mental well-being. Our platform offers a diverse range of
          resources and tools tailored to support your journey towards greater
          emotional resilience and clarity.
        </p>
        <p className="text-justify lg:text-start">
          Dive into our curated collection of articles, videos, and relaxation
          techniques designed to nurture your mind and spirit. Whether you're
          seeking inspiration, guidance, or simply a moment of tranquility,
          MoodEase provides the resources you need to thrive.
        </p>
        <p className="text-justify lg:text-start">
          Join our community of like-minded individuals committed to
          prioritizing mental health. At MoodEase, we foster a supportive and
          inclusive environment where you can share experiences, find solace,
          and discover new strategies for managing life's challenges with grace
          and resilience.
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
