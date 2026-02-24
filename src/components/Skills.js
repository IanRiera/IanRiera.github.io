import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const COLOR_CLASSES = {
  green: {
    text: "text-green-700 dark:text-green-500",
    bar: "bg-green-600",
  },
  blue: {
    text: "text-blue-700 dark:text-blue-500",
    bar: "bg-blue-600",
  },
  indigo: {
    text: "text-indigo-700 dark:text-indigo-400",
    bar: "bg-indigo-600",
  },
  purple: {
    text: "text-purple-700 dark:text-purple-400",
    bar: "bg-purple-600",
  },
  yellow: {
    text: "text-yellow-700 dark:text-yellow-400",
    bar: "bg-yellow-400",
  },
  orange: {
    text: "text-orange-700 dark:text-orange-400",
    bar: "bg-orange-400",
  },
};

const AnimatedColorBar = ({ title, width, color }) => {
    const [isVisible, setIsVisible] = useState(false);
    const colorBarRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          setIsVisible(entry.isIntersecting);
        },
        { threshold: 0.2 }
      );
  
      if (colorBarRef.current) {
        observer.observe(colorBarRef.current);
      }
  
      return () => {
        if (colorBarRef.current) {
          observer.unobserve(colorBarRef.current);
        }
      };
    }, []);
    const selectedColor = COLOR_CLASSES[color] || COLOR_CLASSES.green;
  
    return (
      <div ref={colorBarRef}>
        <div
          className={`mb-1 text-base font-medium ${
            isVisible ? selectedColor.text : "text-gray-700 dark:text-gray-300"
          }`}
        >
          {title}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
          <motion.div
            className={`h-2.5 rounded-full ${
              isVisible ? selectedColor.bar : "bg-gray-400"
            }`}
            style={{ width: isVisible ? `${width}%` : 0 }}
            initial={{ width: 0 }}
            animate={{ width: isVisible ? `${width}%` : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          ></motion.div>
        </div>
      </div>
    );
  };
  

const Skills = () => {
    return (
        <div>
            <h2 className="font-bold text-8xl mt-64 w-full text-center
            dark:text-light lg:text-6xl lg:mt-24 md:text-6xl md:mt-20">Skills</h2>
            <AnimatedColorBar title="Python" width={85} color="green" />
            <AnimatedColorBar title="JavaScript" width={60} color="green" />
            <AnimatedColorBar title="C++" width={55} color="green" />
            <AnimatedColorBar title="Matlab" width={55} color="green" />
            <hr className="border-2 border-solid"></hr>
            <AnimatedColorBar title="Linux" width={80} color="blue" />
            <AnimatedColorBar title="Git" width={70} color="blue" />
            <AnimatedColorBar title="ROS" width={60} color="blue" />
            <AnimatedColorBar title="GCloud" width={50} color="blue" />
            <hr className="border-2 border-solid"></hr>
            <AnimatedColorBar title="Open3D" width={80} color="indigo" />
            <AnimatedColorBar title="OpenCV" width={70} color="indigo" />
            <AnimatedColorBar title="Tensorflow" width={60} color="indigo" />
            <AnimatedColorBar title="Pytorch" width={60} color="indigo" />
            <hr className="border-2 border-solid"></hr>
            <AnimatedColorBar title="Object Detection" width={85} color="purple" />
            <AnimatedColorBar title="3D reconstruction" width={75} color="purple" />
            <AnimatedColorBar title="Multi Target Tracking" width={70} color="purple" />
            <AnimatedColorBar title="Sensor Fusion" width={60} color="purple" />
            <hr className="border-2 border-solid"></hr>
            <AnimatedColorBar title="Agile" width={85} color="yellow" />
            <AnimatedColorBar title="DevOps" width={70} color="yellow" />
            <hr className="border-2 border-solid"></hr>
            <AnimatedColorBar title="Spanish" width={100} color="orange" />
            <AnimatedColorBar title="Catalan" width={100} color="orange" />
            <AnimatedColorBar title="English" width={90} color="orange" />
            <AnimatedColorBar title="Polish" width={40} color="orange" />
            <hr className="border-2 border-solid"></hr>
        </div>
    );
}

export default Skills;
