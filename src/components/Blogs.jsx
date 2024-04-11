import React from "react";
import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";
import img from "../assets/img/index"
const Blogs = () => {
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,repellendus suscipit. Rerum consequatur magni expedita.";

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Latest Post
          </h1>
          <p className=" mt-2 text-center lg:text-start">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
            quidem.
          </p>
        </div>
        {/* <div className=" mt-4 lg:mt-0">
          <Button title="Our Articles" />
        </div> */}
      </div>
      <div className=" my-8">
        <div className=" flex flex-wrap justify-center gap-5">
          <BlogCard
            img={img.img1}
            headlines="Unraveling the Mysteries of Sleep"
            description={text}
          />
          <BlogCard
            img={img.img2}
            headlines="The Heart-Healthy Diet"
            description={text}
          />
          <BlogCard
            img={img.img3}
            headlines="Understanding Pediatric Vaccinations"
            description={text}
          />
          <BlogCard
            img={img.img4}
            headlines="Navigating Mental Health"
            description={text}
          />
          <BlogCard
            img={img.img5}
            headlines="The Importance of Regular Exercise"
            description={text}
          />
          <BlogCard img={img.img6} headlines="Skin Health 101" description={text} />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
