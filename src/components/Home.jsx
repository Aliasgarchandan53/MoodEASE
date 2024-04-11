import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home.png')] bg-no-repeat bg-cover opacity-90">
      <div className=" w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
          Thoughtful Insights, Relaxation Essentials: Your Path to Mental
          Renewal..
        </h1>
        <p>
          Embark on a journey of self-reflection and relaxation with MoodEase.
          Explore our curated resources for mental wellness and track your
          thoughts in a serene and supportive environment. Start your path to
          inner balance today.
        </p>

        <Button title="See Services" />
      </div>
    </div>
  );
};

export default Home;
