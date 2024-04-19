import React from "react";
import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";
const Blogs = () => {
  const blogData = [
    {
      img: "https://plus.unsplash.com/premium_photo-1682608388937-26eadd2ddfe9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3RyZXNzJTIwTWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D",
      title: "Stress Management",
      description:
        "Explore effective techniques to reduce stress and enhance your overall well-being.",
      link: "https://blogs.tntech.edu/graduate/2020/09/09/stress-management-for-students/",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1663134080832-d58e90ee284c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fCUyMkhlYWx0aHklMjBSZWxhdGlvbnNoaXBzJTIyfGVufDB8fDB8fHww",
      title: "Healthy Relationships",
      description:
        "Discover strategies for fostering healthy and fulfilling relationships in your personal and professional life.",
      link: "https://www.helpguide.org/articles/relationships-communication/relationship-help.htm",
    },
    {
      img: "https://images.unsplash.com/photo-1513097847644-f00cfe868607?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fCUyMk1pbmRmdWxuZXNzJTIwUHJhY3RpY2VzJTIyfGVufDB8fDB8fHww",
      title: "Mindfulness Practices",
      description:
        "Learn mindfulness exercises to cultivate awareness, focus, and inner peace in daily life.",
      link: "https://positivepsychology.com/mindfulness-exercises-techniques-activities/",
    },
    {
      img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aHVnc3xlbnwwfHwwfHx8MA%3D%3D",
      title: "Emotional Well-being",
      description:
        "Gain insights into nurturing emotional health and developing resilience in the face of challenges.",
      link: "https://www.betterup.com/blog/what-is-emotional-well-being",
    },
    {
      img: "https://images.unsplash.com/photo-1547250936-e1426b362327?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VsZiUyMGNhcmV8ZW58MHx8MHx8fDA%3D",
      title: "Self-care Tips",
      description:
        "Find practical self-care tips and routines to prioritize your physical, mental, and emotional health.",
      link: "https://www.psychologytoday.com/intl/blog/click-here-happiness/201812/self-care-12-ways-take-better-care-yourself",
    },
    {
      img: "https://images.unsplash.com/photo-1585178332093-1dfaa3998f6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFueGlldHl8ZW58MHx8MHx8fDA%3D",
      title: "Coping with Anxiety",
      description:
        "Discover coping strategies and tools to manage and alleviate symptoms of anxiety effectively.",
      link: "https://www.mayoclinichealthsystem.org/hometown-health/speaking-of-health/11-tips-for-coping-with-an-anxiety-disorder",
    },
    {
      img: "https://images.unsplash.com/photo-1610208033812-c0d714ad9b5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9zaXRpdmUlMjBwc3ljaG9sb2d5fGVufDB8fDB8fHww",
      title: "Positive Psychology",
      description:
        "Explore the principles of positive psychology and ways to cultivate a more optimistic outlook on life.",
      link: "https://positivepsychology.com/what-is-positive-psychology-definition/",
    },
    {
      img: "https://images.unsplash.com/photo-1621361070540-16690244d8ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvcmslMjBsaWZlJTIwYmFsYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Work-Life Balance",
      description:
        "Find harmony between your professional responsibilities and personal life for greater overall satisfaction.",
      link: "https://www.betterup.com/blog/how-to-have-good-work-life-balance",
    },
    {
      img: "https://images.unsplash.com/photo-1581461356013-c5229dcb670c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlc2lsaWVuY2V8ZW58MHx8MHx8fDA%3D",
      title: "Building Resilience",
      description:
        "Learn how to bounce back from setbacks and adversity, building strength and adaptability.",
      link: "https://www.apa.org/topics/resilience/building-your-resilience",
    },
  ];

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Latest posts !
          </h1>
          <p className=" mt-2 text-center lg:text-start">
            Explore insightful articles and helpful tips on mental health,
            well-being, and personal development. Start your journey today!
          </p>
        </div>
      </div>
      <div className=" my-8">
        <div className=" flex flex-wrap justify-center gap-5">
          {blogData.map((item, index) => (
            <BlogCard
              key={index}
              img={item.img}
              headlines={item.title}
              description={item.description}
              url={item.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
