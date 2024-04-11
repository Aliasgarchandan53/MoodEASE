import React from "react";
import Button from "../layouts/Button";
import { TbSunset2 } from "react-icons/tb";
import ServicesCard from "../layouts/ServicesCard";
import { FiBookOpen } from "react-icons/fi";
import { FaFileAlt } from "react-icons/fa";

const Services = () => {
  const icon1 = <TbSunset2 size={35} className=" text-backgroundColor" />;
  const icon2 = <FiBookOpen size={35} className=" text-backgroundColor" />;
  const icon3 = <FaFileAlt size={35} className=" text-backgroundColor" />;

  const text1 =
    "Immerse yourself in soft, soothing sounds and relaxation melodies to unwind and destress, anytime, anywhere.";

  const text2 =
    "Track your thoughts and emotions effortlessly, fostering self-awareness and personal growth with our intuitive journaling feature.";

  const text3 =
    "Discover a wealth of expert-curated articles, blogs, and resources to empower your mental health journey and foster holistic well-being.";

  return (
    <div className=" bg-backgroundColor bg-opacity-30 min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Our Services
          </h1>
          <p className=" mt-2 text-center lg:text-start">
            Curated resources, relaxation techniques, and supportive community.
          </p>
        </div>
        {/* <div className=" mt-4 lg:mt-0">
          <Button title="See Services" />
        </div> */}
      </div>
      <div className=" flex flex-col lg:flex-row gap-5 pt-14">
        <ServicesCard icon={icon1} title="Relaxation" description={text1} />
        <ServicesCard icon={icon2} title="Journalling" description={text2} />
        <ServicesCard icon={icon3} title="Resources" description={text3} />
      </div>
    </div>
  );
};

export default Services;
